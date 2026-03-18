/**
 * Dynamic Sitemap XML Generator
 * Generates XML sitemap for all public portfolio pages
 * Routes: /api/sitemap.xml or /sitemap.xml
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

  // Image metadata for pages with og:image
  const imageUrl = 'https://kmaarafatislam.vercel.app/profile1.jpg';

  // Define all public pages with their priority, changefreq, and optional image data
  const pages = [
    {
      loc: '/',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '1.0',
      image: {
        url: imageUrl,
        title: 'K. M. Arafat Islam - Full Stack Developer Portfolio'
      }
    },
    {
      loc: '/programming-hero.html',
      lastmod: '2026-03-17',
      changefreq: 'monthly',
      priority: '0.8',
      image: {
        url: imageUrl,
        title: 'Programming Hero Campus Experience'
      }
    },
    {
      loc: '/nebulae.html',
      lastmod: '2026-03-17',
      changefreq: 'monthly',
      priority: '0.8',
      image: {
        url: imageUrl,
        title: 'Nebulae-Soft UI/UX Design Experience'
      }
    },
    {
      loc: '/buildsign.html',
      lastmod: '2026-03-17',
      changefreq: 'monthly',
      priority: '0.9',
      image: {
        url: imageUrl,
        title: 'BuildSign - Founder Experience & Company'
      }
    },
    {
      loc: '/certificates.html',
      lastmod: '2026-03-17',
      changefreq: 'monthly',
      priority: '0.7',
      image: {
        url: imageUrl,
        title: 'Professional Certificates & Credentials'
      }
    },
    {
      loc: '/ieee-pr.html',
      lastmod: '2026-03-17',
      changefreq: 'monthly',
      priority: '0.7',
      image: {
        url: imageUrl,
        title: 'IEEE RUET Student Branch Experience'
      }
    },
    {
      loc: '/csclub.html',
      lastmod: '2026-03-17',
      changefreq: 'monthly',
      priority: '0.7',
      image: {
        url: imageUrl,
        title: 'Computer Science Club Leadership'
      }
    },
    {
      loc: '/creative-it.html',
      lastmod: '2026-03-17',
      changefreq: 'monthly',
      priority: '0.7',
      image: {
        url: imageUrl,
        title: 'Creative IT Campus Experience'
      }
    },
    {
      loc: '/international-affairs.html',
      lastmod: '2026-03-17',
      changefreq: 'monthly',
      priority: '0.7',
      image: {
        url: imageUrl,
        title: 'International Affairs Experience'
      }
    },
    {
      loc: '/banglay-ielts.html',
      lastmod: '2026-03-17',
      changefreq: 'monthly',
      priority: '0.7',
      image: {
        url: imageUrl,
        title: 'Banglay-IELTS Teaching Experience'
      }
    },
    {
      loc: '/tbs-edge.html',
      lastmod: '2026-03-17',
      changefreq: 'monthly',
      priority: '0.7',
      image: {
        url: imageUrl,
        title: 'TBS Edge Leadership Experience'
      }
    },
    {
      loc: '/moods/happy.html',
      lastmod: '2026-03-17',
      changefreq: 'yearly',
      priority: '0.5'
    },
    {
      loc: '/moods/chill.html',
      lastmod: '2026-03-17',
      changefreq: 'yearly',
      priority: '0.5'
    },
    {
      loc: '/moods/love.html',
      lastmod: '2026-03-17',
      changefreq: 'yearly',
      priority: '0.5'
    },
    {
      loc: '/moods/sad.html',
      lastmod: '2026-03-17',
      changefreq: 'yearly',
      priority: '0.5'
    },
    {
      loc: '/moods/angry.html',
      lastmod: '2026-03-17',
      changefreq: 'yearly',
      priority: '0.5'
    }
  ];

  // Generate XML sitemap
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${pages
  .map((page) => {
    let urlElement = `  <url>
    <loc>${baseURL}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`;
    
    // Add image element if image data exists
    if (page.image) {
      urlElement += `
    <image:image>
      <image:loc>${page.image.url}</image:loc>
      <image:title>${page.image.title}</image:title>
    </image:image>`;
    }
    
    urlElement += `
  </url>`;
    return urlElement;
  })
  .join('\n')}
</urlset>`;

  // Set proper headers
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=172800');
  res.status(200).send(sitemapXML);
}
