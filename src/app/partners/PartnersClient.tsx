'use client'

import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  BuildingStorefrontIcon,
  HandRaisedIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function PartnersClient() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <BuildingStorefrontIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {t('partners.badge')}
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                {t('partners.title')}
                <span className="block gradient-text-emerald">
                  {t('partners.subtitle')}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                {t('partners.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                <a
                  href="#partner-types"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
                >
                  {t('partners.cta_primary')}
                  <ArrowRightIcon className="h-5 w-5" />
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-lg rounded-full border-2 border-slate-200 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-emerald-400 shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
                >
                  {t('partners.cta_secondary')}
                  <HandRaisedIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="partner-types" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {t('partners.types_title')}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {t('partners.types_description')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 glass-premium rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BuildingStorefrontIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {t('partners.reseller_title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('partners.reseller_desc')}
                </p>
              </div>
              
              <div className="text-center p-8 glass-premium rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HandRaisedIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {t('partners.consultant_title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('partners.consultant_desc')}
                </p>
              </div>
              
              <div className="text-center p-8 glass-premium rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRightIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {t('partners.integrator_title')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('partners.integrator_desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t('partners.benefits_title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
              {t('partners.benefits_description')}
            </p>
            <a
              href="mailto:partners@infraux.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              {t('partners.contact_button')}
              <ArrowRightIcon className="h-6 w-6" />
            </a>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}
