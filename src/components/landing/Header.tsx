'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline' // ChevronDownIcon para posibles dropdowns futuros

const navigation = [
  { name: 'Producto', href: '/que-es-infraux' },
  { name: 'Casos de Uso', href: '/casos-de-uso' },
  { name: 'Precios', href: '/precios' },
  { name: 'Demo', href: '/demo' },
  { name: 'Blog', href: '/blog' },
  { name: 'Docs', href: '/docs' },
]

// Un logo SVG simple para InfraUX - puedes reemplazarlo con tu propio SVG
const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600 dark:text-indigo-400 h-8 w-auto">
    <rect width="32" height="32" rx="8" fill="currentColor"/>
    <path d="M10 10L16 4L22 10L16 16L10 10Z" fill="white" fillOpacity="0.5"/>
    <path d="M10 22L16 16L22 22L16 28L10 22Z" fill="white" fillOpacity="0.5"/>
    <path d="M4 16L10 10L16 16L10 22L4 16Z" fill="white" fillOpacity="0.5"/>
    <path d="M22 10L28 16L22 22L16 16L22 10Z" fill="white" fillOpacity="0.5"/>
  </svg>
);


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check scroll position on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerBaseClasses = "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out";
  const scrolledClasses = "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-700/80";
  const transparentClasses = "bg-transparent";

  const navLinkBase = "text-sm font-medium transition-colors duration-200 ease-in-out";
  const navLinkIdle = "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400";
  
  const ctaButtonClasses = "px-5 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900";
  const primaryCtaClasses = `${ctaButtonClasses} bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md focus:ring-indigo-500`;
  const secondaryCtaClasses = `${ctaButtonClasses} text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 focus:ring-indigo-500`;


  return (
    <header className={`${headerBaseClasses} ${isScrolled ? scrolledClasses : transparentClasses}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4" aria-label="Global">
        {/* Logo y Nombre */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group focus:outline-none">
            <span className="sr-only">InfraUX</span>
            <Logo />
            <span className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              InfraUX
            </span>
          </Link>
        </div>
        
        {/* Navegación Desktop */}
        <div className="hidden lg:flex lg:gap-x-7">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={`${navLinkBase} ${navLinkIdle}`}>
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* CTAs Desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
          <Link href="https://app.infraux.com/login" className={`${navLinkBase} ${navLinkIdle} px-3 py-2`}>
            Iniciar Sesión
          </Link>
          <Link href="https://app.infraux.com/register" className={primaryCtaClasses}>
            Empezar Gratis
          </Link>
        </div>

        {/* Botón Menú Móvil */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Panel Menú Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]" role="dialog" aria-modal="true">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
          
          <div className="fixed inset-y-0 right-0 z-[101] w-full max-w-sm overflow-y-auto bg-white dark:bg-slate-900 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
                <Logo />
                <span className="text-xl font-bold text-slate-800 dark:text-slate-100">InfraUX</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root">
              <div className="-my-6 divide-y divide-slate-200 dark:divide-slate-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-md px-3 py-2.5 text-base ${navLinkBase} ${navLinkIdle} hover:bg-slate-50 dark:hover:bg-slate-800`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Link
                    href="https://app.infraux.com/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-center rounded-md px-3 py-2.5 text-base ${secondaryCtaClasses}`}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    href="https://app.infraux.com/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-center ${primaryCtaClasses}`}
                  >
                    Empezar Gratis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
