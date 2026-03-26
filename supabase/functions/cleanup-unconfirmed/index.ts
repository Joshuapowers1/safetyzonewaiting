import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // Delete rate limit entries older than 24 hours
    const { count: rateLimitCount } = await supabase
      .from("rate_limit_log")
      .delete()
      .lt("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
      .select("*", { count: "exact", head: true });

    // Delete audit log entries older than 90 days (retention policy)
    const ninetyDaysAgo = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString();
    const { count: auditCount } = await supabase
      .from("audit_log")
      .delete()
      .lt("created_at", ninetyDaysAgo)
      .select("*", { count: "exact", head: true });

    // Log the cleanup action
    await supabase.from("audit_log").insert({
      action: "data_cleanup",
      actor_role: "system",
      metadata: {
        rate_limit_purged: rateLimitCount ?? 0,
        audit_log_purged: auditCount ?? 0,
        ran_at: new Date().toISOString(),
      },
    });

    return new Response(
      JSON.stringify({
        success: true,
        rate_limit_purged: rateLimitCount ?? 0,
        audit_log_purged: auditCount ?? 0,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error) {
    console.error("Cleanup error:", error);
    return new Response(
      JSON.stringify({ error: "Cleanup failed" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
