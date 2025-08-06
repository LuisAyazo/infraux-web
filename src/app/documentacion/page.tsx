'use client';

import { useEffect } from 'react';

export default function DocumentacionPage() {
  useEffect(() => {
    // Redirect to external documentation in Spanish
    window.location.href = 'https://docs.infraux.com/es';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirigiendo a la documentación...</h1>
        <p className="text-gray-600">
          Si no eres redirigido automáticamente, 
          <a href="https://docs.infraux.com/es" className="text-emerald-600 hover:underline ml-1">
            haz clic aquí
          </a>
        </p>
      </div>
    </div>
  );
}