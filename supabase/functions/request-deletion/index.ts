import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// SHA-256 hash for audit logging (no raw PII in logs)
async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Validate email format
function isValidEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const { email } = await req.json();

    // Input validation
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (!isValidEmail(normalizedEmail) || normalizedEmail.length > 255) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

    // Rate limit check using anon client
    const anonClient = createClient(supabaseUrl, anonKey);
    const { data: allowed } = await anonClient.rpc("check_rate_limit", {
      p_action: "deletion_request",
      p_identifier: normalizedEmail,
      p_max_requests: 3,
      p_window_seconds: 3600,
    });

    if (!allowed) {
      return new Response(
        JSON.stringify({ message: "If your email exists in our system, it has been queued for deletion." }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);
    const emailHash = await sha256(normalizedEmail);

    // Delete from waitlist
    const { data: deleted, error: deleteError } = await supabase
      .from("waitlist")
      .delete()
      .eq("email", normalizedEmail)
      .select("id");

    if (deleteError) {
      console.error("Deletion error");
      throw new Error("Deletion failed");
    }

    // Log the deletion (only hashed email, never raw PII)
    await supabase.from("audit_log").insert({
      action: "data_deletion_request",
      actor_role: "user",
      actor_id_hash: emailHash,
      resource_type: "waitlist",
      metadata: {
        records_deleted: deleted?.length ?? 0,
        requested_at: new Date().toISOString(),
      },
      success: true,
    });

    // Always return the same message (email enumeration protection)
    return new Response(
      JSON.stringify({
        message: "If your email exists in our system, it has been queued for deletion.",
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error) {
    console.error("Deletion request error");
    return new Response(
      JSON.stringify({
        message: "If your email exists in our system, it has been queued for deletion.",
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
