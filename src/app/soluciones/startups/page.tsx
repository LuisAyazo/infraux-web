import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  RocketLaunchIcon,
  CurrencyDollarIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  CreditCardIcon,
  ChartBarIcon,
  BeakerIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'InfraUX para Startups | Infraestructura que Escala Contigo',
  description: 'Solución de infraestructura cloud diseñada para startups. Empieza gratis, escala sin límites. Sin sorpresas en costos.',
  keywords: ['startups', 'infraestructura startup', 'cloud para startups', 'escalar infraestructura', 'aws startup'],
  openGraph: {
    title: 'InfraUX para Startups',
    description: 'La infraestructura que crece con tu startup',
    url: 'https://infraux.com/soluciones/startups',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
}

const startupBenefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Empieza Gratis',
    description: 'Plan gratuito generoso para que puedas validar tu idea sin costos iniciales.',
    highlight: 'Sin tarjeta de crédito'
  },
  {
    icon: BoltIcon,
    title: 'Lanza en Minutos',
    description: 'De la idea al deployment en menos de 10 minutos. Sin configuraciones complejas.',
    highlight: 'Setup instantáneo'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Escala Sin Límites',
    description: 'Arquitectura que crece contigo. De 10 a 10 millones de usuarios sin cambiar nada.',
    highlight: 'Auto-scaling incluido'
  },
  {
    icon: CreditCardIcon,
    title: 'Costos Predecibles',
    description: 'Alertas de costos y límites configurables. Nunca más sorpresas en la factura.',
    highlight: 'Control total'
  }
]

const startupFeatures = [
  {
    category: 'Desarrollo Rápido',
    icon: RocketLaunchIcon,
    features: [
      'Templates pre-configurados para apps comunes',
      'Ambientes dev/staging/prod automáticos',
      'CI/CD configurado desde el día 1',
      'Preview environments para cada PR'
    ]
  },
  {
    category: 'Optimización de Costos',
    icon: ChartBarIcon,
    features: [
      'Recomendaciones automáticas de ahorro',
      'Apagado automático de recursos no usados',
      'Alertas de costos en tiempo real',
      'Reportes detallados de gastos'
    ]
  },
  {
    category: 'Seguridad Incluida',
    icon: ShieldCheckIcon,
    features: [
      'SSL/TLS automático',
      'Backups diarios incluidos',
      'Monitoreo 24/7',
      'Cumplimiento SOC2 ready'
    ]
  }
]

const successStories = [
  {
    company: 'TechStart',
    logo: '🚀',
    quote: 'Pasamos de 0 a 100k usuarios en 3 meses. InfraUX escaló perfectamente sin que tuviéramos que tocar nada.',
    author: 'María Chen',
    role: 'CTO & Co-founder',
    metric: '100k usuarios',
    achievement: 'en 3 meses'
  },
  {
    company: 'FinanceApp',
    logo: '💰',
    quote: 'Redujimos nuestros costos de infraestructura en 70% con las optimizaciones automáticas de InfraUX.',
    author: 'Carlos Ruiz',
    role: 'Founder',
    metric: '70%',
    achievement: 'reducción de costos'
  },
  {
    company: 'EduTech',
    logo: '📚',
    quote: 'Lanzamos en 3 países diferentes en una semana. Multi-region fue tan fácil como un clic.',
    author: 'Ana López',
    role: 'Head of Engineering',
    metric: '3 países',
    achievement: 'en 1 semana'
  }
]

