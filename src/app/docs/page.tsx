'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DocsPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to external documentation
    window.location.href = 'https://docs.infraux.com';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to documentation...</h1>
        <p className="text-gray-600">
          If you are not redirected automatically, 
          <a href="https://docs.infraux.com" className="text-emerald-600 hover:underline ml-1">
            click here
          </a>
        </p>
      </div>
    </div>
  );
}