// Prerender all public routes to static HTML so crawlers see real content
// without executing JavaScript. Runs after `vite build`.
import { createServer } from "node:http";
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { extname, join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { landingSlugs } from "../src/pages/landing/configs.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const routes = [
  "/",
  "/contact",
  "/support",
  "/privacy",
  "/privacy-policy",
  "/terms",
  ...landingSlugs.map((s) => `/${s}`),
];

const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json",
};

const server = createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = join(dist, p);
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(dist, "index.html");
  try {
    res.writeHead(200, { "Content-Type": mime[extname(file)] || "application/octet-stream" });
    res.end(readFileSync(file));
  } catch {
    res.writeHead(404).end();
  }
});

await new Promise((r) => server.listen(4173, r));

const browser = await chromium.launch();
const page = await browser.newPage();

for (const route of routes) {
  await page.goto(`http://localhost:4173${route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500); // let Helmet + animations settle
  const html = await page.content();
  const out = route === "/" ? join(dist, "index.html") : join(dist, route, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log("prerendered", route);
}

await browser.close();
server.close();
console.log(`Done: ${routes.length} routes prerendered.`);
