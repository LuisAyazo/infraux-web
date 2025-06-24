import { Metadata } from 'next'
import Link from 'next/link'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { CalendarIcon, ClockIcon, ArrowRightIcon, DocumentTextIcon, SparklesIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Blog | InfraUX - Noticias y Actualizaciones',
  description: 'Mantente al día con las últimas noticias, actualizaciones de producto y mejores prácticas de InfraUX.',
}

// Posts del blog basados en el roadmap real
const blogPosts = [
  {
    id: 'migracion-supabase-completada',
    title: 'Migración Exitosa a Supabase: Mayor Velocidad y Escalabilidad',
    excerpt: 'Completamos la migración de MongoDB a PostgreSQL con Supabase, logrando mejoras significativas en rendimiento y nuevas capacidades en tiempo real.',
    date: '2025-01-15',
    readTime: '5 min',
    category: 'Infraestructura',
    author: {
      name: 'Elena Rivas',
      role: 'Lead DevOps Architect',
      avatar: '/avatars/elena.jpg'
    },
    tags: ['Supabase', 'PostgreSQL', 'Performance', 'Backend'],
    featured: true
  },
  {
    id: 'nuevo-modulo-costos-aws',
    title: 'Lanzamiento del Módulo de Gestión de Costos AWS',
    excerpt: 'Presentamos nuestro nuevo módulo de análisis y optimización de costos para AWS, con recomendaciones inteligentes y proyecciones en tiempo real.',
    date: '2025-02-28',
    readTime: '7 min',
    category: 'Producto',
    author: {
      name: 'Javier Morales',
      role: 'Product Manager',
      avatar: '/avatars/javier.jpg'
    },
    tags: ['AWS', 'Costos', 'Optimización', 'FinOps'],
    featured: true
  },
  {
    id: 'sistema-deployment-visual',
    title: 'Revolucionando los Deployments: Sistema Visual sin YAML',
    excerpt: 'Nuestro nuevo sistema de deployment permite desplegar aplicaciones con drag & drop, eliminando la necesidad de escribir archivos YAML complejos.',
    date: '2025-03-20',
    readTime: '8 min',
    category: 'Producto',
    author: {
      name: 'Sofia Chen',
      role: 'Engineering Manager',
      avatar: '/avatars/sofia.jpg'
    },
    tags: ['Deployment', 'CI/CD', 'Visual', 'Innovation'],
    featured: false
  },
  {
    id: 'integracion-kubernetes-ecs',
    title: 'Soporte Completo para Kubernetes y Amazon ECS',
    excerpt: 'Ampliamos nuestras capacidades de deployment con adaptadores nativos para Kubernetes y ECS, manteniendo nuestra filosofía visual.',
    date: '2025-04-10',
    readTime: '6 min',
    category: 'Integraciones',
    author: {
      name: 'Carlos Mendoza',
      role: 'Senior Cloud Engineer',
      avatar: '/avatars/carlos.jpg'
    },
    tags: ['Kubernetes', 'ECS', 'Containers', 'Cloud'],
    featured: false
  },
  {
    id: 'ai-assistant-beta',
    title: 'Presentamos el Asistente IA: Tu Copiloto en la Nube',
    excerpt: 'Nuestro nuevo asistente con IA te ayuda a optimizar costos, sugerir arquitecturas y automatizar tareas repetitivas en tu infraestructura.',
    date: '2025-05-05',
    readTime: '10 min',
    category: 'IA',
    author: {
      name: 'Ana García',
      role: 'AI/ML Lead',
      avatar: '/avatars/ana.jpg'
    },
    tags: ['AI', 'Automatización', 'Machine Learning', 'Innovation'],
    featured: true
  },
  {
    id: 'marketplace-templates',
    title: 'Lanzamiento del Marketplace: Comparte y Reutiliza Templates',
    excerpt: 'La comunidad ahora puede compartir y monetizar sus templates de infraestructura en nuestro nuevo marketplace integrado.',
    date: '2025-05-25',
    readTime: '4 min',
    category: 'Comunidad',
    author: {
      name: 'Miguel Torres',
      role: 'Community Manager',
      avatar: '/avatars/miguel.jpg'
    },
    tags: ['Marketplace', 'Templates', 'Community', 'Monetization'],
    featured: false
  },
  {
    id: 'enterprise-sso-compliance',
    title: 'InfraUX Enterprise: SSO, SAML y Compliance Avanzado',
    excerpt: 'Anunciamos el lanzamiento de InfraUX Enterprise con autenticación SSO/SAML, auditoría avanzada y certificaciones de compliance.',
    date: '2025-06-01',
    readTime: '6 min',
    category: 'Enterprise',
    author: {
      name: 'Laura Jiménez',
      role: 'VP of Enterprise Sales',
      avatar: '/avatars/laura.jpg'
    },
    tags: ['Enterprise', 'Security', 'SSO', 'Compliance'],
    featured: false
  },
  {
    id: 'performance-100k-diagramas',
    title: 'Escalando a 100K+ Diagramas: Nuestra Historia de Optimización',
    excerpt: 'Cómo optimizamos InfraUX para manejar más de 100,000 diagramas con tiempos de carga sub-segundo usando particionamiento y caché inteligente.',
    date: '2025-06-15',
    readTime: '12 min',
    category: 'Ingeniería',
    author: {
      name: 'Roberto Silva',
      role: 'Principal Engineer',
      avatar: '/avatars/roberto.jpg'
    },
    tags: ['Performance', 'Scalability', 'Engineering', 'PostgreSQL'],
    featured: false
  }
]

