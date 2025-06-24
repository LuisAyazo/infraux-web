import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import Image from 'next/image'
import { 
  StarIcon,
  ArrowRightIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Testimonios | Lo que dicen nuestros clientes sobre InfraUX',
  description: 'Descubre cómo InfraUX está transformando la forma en que equipos de todo el mundo gestionan su infraestructura cloud. Lee historias de éxito reales.',
  keywords: ['testimonios InfraUX', 'historias de éxito', 'reseñas de clientes', 'opiniones InfraUX', 'experiencias de usuarios'],
  openGraph: {
    title: 'Testimonios - Clientes satisfechos de InfraUX',
    description: 'Lee experiencias de equipos que han transformado su gestión de infraestructura con InfraUX.',
    url: 'https://infraux.com/testimonios',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonios - InfraUX',
    description: 'Historias de éxito de equipos usando InfraUX',
  },
  alternates: {
    canonical: 'https://infraux.com/testimonios',
    languages: {
      'es': 'https://infraux.com/testimonios',
      'en': 'https://infraux.com/testimonials'
    }
  },
}

const testimonials = [
  {
    id: 1,
    content: "InfraUX transformó completamente nuestra forma de trabajar. Pasamos de 3 semanas a 3 días para configurar nuevos entornos. La visualización nos ayuda a entender mejor nuestra arquitectura y detectar problemas antes de que ocurran.",
    author: {
      name: "Carlos Mendoza",
      role: "DevOps Lead",
      company: "TechStartup Colombia",
      image: "/testimonials/carlos.jpg"
    },
    metrics: {
      reduccionTiempo: "85%",
      ahorroCostos: "40%",
      productividadEquipo: "3x"
    },
    industry: "FinTech",
    companySize: "50-100",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    content: "Como CTO, necesitaba una herramienta que permitiera a todo mi equipo entender y contribuir a nuestra infraestructura. InfraUX no solo cumplió esa necesidad, sino que redujo nuestros costos cloud en un 35% gracias a su análisis en tiempo real.",
    author: {
      name: "Ana García",
      role: "CTO",
      company: "E-commerce Solutions",
      image: "/testimonials/ana.jpg"
    },
    metrics: {
      reduccionCostos: "35%",
      velocidadDespliegue: "5x",
      reduccionErrores: "90%"
    },
    industry: "E-commerce",
    companySize: "100-500",
    rating: 5,
    featured: true
  },
  {
    id: 3,
    content: "La colaboración en tiempo real cambió todo. Ahora nuestros equipos en México, Colombia y Argentina trabajan sobre la misma infraestructura sin conflictos. Es como Google Docs pero para infraestructura cloud.",
    author: {
      name: "Miguel Torres",
      role: "Platform Engineer",
      company: "Global Logistics Inc",
      image: "/testimonials/miguel.jpg"
    },
    metrics: {
      mejoraColaboracion: "100%",
      erroresDespliegue: "-80%",
      tiempoMercado: "2x más rápido"
    },
    industry: "Logística",
    companySize: "500-1000",
    rating: 5,
    featured: false
  },
  {
    id: 4,
    content: "Migramos de Terraform puro a InfraUX + Terraform. No tuvimos que cambiar nada de nuestro código existente, pero ahora todos en el equipo pueden proponer cambios visualmente. La adopción fue inmediata.",
    author: {
      name: "Laura Jiménez",
      role: "Infrastructure Manager",
      company: "HealthTech Innovations",
      image: "/testimonials/laura.jpg"
    },
    metrics: {
      tiempoAdopcion: "1 semana",
      participacionEquipo: "+200%",
      tiempoDocumentacion: "-95%"
    },
    industry: "HealthTech",
    companySize: "100-500",
    rating: 5,
    featured: true
  },
  {
    id: 5,
    content: "El soporte es excepcional. Cada vez que tenemos una pregunta, el equipo responde en minutos. Han implementado varias de nuestras sugerencias. Se nota que realmente escuchan a sus usuarios.",
    author: {
      name: "Roberto Silva",
      role: "Senior DevOps",
      company: "Media Streaming Co",
      image: "/testimonials/roberto.jpg"
    },
    metrics: {
      tiempoRespuestaSoporte: "< 30 min",
      solicitudesImplementadas: "3 features",
      disponibilidad: "99.99%"
    },
    industry: "Media",
    companySize: "50-100",
    rating: 5,
    featured: false
  },
  {
    id: 6,
    content: "Empezamos con el plan gratuito para probarlo. En 2 días estábamos convencidos. La curva de aprendizaje es mínima y el ROI fue evidente desde el primer mes. La mejor inversión del año.",
    author: {
      name: "Sofia Chen",
      role: "Engineering Manager",
      company: "AI Solutions Lab",
      image: "/testimonials/sofia.jpg"
    },
    metrics: {
      roi: "300% en 6 meses",
      curvaAprendizaje: "2 días",
      costoInfraestructura: "-45%"
    },
    industry: "AI/ML",
    companySize: "10-50",
    rating: 5,
    featured: false
  }
]

