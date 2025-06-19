import { Metadata } from 'next'
import Link from 'next/link'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

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
  const baseCardClasses = "group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1";
  const featuredClasses = featured ? "md:col-span-2 lg:col-span-1" : "";
  
  return (
    <article className={`${baseCardClasses} ${featuredClasses} ${featured ? 'border-2 border-indigo-500/20' : 'border border-slate-200 dark:border-slate-700'}`}>
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200">
            Destacado
          </span>
        </div>
      )}
      
      <div className="p-6">
        {/* Categoría */}
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
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
        </div>
        
        {/* Título */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          <Link href={`/blog/${post.id}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {post.title}
          </Link>
        </h3>
        
        {/* Excerpt */}
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Meta info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{post.author.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{post.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <ClockIcon className="h-4 w-4" />
            {post.readTime}
          </div>
        </div>
        
        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20 py-16 sm:py-24">
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Blog de InfraUX
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Descubre las últimas novedades, actualizaciones de producto y mejores prácticas 
                para gestionar tu infraestructura cloud de manera visual y eficiente.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Posts */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Artículos Destacados
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map(post => (
                <BlogPostCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Recent Posts */}
        <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Publicaciones Recientes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Older Posts */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Archivo
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {olderPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              No te pierdas ninguna actualización
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Suscríbete a nuestro newsletter y recibe las últimas noticias sobre InfraUX directamente en tu inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}