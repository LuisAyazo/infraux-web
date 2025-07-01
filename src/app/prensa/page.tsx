import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { 
  NewspaperIcon,
  ArrowDownTrayIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Prensa | InfraUX',
  description: 'Recursos para medios de comunicación, comunicados de prensa y cómo contactar a nuestro equipo de relaciones públicas.',
  keywords: ['prensa', 'medios', 'noticias', 'comunicados de prensa', 'relaciones públicas'],
  openGraph: {
    title: 'Sala de Prensa de InfraUX',
    description: 'Encuentra nuestros últimos comunicados de prensa y recursos para medios.',
    url: 'https://infraux.com/prensa',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prensa - InfraUX',
    description: 'Recursos para medios y periodistas.',
  },
  alternates: {
    canonical: 'https://infraux.com/prensa',
    languages: {
      'es': 'https://infraux.com/prensa',
      'en': 'https://infraux.com/press'
    }
  },
}

export default function PressPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-rose-50/20 dark:from-black dark:via-slate-950 dark:to-rose-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <NewspaperIcon className="h-5 w-5 text-rose-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Sala de Prensa
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                InfraUX en los
                <span className="block gradient-text-rose">
                  Medios
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Encuentra nuestros últimos anuncios, comunicados de prensa y recursos para periodistas y medios de comunicación.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Comunicados de Prensa
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Una lista de los comunicados de prensa más recientes irá aquí.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Kit de Prensa
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
                Descarga nuestro kit de prensa que incluye logos, imágenes de producto y biografías de los fundadores.
              </p>
              <a
                href="/press-kit.zip"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Descargar Kit de Prensa
                <ArrowDownTrayIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Contacto para Medios
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
              Para consultas de prensa, por favor contacta a nuestro equipo de relaciones públicas.
            </p>
            <a
              href="mailto:prensa@infraux.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover-lift-premium transition-all duration-300"
            >
              Contactar a Prensa
              <EnvelopeIcon className="h-6 w-6" />
            </a>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}