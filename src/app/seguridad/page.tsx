import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { 
  ShieldCheckIcon,
  DocumentTextIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = pageMetadata.legal.securitySpanish()

export default function SecurityCenterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-black dark:via-slate-950 dark:to-blue-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Seguridad y Confianza
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Centro de
                <span className="block gradient-text-blue">
                  Seguridad
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Información detallada sobre nuestras prácticas, políticas y certificaciones de seguridad para proteger tus datos y tu infraestructura.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <h2>Políticas de Seguridad</h2>
              <p>Contenido detallado sobre nuestras políticas de seguridad irá aquí.</p>
              
              <h2>Reporte de Vulnerabilidades</h2>
              <p>Información sobre cómo reportar vulnerabilidades de forma responsable irá aquí.</p>
              
              <h2>Cumplimiento (Compliance)</h2>
              <p>Detalles sobre nuestro estado de cumplimiento con SOC2, ISO 27001, etc. irán aquí.</p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              ¿Tienes preguntas sobre seguridad?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
              Nuestro equipo de seguridad está disponible para responder tus preguntas.
            </p>
            <a
              href="mailto:seguridad@infraux.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg rounded-full shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300"
            >
              Contactar a Seguridad
              <EnvelopeIcon className="h-6 w-6" />
            </a>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}