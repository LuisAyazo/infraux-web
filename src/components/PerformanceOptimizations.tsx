'use client';

import { useEffect } from 'react';
import Head from 'next/head';

export function PreconnectResources() {
  // Preconectar a recursos externos críticos
  const criticalResources = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
  ];

  return (
    <>
      {criticalResources.map((url) => (
        <link
          key={url}
          rel="preconnect"
          href={url}
          crossOrigin="anonymous"
        />
      ))}
      {/* DNS Prefetch para recursos secundarios */}
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="https://unpkg.com" />
    </>
  );
}

export function usePrefetchImages(imagePaths: string[]) {
  useEffect(() => {
    // Precargar imágenes críticas después de que la página cargue
    const prefetchImages = () => {
      imagePaths.forEach((path) => {
        const img = new Image();
        img.src = path;
      });
    };

    // Esperar a que la página esté idle antes de precargar
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(prefetchImages);
    } else {
      // Fallback para navegadores que no soportan requestIdleCallback
      setTimeout(prefetchImages, 1);
    }
  }, [imagePaths]);
}

// Hook para optimizar el rendimiento de animaciones
export function useReducedMotion() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      document.documentElement.classList.add('reduce-motion');
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('reduce-motion');
      } else {
        document.documentElement.classList.remove('reduce-motion');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
}

// Componente para lazy loading de scripts no críticos
export function LazyScript({ src, strategy = 'lazyOnload' }: { src: string; strategy?: 'lazyOnload' | 'afterInteractive' }) {
  useEffect(() => {
    if (strategy === 'lazyOnload') {
      const loadScript = () => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadScript);
      } else {
        setTimeout(loadScript, 1);
      }
    }
  }, [src, strategy]);

  return null;
}

// Optimización de fuentes web
export function FontOptimization() {
  return (
    <>
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <style jsx global>{`
        /* Font Display Swap para evitar FOIT */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 100 900;
          font-display: swap;
          src: url('/fonts/inter-var.woff2') format('woff2');
        }

        /* Optimizaciones de rendimiento CSS */
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        /* Optimización de scroll */
        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }

        /* Optimización de imágenes de fondo */
        .bg-optimize {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </>
  );
}

// Hook para detectar conexiones lentas
export function useConnectionSpeed() {
  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      if (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
        document.documentElement.classList.add('save-data');
      }

      const handleConnectionChange = () => {
        if (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
          document.documentElement.classList.add('save-data');
        } else {
          document.documentElement.classList.remove('save-data');
        }
      };

      connection.addEventListener('change', handleConnectionChange);
      return () => connection.removeEventListener('change', handleConnectionChange);
    }
  }, []);
}

// Componente principal que agrupa todas las optimizaciones
export default function PerformanceOptimizations() {
  useReducedMotion();
  useConnectionSpeed();

  return (
    <>
      <PreconnectResources />
      <FontOptimization />
    </>
  );
}