import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Página no encontrada | InfraUX',
  description: 'La página que buscas no existe. Descubre InfraUX, la plataforma visual para diseñar y desplegar infraestructura cloud en AWS, GCP y Azure.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Floating elements for decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-blue-400/20 rounded-full animate-pulse"></div>
      
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Large 404 Display */}
        <div className="mb-12 relative">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
          
          <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 rounded-3xl p-8 mb-8">
            <div className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              404
            </div>
            
            {/* Animated cloud icons */}
            <div className="absolute top-4 left-4 opacity-30">
              <svg className="w-12 h-8 text-blue-400 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 20A5.5 5.5 0 0 1 6.5 9a6.5 6.5 0 0 1 11.64-1.98A4.5 4.5 0 0 1 18.5 16H17v4h-10.5Z"/>
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 opacity-30">
              <svg className="w-10 h-6 text-purple-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 20A5.5 5.5 0 0 1 6.5 9a6.5 6.5 0 0 1 11.64-1.98A4.5 4.5 0 0 1 18.5 16H17v4h-10.5Z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Error Message with beautiful typography */}
        <div className="mb-12 animate-fade-in opacity-0 animate-delay-200 animate-fill-forwards">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            ¡Oops! Página perdida en la nube
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Parece que esta página se perdió en el proceso de despliegue. 
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            No te preocupes, nuestros ingenieros de infraestructura están trabajando para encontrarla 🔧
          </p>
        </div>

        {/* Beautiful CTA buttons */}
        <div className="mb-16 space-y-6">
          <Link
            href="/"
            className="inline-block group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Volver al centro de control
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/#what-is-infraux"
              className="group flex items-center justify-center gap-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Descubrir InfraUX
            </Link>
            <Link
              href="/#pricing"
              className="group flex items-center justify-center gap-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
              Ver Precios
            </Link>
          </div>
        </div>

        {/* Enhanced Popular Pages with cards */}
        <div className="animate-fade-in opacity-0 animate-delay-500 animate-fill-forwards">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            O explora estas páginas populares:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                href: "/#what-is-infraux",
                title: "¿Qué es InfraUX?",
                description: "Descubre nuestra plataforma",
                icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                href: "/#use-cases",
                title: "Casos de uso",
                description: "Ve InfraUX en acción",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              },
              {
                href: "/#testimonials",
                title: "Testimonios",
                description: "Lo que dicen nuestros usuarios",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              },
              {
                href: "/#pricing",
                title: "Precios",
                description: "Encuentra tu plan perfecto",
                icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 dark:hover:bg-black/30 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
