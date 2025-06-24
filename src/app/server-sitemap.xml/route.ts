import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { routeTranslations } from '@/lib/route-translations';

const baseUrl = 'https://www.infraux.com';

const blogPosts = [
  'migracion-supabase-completada',
  'nuevo-modulo-costos-aws',
  'sistema-deployment-visual',
  'integracion-kubernetes-ecs',
  'ai-assistant-beta',
  'marketplace-templates',
  'enterprise-sso-compliance',
  'performance-100k-diagramas',
  'lanzamiento-beta-publica',
  'seed-funding-announcement'
];

export async function GET(request: Request) {
  // Obtener todas las rutas principales del objeto de traducciones
  const allMainRoutes = Object.keys(routeTranslations);

  // Generar URLs para las rutas principales
  const mainUrls: ISitemapField[] = allMainRoutes.flatMap(path => {
    const translationEntry = routeTranslations[path];
    if (!translationEntry) return [];

    const uniquePaths = Array.from(new Set([translationEntry.es, translationEntry.en]));
    
    return uniquePaths.map(p => ({
      loc: `${baseUrl}${p}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly' as const,
      priority: p === '/' ? 1.0 : 0.8,
    }));
  });

  // Generar URLs para los posts del blog
  const blogUrls: ISitemapField[] = blogPosts.map(slug => ({
    loc: `${baseUrl}/blog/${slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly' as const,
    priority: 0.7,
  }));

  // Combinar todas las URLs
  const allUrls = [...mainUrls, ...blogUrls];

  return getServerSideSitemap(allUrls);
}