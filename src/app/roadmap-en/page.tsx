'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RoadmapEnPage() {
  const router = useRouter();
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    // Establecer el idioma en inglés
    setLanguage('en');
    // Redirigir a la página principal de roadmap
    router.push('/roadmap');
  }, [router, setLanguage]);
  
  return null;
}