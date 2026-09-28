# My SafetyZone growth setup

## Search launch

1. Add `https://mysafetyzone.com` as a Domain property in Google Search Console and verify it through the DNS record Google provides.
2. Submit `https://mysafetyzone.com/sitemap.xml`, then request indexing for the home page and each allergen landing page.
3. Add the site to Bing Webmaster Tools, import the Google property, and submit the same sitemap.
4. Review indexed pages, Core Web Vitals, queries, and click-through rate monthly. Rewrite titles when a page receives impressions but few clicks.

## App Store listing draft

- **Subtitle:** Allergy cards, travel & more
- **Promotional text:** Carry your allergy card, travel guidance, recipes, medication reminders, and recall information in one thoughtful iOS companion.
- **First screenshot:** Your allergy needs, ready to share
- **Second screenshot:** Communicate across language barriers
- **Third screenshot:** Keep medication dates organized
- **Fourth screenshot:** Plan meals around your needs
- **Fifth screenshot:** Travel with a little more confidence

Keep the website and App Store feature status aligned. Label unreleased scanners as coming soon until they are available in the published app.

## Conversion measurement

The website now records anonymous `landing_view` and `app_store_click` events in `audit_log`, including the page, button placement, referring hostname, device class, and UTM campaign fields. It respects browser Do Not Track and stores no names, email addresses, full referrer URLs, or advertising identifiers.

Use tagged campaign links such as `?utm_source=instagram&utm_medium=social&utm_campaign=fall_launch`. Compare page views with App Store clicks by page and campaign in the admin data or Supabase.

## Monthly review

- Search Console: impressions, ranking queries, indexed pages, Core Web Vitals.
- Website: landing views, App Store clicks, click-through rate by page and campaign.
- App Store Connect: product-page views, downloads, conversion rate, retention, and subscription starts.
- Content: expand pages that generate qualified impressions; consolidate pages that overlap without earning traffic.
