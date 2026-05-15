import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const STATIC = ["/", "/services", "/pricing", "/about", "/contact"];
const KEYWORDS = [
  "seo-services-india",
  "ai-saas-development",
  "digital-marketing-bengaluru",
  "seo-for-saas-startups",
  "fastapi-development-services",
  "openai-integration-services",
  "google-ads-management-india",
  "content-marketing-saas",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [...STATIC, ...KEYWORDS.map((k) => `/services/${k}`)];
        const urls = paths
          .map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
