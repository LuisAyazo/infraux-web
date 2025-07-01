'use client'

import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  DocumentChartBarIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function SlaClient() {
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
                <DocumentChartBarIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {t('sla.badge')}
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                {t('sla.title')}
                <span className="block gradient-text-emerald">
                  {t('sla.subtitle')}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                {t('sla.description')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 glass-premium rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ClockIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  99.9%
                </h3>
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  {t('sla.uptime_title')}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('sla.uptime_desc')}
                </p>
              </div>
              
              <div className="text-center p-8 glass-premium rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  24/7
                </h3>
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  {t('sla.monitoring_title')}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('sla.monitoring_desc')}
                </p>
              </div>
              
              <div className="text-center p-8 glass-premium rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DocumentChartBarIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  &lt; 2h
                </h3>
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  {t('sla.response_title')}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {t('sla.response_desc')}
                </p>
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
              <h2>{t('sla.terms_title')}</h2>
              <p>{t('sla.terms_intro')}</p>
              
              <h3>{t('sla.availability_title')}</h3>
              <p>{t('sla.availability_desc')}</p>
              
              <h3>{t('sla.maintenance_title')}</h3>
              <p>{t('sla.maintenance_desc')}</p>
              
              <h3>{t('sla.credits_title')}</h3>
              <p>{t('sla.credits_desc')}</p>
              
              <h3>{t('sla.exclusions_title')}</h3>
              <p>{t('sla.exclusions_desc')}</p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t('sla.contact_title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
              {t('sla.contact_description')}
            </p>
            <a
              href="mailto:support@infraux.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              {t('sla.contact_button')}
              <ShieldCheckIcon className="h-6 w-6" />
            </a>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}
