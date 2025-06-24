/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.SITE_URL || 'https://infraux.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true, // Esto es clave para generar el sitemap-index.xml
  // Excluimos las rutas de las APIs de sitemaps para que no aparezcan en el sitemap
  exclude: [
    '/server-sitemap.xml',
    '/sitemap-producto.xml',
    '/sitemap-soluciones.xml',
    '/sitemap-recursos.xml',
    '/sitemap-principal.xml',
    '/sitemap-blog.xml'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // Sitemaps individuales para cada sección del menú
    additionalSitemaps: [
      `${siteUrl}/sitemap-principal.xml`,
      `${siteUrl}/sitemap-producto.xml`,
      `${siteUrl}/sitemap-soluciones.xml`,
      `${siteUrl}/sitemap-recursos.xml`,
      `${siteUrl}/sitemap-blog.xml`,
    ],
  },
};
