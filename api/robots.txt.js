/**
 * Dynamic robots.txt Generator
 * Manages crawl directives and site crawlability
 * Routes: /api/robots.txt or /robots.txt
 */

export default function handler(req, res) {
  // Only handle GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the domain from the request or use default
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'kmaarafatislam.vercel.app';
  const baseURL = `${protocol}://${host}`;

  // Generate robots.txt content
  const robotsTxt = `# Robots.txt for K. M. Arafat Islam Portfolio
# Generated dynamically on ${new Date().toISOString().split('T')[0]}

# Allow all search engines
User-agent: *
Allow: /
Allow: /programming-hero.html
Allow: /nebulae.html
Allow: /buildsign.html
Allow: /certificates.html
Allow: /ieee-pr.html
Allow: /csclub.html
Allow: /creative-it.html
Allow: /international-affairs.html
Allow: /banglay-ielts.html
Allow: /tbs-edge.html
Allow: /moods/

# Disallow admin pages (protected by authentication)
Disallow: /admin/
Disallow: /admin/login
Disallow: /admin/login.html
Disallow: /admin/index.html

# Disallow private API endpoints
Disallow: /api/admin/
Disallow: /api/login/
Disallow: /api/logout/
Disallow: /api/session/

# Disallow search page (no user-facing search results)
Disallow: /search/

# Disallow version control and build artifacts
Disallow: /.git
Disallow: /.github
Disallow: /node_modules/
Disallow: /build/
Disallow: /.next/

# Sitemap location
Sitemap: ${baseURL}/sitemap.xml
Sitemap: ${baseURL}/api/sitemap.xml

# Crawl delay and request rate (2 requests per 10 seconds)
Crawl-delay: 5
Request-rate: 2/10s

# Allow Google Bot to crawl faster
User-agent: Googlebot
Allow: /
Crawl-delay: 0.5

# Allow Bing Bot
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Block bad bots and scrapers
User-agent: MJ12bot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /

# Block old crawlers
User-agent: Yandex
Allow: /`;

  // Set proper headers
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=604800, stale-while-revalidate=1209600');
  res.status(200).send(robotsTxt);
}
