import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ServerStackIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ClockIcon,
  BriefcaseIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'InfraUX para Empresas | Infraestructura Enterprise Grade',
  description: 'Solución de infraestructura cloud para empresas. Seguridad, compliance, escalabilidad y soporte dedicado.',
  keywords: ['empresas', 'infraestructura enterprise', 'cloud empresarial', 'compliance', 'seguridad enterprise'],
  openGraph: {
    title: 'InfraUX para Empresas',
    description: 'Infraestructura cloud de nivel enterprise',
    url: 'https://infraux.com/soluciones/empresas',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
}

const enterpriseFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Seguridad Enterprise',
    description: 'Encriptación end-to-end, auditoría completa y cumplimiento de estándares internacionales.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Compliance Total',
    description: 'SOC2, ISO 27001, GDPR, HIPAA. Certificaciones y auditorías automatizadas.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: UserGroupIcon,
    title: 'Control de Acceso',
    description: 'SSO, SAML, RBAC avanzado. Integración con tu directorio activo.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ServerStackIcon,
    title: 'Alta Disponibilidad',
    description: 'SLA 99.99%, multi-region automático, disaster recovery incluido.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics Avanzado',
    description: 'Dashboards personalizados, reportes ejecutivos, predicción de costos.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: BriefcaseIcon,
    title: 'Soporte Dedicado',
    description: 'Equipo asignado, respuesta en minutos, consultoría incluida.',
    color: 'from-pink-500 to-rose-500'
  }
]

const complianceStandards = [
  { name: 'SOC 2', icon: '🔒', description: 'Type II Certified' },
  { name: 'ISO 27001', icon: '📋', description: 'Certificado' },
  { name: 'GDPR', icon: '🇪🇺', description: 'Compliant' },
  { name: 'HIPAA', icon: '🏥', description: 'Ready' },
  { name: 'PCI DSS', icon: '💳', description: 'Level 1' },
  { name: 'CCPA', icon: '🛡️', description: 'Compliant' }
]

const enterpriseClients = [
  {
    company: 'Global Bank Corp',
    industry: 'Finanzas',
    size: '50,000+ empleados',
    quote: 'InfraUX nos permitió migrar toda nuestra infraestructura legacy a la nube en 6 meses, con cero downtime.',
    author: 'Roberto Méndez',
    role: 'CTO',
    logo: '🏦',
    results: [
      '60% reducción en costos operativos',
      '99.99% uptime garantizado',
      'Compliance automático con regulaciones bancarias'
    ]
  },
  {
    company: 'MedTech Solutions',
    industry: 'Salud',
    size: '10,000+ empleados',
    quote: 'La capacidad de InfraUX para manejar datos sensibles con compliance HIPAA fue fundamental para nosotros.',
    author: 'Dra. Laura Sánchez',
    role: 'VP of Technology',
    logo: '🏥',
    results: [
      'HIPAA compliance desde día 1',
      'Escalamiento global en 3 regiones',
      'Backup automático con encriptación'
    ]
  },
  {
    company: 'Retail Giant',
    industry: 'Retail',
    size: '100,000+ empleados',
    quote: 'Manejamos Black Friday sin problemas. InfraUX escaló automáticamente para manejar 10x nuestro tráfico normal.',
    author: 'Carlos Domínguez',
    role: 'Head of Infrastructure',
    logo: '🛍️',
    results: [
      '10x capacidad en peak times',
      'Zero downtime en 2 años',
      'Multi-cloud strategy implementada'
    ]
  }
]

const enterprisePlans = [
  {
    name: 'Business',
    description: 'Para equipos en crecimiento',
    features: [
      'Hasta 100 usuarios',
      'SSO incluido',
      'Soporte prioritario 24/7',
      'SLA 99.9%',
      'Auditoría básica',
      'Backups diarios'
    ],
    cta: 'Contactar ventas'
  },
  {
    name: 'Enterprise',
    description: 'Para grandes organizaciones',
    features: [
      'Usuarios ilimitados',
      'SSO + SAML + LDAP',
      'Soporte dedicado',
      'SLA 99.99%',
      'Auditoría completa',
      'Disaster recovery',
      'Compliance automation',
      'Custom integrations'
    ],
    cta: 'Solicitar demo',
    highlighted: true
  },
  {
    name: 'Enterprise Plus',
    description: 'Soluciones a medida',
    features: [
      'Todo de Enterprise',
      'Arquitecto asignado',
      'Desarrollo custom',
      'On-premise híbrido',
      'Consultoría ilimitada',
      'Training personalizado',
      'White-label option',
      'Priority roadmap'
    ],
    cta: 'Hablar con experto'
  }
]

