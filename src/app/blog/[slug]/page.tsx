import { Metadata } from 'next'
import Link from 'next/link'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { 
  CalendarIcon, 
  ClockIcon, 
  ArrowLeftIcon,
  ShareIcon,
  BookmarkIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

// En una aplicación real, esto vendría de una base de datos o CMS
const blogPosts = {
  'migracion-supabase-completada': {
    title: 'Migración Exitosa a Supabase: Mayor Velocidad y Escalabilidad',
    excerpt: 'Completamos la migración de MongoDB a PostgreSQL con Supabase, logrando mejoras significativas en rendimiento y nuevas capacidades en tiempo real.',
    content: `
      <p>Después de meses de planificación y ejecución cuidadosa, nos complace anunciar que hemos completado exitosamente la migración de nuestra infraestructura de base de datos de MongoDB a PostgreSQL con Supabase. Esta transición marca un hito importante en nuestra evolución técnica y nos posiciona para escalar de manera más eficiente.</p>

      <h2>¿Por qué migramos a Supabase?</h2>
      
      <p>La decisión de migrar no se tomó a la ligera. Después de evaluar múltiples opciones, Supabase emergió como la solución ideal por varias razones clave:</p>

      <ul>
        <li><strong>Rendimiento Superior:</strong> Las consultas complejas ahora se ejecutan hasta 10x más rápido gracias a los índices optimizados de PostgreSQL.</li>
        <li><strong>Capacidades en Tiempo Real:</strong> Supabase nos permite ofrecer actualizaciones en tiempo real sin configuración adicional.</li>
        <li><strong>Row Level Security (RLS):</strong> Seguridad granular a nivel de fila que garantiza el aislamiento perfecto entre tenants.</li>
        <li><strong>Escalabilidad Automática:</strong> No más preocupaciones sobre sharding manual o réplicas.</li>
      </ul>

      <h2>Desafíos y Soluciones</h2>

      <p>La migración presentó varios desafíos técnicos interesantes:</p>

      <h3>1. Migración de Datos sin Downtime</h3>
      <p>Implementamos un sistema de doble escritura que mantenía ambas bases de datos sincronizadas durante la transición. Esto nos permitió migrar gradualmente sin afectar a nuestros usuarios.</p>

      <pre><code class="language-python">
# Ejemplo de nuestro sistema de doble escritura
async def save_diagram(diagram_data):
    # Escribir en MongoDB (legacy)
    await mongodb.diagrams.insert_one(diagram_data)
    
    # Escribir en Supabase (nuevo)
    await supabase.table('diagrams').insert(diagram_data)
    
    # Verificar consistencia
    await verify_data_consistency(diagram_data['id'])
      </code></pre>

      <h3>2. Optimización de Consultas</h3>
      <p>Muchas de nuestras consultas MongoDB utilizaban agregaciones complejas. Las reescribimos usando CTEs (Common Table Expressions) de PostgreSQL:</p>

      <pre><code class="language-sql">
-- Antes (MongoDB aggregation)
db.diagrams.aggregate([
  { $match: { company_id: companyId } },
  { $group: { _id: "$environment", count: { $sum: 1 } } }
])

-- Después (PostgreSQL CTE)
WITH diagram_counts AS (
  SELECT environment, COUNT(*) as count
  FROM diagrams
  WHERE company_id = $1
  GROUP BY environment
)
SELECT * FROM diagram_counts ORDER BY count DESC;
      </code></pre>

      <h2>Resultados y Métricas</h2>

      <p>Los resultados han superado nuestras expectativas:</p>

      <div class="metrics-grid">
        <div class="metric">
          <h4>Tiempo de Carga del Dashboard</h4>
          <p class="before">Antes: 3.2s</p>
          <p class="after">Después: 0.8s</p>
          <p class="improvement">75% más rápido</p>
        </div>
        <div class="metric">
          <h4>Consultas por Segundo</h4>
          <p class="before">Antes: 1,200 QPS</p>
          <p class="after">Después: 15,000 QPS</p>
          <p class="improvement">12.5x mejora</p>
        </div>
        <div class="metric">
          <h4>Costo de Infraestructura</h4>
          <p class="before">Antes: $3,500/mes</p>
          <p class="after">Después: $1,200/mes</p>
          <p class="improvement">65% reducción</p>
        </div>
      </div>

      <h2>Nuevas Capacidades Desbloqueadas</h2>

      <p>La migración no solo mejoró el rendimiento, sino que también desbloqueó nuevas funcionalidades:</p>

      <ol>
        <li><strong>Colaboración en Tiempo Real:</strong> Los cambios en diagramas ahora se sincronizan instantáneamente entre todos los usuarios.</li>
        <li><strong>Búsqueda de Texto Completo:</strong> PostgreSQL nos permite búsquedas avanzadas en español con stemming y ranking.</li>
        <li><strong>Análisis Avanzado:</strong> Las funciones de ventana de PostgreSQL facilitan análisis complejos de uso y tendencias.</li>
        <li><strong>Backups Automáticos:</strong> Supabase maneja backups point-in-time automáticamente.</li>
      </ol>

      <h2>Lecciones Aprendidas</h2>

      <p>Esta migración nos enseñó varias lecciones valiosas:</p>

      <ul>
        <li><strong>Planificación es Clave:</strong> Invertimos 2 meses en planificación antes de escribir una sola línea de código.</li>
        <li><strong>Testing Exhaustivo:</strong> Creamos más de 500 tests específicos para validar la paridad de datos.</li>
        <li><strong>Comunicación con Usuarios:</strong> Mantuvimos a nuestros usuarios informados durante todo el proceso.</li>
        <li><strong>Rollback Strategy:</strong> Siempre tuvimos un plan B listo en caso de problemas.</li>
      </ul>

      <h2>¿Qué Sigue?</h2>

      <p>Con esta base sólida, estamos emocionados por las nuevas funcionalidades que podremos construir:</p>

      <ul>
        <li>Sistema de notificaciones en tiempo real</li>
        <li>Historial de cambios con time-travel queries</li>
        <li>Analytics avanzados con dashboards personalizables</li>
        <li>API GraphQL auto-generada por Supabase</li>
      </ul>

      <p>La migración a Supabase representa más que un cambio técnico; es una inversión en el futuro de InfraUX. Estamos comprometidos a seguir mejorando nuestra plataforma para ofrecer la mejor experiencia posible a nuestros usuarios.</p>

      <p>¿Tienes preguntas sobre nuestra migración? ¡Nos encantaría escucharte! Únete a nuestra <a href="https://community.infraux.com">comunidad</a> o contáctanos directamente.</p>
    `,
    date: '2025-01-15',
    readTime: '5 min',
    category: 'Infraestructura',
    author: {
      name: 'Elena Rivas',
      role: 'Lead DevOps Architect',
      bio: 'Elena lidera la arquitectura de infraestructura en InfraUX. Con más de 10 años de experiencia en sistemas distribuidos, es apasionada por la optimización y escalabilidad.',
      avatar: '/avatars/elena.jpg',
      twitter: '@elenarivas_dev'
    },
    tags: ['Supabase', 'PostgreSQL', 'Performance', 'Backend', 'Migration'],
    relatedPosts: [
      'performance-100k-diagramas',
      'sistema-deployment-visual',
      'ai-assistant-beta'
    ]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Artículo no encontrado | InfraUX Blog',
      description: 'El artículo que buscas no existe.'
    }
  }

  return {
    title: `${post.title} | InfraUX Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
        <HeaderNew />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Artículo no encontrado
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              El artículo que buscas no existe o ha sido movido.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Volver al blog
            </Link>
          </div>
        </main>
        <FooterNew />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Article Header */}
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
              <Link href="/" className="hover:text-slate-700 dark:hover:text-slate-300">
                Inicio
              </Link>
              <ChevronRightIcon className="h-4 w-4" />
              <Link href="/blog" className="hover:text-slate-700 dark:hover:text-slate-300">
                Blog
              </Link>
              <ChevronRightIcon className="h-4 w-4" />
              <span className="text-slate-700 dark:text-slate-300">{post.category}</span>
            </nav>

            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  {post.category}
                </span>
                <time dateTime={post.date} className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
                <span className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                {post.title}
              </h1>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                {post.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between border-y border-slate-200 dark:border-slate-700 py-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{post.author.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{post.author.role}</p>
                  </div>
                </div>
                
                {/* Share Buttons */}
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <ShareIcon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <BookmarkIcon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg prose-slate dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 dark:prose-p:text-slate-300
                prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900 dark:prose-strong:text-white
                prose-code:text-indigo-600 dark:prose-code:text-indigo-400 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-700
                prose-ul:list-disc prose-ul:pl-6
                prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-slate-600 dark:prose-li:text-slate-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Sobre el autor
              </h3>
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{post.author.name}</p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">{post.author.twitter}</p>
                  <p className="text-slate-600 dark:text-slate-300">{post.author.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Artículos Relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Aquí irían las cards de posts relacionados */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Escalando a 100K+ Diagramas
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Cómo optimizamos InfraUX para manejar más de 100,000 diagramas...
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Sistema Visual sin YAML
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Nuestro nuevo sistema de deployment permite desplegar aplicaciones...
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Asistente IA Beta
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Nuestro nuevo asistente con IA te ayuda a optimizar costos...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}

// Estilos adicionales para el contenido del artículo
const articleStyles = `
  <style>
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin: 2rem 0;
    }
    
    .metric {
      text-align: center;
      padding: 1.5rem;
      background: #f8fafc;
      border-radius: 0.75rem;
      border: 1px solid #e2e8f0;
    }
    
    .dark .metric {
      background: #1e293b;
      border-color: #334155;
    }
    
    .metric h4 {
      font-size: 0.875rem;
      font-weight: 600;
      color: #64748b;
      margin-bottom: 0.5rem;
    }
    
    .dark .metric h4 {
      color: #94a3b8;
    }
    
    .metric .before {
      color: #ef4444;
      font-size: 1.125rem;
      margin-bottom: 0.25rem;
    }
    
    .metric .after {
      color: #10b981;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    
    .metric .improvement {
      color: #6366f1;
      font-size: 0.875rem;
      font-weight: 600;
    }
  </style>
`