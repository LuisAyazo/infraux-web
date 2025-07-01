'use client'

import Link from 'next/link'
import BrandName from '@/components/BrandName'
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import { useLanguage, useTranslatedRoute } from '@/contexts/LanguageContext'

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/infraux',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/infraux',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/infraux',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@infraux',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

export default function FooterNew() {
  const [currentYear, setCurrentYear] = useState<number>(2025)
  const { language, t } = useLanguage()
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  // Navigation with dynamic translations
  const navigation = {
    producto: [
      { name: t('nav.editor_visual'), href: useTranslatedRoute('/producto/editor') },
      { name: t('nav.generacion_iac'), href: useTranslatedRoute('/producto/iac') },
      { name: t('nav.deployment'), href: useTranslatedRoute('/producto/deployment') },
      { name: t('integrations.title'), href: useTranslatedRoute('/producto/integraciones') },
      { name: t('security.title'), href: useTranslatedRoute('/producto/seguridad') },
    ],
    soluciones: [
      { name: t('nav.para_startups'), href: useTranslatedRoute('/soluciones/startups') },
      { name: t('nav.para_empresas'), href: useTranslatedRoute('/soluciones/empresas') },
      { name: t('nav.para_devops'), href: useTranslatedRoute('/soluciones/devops') },
      { name: t('nav.multi_cloud'), href: useTranslatedRoute('/soluciones/multi-cloud') },
      { name: t('nav.casos_exito'), href: useTranslatedRoute('/casos-exito') },
    ],
    recursos: [
      { name: t('nav.documentacion'), href: useTranslatedRoute('/documentacion') },
      { name: t('nav.blog'), href: useTranslatedRoute('/blog') },
      { name: t('nav.roadmap'), href: useTranslatedRoute('/roadmap') },
      { name: t('nav.tutoriales'), href: useTranslatedRoute('/tutoriales') },
      { name: t('nav.api'), href: useTranslatedRoute('/api') },
      { name: t('nav.changelog'), href: useTranslatedRoute('/changelog') },
    ],
    empresa: [
      { name: t('nav.sobre_nosotros'), href: useTranslatedRoute('/empresa') },
      { name: t('nav.carreras'), href: useTranslatedRoute('/carreras') },
      { name: t('nav.contacto'), href: useTranslatedRoute('/contacto') },
      { name: t('nav.partners'), href: useTranslatedRoute('/partners') },
      { name: t('nav.prensa'), href: useTranslatedRoute('/prensa') },
    ],
    legal: [
      { name: t('nav.terminos'), href: useTranslatedRoute('/terms-and-conditions') },
      { name: t('nav.privacidad'), href: useTranslatedRoute('/privacy-policy') },
      { name: t('nav.reembolso'), href: useTranslatedRoute('/refund-policy') },
      { name: t('nav.seguridad_legal'), href: useTranslatedRoute('/seguridad') },
      { name: t('nav.sla'), href: useTranslatedRoute('/sla') },
    ],
  }
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-xl">
                <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" />
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t('nav.producto')}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.producto.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t('nav.soluciones')}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.soluciones.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t('nav.recursos')}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.recursos.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t('nav.empresa')}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.empresa.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-slate-200 dark:border-slate-700 pt-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {t('footer.newsletter_title')}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {t('footer.newsletter_desc')}
              </p>
            </div>
            <form className="mt-4 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2 text-base text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder={t('footer.newsletter_placeholder')}
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-base font-medium text-white hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {t('footer.newsletter_cta')}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-600 dark:text-slate-400 md:order-1 md:mt-0">
              &copy; {currentYear} <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" />, Inc. {t('footer.rights_reserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}