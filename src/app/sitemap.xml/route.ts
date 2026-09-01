const SITE_URL = "https://24magic.in";

const routes: { path: string; priority: number; changefreq: string }[] = [
  { path: "", priority: 1.0, changefreq: "monthly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/services", priority: 0.7, changefreq: "monthly" },
  { path: "/solutions", priority: 0.7, changefreq: "monthly" },
  { path: "/pricing", priority: 0.7, changefreq: "monthly" },
  { path: "/resources", priority: 0.7, changefreq: "monthly" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
  { path: "/privacy-policy", priority: 0.7, changefreq: "monthly" },
  { path: "/terms-of-service", priority: 0.7, changefreq: "monthly" },
];

export function GET() {
  const lastmod = new Date().toISOString();

  const urlEntries = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
