import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://infraux.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/workspace/',
          '/admin/',
          '/_next/',
          '/private/',
          '/temp/',
          '*.json',
          '*.xml',
          '/sitemap.xml',
        ],
      },
      // Allow search engines to crawl important static assets
      {
        userAgent: '*',
        allow: [
          '/images/',
          '/icons/',
          '/og-*.jpg',
          '/og-*.png',
          '/favicon.ico',
          '/apple-touch-icon.png',
          '/manifest.json',
        ],
      },
      // Special rules for major search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/workspace/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/workspace/',
          '/admin/',
          '/private/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
