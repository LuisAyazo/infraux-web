import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

const baseUrl = 'https://www.infraux.com';

export async function GET(request: Request) {
  // URLs de la sección Producto
  const productPages = [
    { 
      es: '/producto/editor', 
      en: '/product/editor', 
      priority: 0.9,
      title: { es: 'Editor Visual', en: 'Visual Editor' }
    },
    { 
      es: '/producto/iac', 
      en: '/product/iac', 
      priority: 0.9,
      title: { es: 'Generación IaC', en: 'IaC Generation' }
    },
    { 
      es: '/producto/deployment', 
      en: '/product/deployment', 
      priority: 0.9,
      title: { es: 'Deployment', en: 'Deployment' }
    },
    { 
      es: '/producto/colaboracion', 
      en: '/product/collaboration', 
      priority: 0.9,
      title: { es: 'Colaboración', en: 'Collaboration' }
    },
  ];

  // Generar URLs para ambos idiomas con metadatos enriquecidos
  const urls: ISitemapField[] = productPages.flatMap(page => [
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