const stats = [
  { label: "Empresas activas", value: "2,500+", icon: BuildingOfficeIcon },
  { label: "Usuarios satisfechos", value: "15,000+", icon: UserGroupIcon },
  { label: "Ahorro promedio", value: "40%", icon: ChartBarIcon },
  { label: "Uptime garantizado", value: "99.99%", icon: ShieldCheckIcon }
]

const industries = [
  "FinTech", "E-commerce", "HealthTech", "EdTech", "Logística", 
  "Media", "Gaming", "SaaS", "Enterprise", "Startups"
]

export default function TestimoniosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-black dark:via-black dark:to-emerald-950/20" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-200 dark:text-slate-800" opacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium border border-slate-200 dark:border-slate-800 mb-8 fade-in">
                <StarIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Historias de éxito reales
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tight fade-in-up" style={{ animationDelay: '0.1s' }}>
                Equipos que confían en
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mt-2">
                  InfraUX cada día
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                Descubre cómo empresas de todos los tamaños están transformando
                su gestión de infraestructura cloud con InfraUX
              </p>
              
              <div className="flex items-center justify-center gap-8 mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarSolid key={i} className="h-6 w-6 text-yellow-400" />
                  ))}
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                  4.9/5 basado en 500+ reseñas
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                    <Icon className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                    <div className="text-4xl font-black text-slate-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl lg:text-5xl font-black text-center text-slate-900 dark:text-white mb-16 fade-in">
              Testimonios destacados
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {testimonials.filter(t => t.featured).map((testimonial, index) => (
                <div key={testimonial.id} className="glass-premium rounded-3xl p-10 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarSolid key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-14 w-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full shadow-lg" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.author.role} en {testimonial.author.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
                    {Object.entries(testimonial.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                          {value}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-8">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200">
                      {testimonial.industry}
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      {testimonial.companySize} empleados
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950/50 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-4xl lg:text-5xl font-black text-center text-slate-900 dark:text-white mb-16 fade-in">
              Más testimonios de clientes satisfechos
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.filter(t => !t.featured).map((testimonial, index) => (
                <div key={testimonial.id} className="glass-premium rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover-lift-premium transition-all duration-300 fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarSolid key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white text-sm">
                        {testimonial.author.name}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {testimonial.author.role}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-6">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 fade-in">
                Confianza en todas las industrias
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
                InfraUX es la elección de empresas líderes en diversos sectores
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <div key={industry} className="inline-flex items-center gap-2 px-6 py-3 glass-premium rounded-full border border-slate-200 dark:border-slate-800 fade-in-up" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                  <GlobeAltIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-medium text-slate-900 dark:text-white">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-16 text-center text-white shadow-premium-lg">
                <h2 className="text-4xl lg:text-5xl font-black mb-6">
                  Únete a miles de equipos satisfechos
                </h2>
                <p className="text-xl text-emerald-50 mb-10 font-medium max-w-2xl mx-auto">
                  Comienza tu prueba gratuita hoy y descubre por qué tantas empresas
                  confían en InfraUX para su infraestructura cloud
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/registro"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors shadow-lg"
                  >
                    Comenzar prueba gratuita
                    <ArrowRightIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    href="/casos-de-uso"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-700 text-white font-semibold rounded-full hover:bg-emerald-800 transition-colors"
                  >
                    Ver casos de uso
                  </Link>
                </div>
                
                <div className="mt-10 flex items-center justify-center gap-8 text-white/90">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    <span>Sin tarjeta de crédito</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5" />
                    <span>Configuración en 5 minutos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RocketLaunchIcon className="h-5 w-5" />
                    <span>Soporte 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}
