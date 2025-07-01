import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { 
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = pageMetadata.spanish.business.careers()

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/20 dark:from-black dark:via-slate-950 dark:to-cyan-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <UserGroupIcon className="h-5 w-5 text-cyan-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Únete al Equipo
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Construye el futuro
                <span className="block gradient-text-cyan">
                  con nosotros
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Buscamos personas talentosas y apasionadas para unirse a nuestra misión de hacer la infraestructura cloud simple y accesible para todos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Nuestra Cultura
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Contenido sobre la cultura de la empresa (colaboración, innovación, etc.) irá aquí.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Posiciones Abiertas
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Actualmente no tenemos posiciones abiertas, pero siempre estamos interesados en conocer gente talentosa. ¡Envíanos tu CV!
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              ¿No ves tu rol ideal?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
              Siempre estamos buscando personas excepcionales. Si crees que puedes aportar a nuestro equipo, nos encantaría saber de ti.
            </p>
            <a
              href="mailto:carreras@infraux.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              Envíanos tu CV
              <ArrowRightIcon className="h-6 w-6" />
            </a>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}