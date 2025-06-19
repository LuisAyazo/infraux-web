import Link from 'next/link'
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const latestPosts = [
  {
    id: 'enterprise-sso-compliance',
    title: 'InfraUX Enterprise: SSO, SAML y Compliance Avanzado',
    excerpt: 'Anunciamos el lanzamiento de InfraUX Enterprise con autenticación SSO/SAML, auditoría avanzada y certificaciones de compliance.',
    date: '2025-06-01',
    category: 'Enterprise',
    readTime: '6 min'
  },
  {
    id: 'ai-assistant-beta',
    title: 'Presentamos el Asistente IA: Tu Copiloto en la Nube',
    excerpt: 'Nuestro nuevo asistente con IA te ayuda a optimizar costos, sugerir arquitecturas y automatizar tareas repetitivas.',
    date: '2025-05-05',
    category: 'IA',
    readTime: '10 min'
  },
  {
    id: 'sistema-deployment-visual',
    title: 'Revolucionando los Deployments: Sistema Visual sin YAML',
    excerpt: 'Nuestro nuevo sistema de deployment permite desplegar aplicaciones con drag & drop, sin escribir YAML.',
    date: '2025-03-20',
    category: 'Producto',
    readTime: '8 min'
  }
]

export default function LatestBlogPosts() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Últimas Novedades del Blog
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mantente al día con las últimas actualizaciones, mejoras y lanzamientos de InfraUX.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200">
                    {post.category}
                  </span>
                  <time dateTime={post.date} className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('es-ES', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <Link href={`/blog/${post.id}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {post.readTime} de lectura
                  </span>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                    Leer más →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Ver todos los artículos
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}