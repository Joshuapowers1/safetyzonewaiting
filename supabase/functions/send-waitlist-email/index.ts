import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");



const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  subject: string;
  message: string;
  recipientIds?: string[]; // Optional: specific recipients, or all if empty
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      console.error("No authorization header");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Create Supabase client with user's auth token
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    // Verify user is admin
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      console.error("Auth error:", authError);
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Check admin role using service role client
    const supabaseServiceRole = createClient(
      supabaseUrl,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: roleData, error: roleError } = await supabaseServiceRole
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (roleError || !roleData) {
      console.error("Role check failed:", roleError);
      return new Response(JSON.stringify({ error: "Admin access required" }), {
        status: 403,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { subject, message, recipientIds }: EmailRequest = await req.json();

    if (!subject || !message) {
      return new Response(
        JSON.stringify({ error: "Subject and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Get recipients
    let query = supabaseServiceRole.from("waitlist").select("id, name, email");
    
    if (recipientIds && recipientIds.length > 0) {
      query = query.in("id", recipientIds);
    }

    const { data: recipients, error: recipientsError } = await query;

    if (recipientsError) {
      console.error("Error fetching recipients:", recipientsError);
      throw recipientsError;
    }

    if (!recipients || recipients.length === 0) {
      return new Response(
        JSON.stringify({ error: "No recipients found" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`Sending email to ${recipients.length} recipients`);

    // Send emails (batch for efficiency)
    const results = [];
    const errors = [];

    for (const recipient of recipients) {
      try {
        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a1515; color: #f0f9f9; margin: 0; padding: 40px 20px;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #0f1f1f; border-radius: 16px; padding: 40px; border: 1px solid rgba(46, 170, 171, 0.2);">
                <div style="text-align: center; margin-bottom: 32px;">
                  <h1 style="font-size: 28px; font-weight: bold; color: #2eaaab; margin: 0;">Safety Zone</h1>
                  <p style="font-size: 14px; color: #7a9999; margin-top: 8px;">AI Dietary Restriction App</p>
                </div>
                
                <p style="font-size: 16px; color: #d0e5e5; margin-bottom: 16px;">Hi ${recipient.name},</p>
                
                <div style="font-size: 16px; line-height: 1.6; color: #b0c5c5;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
                
                <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(46, 170, 171, 0.2); text-align: center;">
                  <p style="font-size: 12px; color: #5a7a7a; margin: 0;">
                    You're receiving this because you joined the Safety Zone waitlist.
                  </p>
                  <div style="margin-top: 16px;">
                    <a href="https://www.instagram.com/safetyzoneofficial/" style="color: #2eaaab; text-decoration: none; margin: 0 8px; font-size: 14px;">Instagram</a>
                    <span style="color: #3a5a5a;">•</span>
                    <a href="https://www.linkedin.com/company/mysafetyzone/" style="color: #2eaaab; text-decoration: none; margin: 0 8px; font-size: 14px;">LinkedIn</a>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `;

        // Send email using Resend API directly
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Safety Zone <onboarding@resend.dev>",
            to: [recipient.email],
            subject: subject,
            html: htmlContent,
          }),
        });

        const emailData = await emailRes.json();

        if (!emailRes.ok) {
          throw new Error(emailData.message || "Failed to send email");
        }

        results.push({ email: recipient.email, success: true, id: emailData.id });
        console.log(`Email sent to ${recipient.email}:`, emailData.id);
      } catch (emailError: any) {
        console.error(`Error sending to ${recipient.email}:`, emailError);
        errors.push({ email: recipient.email, error: emailError.message });
      }
    }

    // Update waitlist status to 'contacted' for successful sends
    if (results.length > 0) {
      const successEmails = results.map(r => r.email);
      await supabaseServiceRole
        .from("waitlist")
        .update({ status: "contacted" })
        .in("email", successEmails);
    }

    return new Response(
      JSON.stringify({
        success: true,
        sent: results.length,
        failed: errors.length,
        results,
        errors,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-waitlist-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
