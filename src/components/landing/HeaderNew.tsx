'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = {
  producto: {
    name: 'Producto',
    items: [
      { name: 'Editor Visual', href: '/producto/editor', description: 'Diseña infraestructura sin código' },
      { name: 'Generación IaC', href: '/producto/iac', description: 'Terraform, Pulumi, CloudFormation' },
      { name: 'Deployment', href: '/producto/deployment', description: 'CI/CD visual y automatizado' },
      { name: 'Colaboración', href: '/producto/colaboracion', description: 'Trabaja en equipo en tiempo real' },
    ]
  },
  soluciones: {
    name: 'Soluciones',
    items: [
      { name: 'Para Startups', href: '/soluciones/startups', description: 'Escala rápido sin deuda técnica' },
      { name: 'Para Empresas', href: '/soluciones/empresas', description: 'Gobierna tu infraestructura' },
      { name: 'Para DevOps', href: '/soluciones/devops', description: 'Automatiza todo tu workflow' },
      { name: 'Multi-Cloud', href: '/soluciones/multi-cloud', description: 'AWS, GCP y Azure unificados' },
    ]
  },
  recursos: {
    name: 'Recursos',
    items: [
      { name: 'Documentación', href: '/docs', description: 'Guías y referencias completas' },
      { name: 'Blog', href: '/blog', description: 'Últimas noticias y tutoriales' },
      { name: 'Comunidad', href: '/comunidad', description: 'Únete a miles de usuarios' },
      { name: 'Changelog', href: '/changelog', description: 'Nuevas funcionalidades' },
    ]
  }
}

const simpleLinks = [
  { name: 'Precios', href: '/precios' },
  { name: 'Empresa', href: '/empresa' },
]

export default function HeaderNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    // No llamar handleScroll() inmediatamente para evitar problemas de hidratación
    // El estado inicial ya está establecido en false
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(key)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay antes de cerrar
    setDropdownTimeout(timeout)
  }

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.8"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <span className="text-xl">
                <span className="font-bold text-slate-900 dark:text-white">Infra</span>
                <span className="font-bold text-emerald-500">UX</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {/* Dropdown Menus */}
            {Object.entries(navigation).map(([key, section]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-x-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2"
                >
                  {section.name}
                  <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                {activeDropdown === key && (
                  <div
                    className="absolute left-1/2 z-10 pt-2 w-80 -translate-x-1/2 transform transition-all duration-200 ease-out"
                  >
                    <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-700/50">
                      <div className="p-4">
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group flex gap-x-4 rounded-lg p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div>
                              <p className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                {item.name}
                              </p>
                              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Simple Links */}
            {simpleLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Link
              href="https://app.infraux.com/login"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="https://app.infraux.com/register"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Prueba Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-200/50 dark:sm:ring-slate-700/50 lg:hidden transform transition-transform duration-300 ease-out">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.8"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xl">
                  <span className="font-bold text-slate-900 dark:text-white">Infra</span>
                  <span className="font-bold text-emerald-500">UX</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-200 dark:divide-slate-700">
                <div className="space-y-2 py-6">
                  {Object.entries(navigation).map(([key, section]) => (
                    <div key={key} className="mb-4">
                      <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {section.name}
                      </p>
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-base font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                  {simpleLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 text-base font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Link
                    href="https://app.infraux.com/login"
                    className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2.5 text-center text-base font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    href="https://app.infraux.com/register"
                    className="block w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-2.5 text-center text-base font-semibold text-white shadow-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Prueba Gratis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}