const pricingTiers = [
  {
    name: 'Hobby',
    price: '$0',
    description: 'Perfecto para proyectos personales y MVPs',
    features: [
      '1 proyecto',
      '10k requests/mes',
      'SSL automático',
      'Soporte comunidad'
    ],
    cta: 'Empezar gratis',
    highlighted: false
  },
  {
    name: 'Startup',
    price: '$49',
    description: 'Todo lo que necesitas para lanzar y crecer',
    features: [
      '5 proyectos',
      '1M requests/mes',
      'Auto-scaling',
      'Soporte prioritario',
      'Ambientes ilimitados',
      'CI/CD incluido'
    ],
    cta: 'Prueba gratis 14 días',
    highlighted: true
  },
  {
    name: 'Scale',
    price: '$299',
    description: 'Para startups en crecimiento acelerado',
    features: [
      'Proyectos ilimitados',
      'Requests ilimitados',
      'Multi-region',
      'SLA 99.9%',
      'Soporte dedicado',
      'Consultoría mensual'
    ],
    cta: 'Contactar ventas',
    highlighted: false
  }
]

export default function StartupsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/20" />
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
                <RocketLaunchIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Para Startups
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                La infraestructura que
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                  crece con tu startup
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Empieza gratis, escala sin límites. InfraUX se adapta a cada etapa 
                de tu startup, desde el MVP hasta el unicornio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <SparklesIcon className="h-5 w-5" />
                  Empezar gratis ahora
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Ver planes
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
              
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                Sin tarjeta de crédito • Setup en 2 minutos • Cancela cuando quieras
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Diseñado para startups ambiciosas
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Todo lo que necesitas para moverte rápido sin sacrificar calidad
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {startupBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {benefit.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircleIcon className="h-4 w-4" />
                      {benefit.highlight}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Todo incluido desde el día 1
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                No pierdas tiempo configurando, enfócate en tu producto
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {startupFeatures.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.category} className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {category.category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Startups que confían en InfraUX
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Historias reales de crecimiento acelerado
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <div key={story.company} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{story.logo}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">
                        {story.company}
                      </h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                          {story.metric}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400">
                          {story.achievement}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-slate-700 dark:text-slate-300 mb-4">
                    "{story.quote}"
                  </blockquote>
                  
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {story.author}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {story.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Precios que crecen contigo
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Empieza gratis, escala cuando lo necesites
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-8 ${
                    tier.highlighted
                      ? 'bg-gradient-to-br from-indigo-600 to-emerald-600 text-white shadow-2xl scale-105'
                      : 'bg-white dark:bg-slate-800 shadow-lg'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Más popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      tier.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}>
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-4xl font-bold ${
                        tier.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                      }`}>
                        {tier.price}
                      </span>
                      {tier.price !== '$0' && (
                        <span className={tier.highlighted ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'}>
                          /mes
                        </span>
                      )}
                    </div>
                    <p className={`mt-2 ${
                      tier.highlighted ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'
                    }`}>
                      {tier.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircleIcon className={`h-5 w-5 flex-shrink-0 ${
                          tier.highlighted ? 'text-emerald-300' : 'text-emerald-600 dark:text-emerald-400'
                        }`} />
                        <span className={tier.highlighted ? 'text-white' : 'text-slate-700 dark:text-slate-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/register"
                    className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                      tier.highlighted
                        ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                        : 'bg-gradient-to-r from-indigo-600 to-emerald-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                ¿Necesitas algo especial? {' '}
                <Link href="/contacto" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                  Hablemos
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Startup Program */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
              <BeakerIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl font-bold mb-4">
                Programa InfraUX para Startups
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Si tu startup tiene menos de 2 años y has levantado menos de $2M, 
                califica para nuestro programa especial con hasta $10,000 en créditos.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold mb-2">$10k</div>
                  <p className="text-indigo-100">en créditos</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold mb-2">6 meses</div>
                  <p className="text-indigo-100">de soporte premium</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold mb-2">1-on-1</div>
                  <p className="text-indigo-100">mentoría técnica</p>
                </div>
              </div>
              
              <Link
                href="/startup-program"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors"
              >
                Aplicar al programa
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Tu infraestructura no debería frenar tu crecimiento
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Únete a cientos de startups que están construyendo el futuro con InfraUX
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Empezar gratis
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/demos/startup-setup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Ver demo de 5 min
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>Setup en 2 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCardIcon className="h-5 w-5" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <UserGroupIcon className="h-5 w-5" />
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