'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '#home' },
  { name: '¿Qué es?', href: '#what-is-infraux' },
  { name: 'Características', href: '#nodes' },
  { name: 'Precios', href: '#pricing' },
  { name: 'Casos de Uso', href: '#use-cases' },
  { name: 'Opiniones', href: '#testimonials' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border-b border-gray-200/30 dark:border-gray-700/30' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">InfraUX</span>
            <div className="h-8 w-auto text-2xl font-bold group-hover:scale-110 transition-all duration-300">
              <span className="bg-gradient-to-r from-electric-purple-600 via-electric-purple-500 to-electric-purple-700 bg-clip-text text-transparent">
                Infra
              </span>
              <span className="bg-gradient-to-r from-emerald-green-600 via-emerald-green-500 to-emerald-green-700 bg-clip-text text-transparent">
                UX
              </span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300 hover:text-electric-purple-600 dark:hover:text-electric-purple-400 transition-all duration-300 relative group transform hover:scale-110"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 group-hover:w-full transition-all duration-500 group-hover:shadow-lg"></span>
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 ml-8">
          <a 
            href="https://app.infraux.com/login" 
            className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-gray-700 dark:text-gray-300 hover:text-electric-purple-600 dark:hover:text-electric-purple-400 transition-all duration-300 px-6 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-electric-purple-500/50 hover:bg-electric-purple-50 dark:hover:bg-electric-purple-900/20 backdrop-blur-sm group shadow-sm hover:shadow-md"
          >
            <UserIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
            Iniciar Sesión
          </a>
          <a 
            href="https://app.infraux.com/register" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-purple-600 to-electric-purple-700 hover:from-electric-purple-700 hover:to-electric-purple-800 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-electric-purple-500/30 backdrop-blur-sm group border border-electric-purple-500/20"
          >
            Registro Gratis
            <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm border-l border-gray-200 dark:border-gray-700 lg:hidden shadow-2xl animate-slide-up">
            <div className="flex items-center justify-between animate-fade-in">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">InfraUX</span>
                <div className="h-8 w-auto text-2xl font-bold">
                  <span className="bg-gradient-to-r from-electric-purple-600 to-electric-purple-700 bg-clip-text text-transparent">
                    Infra
                  </span>
                  <span className="bg-gradient-to-r from-emerald-green-600 to-emerald-green-700 bg-clip-text text-transparent">
                    UX
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4 animate-fade-in-up">
                  <a
                    href="https://app.infraux.com/login"
                    className="flex items-center gap-2 -mx-3 rounded-xl px-4 py-3 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 hover:border-electric-purple-500/50 hover:bg-electric-purple-50 dark:hover:bg-electric-purple-900/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    <UserIcon className="h-5 w-5" />
                    Iniciar Sesión
                  </a>
                  <a
                    href="https://app.infraux.com/register"
                    className="flex items-center gap-2 bg-gradient-to-r from-electric-purple-600 to-electric-purple-700 text-white rounded-xl px-4 py-3 text-base font-semibold leading-7 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-electric-purple-500/20 backdrop-blur-sm"
                  >
                    Registro Gratis
                    <ArrowRightIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
