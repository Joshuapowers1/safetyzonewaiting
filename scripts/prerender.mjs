// Produce indexable HTML for public routes. Use a full browser when available;
// otherwise generate a meaningful static first paint instead of an empty root.
import { createServer } from "node:http";
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { extname, join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const configsSrc = readFileSync(join(root, "src/pages/landing/configs.ts"), "utf8");
const landingSlugs = [...configsSrc.matchAll(/^  '([a-z0-9-]+)': \{/gm)].map((match) => match[1]);
const routes = ["/", "/contact", "/support", "/privacy", "/privacy-policy", "/terms", ...landingSlugs.map((slug) => `/${slug}`)];

const pageMeta = {
  "/": ["My SafetyZone — A little more confidence in every bite.", "Your everyday companion for food allergies and dietary needs. Digital allergy cards, travel tools, recipes, medication reminders, and more.", "Feel safer. Live fuller.", "My SafetyZone brings the tools for everyday allergy life into one calm, thoughtful place."],
  "/contact": ["Contact Us | My SafetyZone", "Get in touch with the My SafetyZone team for help with our food allergy companion app.", "We’re here to help.", "Questions, feedback, or partnership ideas? Reach the My SafetyZone team at joshpowersbiz@gmail.com."],
  "/support": ["Support & FAQ | My SafetyZone", "Get help with My SafetyZone features, accounts, allergy cards, medication tracking, and more.", "How can we help?", "Find answers and support for your My SafetyZone experience."],
  "/privacy": ["Privacy Policy | My SafetyZone", "Learn how My SafetyZone collects, uses, and protects your personal information.", "Privacy Policy", "Your trust matters. Read how My SafetyZone handles and protects your information."],
  "/privacy-policy": ["Privacy Policy | My SafetyZone", "Learn how My SafetyZone collects, uses, and protects your personal information.", "Privacy Policy", "Your trust matters. Read how My SafetyZone handles and protects your information."],
  "/terms": ["Terms of Service | My SafetyZone", "Read the terms and conditions for using My SafetyZone.", "Terms of Service", "The terms that govern your use of My SafetyZone and its services."],
  "/peanut-allergy-app": ["Peanut Allergy App | My SafetyZone — AI Scanner", "Peanut allergy app for iOS with AI detection, QR cards in 150 languages, EpiPen tracking, and FDA alerts.", "The Peanut Allergy App for iOS.", "Scan ingredients, communicate needs clearly, and keep essential allergy tools close at hand."],
  "/celiac-app": ["Celiac App | My SafetyZone — Gluten-Free AI", "Celiac app for iOS with AI gluten detection, Recipe AI, QR cards in 150 languages, and FDA alerts.", "The Celiac Disease App for safe gluten-free living.", "Scan ingredients, communicate needs clearly, and keep essential allergy tools close at hand."],
  "/epipen-tracker-app": ["EpiPen Tracker App | My SafetyZone — Reminders", "Track auto-injectors, receive expiration reminders, and manage inhalers and other medical devices.", "The EpiPen Tracker App for life-saving medication.", "Keep every medication and expiration date organized in one thoughtful place."],
  "/qr-allergy-card": ["QR Allergy Card | My SafetyZone — 150 Languages", "Create a personal QR allergy card that communicates your needs in 150 languages.", "QR Allergy Cards in 150 languages.", "Communicate food allergies clearly at restaurants, schools, and destinations around the world."],
  "/gluten-free-app": ["Gluten Free App | My SafetyZone — AI Scanner", "AI gluten detection, Recipe AI, QR cards, and FDA alerts for safe gluten-free living.", "The Gluten Free App for safe eating.", "Scan ingredients, find safer substitutions, and communicate your needs clearly."],
  "/food-allergy-app-for-kids": ["Food Allergy App for Kids | My SafetyZone", "Allergy profiles, school-ready QR cards, EpiPen reminders, and FDA alerts for children and parents.", "Food allergy support built for kids and parents.", "Keep profiles, allergy cards, medication reminders, and recall alerts together."],
  "/dairy-allergy-app": ["Dairy Allergy App | My SafetyZone", "Manage a dairy allergy with QR cards, recipe substitutions, reminders, and recall information.", "The Dairy Allergy App for clearer everyday choices.", "Keep communication, recipe, travel, and medication tools together."],
  "/egg-allergy-app": ["Egg Allergy App | My SafetyZone", "An iOS companion for egg allergies with QR cards, travel tools, recipe support, and reminders.", "The Egg Allergy App for meals, recipes, and travel.", "Communicate your needs and organize practical allergy tools."],
  "/tree-nut-allergy-app": ["Tree Nut Allergy App | My SafetyZone", "Manage tree nut allergies with QR cards, travel tools, medication reminders, and recall information.", "The Tree Nut Allergy App for life beyond the label.", "Keep detailed allergy communication and planning tools organized."],
  "/sesame-allergy-app": ["Sesame Allergy App | My SafetyZone", "Organize sesame allergy communication, travel planning, reminders, and recall information.", "The Sesame Allergy App for clearer communication.", "Prepare, communicate, and keep essential tools close."],
  "/allergy-card-for-restaurants": ["Allergy Card for Restaurants | My SafetyZone", "Create a QR allergy card for restaurants and communicate dietary needs across supported languages.", "An Allergy Card made for restaurant conversations.", "Help restaurant staff understand your dietary needs before the meal arrives."],
  "/food-allergy-travel-app": ["Food Allergy Travel App | My SafetyZone", "Travel with food allergies using QR cards, language support, destination guidance, and reminders.", "Food Allergy Travel with a little more confidence.", "Keep communication, planning, and medication tools close throughout the trip."],
};

const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain", ".woff2": "font/woff2", ".webmanifest": "application/manifest+json" };
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);

function buildFallback(html, route) {
  const [rawTitle, rawDescription, rawHeading, rawIntro] = pageMeta[route] || pageMeta["/"];
  const canonical = `https://mysafetyzone.com${route === "/" ? "/" : route}`;
  const [title, description, heading, intro] = [rawTitle, rawDescription, rawHeading, rawIntro].map(escapeHtml);
  const content = `<main style="min-height:100vh;background:#f8f9f5;color:#173f36;display:grid;place-items:center;padding:clamp(2rem,7vw,6rem);font-family:Inter,ui-sans-serif,system-ui,sans-serif"><div style="width:min(760px,100%);text-align:center"><p style="margin:0 0 1rem;color:#168c93;font-size:.78rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase">My SafetyZone</p><h1 style="margin:0;font-family:Georgia,serif;font-size:clamp(2.7rem,8vw,6.2rem);font-weight:400;line-height:.95;letter-spacing:-.05em">${heading}</h1><p style="max-width:620px;margin:1.5rem auto 0;color:#5f716b;font-size:clamp(1rem,2vw,1.25rem);line-height:1.65">${intro}</p><a href="https://apps.apple.com/us/app/my-safetyzone/id6758567664" style="display:inline-block;margin-top:2rem;padding:.9rem 1.35rem;border-radius:999px;background:#173f36;color:#fff;text-decoration:none;font-weight:750">Download for iOS</a></div></main>`;
  return html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${description}" data-rh="true" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" data-rh="true" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${title}" data-rh="true" />`)
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${description}" data-rh="true" />`)
    .replace(/<meta\s+name="twitter:title"[\s\S]*?\/>/, `<meta name="twitter:title" content="${title}" data-rh="true" />`)
    .replace(/<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${description}" data-rh="true" />`)
    .replace('<div id="root"></div>', `<div id="root">${content}</div>`);
}

function writeStaticFallbacks() {
  const template = readFileSync(join(dist, "index.html"), "utf8");
  for (const route of routes) {
    const out = route === "/" ? join(dist, "index.html") : join(dist, route, "index.html");
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, buildFallback(template, route));
    console.log("static fallback", route);
  }
  console.log(`Done: ${routes.length} routes generated without a browser.`);
}

let browser;
try {
  browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH || undefined });
} catch (error) {
  console.warn("Browser unavailable; generating indexable static fallbacks.", error?.message?.split("\n")[0]);
  writeStaticFallbacks();
  process.exit(0);
}

const server = createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = join(dist, pathname);
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(dist, "index.html");
  try {
    res.writeHead(200, { "Content-Type": mime[extname(file)] || "application/octet-stream" });
    res.end(readFileSync(file));
  } catch {
    res.writeHead(404).end();
  }
});

await new Promise((resolveListen) => server.listen(4173, resolveListen));
const page = await browser.newPage({ reducedMotion: "reduce" });
for (const route of routes) {
  await page.goto(`http://localhost:4173${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  const out = route === "/" ? join(dist, "index.html") : join(dist, route, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, await page.content());
  console.log("prerendered", route);
}
await browser.close();
server.close();
console.log(`Done: ${routes.length} routes prerendered.`);
