'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { usePostHog } from '@/hooks/usePostHog'
import { useIsClient } from '@/hooks/useIsClient'
import { useLanguage, useTranslatedRoute } from '@/contexts/LanguageContext'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function HeaderNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const { trackLinkClick, trackEvent } = usePostHog()
  const { language, setLanguage, t } = useLanguage()
  const isClient = useIsClient()

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
  const communityRoute = useTranslatedRoute('/comunidad');
  const changelogRoute = useTranslatedRoute('/changelog');
  const pricingRoute = useTranslatedRoute('/precios');
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

  // Navegación con traducciones dinámicas
  const navigation = {
    producto: {
      name: t('nav.producto'),
      items: [
        {
          name: t('nav.editor_visual'),
          href: editorRoute,
          description: t('nav.editor_visual_desc')
        },
        {
          name: t('nav.generacion_iac'),
          href: iacRoute,
          description: t('nav.generacion_iac_desc')
        },
        {
          name: t('nav.deployment'),
          href: deploymentRoute,
          description: t('nav.deployment_desc')
        },
        {
          name: t('nav.colaboracion'),
          href: collaborationRoute,
          description: t('nav.colaboracion_desc')
        },
        {
          name: t('integrations.title'),
          href: integrationsRoute,
          description: t('nav.integraciones_desc')
        },
        {
          name: t('security.title'),
          href: securityRoute,
          description: t('nav.seguridad_desc')
        },
      ]
    },
    soluciones: {
      name: t('nav.soluciones'),
      items: [
        {
          name: t('nav.para_startups'),
          href: startupsRoute,
          description: t('nav.para_startups_desc')
        },
        {
          name: t('nav.para_empresas'),
          href: enterprisesRoute,
          description: t('nav.para_empresas_desc')
        },
        {
          name: t('nav.para_devops'),
          href: devopsRoute,
          description: t('nav.para_devops_desc')
        },
        {
          name: t('nav.multi_cloud'),
          href: multiCloudRoute,
          description: t('nav.multi_cloud_desc')
        },
        {
          name: t('nav.casos_exito'),
          href: successStoriesRoute,
          description: t('nav.casos_exito_desc')
        },
      ]
    },
    recursos: {
      name: t('nav.recursos'),
      items: [
        {
          name: t('nav.documentacion'),
          href: documentationRoute,
          description: t('nav.documentacion_desc')
        },
        {
          name: t('nav.blog'),
          href: blogRoute,
          description: t('nav.blog_desc')
        },
        {
          name: t('nav.tutoriales'),
          href: tutorialsRoute,
          description: t('nav.tutoriales_desc')
        },
        {
          name: t('nav.api'),
          href: apiRoute,
          description: t('nav.api_desc')
        },
        {
          name: t('nav.roadmap'),
          href: '/roadmap',
          description: t('nav.roadmap_desc')
        },
        {
          name: t('nav.comunidad'),
          href: communityRoute,
          description: t('nav.comunidad_desc')
        },
        {
          name: t('nav.changelog'),
          href: changelogRoute,
          description: t('nav.changelog_desc')
        },
      ]
    },
    empresa: {
      name: t('nav.empresa'),
      items: [
        {
          name: t('nav.sobre_nosotros'),
          href: companyRoute,
          description: t('nav.sobre_nosotros_desc')
        },
        {
          name: t('nav.carreras'),
          href: careersRoute,
          description: t('nav.carreras_desc')
        },
        {
          name: t('nav.partners'),
          href: partnersRoute,
          description: t('nav.partners_desc')
        },
        {
          name: t('nav.prensa'),
          href: pressRoute,
          description: t('nav.prensa_desc')
        },
      ]
    }
  }

  const simpleLinks = [
    { name: t('nav.precios'), href: pricingRoute },
  ]

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
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm'
        : 'bg-white dark:bg-slate-900 border-b border-slate-200/50 dark:border-slate-700/50'
    }`}>
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
          <div className="hidden lg:flex lg:gap-x-8">
            {/* Home Link */}
            <Link
              href="/"
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2"
              onClick={() => trackLinkClick('nav_home', '/')}
            >
              {t('nav.inicio')}
            </Link>
            
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
                            onClick={() => {
                              setActiveDropdown(null)
                              trackLinkClick(`nav_${section.name}_${item.name}`, item.href, {
                                section: section.name,
                                item: item.name
                              })
                            }}
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
                onClick={() => trackLinkClick(`nav_${link.name}`, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
            {/* Language Switcher */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('lang')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-x-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors py-2"
              >
                <GlobeAltIcon className="h-5 w-5" />
                <span>{language === 'es' ? 'ES' : 'EN'}</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'lang' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'lang' && (
                <div className="absolute right-0 z-50 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-200/50 dark:ring-slate-700/50">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange('es')}
                      className={`block w-full text-left px-4 py-2 text-sm ${language === 'es' ? 'bg-slate-50 dark:bg-slate-700/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
                    >
                      Español
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-slate-50 dark:bg-slate-700/50 text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
                    >
                      English
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <Link
              href={loginRoute}
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
              onClick={() => trackLinkClick('header_login', loginRoute)}
            >
              {t('nav.iniciar_sesion')}
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
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-200/50 dark:sm:ring-slate-700/50 lg:hidden h-screen transition-transform duration-300 ease-out">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-1.5">
                <span className="text-xl">
                  <span className="font-bold text-[#374151]">Infra</span>
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
                  {/* Home Link Mobile */}
                  <Link
                    href="/"
                    className="block rounded-lg px-3 py-2 text-base font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      trackLinkClick('nav_home_mobile', '/')
                    }}
                  >
                    {t('nav.inicio')}
                  </Link>
                  
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
                        className={`flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium ${language === 'es' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}
                      >
                        ES
                      </button>
                      <button
                        onClick={() => {
                          handleLanguageChange('en')
                          setMobileMenuOpen(false)
                        }}
                        className={`flex-1 rounded-lg px-3 py-2 text-center text-sm font-medium ${language === 'en' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}
                      >
                        EN
                      </button>
                    </div>
                  </div>
                  
                  <Link
                    href={loginRoute}
                    className="block w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-2.5 text-center text-base font-semibold text-white shadow-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('nav.iniciar_sesion')}
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