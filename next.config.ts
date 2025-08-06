import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enhanced SEO and Performance Configuration
  
  // Experimental features for better performance
  experimental: {
    // Optimizar importaciones de paquetes grandes
    optimizePackageImports: [
      '@heroicons/react',
      'lucide-react',
      'framer-motion',
      'react-icons',
    ],
    // Habilitar React Server Components optimizados
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Mejorar el tree-shaking
    optimizeCss: false,
  },

  // Turbopack configuration (now stable in Next.js 15)
  turbopack: {
    // Alias para resolver módulos más rápido
    resolveAlias: {
      // Fix para styled-jsx con Turbopack
      'styled-jsx': 'styled-jsx/dist/index.js',
      // Alias para componentes comunes
      '@/components': './src/components',
      '@/lib': './src/lib',
      '@/styles': './src/styles',
      '@/types': './src/types',
      '@/utils': './src/utils',
      '@/config': './src/config',
    },
    // Optimizaciones adicionales de Turbopack
    rules: {
      // Optimizar importaciones de CSS
      '*.module.css': {
        loaders: ['css-loader'],
        as: '*.css',
      },
    },
  },

  // Compress responses for better loading speeds
  compress: true,

  // Generate ETags for better caching
  generateEtags: true,

  // Power by header removal for security
  poweredByHeader: false,

  // Images optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Performance headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400', // 24 hours
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=43200', // 12 hours
          },
        ],
      },
    ];
  },

  // Redirects for SEO (if needed)
  async redirects() {
    return [
      // Example: redirect old URLs to new ones
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true, // 301 redirect
      // },
    ];
  },

  // Rewrites for clean URLs (if needed)
  async rewrites() {
    return [
      // Example: rewrite for cleaner URLs
      // {
      //   source: '/blog/:slug',
      //   destination: '/blog/post/:slug',
      // },
    ];
  },

  // Bundle analyzer (for production optimization)
  env: {
    CUSTOM_KEY: process.env.NODE_ENV,
  },

  // Webpack configuration for better performance
  // NOTA: Comentado temporalmente mientras se usa Turbopack
  // Turbopack maneja automáticamente las optimizaciones de chunks
  // webpack: (config, { dev, isServer }) => {
  //   // Production optimizations
  //   if (!dev && !isServer) {
  //     config.optimization.splitChunks.cacheGroups = {
  //       ...config.optimization.splitChunks.cacheGroups,
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         priority: 10,
  //         chunks: 'all',
  //       },
  //     };
  //   }
  //   return config;
  // },
};

export default nextConfig;