export default function EmpresasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-900/20" />
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-6">
                <BuildingOfficeIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Enterprise Solutions
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Infraestructura cloud de
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                  nivel enterprise
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Seguridad, compliance y escalabilidad sin compromisos. 
                La plataforma que las empresas líderes eligen para su transformación digital.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <BriefcaseIcon className="h-5 w-5" />
                  Solicitar demo empresarial
                </Link>
                <Link
                  href="/recursos/caso-estudio-enterprise"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Leer caso de estudio
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  <span>Respuesta en 15 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeAltIcon className="h-5 w-5" />
                  <span>Cobertura global</span>
                </div>
                <div className="flex items-center gap-2">
                  <CpuChipIcon className="h-5 w-5" />
                  <span>Tecnología de punta</span>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <FooterNew />
      </div>
    )
  }
                  href="/recursos/whitepaper-enterprise"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Descargar whitepaper
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">500+</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Empresas confían en nosotros</p>
              </div>
              <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">99.99%</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">SLA garantizado</p>
              </div>
              <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">24/7</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Soporte dedicado</p>
              </div>
              <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">15 min</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Tiempo de respuesta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Todo lo que tu empresa necesita
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Características enterprise-grade diseñadas para organizaciones exigentes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`h-12 w-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <LockClosedIcon className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Compliance y certificaciones
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Cumplimos con los estándares más exigentes de la industria
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceStandards.map((standard) => (
                <div key={standard.name} className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-3">{standard.icon}</div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    {standard.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Auditoría continua
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Nuestro sistema de auditoría automática garantiza el cumplimiento 
                    continuo de todas las regulaciones aplicables a tu industria.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-slate-700 dark:text-slate-300">Logs inmutables</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-slate-700 dark:text-slate-300">Reportes automáticos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-slate-700 dark:text-slate-300">Alertas de compliance</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-2xl blur-2xl opacity-20" />
                  <div className="relative bg-slate-100 dark:bg-slate-700 rounded-2xl p-8 text-center">
                    <DocumentCheckIcon className="h-24 w-24 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                      Certificación automática
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Empresas líderes confían en InfraUX
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Casos de éxito de transformación digital
              </p>
            </div>
            
            <div className="space-y-8">
              {enterpriseClients.map((client) => (
                <div key={client.company} className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-5xl">{client.logo}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            {client.company}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400">
                            {client.industry} • {client.size}
                          </p>
                        </div>
                      </div>
                      
                      <blockquote className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                        "{client.quote}"
                      </blockquote>
                      
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {client.author}
                        </div>
                        <span className="text-slate-600 dark:text-slate-400">•</span>
                        <div className="text-slate-600 dark:text-slate-400">
                          {client.role}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                        Resultados clave:
                      </h4>
                      <ul className="space-y-3">
                        {client.results.map((result) => (
                          <li key={result} className="flex items-start gap-2">
                            <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 dark:text-slate-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Plans */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Planes diseñados para empresas
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Soluciones flexibles que se adaptan a tus necesidades
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {enterprisePlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-indigo-600 to-emerald-600 text-white shadow-2xl scale-105'
                      : 'bg-white dark:bg-slate-800 shadow-lg'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Más popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className={plan.highlighted ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircleIcon className={`h-5 w-5 flex-shrink-0 ${
                          plan.highlighted ? 'text-emerald-300' : 'text-emerald-600 dark:text-emerald-400'
                        }`} />
                        <span className={plan.highlighted ? 'text-white' : 'text-slate-700 dark:text-slate-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contacto"
                    className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                      plan.highlighted
                        ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                        : 'bg-gradient-to-r from-indigo-600 to-emerald-600 text-white hover:shadow-lg'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Todos los planes incluyen:
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-slate-700 dark:text-slate-300">Onboarding personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-slate-700 dark:text-slate-300">Migración asistida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-slate-700 dark:text-slate-300">Training para tu equipo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-12 text-white">
              <div className="max-w-4xl mx-auto">
                <AcademicCapIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
                <h2 className="text-3xl font-bold text-center mb-8">
                  Implementación sin fricciones
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Discovery</h3>
                    <p className="text-sm text-indigo-100">
                      Análisis de tu infraestructura actual
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Diseño</h3>
                    <p className="text-sm text-indigo-100">
                      Arquitectura personalizada
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Migración</h3>
                    <p className="text-sm text-indigo-100">
                      Zero-downtime migration
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">4</span>
                    </div>
                    <h3 className="font-semibold mb-2">Optimización</h3>
                    <p className="text-sm text-indigo-100">
                      Mejora continua
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-xl mb-6">
                    Tiempo promedio de implementación: <strong>4-6 semanas</strong>
                  </p>
                  <Link
                    href="/recursos/guia-implementacion"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors"
                  >
                    Descargar guía de implementación
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Transforma tu infraestructura hoy
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Únete a las empresas líderes que ya confían en InfraUX
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Agendar demo personalizada
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link