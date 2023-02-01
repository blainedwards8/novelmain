export async function GET() {
  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
<loc>https://www.novel.law/</loc>
<lastmod>2023-02-01T17:42:52+00:00</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://www.novel.law/about</loc>
<lastmod>2023-02-01T17:42:52+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.novel.law/contact</loc>
<lastmod>2023-02-01T17:42:52+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.novel.law/services/estate</loc>
<lastmod>2023-02-01T17:42:52+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.novel.law/services/business</loc>
<lastmod>2023-02-01T17:42:52+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.novel.law/services/probate</loc>
<lastmod>2023-02-01T17:42:52+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.novel.law/services/tm</loc>
<lastmod>2023-02-01T17:42:52+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.novel.law/services/copyright</loc>
<lastmod>2023-02-01T17:42:52+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://www.novel.law/services/technology</loc>
<lastmod>2023-02-01T17:42:52+00:00</lastmod>
<priority>0.80</priority>
</url>
</urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}