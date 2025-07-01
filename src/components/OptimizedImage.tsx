'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  fill?: boolean;
  style?: React.CSSProperties;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  fill = false,
  style,
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Generar un blur placeholder si no se proporciona
  const defaultBlurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMzIiAvPgogIDxyZWN0IGlkPSJyIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9InVybCgjZykiIC8+Cjwvc3ZnPg==';

  useEffect(() => {
    if (!imgRef.current || priority) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setHasLoaded(true);
    onLoad?.();
  };

  // Determinar el formato de imagen basado en la extensión
  const getImageFormat = (src: string) => {
    const extension = src.split('.').pop()?.toLowerCase();
    if (extension === 'svg') return 'svg';
    if (extension === 'gif') return 'gif';
    return 'webp'; // Por defecto, usar WebP para mejor compresión
  };

  // Generar sizes responsivos si no se proporcionan
  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  // Añadir atributos de SEO y accesibilidad
  const imageProps = {
    src,
    alt,
    quality,
    sizes: defaultSizes,
    onLoad: handleLoad,
    className: `${className} ${hasLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`,
    style: {
      ...style,
      objectFit,
    },
    ...(fill ? { fill: true } : { width, height }),
    ...(placeholder === 'blur' && { placeholder, blurDataURL: blurDataURL || defaultBlurDataURL }),
  };

  return (
    <div ref={imgRef} className={`relative ${fill ? 'w-full h-full' : ''}`}>
      {isIntersecting ? (
        <Image
          {...imageProps}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        <div 
          className={`${fill ? 'absolute inset-0' : ''} bg-slate-200 dark:bg-slate-700 animate-pulse`}
          style={!fill ? { width, height } : {}}
          aria-label={`Loading ${alt}`}
        />
      )}
      
      {/* Overlay para efectos de hover si es necesario */}
      {hasLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
}

// Hook personalizado para precargar imágenes críticas
export function useImagePreload(imageSrcs: string[]) {
  useEffect(() => {
    imageSrcs.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [imageSrcs]);
}

// Componente para imágenes hero con optimización máxima
export function HeroImage({ src, alt, className = '', priority = true }: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      priority={priority}
      quality={90}
      sizes="100vw"
      className={className}
      objectFit="cover"
    />
  );
}

// Componente para thumbnails con lazy loading agresivo
export function ThumbnailImage({ src, alt, width = 300, height = 200, className = '' }: OptimizedImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={75}
      sizes="(max-width: 640px) 100vw, 300px"
      className={className}
      objectFit="cover"
    />
  );
}