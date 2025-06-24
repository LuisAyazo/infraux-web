import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

const baseUrl = 'https://www.infraux.com';

export async function GET(request: Request) {
  // URLs de la sección Recursos (excluyendo blog que tiene su propio sitemap)
  const resourcePages = [
    { 
      es: '/recursos', 
      en: '/resources', 
      priority: 0.8,
      title: { es: 'Recursos', en: 'Resources' }
    },
    { 
      es: '/documentacion', 
      en: '/documentation', 
      priority: 0.9,
      title: { es: 'Documentación', en: 'Documentation' },
      description: { es: 'Guías y referencias completas', en: 'Complete guides and references' }
    },
    { 
      es: '/comunidad', 
      en: '/community', 
      priority: 0.8,
      title: { es: 'Comunidad', en: 'Community' },
      description: { es: 'Únete a miles de usuarios', en: 'Join thousands of users' }
    },
    { 
      es: '/changelog', 
      en: '/changelog', 
      priority: 0.8,
      title: { es: 'Changelog', en: 'Changelog' },
      description: { es: 'Nuevas funcionalidades', en: 'New features' }
    },
    { 
      es: '/que-es-infraux', 
      en: '/what-is-infraux', 
      priority: 0.7,
      title: { es: '¿Qué es InfraUX?', en: 'What is InfraUX?' }
    },
  ];

  // Páginas adicionales de documentación si existen
  const docSubpages = [
    { es: '/documentacion/intro', en: '/documentation/intro', priority: 0.8 },
    { es: '/documentacion/quickstart', en: '/documentation/quickstart', priority: 0.8 },
  ];

  const allPages = [...resourcePages, ...docSubpages];

  // Generar URLs para ambos idiomas
  const urls: ISitemapField[] = allPages.flatMap(page => [
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