'use client'

import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  NewspaperIcon,
  ArrowDownTrayIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export default function PressClient() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/20 dark:from-black dark:via-slate-950 dark:to-purple-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <NewspaperIcon className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {t('press.badge')}
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                {t('press.title')}
                <span className="block gradient-text-purple">
                  {t('press.subtitle')}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                {t('press.description')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  {t('press.resources_title')}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  {t('press.resources_description')}
                </p>
                
                <div className="space-y-4">
                  <a
                    href="/press-kit.zip"
                    className="flex items-center gap-4 p-6 glass-premium rounded-xl hover:shadow-premium-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <ArrowDownTrayIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {t('press.press_kit_title')}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {t('press.press_kit_desc')}
                      </p>
                    </div>
                  </a>
                  
                  <a
                    href="/brand-guidelines.pdf"
                    className="flex items-center gap-4 p-6 glass-premium rounded-xl hover:shadow-premium-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <NewspaperIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {t('press.brand_guidelines_title')}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {t('press.brand_guidelines_desc')}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  {t('press.contact_title')}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  {t('press.contact_description')}
                </p>
                
                <div className="p-8 glass-premium rounded-2xl">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                        {t('press.media_contact')}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        press@infraux.com
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                        {t('press.general_contact')}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        hello@infraux.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {t('press.cta_title')}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
              {t('press.cta_description')}
            </p>
            <a
              href="mailto:press@infraux.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              {t('press.contact_button')}
              <EnvelopeIcon className="h-6 w-6" />
            </a>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}
