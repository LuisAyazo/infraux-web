import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

const baseUrl = 'https://www.infraux.com';

// Lista de posts del blog
const blogPosts = [
  {
    slug: 'migracion-supabase-completada',
    date: '2024-12-15',
    priority: 0.8
  },
  {
    slug: 'nuevo-modulo-costos-aws',
    date: '2024-12-10',
    priority: 0.8
  },
  {
    slug: 'sistema-deployment-visual',
    date: '2024-12-05',
    priority: 0.8
  },
  {
    slug: 'integracion-kubernetes-ecs',
    date: '2024-11-28',
    priority: 0.7
  },
  {
    slug: 'ai-assistant-beta',
    date: '2024-11-20',
    priority: 0.7
  },
  {
    slug: 'marketplace-templates',
    date: '2024-11-15',
    priority: 0.7
  },
  {
    slug: 'enterprise-sso-compliance',
    date: '2024-11-10',
    priority: 0.7
  },
  {
    slug: 'performance-100k-diagramas',
    date: '2024-11-05',
    priority: 0.7
  },
  {
    slug: 'lanzamiento-beta-publica',
    date: '2024-10-30',
    priority: 0.6
  },
  {
    slug: 'seed-funding-announcement',
    date: '2024-10-25',
    priority: 0.6
  }
];

export async function GET(request: Request) {
  // Página principal del blog en ambos idiomas
  const blogMainPages: ISitemapField[] = [
    {
      loc: `${baseUrl}/blog`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily' as const,
      priority: 0.9,
    }
  ];

  // URLs individuales para cada post del blog
  const blogPostUrls: ISitemapField[] = blogPosts.map(post => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    changefreq: 'monthly' as const,
    priority: post.priority,
  }));

  // Combinar todas las URLs del blog
  const allUrls = [...blogMainPages, ...blogPostUrls];

  return getServerSideSitemap(allUrls);
}