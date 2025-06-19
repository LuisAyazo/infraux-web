/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://infraux.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://infraux.com/sitemap.xml',
    ],
  },
  // Páginas adicionales que queremos incluir específicamente
  additionalPaths: async (config) => [
    await config.transform(config, '/que-es-infraux'),
    await config.transform(config, '/casos-de-uso'),
    await config.transform(config, '/demo'),
    await config.transform(config, '/precios'),
    await config.transform(config, '/comparacion'),
    await config.transform(config, '/testimonios'),
  ],
}
