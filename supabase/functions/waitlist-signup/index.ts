import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// ── WAF-equivalent pattern detection ──
const SQL_INJECTION_PATTERNS = [
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|EXEC|UNION|DECLARE)\b)/i,
  /(\b(OR|AND)\b\s+\d+\s*=\s*\d+)/i,
  /(--|;|\/\*|\*\/|xp_|sp_)/i,
  /(\bINTO\s+OUTFILE\b|\bLOAD_FILE\b)/i,
  /(\bCHAR\s*\(|\bCONCAT\s*\(|\bCONVERT\s*\()/i,
  /('\s*(OR|AND)\s+')/i,
  /(WAITFOR\s+DELAY|BENCHMARK\s*\()/i,
];

const XSS_PATTERNS = [
  /<script\b[^>]*>/i,
  /javascript\s*:/i,
  /on(error|load|click|mouseover|focus|blur|submit|change)\s*=/i,
  /<(iframe|object|embed|form|input|img)\b[^>]*(src|href|action)\s*=/i,
  /(<svg|<math|<marquee)/i,
  /(document\.(cookie|domain|write)|window\.(location|open))/i,
  /(eval|setTimeout|setInterval|Function)\s*\(/i,
  /\balert\s*\(/i,
];

const TRAVERSAL_PATTERNS = [
  /\.\.\//g,
  /\.\.\\/, 
  /%2e%2e/i,
  /%252e/i,
];

function detectMaliciousInput(value: string): { blocked: boolean; reason: string } {
  for (const pattern of SQL_INJECTION_PATTERNS) {
    if (pattern.test(value)) return { blocked: true, reason: "sql_injection" };
  }
  for (const pattern of XSS_PATTERNS) {
    if (pattern.test(value)) return { blocked: true, reason: "xss" };
  }
  for (const pattern of TRAVERSAL_PATTERNS) {
    if (pattern.test(value)) return { blocked: true, reason: "path_traversal" };
  }
  // Null bytes & unicode direction overrides
  if (/\0/.test(value)) return { blocked: true, reason: "null_byte" };
  if (/[\u202A-\u202E\u2066-\u2069\u200F\u200E]/.test(value)) {
    return { blocked: true, reason: "unicode_override" };
  }
  return { blocked: false, reason: "" };
}

// ── Input sanitization ──
function sanitizeText(input: string): string {
  return input
    .replace(/\0/g, "")
    .replace(/[\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .trim();
}

function isValidEmail(email: string): boolean {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

// ── SHA-256 for hashing PII before storage/logging ──
async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

// ── HIBP k-anonymity check (free, no API key needed) ──
async function checkHIBP(email: string): Promise<boolean> {
  try {
    const hashBuffer = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(email));
    const fullHash = Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase();
    const prefix = fullHash.slice(0, 5);
    const suffix = fullHash.slice(5);

    const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
      headers: { "User-Agent": "SafetyZone-WaitlistSignup" },
    });

    if (!res.ok) return false;

    const text = await res.text();
    return text.split("\n").some((line) => line.startsWith(suffix));
  } catch {
    // Non-blocking: if HIBP is down, don't block signup
    return false;
  }
}

// ── Known allergen enum (mass assignment protection) ──
const VALID_ALLERGENS = [
  "Peanut", "Tree Nuts", "Dairy", "Gluten / Celiac", "Shellfish",
  "Eggs", "Soy", "Sesame", "Fish", "Other",
];
const VALID_SEVERITIES = ["Mild", "Moderate", "Severe"];
const VALID_MANAGING_FOR = ["Myself", "My Child", "Family Member", "Professional"];
const VALID_INTERESTS = ["Allergy Alerts", "Menu Scanner", "Ingredient Check", "Meal Ideas", "Grocery Help"];
const VALID_HEARD_FROM = ["Social Media", "Friend / Family", "Google Search", "Other"];
const VALID_DEVICES = ["iPhone", "Android", "iPad / Tablet", "Desktop"];

// ── Disposable email domains ──
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "tempmail.com", "throwaway.email",
  "yopmail.com", "sharklasers.com", "guerrillamailblock.com", "grr.la",
  "dispostable.com", "mailnesia.com", "maildrop.cc", "discard.email",
  "temp-mail.org", "fakeinbox.com", "trashmail.com", "trashmail.net",
  "getnada.com", "tempail.com", "mohmal.com", "burnermail.io",
  "temp-mail.io", "minutemail.com", "emailondeck.com", "harakirimail.com",
  "tempr.email", "tmail.ws", "10minutemail.com", "guerrillamail.info",
  "guerrillamail.net", "guerrillamail.org", "guerrillamail.de",
]);

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

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const anonClient = createClient(supabaseUrl, supabaseAnonKey);
  const serviceClient = createClient(supabaseUrl, serviceRoleKey);

  // Hash IP for audit logging (never store raw IP)
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const ipHash = await sha256(ip);

  try {
    const body = await req.json();

    // ── WAF: Scan ALL input fields for malicious patterns ──
    const fieldsToScan: Record<string, string> = {};
    for (const [key, value] of Object.entries(body)) {
      if (typeof value === "string") fieldsToScan[key] = value;
      if (Array.isArray(value)) {
        value.forEach((v, i) => {
          if (typeof v === "string") fieldsToScan[`${key}[${i}]`] = v;
        });
      }
    }

    for (const [field, value] of Object.entries(fieldsToScan)) {
      const result = detectMaliciousInput(value);
      if (result.blocked) {
        await serviceClient.from("audit_log").insert({
          action: "waf_blocked",
          actor_role: "anonymous",
          ip_hash: ipHash,
          metadata: { field, reason: result.reason },
          success: false,
        });
        return new Response(
          JSON.stringify({ error: "Invalid input detected" }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    // ── Extract and validate fields (only allow known fields) ──
    const { name, email, managing_for, allergy_types, severity, interest, heard_from, device_preference, privacy_consent } = body;

    if (!name || typeof name !== "string" || !email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const cleanName = sanitizeText(name);
    const cleanEmail = email.toLowerCase().trim();

    if (cleanName.length === 0 || cleanName.length > 100) {
      return new Response(
        JSON.stringify({ error: "Name must be 1-100 characters" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!isValidEmail(cleanEmail) || cleanEmail.length > 255) {
      return new Response(
        JSON.stringify({ error: "Invalid email" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Disposable email check
    const domain = cleanEmail.split("@")[1];
    if (domain && DISPOSABLE_DOMAINS.has(domain)) {
      return new Response(
        JSON.stringify({ error: "Please use a permanent email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // ── Rate limiting ──
    const { data: allowed } = await anonClient.rpc("check_rate_limit", {
      p_action: "waitlist_signup",
      p_identifier: cleanEmail,
      p_max_requests: 3,
      p_window_seconds: 60,
    });

    if (!allowed) {
      await serviceClient.from("audit_log").insert({
        action: "rate_limit_hit",
        actor_role: "anonymous",
        ip_hash: ipHash,
        actor_id_hash: await sha256(cleanEmail),
        metadata: { type: "waitlist_signup" },
        success: false,
      });
      return new Response(
        JSON.stringify({ error: "Too many attempts. Please wait." }),
        { status: 429, headers: { "Content-Type": "application/json", "Retry-After": "60", ...corsHeaders } }
      );
    }

    // ── Validate enum fields (mass assignment protection) ──
    const validatedManagingFor = managing_for && VALID_MANAGING_FOR.includes(managing_for) ? managing_for : null;
    const validatedSeverity = severity && VALID_SEVERITIES.includes(severity) ? severity : null;
    const validatedInterest = interest && VALID_INTERESTS.includes(interest) ? interest : null;
    const validatedHeardFrom = heard_from && VALID_HEARD_FROM.includes(heard_from) ? heard_from : null;
    const validatedDevice = device_preference && VALID_DEVICES.includes(device_preference) ? device_preference : null;
    const validatedAllergies = Array.isArray(allergy_types)
      ? allergy_types.filter((a: string) => VALID_ALLERGENS.includes(a))
      : null;

    // ── HIBP breach check (non-blocking flag) ──
    const breached = await checkHIBP(cleanEmail);

    // ── Insert into waitlist ──
    const { error: insertError } = await serviceClient.from("waitlist").insert({
      name: cleanName,
      email: cleanEmail,
      managing_for: validatedManagingFor,
      allergy_types: validatedAllergies && validatedAllergies.length > 0 ? validatedAllergies : null,
      severity: validatedSeverity,
      interest: validatedInterest,
      heard_from: validatedHeardFrom,
      device_preference: validatedDevice,
      privacy_consent: privacy_consent === true,
    });

    if (insertError) {
      if (insertError.code === "23505") {
        // Email enumeration protection: same response
        return new Response(
          JSON.stringify({ success: true, message: "Check your inbox for updates." }),
          { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
      throw insertError;
    }

    // ── Audit log (only hashes, no PII) ──
    await serviceClient.from("audit_log").insert({
      action: "waitlist_signup",
      actor_role: "anonymous",
      ip_hash: ipHash,
      actor_id_hash: await sha256(cleanEmail),
      metadata: {
        breached_email: breached,
        allergy_count: validatedAllergies?.length ?? 0,
      },
      success: true,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Check your inbox for updates." }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error) {
    console.error("Signup error");
    await serviceClient.from("audit_log").insert({
      action: "waitlist_signup_error",
      actor_role: "anonymous",
      ip_hash: ipHash,
      success: false,
    }).catch(() => {});

    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
