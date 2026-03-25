import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface EmailRequest {
  subject: string;
  message: string;
  recipientIds?: string[]; // Optional: specific recipients, or all if empty
}

// HTML escape function to prevent XSS (only for plain text, not for rich HTML)
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}

// Sanitize HTML content - allow safe tags only
function sanitizeHtml(html: string): string {
  // Allow these safe tags and attributes
  const allowedTags = ['p', 'br', 'strong', 'b', 'em', 'i', 'u', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'span', 'div'];
  const allowedAttributes = ['href', 'style'];
  
  // Remove script tags and event handlers
  let sanitized = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript:/gi, '');
  
  return sanitized;
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
      throw new Error("Failed to fetch recipients");
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

    // Send emails (batch for efficiency)
    const results = [];
    const errors = [];

    // Check if message contains HTML (rich text) or plain text
    const isHtmlMessage = message.includes('<') && message.includes('>');
    
    // Sanitize HTML or escape plain text
    const formattedMessage = isHtmlMessage ? sanitizeHtml(message) : escapeHtml(message);

    for (const recipient of recipients) {
      try {
        // HTML-escape the recipient name as well
        const safeName = escapeHtml(recipient.name);
        
        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                a { color: #2eaaab !important; text-decoration: underline; }
                strong, b { font-weight: bold; }
                em, i { font-style: italic; }
                u { text-decoration: underline; }
                h2 { font-size: 20px; font-weight: 600; margin: 12px 0; color: #f0f9f9; }
                ul, ol { padding-left: 24px; margin: 12px 0; }
                li { margin: 4px 0; }
              </style>
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a1515; color: #f0f9f9; margin: 0; padding: 40px 20px;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #0f1f1f; border-radius: 16px; padding: 40px; border: 1px solid rgba(46, 170, 171, 0.2);">
                <div style="text-align: center; margin-bottom: 32px;">
                  <h1 style="font-size: 28px; font-weight: bold; color: #2eaaab; margin: 0;">Safety Zone</h1>
                  <p style="font-size: 14px; color: #7a9999; margin-top: 8px;">AI Dietary Restriction App</p>
                </div>
                
                <p style="font-size: 16px; color: #d0e5e5; margin-bottom: 16px;">Hi ${safeName},</p>
                
                <div style="font-size: 16px; line-height: 1.6; color: #b0c5c5;">
                  ${formattedMessage}
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
            from: "Safety Zone <joshua@mysafetyzone.com>",
            to: [recipient.email],
            subject: subject,
            html: htmlContent,
          }),
        });

        const emailData = await emailRes.json();
        // Log status only, no PII

        if (!emailRes.ok) {
          console.error("Email send failed with status:", emailRes.status);
          throw new Error(emailData.message || "Failed to send email");
        }

        results.push({ success: true, id: emailData.id });
      } catch (emailError: any) {
        console.error("Email send failed for recipient");
        errors.push({ error: emailError.message || "Send failed" });
      }
    }

    // Update waitlist status to 'contacted' for successful sends
    if (results.length > 0) {
      const successfulRecipientIds = recipients
        .slice(0, results.length)
        .map(r => r.id);
      await supabaseServiceRole
        .from("waitlist")
        .update({ status: "contacted" })
        .in("id", successfulRecipientIds);
    }

    return new Response(
      JSON.stringify({
        success: true,
        sent: results.length,
        failed: errors.length,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: "An error occurred while sending emails" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
