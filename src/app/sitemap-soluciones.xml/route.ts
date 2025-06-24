import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

const baseUrl = 'https://www.infraux.com';

export async function GET(request: Request) {
  // URLs de la sección Soluciones
  const solutionPages = [
    { 
      es: '/soluciones/startups', 
      en: '/solutions/startups', 
      priority: 0.9,
      title: { es: 'Para Startups', en: 'For Startups' },
      description: { es: 'Escala rápido sin deuda técnica', en: 'Scale fast without technical debt' }
    },
    { 
      es: '/soluciones/empresas', 
      en: '/solutions/enterprises', 
      priority: 0.9,
      title: { es: 'Para Empresas', en: 'For Enterprises' },
      description: { es: 'Gobierna tu infraestructura', en: 'Govern your infrastructure' }
    },
    { 
      es: '/soluciones/devops', 
      en: '/solutions/devops', 
      priority: 0.9,
      title: { es: 'Para DevOps', en: 'For DevOps' },
      description: { es: 'Automatiza todo tu workflow', en: 'Automate your entire workflow' }
    },
    { 
      es: '/soluciones/multi-cloud', 
      en: '/solutions/multi-cloud', 
      priority: 0.9,
      title: { es: 'Multi-Cloud', en: 'Multi-Cloud' },
      description: { es: 'AWS, GCP y Azure unificados', en: 'AWS, GCP and Azure unified' }
    },
  ];

  // Generar URLs para ambos idiomas con metadatos enriquecidos
  const urls: ISitemapField[] = solutionPages.flatMap(page => [
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