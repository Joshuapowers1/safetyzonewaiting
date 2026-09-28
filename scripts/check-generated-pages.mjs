import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const configSource = readFileSync(join("src", "pages", "landing", "configs.ts"), "utf8");
const landingRoutes = [...configSource.matchAll(/^  '([a-z0-9-]+)': \{/gm)].map((match) => match[1]);
const requiredRoutes = ["", "contact", "support", "privacy", "privacy-policy", "terms", ...landingRoutes];
const failures = [];
for (const route of requiredRoutes) {
  const file = route ? join("dist", route, "index.html") : join("dist", "index.html");
  if (!existsSync(file)) { failures.push(`${route || "/"}: missing HTML`); continue; }
  const html = readFileSync(file, "utf8");
  if (!/<h1[ >]/.test(html)) failures.push(`${route || "/"}: missing visible H1`);
  if (!/rel="canonical"/.test(html)) failures.push(`${route || "/"}: missing canonical`);
  if (!/apps\.apple\.com/.test(html)) failures.push(`${route || "/"}: missing App Store link`);
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Validated ${requiredRoutes.length} generated pages.`);
