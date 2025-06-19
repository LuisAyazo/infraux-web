'use client'

import { PlayCircleIcon } from '@heroicons/react/24/solid' // Using solid for a more prominent play icon

export default function DemoPlaceholder() {
  return (
    <section id="demo" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration - Simplificado */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-purple-500/5 via-emerald-green-500/5 to-transparent dark:from-electric-purple-900/10 dark:via-emerald-green-900/10"></div>
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-emerald-green-400/10 rounded-full blur-3xl animate-float"></div> {/* Ajustado cloud-blue a emerald-green para consistencia */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple-400/10 rounded-full blur-3xl animate-float-delay"></div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ve <span className="text-electric-purple-600 dark:text-electric-purple-400">Infra</span><span className="text-emerald-green-600 dark:text-emerald-green-400">UX</span> en Acción {/* Logo a colores sólidos */}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Descubre cómo <span className="text-electric-purple-600 dark:text-electric-purple-400">Infra</span><span className="text-emerald-green-600 dark:text-emerald-green-400">UX</span> simplifica la creación de infraestructura cloud a través de una interfaz visual intuitiva {/* Logo a colores sólidos */}
          </p>
        </div>
        
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center max-w-5xl mx-auto overflow-hidden animate-fade-in-up border border-gray-200 dark:border-gray-700 group hover:scale-105 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
          {/* Placeholder content */}
          <div className="text-center p-8 group-hover:scale-110 transition-transform duration-500">
            <div className="relative">
              <PlayCircleIcon className="w-32 h-32 text-gray-600 dark:text-gray-400 mx-auto mb-6 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:animate-bounce" /> {/* Icono a gris */}
              <div className="absolute inset-0 w-32 h-32 mx-auto bg-gray-500/20 rounded-full blur-xl"></div> {/* Círculo decorativo a gris */}
            </div>
            <p className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Video Demostrativo Próximamente
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Estamos preparando una demostración visual de nuestro editor. ¡Vuelve pronto!
            </p>
          </div>
          {/* 
            When ready, replace with:
            <iframe 
              className="w-full h-full" 
              src="YOUR_VIDEO_EMBED_URL" 
              title="InfraUX Demo Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
            OR an animated GIF:
            <img src="/path/to/demo.gif" alt="InfraUX Editor Demo" className="w-full h-full object-cover" />
          */}
        </div>
      </div>
    </section>
  )
}