// Posts más antiguos (antes de noviembre)
const olderPosts = [
  {
    id: 'lanzamiento-beta-publica',
    title: 'InfraUX Abre su Beta Pública: El Futuro de la Infraestructura Visual',
    excerpt: 'Después de meses de desarrollo, abrimos las puertas de nuestra beta pública. Únete a los primeros usuarios en revolucionar la gestión de infraestructura.',
    date: '2024-10-15',
    readTime: '3 min',
    category: 'Anuncios',
    author: {
      name: 'Equipo InfraUX',
      role: 'Founders',
      avatar: '/avatars/team.jpg'
    },
    tags: ['Beta', 'Launch', 'Announcement'],
    featured: false
  },
  {
    id: 'seed-funding-announcement',
    title: 'InfraUX Cierra Ronda Seed de $2.5M para Democratizar la Infraestructura Cloud',
    excerpt: 'Anunciamos nuestra ronda seed liderada por importantes VCs para acelerar el desarrollo y expansión de nuestra plataforma.',
    date: '2024-09-01',
    readTime: '4 min',
    category: 'Empresa',
    author: {
      name: 'CEO InfraUX',
      role: 'Leadership',
      avatar: '/avatars/ceo.jpg'
    },
    tags: ['Funding', 'Investment', 'Growth'],
    featured: false
  }
]

function BlogPostCard({ post, featured = false }: { post: typeof blogPosts[0], featured?: boolean }) {
  const baseCardClasses = "group relative hover-lift-premium";
  const featuredClasses = featured ? "md:col-span-2 lg:col-span-1" : "";
  
  return (
    <article className={`${baseCardClasses} ${featuredClasses}`}>
      <div className={`h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden ${
        featured
          ? 'shadow-premium-lg border-2 border-emerald-500/20'
          : 'shadow-premium border border-slate-200 dark:border-slate-800'
      }`}>
        {featured && (
          <div className="absolute top-6 right-6 z-10">
            <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300">
              ⭐ Destacado
            </span>
          </div>
        )}
        
        <div className="p-8">
          {/* Categoría y fecha */}
          <div className="flex items-center gap-4 text-sm mb-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
              post.category === 'Producto'
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                : post.category === 'Infraestructura'
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                : post.category === 'IA'
                ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            }`}>
              {post.category}
            </span>
            <time dateTime={post.date} className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <CalendarIcon className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          
          {/* Título */}
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            <Link href={`/blog/${post.id}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {post.title}
            </Link>
          </h3>
          
          {/* Excerpt */}
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          
          {/* Meta info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{post.author.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <ClockIcon className="h-5 w-5" />
              {post.readTime}
            </div>
          </div>
          
          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section - Premium Style */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <DocumentTextIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Blog oficial de InfraUX
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Noticias y
                <span className="block gradient-text-emerald">Actualizaciones</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium animate-fade-in-up animation-delay-200">
                Descubre las últimas novedades, actualizaciones de producto y mejores prácticas
                para gestionar tu infraestructura cloud de manera visual y eficiente.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Posts */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">
              Artículos Destacados
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <div key={post.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in-up">
                  <BlogPostCard post={post} featured={true} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Recent Posts */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">
              Publicaciones Recientes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <div key={post.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in-up">
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Older Posts */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-10">
              Archivo
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {olderPosts.map((post, index) => (
                <div key={post.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in-up">
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter CTA - Premium Style */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
              <SparklesIcon className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">
                Newsletter exclusivo
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              No te pierdas ninguna actualización
            </h2>
            <p className="text-xl lg:text-2xl text-emerald-50 mb-10 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter y recibe las últimas noticias sobre InfraUX directamente en tu inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-white/50 font-medium shadow-lg"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Suscribirse
              </button>
            </form>
            
            <p className="mt-6 text-sm text-emerald-100">
              Sin spam. Puedes cancelar cuando quieras.
            </p>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}