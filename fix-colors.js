const fs = require('fs');
const path = require('path');

// Color mappings for Tailwind v4
const colorMappings = {
  'electric-purple-DEFAULT': '[--color-electric-purple]',
  'electric-purple-light': '[--color-electric-purple-light]',
  'electric-purple-dark': '[--color-electric-purple-dark]',
  'emerald-green-DEFAULT': '[--color-emerald-green]',
  'emerald-green-light': '[--color-emerald-green-light]',
  'emerald-green-dark': '[--color-emerald-green-dark]',
  'cloud-blue-DEFAULT': '[--color-cloud-blue]',
  'cloud-blue-light': '[--color-cloud-blue-light]',
  'cloud-blue-dark': '[--color-cloud-blue-dark]',
  'theme-bg-light': '[--color-theme-bg-light]',
  'theme-bg-dark': '[--color-theme-bg-dark]',
  'theme-text-light': '[--color-theme-text-light]',
  'theme-text-dark': '[--color-theme-text-dark]',
  'card-bg-light': '[--color-card-bg-light]',
  'card-bg-dark': '[--color-card-bg-dark]'
};

function replaceColorsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    Object.entries(colorMappings).forEach(([oldColor, newColor]) => {
      const patterns = [
        `text-${oldColor}`,
        `bg-${oldColor}`,
        `border-${oldColor}`,
        `ring-${oldColor}`,
        `hover:text-${oldColor}`,
        `hover:bg-${oldColor}`,
        `hover:border-${oldColor}`,
        `focus:ring-${oldColor}`,
        `dark:text-${oldColor}`,
        `dark:bg-${oldColor}`,
        `dark:border-${oldColor}`,
        `dark:hover:text-${oldColor}`,
        `dark:hover:bg-${oldColor}`,
        `dark:focus:ring-${oldColor}`
      ];
      
      patterns.forEach(pattern => {
        const newPattern = pattern.replace(oldColor, newColor);
        if (content.includes(pattern)) {
          content = content.replace(new RegExp(pattern, 'g'), newPattern);
          modified = true;
        }
      });
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !['node_modules', '.next', '.git'].includes(item)) {
      walkDirectory(fullPath);
    } else if (stat.isFile() && /\.(tsx?|jsx?|css)$/.test(item)) {
      replaceColorsInFile(fullPath);
    }
  });
}

// Start from src directory
const srcDir = path.join(__dirname, 'src');
walkDirectory(srcDir);

console.log('Color replacement complete!');
