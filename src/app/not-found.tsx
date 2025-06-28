import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page not found | InfraUX',
  description: 'The page you are looking for does not exist. Discover InfraUX, the visual platform to design and deploy cloud infrastructure on AWS, GCP and Azure.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-4xl p-8 text-center relative">
        {/* Nodos de fondo */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
          {/* Líneas de conexión */}
          <line x1="200" y1="150" x2="400" y2="150" stroke="#6b7280" strokeWidth="2" />
          <line x1="400" y1="150" x2="600" y2="150" stroke="#6b7280" strokeWidth="2" />
          <line x1="200" y1="300" x2="400" y2="300" stroke="#6b7280" strokeWidth="2" />
          <line x1="400" y1="300" x2="600" y2="300" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
          <line x1="200" y1="450" x2="400" y2="450" stroke="#6b7280" strokeWidth="2" />
          <line x1="400" y1="450" x2="600" y2="450" stroke="#6b7280" strokeWidth="2" />
          
          {/* Conexiones verticales */}
          <line x1="200" y1="150" x2="200" y2="300" stroke="#6b7280" strokeWidth="2" />
          <line x1="200" y1="300" x2="200" y2="450" stroke="#6b7280" strokeWidth="2" />
          <line x1="400" y1="150" x2="400" y2="300" stroke="#6b7280" strokeWidth="2" />
          <line x1="400" y1="300" x2="400" y2="450" stroke="#6b7280" strokeWidth="2" />
          <line x1="600" y1="150" x2="600" y2="300" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5" className="opacity-50" />
          <line x1="600" y1="300" x2="600" y2="450" stroke="#6b7280" strokeWidth="2" />
          
          {/* Nodos */}
          <circle cx="200" cy="150" r="20" fill="#9ca3af" />
          <circle cx="400" cy="150" r="20" fill="#9ca3af" />
          <circle cx="600" cy="150" r="20" fill="#9ca3af" />
          <circle cx="200" cy="300" r="20" fill="#9ca3af" />
          <circle cx="400" cy="300" r="20" fill="#9ca3af" />
          {/* Nodo roto */}
          <g>
            <circle cx="600" cy="300" r="20" fill="#ef4444" opacity="0.3" />
            <path d="M 585 300 L 595 290 L 605 300 L 615 290" stroke="#ef4444" strokeWidth="3" fill="none" />
            <path d="M 585 310 L 595 300 L 605 310 L 615 300" stroke="#ef4444" strokeWidth="3" fill="none" />
          </g>
          <circle cx="200" cy="450" r="20" fill="#9ca3af" />
          <circle cx="400" cy="450" r="20" fill="#9ca3af" />
          <circle cx="600" cy="450" r="20" fill="#9ca3af" />
        </svg>
        
        {/* Contenido principal */}
        <div className="relative z-10">
          {/* Imagen de Zenix */}
          <Image
            src="/images/zenix-404.png"
            alt="Zenix 404"
            width={192}
            height={192}
            className="mx-auto h-48 w-48 object-contain mb-8"
          />
          
          <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            404
          </h1>
          
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            This node does not exist
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The infrastructure node you're looking for seems to be disconnected or doesn't exist in our network.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-md transition-all duration-200 hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              Back to Home
            </Link>
            
            <Link
              href="/#what-is-infraux"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Learn about InfraUX
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              {
                href: "/#what-is-infraux",
                title: "Platform",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              },
              {
                href: "/#use-cases",
                title: "Use Cases",
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              },
              {
                href: "/#pricing",
                title: "Pricing",
                icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              },
              {
                href: "/#testimonials",
                title: "Testimonials",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg mb-3 group-hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:group-hover:bg-gray-700">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors dark:text-gray-300 dark:group-hover:text-gray-100">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}