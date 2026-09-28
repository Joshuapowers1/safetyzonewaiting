import { supabase } from "@/integrations/supabase/client";

type MarketingEvent = "landing_view" | "app_store_click";

const campaignFields = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

function context() {
  const params = new URLSearchParams(window.location.search);
  const campaign = Object.fromEntries(
    campaignFields.flatMap((key) => params.get(key) ? [[key, params.get(key)!.slice(0, 80)]] : []),
  );
  let referrer = "direct";
  try { referrer = document.referrer ? new URL(document.referrer).hostname : "direct"; } catch { /* keep direct */ }
  return { path: window.location.pathname, referrer, campaign, viewport: window.innerWidth < 640 ? "mobile" : "desktop" };
}

function record(event: MarketingEvent, placement?: string) {
  if (navigator.doNotTrack === "1") return;
  void supabase.from("audit_log").insert({
    action: event,
    actor_role: "visitor",
    metadata: { ...context(), placement },
    success: true,
  }).then(() => undefined, () => undefined);
}

export function startMarketingAnalytics() {
  record("landing_view");
  document.addEventListener("click", (event) => {
    const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href*='apps.apple.com']");
    if (anchor) record("app_store_click", anchor.dataset.placement || anchor.closest("section")?.id || "site");
  });
}
