import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

const baseUrl = 'https://www.infraux.com';

export async function GET(request: Request) {
  // URLs principales del sitio
  const mainPages = [
    { es: '/', en: '/', priority: 1.0 },
    { es: '/precios', en: '/pricing', priority: 0.9 },
    { es: '/empresa', en: '/company', priority: 0.8 },
    { es: '/contacto', en: '/contact', priority: 0.8 },
    { es: '/casos-de-uso', en: '/use-cases', priority: 0.7 },
    { es: '/comparacion', en: '/comparison', priority: 0.7 },
    { es: '/testimonios', en: '/testimonials', priority: 0.7 },
    { es: '/demo', en: '/demo', priority: 0.9 },
    { es: '/privacy-policy', en: '/privacy-policy', priority: 0.5 },
    { es: '/terms-and-conditions', en: '/terms-and-conditions', priority: 0.5 },
    { es: '/refund-policy', en: '/refund-policy', priority: 0.5 },
  ];

  // Generar URLs para ambos idiomas
  const urls: ISitemapField[] = mainPages.flatMap(page => [
    {
      loc: `${baseUrl}${page.es}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly' as const,
      priority: page.priority,
    },
    {
      loc: `${baseUrl}${page.en}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly' as const,
      priority: page.priority,
    }
  ]);

  return getServerSideSitemap(urls);
}