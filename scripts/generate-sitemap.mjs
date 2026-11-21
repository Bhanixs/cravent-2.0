import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const SITE_URL = "https://www.cravent.in";
const TODAY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// Read cravent.ts to extract all work slugs dynamically
const craventPath = path.join(rootDir, "src", "content", "cravent.ts");
const craventContent = fs.readFileSync(craventPath, "utf8");
const slugMatches = [...craventContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
const workSlugs = [...new Set(slugMatches.map((m) => m[1]))];

const staticRoutes = [
  // Primary Homepage
  { url: "/", changefreq: "weekly", priority: "1.0" },

  // Core Main Pages
  { url: "/services", changefreq: "monthly", priority: "0.9" },
  { url: "/work", changefreq: "weekly", priority: "0.9" },
  { url: "/industries", changefreq: "monthly", priority: "0.9" },
  { url: "/about", changefreq: "monthly", priority: "0.8" },
  { url: "/insights", changefreq: "weekly", priority: "0.8" },
  { url: "/contact", changefreq: "monthly", priority: "0.8" },

  // Specialized Industry Branding Landing Pages
  { url: "/branding-agency-for-startups", changefreq: "monthly", priority: "0.9" },
  { url: "/industries/construction-branding-agency", changefreq: "monthly", priority: "0.9" },
  { url: "/industries/fashion-branding-agency", changefreq: "monthly", priority: "0.9" },
  { url: "/industries/hospitality-branding-agency", changefreq: "monthly", priority: "0.9" },

  // Specialized Web App Development Landing Pages
  { url: "/web-app-development-hospitality", changefreq: "monthly", priority: "0.85" },
  { url: "/web-app-development-startups", changefreq: "monthly", priority: "0.85" },
  { url: "/web-app-development-construction-architecture", changefreq: "monthly", priority: "0.85" },
  { url: "/web-app-development-fashion", changefreq: "monthly", priority: "0.85" },

  // Specialized Marketing Agency Landing Pages
  { url: "/marketing-agency-hospitality", changefreq: "monthly", priority: "0.85" },
  { url: "/marketing-agency-startups", changefreq: "monthly", priority: "0.85" },
  { url: "/marketing-agency-construction-architecture", changefreq: "monthly", priority: "0.85" },
  { url: "/marketing-agency-fashion", changefreq: "monthly", priority: "0.85" },

  // Legal
  { url: "/privacy", changefreq: "yearly", priority: "0.3" },
  { url: "/terms", changefreq: "yearly", priority: "0.3" },
];

const workRoutes = workSlugs.map((slug) => ({
  url: `/work/${slug}`,
  changefreq: "monthly",
  priority: "0.7",
}));

const allEntries = [...staticRoutes, ...workRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (e) => `  <url>
    <loc>${SITE_URL}${e.url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outputPath = path.join(rootDir, "public", "sitemap.xml");
fs.writeFileSync(outputPath, xml, "utf8");

console.log(`Successfully built sitemap at ${outputPath}`);
console.log(`Total URLs generated: ${allEntries.length}`);
