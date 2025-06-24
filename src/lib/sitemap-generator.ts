import { ISitemapField } from 'next-sitemap';
import { routeTranslations } from '@/lib/route-translations';

const baseUrl = 'https://www.infraux.com';

export function generateSitemapEntries(paths: string[]): ISitemapField[] {
  return paths.flatMap(path => {
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
}