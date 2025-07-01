// Quick test to verify SEO config exports
const fs = require('fs');
const path = require('path');

const seoConfigPath = './src/lib/seo-config.ts';
const content = fs.readFileSync(seoConfigPath, 'utf8');

// Check for pageMetadata export
const hasPageMetadataExport = content.includes('pageMetadata');
const hasCloseMetadata = content.includes('category: \'authentication\'\n    })\n}');

console.log('✅ pageMetadata object found:', hasPageMetadataExport);
console.log('✅ pageMetadata properly closed:', hasCloseMetadata);

// Look for the key functions we added in Phase 5A
const functionsToCheck = [
  'community',
  'demos', 
  'visualBuilder',
  'resources',
  'api',
  'login',
  'register'
];

functionsToCheck.forEach(func => {
  const hasFunction = content.includes(`${func}: () => createMetadata(`);
  console.log(`✅ ${func} function found:`, hasFunction);
});

console.log('\n🎉 SEO config validation complete!');
