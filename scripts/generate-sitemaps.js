const fs = require('fs');
const { routeTranslations } = require('../src/lib/route-translations');

const baseUrl = 'https://www.infraux.com';

const sitemapSections = {
  pages: ['/', '/precios', '/contacto', '/demo', '/casos-de-uso', '/empresa', '/recursos', '/comparacion', '/testimonios', '/comunidad', '/changelog'],
  product: ['/producto/editor', '/producto/iac', '/producto/deployment', '/producto/colaboracion'],
  solutions: ['/soluciones/startups', '/soluciones/empresas', '/soluciones/devops', '/soluciones/multi-cloud'],
  legal: ['/privacy-policy', '/refund-policy', '/terms-and-conditions'],
  blog: [
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
  ],
};

function generateSitemap(section, paths) {
  const isBlog = section === 'blog';
  const urls = paths.flatMap(path => {
    if (isBlog) {
      return [{
        loc: `${baseUrl}/blog/${path}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      }];
    }
    
    const translationEntry = routeTranslations[path];
    if (!translationEntry) return [];

    const uniquePaths = Array.from(new Set([translationEntry.es, translationEntry.en]));
    
    return uniquePaths.map(p => ({
      loc: `${baseUrl}${p}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: p === '/' ? 1.0 : 0.8,
    }));
  });

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

  fs.writeFileSync(`public/sitemap-${section}.xml`, sitemapContent);
}

function generateSitemapIndex() {
  const sections = Object.keys(sitemapSections);
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sections.map(section => `
  <sitemap>
    <loc>${baseUrl}/sitemap-${section}.xml</loc>
  </sitemap>
  `).join('')}
</sitemapindex>`;

  fs.writeFileSync('public/sitemap.xml', sitemapIndexContent);
}

Object.keys(sitemapSections).forEach(section => {
  generateSitemap(section, sitemapSections[section]);
});

generateSitemapIndex();

console.log('✅ Sitemaps generated successfully!');