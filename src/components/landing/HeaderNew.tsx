'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { usePostHog } from '@/hooks/usePostHog'
import { useIsClient } from '@/hooks/useIsClient'
import { useLanguage, useTranslatedRoute } from '@/contexts/LanguageContext'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
// import GitHubStarsButton from './GitHubStarsButton'

export default function HeaderNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const { trackLinkClick, trackEvent } = usePostHog()
  const { language, setLanguage, t } = useLanguage()
  const isClient = useIsClient()
  
  // Use a safe default for SSR
  const currentLang = isClient ? language : 'es'

  const editorRoute = useTranslatedRoute('/producto/editor');
  const iacRoute = useTranslatedRoute('/producto/iac');
  const deploymentRoute = useTranslatedRoute('/producto/deployment');
  const collaborationRoute = useTranslatedRoute('/producto/colaboracion');
  const startupsRoute = useTranslatedRoute('/soluciones/startups');
  const enterprisesRoute = useTranslatedRoute('/soluciones/empresas');
  const devopsRoute = useTranslatedRoute('/soluciones/devops');
  const multiCloudRoute = useTranslatedRoute('/soluciones/multi-cloud');
  const documentationRoute = useTranslatedRoute('/documentacion');
  const blogRoute = useTranslatedRoute('/blog');
  const communityRoute = useTranslatedRoute('/community');
  const changelogRoute = useTranslatedRoute('/changelog');
  const pricingRoute = useTranslatedRoute('/pricing');
  const openSourceRoute = useTranslatedRoute('/open-source');
  const selfHostingRoute = useTranslatedRoute('/self-hosting');
  const companyRoute = useTranslatedRoute('/empresa');
  const loginRoute = useTranslatedRoute('/login');
  const integrationsRoute = useTranslatedRoute('/producto/integraciones');
  const securityRoute = useTranslatedRoute('/producto/seguridad');
  const tutorialsRoute = useTranslatedRoute('/tutoriales');
  const apiRoute = useTranslatedRoute('/api');
  const successStoriesRoute = useTranslatedRoute('/casos-exito');
  const careersRoute = useTranslatedRoute('/carreras');
  const partnersRoute = useTranslatedRoute('/partners');
  const pressRoute = useTranslatedRoute('/prensa');
  const communityEditionRoute = useTranslatedRoute('/community-edition');

  // Navegación simplificada
  const navigation = {
    producto: {
      name: currentLang === 'es' ? 'Producto' : 'Product',
      items: [
        {
          name: currentLang === 'es' ? 'Editor Visual' : 'Visual Editor',
          href: editorRoute,
          description: currentLang === 'es' ? 'Diseña infraestructura sin código' : 'Design infrastructure without code'
        },
        {
          name: currentLang === 'es' ? 'Generación IaC' : 'IaC Generation',
          href: iacRoute,
          description: currentLang === 'es' ? 'Terraform, Pulumi, CloudFormation' : 'Terraform, Pulumi, CloudFormation'
        },
        {
          name: currentLang === 'es' ? 'Deployment' : 'Deployment',
          href: deploymentRoute,
          description: currentLang === 'es' ? 'CI/CD visual y automatizado' : 'Visual and automated CI/CD'
        },
        {
          name: currentLang === 'es' ? 'Integraciones' : 'Integrations',
          href: integrationsRoute,
          description: currentLang === 'es' ? 'Conecta tus herramientas favoritas' : 'Connect your favorite tools'
        },
      ]
    },
    soluciones: {
      name: currentLang === 'es' ? 'Soluciones' : 'Solutions',
      items: [
        {
          name: currentLang === 'es' ? 'Para Startups' : 'For Startups',
          href: startupsRoute,
          description: currentLang === 'es' ? 'Escala rápido sin deuda técnica' : 'Scale fast without technical debt'
        },
        {
          name: currentLang === 'es' ? 'Para Empresas' : 'For Enterprises',
          href: enterprisesRoute,
          description: currentLang === 'es' ? 'Gobierna tu infraestructura' : 'Govern your infrastructure'
        },
        {
          name: currentLang === 'es' ? 'Multi-Cloud' : 'Multi-Cloud',
          href: multiCloudRoute,
          description: currentLang === 'es' ? 'AWS, GCP y Azure unificados' : 'Unified AWS, GCP and Azure'
        },
      ]
    },
    recursos: {
      name: currentLang === 'es' ? 'Recursos' : 'Resources',
      items: [
        {
          name: currentLang === 'es' ? 'Documentación' : 'Documentation',
          href: documentationRoute,
          description: currentLang === 'es' ? 'Guías y referencias completas' : 'Complete guides and references'
        },
        {
          name: currentLang === 'es' ? 'Comunidad' : 'Community',
          href: communityRoute,
          description: currentLang === 'es'
            ? 'Únete a nuestra comunidad global'
            : 'Join our global community'
        },
        {
          name: currentLang === 'es' ? 'Blog' : 'Blog',
          href: blogRoute,
          description: currentLang === 'es' ? 'Últimas noticias y tutoriales' : 'Latest news and tutorials'
        },
        {
          name: currentLang === 'es' ? 'Tutoriales' : 'Tutorials',
          href: tutorialsRoute,
          description: currentLang === 'es' ? 'Aprende a dominar InfraUX' : 'Learn to master InfraUX'
        },
      ]
    },
  }


  useEffect(() => {
    if (!isClient) return
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    // Check initial scroll position after mount
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

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

  const handleLanguageChange = (newLang: 'es' | 'en') => {
    setLanguage(newLang)
    trackEvent('language_switch', { from: language, to: newLang })
  }

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-white border-b border-slate-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-1.5 group">
              <span className="text-xl">
                <span className="font-bold text-[#374151]">Infra</span>
                <span className="font-bold text-emerald-500">UX</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10 lg:items-center">
            {/* Dropdown Menus */}
            {Object.entries(navigation).map(([key, section]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-x-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2 px-1"
                >
                  {section.name}
                  <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                {activeDropdown === key && (
                  <div
                    className="absolute left-1/2 z-10 pt-3 w-80 -translate-x-1/2 transform transition-all duration-200 ease-out"
                  >
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-200">
                      <div className="p-2">
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group flex gap-x-4 rounded-lg p-3 hover:bg-slate-50 transition-colors"
                            onClick={() => {
                              setActiveDropdown(null)
                              trackLinkClick(`nav_${section.name}_${item.name}`, item.href, {
                                section: section.name,
                                item: item.name
                              })
                            }}
                          >
                            <div>
                              <p className="font-medium text-slate-900 group-hover:text-emerald-600 transition-colors">
                                {item.name}
                              </p>
                              <p className="mt-0.5 text-sm text-slate-600">
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

            {/* Pricing Link */}
            <Link
              href={pricingRoute}
              className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2 px-1"
              onClick={() => trackLinkClick('nav_pricing', pricingRoute)}
            >
              {currentLang === 'es' ? 'Precios' : 'Pricing'}
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
            {/* GitHub Stars Button */}
            {/* <GitHubStarsButton /> */}
            
            {/* Language Switcher */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('lang')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-x-1 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2 px-1"
              >
                <GlobeAltIcon className="h-5 w-5" />
                <span>{currentLang === 'es' ? 'ES' : 'EN'}</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'lang' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'lang' && (
                <div className="absolute right-0 z-50 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-200/50 dark:ring-slate-700/50">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange('es')}
                      className={`block w-full text-left px-4 py-2 text-sm ${currentLang === 'es' ? 'bg-slate-50 dark:bg-slate-700/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
                    >
                      Español
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`block w-full text-left px-4 py-2 text-sm ${currentLang === 'en' ? 'bg-slate-50 dark:bg-slate-700/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
                    >
                      English
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              href={loginRoute}
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 hover:shadow-lg hover:scale-105 transition-all duration-200"
              onClick={() => trackLinkClick('header_login', loginRoute)}
            >
              {currentLang === 'es' ? 'Iniciar Sesión' : 'Sign In'}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-900"
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
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-200/50 lg:hidden h-screen transition-transform duration-300 ease-out">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-1.5">
                <span className="text-xl">
                  <span className="font-bold text-[#374151]">Infra</span>
                  <span className="font-bold text-emerald-500">UX</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-900"
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
                          className="block rounded-lg px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                  {/* Pricing Link Mobile */}
                  <Link
                    href={pricingRoute}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {currentLang === 'es' ? 'Precios' : 'Pricing'}
                  </Link>
                </div>
                <div className="py-6 space-y-3">
                  {/* Language Switcher Mobile */}
                  <div className="px-3">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Idioma
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          handleLanguageChange('es')
                          setMobileMenuOpen(false)
                        }}
                        className={`flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium ${currentLang === 'es' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-900'}`}
                      >
                        ES
                      </button>
                      <button
                        onClick={() => {
                          handleLanguageChange('en')
                          setMobileMenuOpen(false)
                        }}
                        className={`flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium ${currentLang === 'en' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-900'}`}
                      >
                        EN
                      </button>
                    </div>
                  </div>
                  
                  <Link
                    href={loginRoute}
                    className="block w-full rounded-full bg-emerald-500 px-3 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-emerald-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {currentLang === 'es' ? 'Iniciar Sesión' : 'Sign In'}
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
