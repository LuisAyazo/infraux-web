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
  description: 'Descubre cómo InfraUX está transformando la forma en que equipos de todo el mundo gestionan su infraestructura cloud. Lee casos de éxito reales.',
  keywords: ['testimonios InfraUX', 'casos de éxito', 'opiniones clientes', 'reviews InfraUX', 'experiencias usuarios'],
  openGraph: {
    title: 'Testimonios - Clientes satisfechos con InfraUX',
    description: 'Lee las experiencias de equipos que han transformado su gestión de infraestructura con InfraUX.',
    url: 'https://infraux.com/testimonios',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonios - InfraUX',
    description: 'Casos de éxito de equipos usando InfraUX',
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
    content: "InfraUX transformó completamente nuestra forma de trabajar. Pasamos de 3 semanas a 3 días para configurar nuevos ambientes. La visualización nos ayuda a entender mejor nuestra arquitectura y a detectar problemas antes de que ocurran.",
    author: {
      name: "Carlos Mendoza",
      role: "DevOps Lead",
      company: "TechStartup Colombia",
      image: "/testimonials/carlos.jpg"
    },
    metrics: {
      timeReduction: "85%",
      costSavings: "40%",
      teamProductivity: "3x"
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
      costReduction: "35%",
      deploymentSpeed: "5x",
      errorReduction: "90%"
    },
    industry: "E-commerce",
    companySize: "100-500",
    rating: 5,
    featured: true
  },
  {
    id: 3,
    content: "La colaboración en tiempo real cambió todo. Ahora nuestros equipos en México, Colombia y Argentina trabajan en la misma infraestructura sin conflictos. Es como Google Docs pero para infraestructura cloud.",
    author: {
      name: "Miguel Torres",
      role: "Platform Engineer",
      company: "Global Logistics Inc",
      image: "/testimonials/miguel.jpg"
    },
    metrics: {
      collaborationImprovement: "100%",
      deploymentErrors: "-80%",
      timeToMarket: "2x faster"
    },
    industry: "Logistics",
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
      adoptionTime: "1 semana",
      teamParticipation: "+200%",
      documentationTime: "-95%"
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
      supportResponseTime: "< 30 min",
      featureRequests: "3 implementadas",
      uptime: "99.99%"
    },
    industry: "Media",
    companySize: "50-100",
    rating: 5,
    featured: false
  },
  {
    id: 6,
    content: "Empezamos con el plan gratuito para probar. En 2 días ya estábamos convencidos. La curva de aprendizaje es mínima y el ROI fue evidente desde el primer mes. Mejor inversión del año.",
    author: {
      name: "Sofia Chen",
      role: "Engineering Manager",
      company: "AI Solutions Lab",
      image: "/testimonials/sofia.jpg"
    },
    metrics: {
      roi: "300% en 6 meses",
      learningCurve: "2 días",
      infrastructureCost: "-45%"
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
  "FinTech", "E-commerce", "HealthTech", "EdTech", "Logistics", 
  "Media", "Gaming", "SaaS", "Enterprise", "Startups"
]

export default function TestimoniosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-6">
                <StarIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Casos de éxito reales
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Equipos que confían en
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  InfraUX todos los días
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Descubre cómo empresas de todos los tamaños están transformando
                su gestión de infraestructura cloud con InfraUX
              </p>
              
              <div className="flex items-center justify-center gap-8 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarSolid key={i} className="h-6 w-6 text-yellow-400" />
                  ))}
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white">
                  4.9/5 basado en 500+ reviews
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Testimonios destacados
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {testimonials.filter(t => t.featured).map((testimonial) => (
                <div key={testimonial.id} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarSolid key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full" />
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.author.role} en {testimonial.author.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                    {Object.entries(testimonial.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                          {value}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200">
                      {testimonial.industry}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                      {testimonial.companySize} empleados
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Más testimonios de clientes satisfechos
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.filter(t => !t.featured).map((testimonial) => (
                <div key={testimonial.id} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarSolid key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-700 dark:text-slate-300 mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white text-sm">
                        {testimonial.author.name}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {testimonial.author.role}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Confianza en todas las industrias
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                InfraUX es la elección de empresas líderes en diversos sectores
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <div key={industry} className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                  <GlobeAltIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-medium text-slate-900 dark:text-white">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Únete a miles de equipos satisfechos
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Comienza tu prueba gratuita hoy y descubre por qué tantas empresas
              confían en InfraUX para su infraestructura cloud
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Empezar prueba gratuita
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/casos-de-uso"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-700 text-white font-semibold rounded-full hover:bg-indigo-800 transition-colors"
              >
                Ver casos de uso
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>Setup en 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <RocketLaunchIcon className="h-5 w-5" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}
