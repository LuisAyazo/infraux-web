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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cloud-blue-50 to-electric-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Floating elements for decoration with proper colors */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-electric-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-green-500/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-cloud-blue-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 bg-emerald-green-400/20 rounded-full animate-pulse"></div>
      
      {/* Enhanced grid pattern background */}
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Large 404 Display with better contrast */}
        <div className="mb-12 relative">
          {/* Glowing background effect with brand colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-electric-purple-500 via-emerald-green-500 to-cloud-blue-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
          
          <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-emerald-green-200 dark:border-emerald-green-700 rounded-3xl p-12 mb-8 shadow-2xl shadow-emerald-green-500/20">
            <div className="text-8xl md:text-[10rem] font-black bg-gradient-to-r from-electric-purple-600 via-emerald-green-600 to-cloud-blue-600 bg-clip-text text-transparent drop-shadow-lg">
              404
            </div>
            
            {/* Animated cloud icons with better visibility */}
            <div className="absolute top-6 left-6 opacity-60">
              <svg className="w-12 h-8 text-emerald-green-500 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 20A5.5 5.5 0 0 1 6.5 9a6.5 6.5 0 0 1 11.64-1.98A4.5 4.5 0 0 1 18.5 16H17v4h-10.5Z"/>
              </svg>
            </div>
            <div className="absolute bottom-6 right-6 opacity-60">
              <svg className="w-10 h-6 text-cloud-blue-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 20A5.5 5.5 0 0 1 6.5 9a6.5 6.5 0 0 1 11.64-1.98A4.5 4.5 0 0 1 18.5 16H17v4h-10.5Z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Error Message with excellent contrast */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-sm">
            ¡Oops! Página perdida en la nube ☁️
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-4 max-w-2xl mx-auto font-medium">
            Parece que esta página se perdió en el proceso de despliegue. 
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-xl mx-auto">
            No te preocupes, nuestros ingenieros de infraestructura están trabajando para encontrarla 🔧
          </p>
        </div>

        {/* Beautiful CTA buttons with brand colors */}
        <div className="mb-16 space-y-6 animate-fade-in-delay-1">
          <Link
            href="/"
            className="inline-block group relative overflow-hidden bg-gradient-to-r from-electric-purple-600 to-electric-purple-700 hover:from-electric-purple-700 hover:to-electric-purple-800 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-electric-purple-500/30 shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3 justify-center">
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Volver al centro de control
            </span>
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/#what-is-infraux"
              className="group flex items-center justify-center gap-3 bg-emerald-green-600 hover:bg-emerald-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-green-500/30 hover:scale-105 shadow-md"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Descubrir InfraUX
            </Link>
            <Link
              href="/#pricing"
              className="group flex items-center justify-center gap-3 bg-cloud-blue-600 hover:bg-cloud-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cloud-blue-500/30 hover:scale-105 shadow-md"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
              Ver Precios
            </Link>
          </div>
        </div>

        {/* Enhanced Popular Pages with perfect contrast and brand colors */}
        <div className="animate-fade-in-delay-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 drop-shadow-sm">
            O explora estas páginas populares:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                href: "/#what-is-infraux",
                title: "¿Qué es InfraUX?",
                description: "Descubre nuestra plataforma",
                icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "emerald-green",
                bgColor: "bg-emerald-green-50 dark:bg-emerald-green-900/20"
              },
              {
                href: "/#use-cases",
                title: "Casos de uso",
                description: "Ve InfraUX en acción",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                color: "cloud-blue",
                bgColor: "bg-cloud-blue-50 dark:bg-cloud-blue-900/20"
              },
              {
                href: "/#testimonials",
                title: "Testimonios",
                description: "Lo que dicen nuestros usuarios",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                color: "electric-purple",
                bgColor: "bg-electric-purple-50 dark:bg-electric-purple-900/20"
              },
              {
                href: "/#pricing",
                title: "Precios",
                description: "Encuentra tu plan perfecto",
                icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                color: "emerald-green",
                bgColor: "bg-emerald-green-50 dark:bg-emerald-green-900/20"
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`group ${item.bgColor} backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 hover:border-${item.color}-300 dark:hover:border-${item.color}-600 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-${item.color}-500/20`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                    </svg>
                  </div>
                  <h3 className={`font-bold text-gray-900 dark:text-white mb-2 group-hover:text-${item.color}-600 dark:group-hover:text-${item.color}-400 transition-colors text-lg`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Fun additional elements */}
        <div className="mt-16 text-center animate-fade-in-delay-3">
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
            💡 <strong>¿Sabías que?</strong> Con InfraUX puedes visualizar toda tu infraestructura cloud de forma intuitiva
          </p>
          <div className="flex justify-center gap-4 text-3xl animate-bounce">
            <span>☁️</span>
            <span>🚀</span>
            <span>⚡</span>
            <span>🎯</span>
          </div>
        </div>
      </div>
    </div>
  )
}
