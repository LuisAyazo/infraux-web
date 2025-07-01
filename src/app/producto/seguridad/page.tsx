import { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo-config'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  KeyIcon,
  DocumentTextIcon,
  ServerIcon,
  CloudArrowUpIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  FingerPrintIcon,
  EyeSlashIcon,
  ClockIcon,
  CpuChipIcon,
  DocumentCheckIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = pageMetadata.spanish.product.security()

const securityPillars = [
  {
    icon: LockClosedIcon,
    title: 'Encriptación End-to-End',
    description: 'Todos tus datos están encriptados en tránsito y en reposo usando AES-256.',
    features: [
      'Encriptación AES-256 para datos en reposo',
      'TLS 1.3 para datos en tránsito',
      'Gestión de claves con HSM',
      'Zero-knowledge architecture'
    ]
  },
  {
    icon: FingerPrintIcon,
    title: 'Autenticación Robusta',
    description: 'Múltiples capas de seguridad para proteger el acceso a tu cuenta.',
    features: [
      'Autenticación multifactor (MFA)',
      'Single Sign-On (SSO) empresarial',
      'Biometría y llaves de seguridad',
      'Políticas de contraseñas personalizables'
    ]
  },
  {
    icon: UserGroupIcon,
    title: 'Control de Acceso Granular',
    description: 'Define exactamente quién puede ver y modificar cada recurso.',
    features: [
      'RBAC (Role-Based Access Control)',
      'Permisos a nivel de recurso',
      'Segregación de ambientes',
      'Auditoría de permisos'
    ]
  },
  {
    icon: DocumentCheckIcon,
    title: 'Auditoría Completa',
    description: 'Rastrea cada acción en tu infraestructura con logs inmutables.',
    features: [
      'Logs de auditoría inmutables',
      'Retención configurable',
      'Exportación SIEM',
      'Alertas en tiempo real'
    ]
  }
]

const certifications = [
  {
    name: 'SOC 2 Type II',
    status: 'En proceso',
    description: 'Auditoría independiente de nuestros controles de seguridad',
    icon: '🛡️',
    date: 'Q3 2025'
  },
  {
    name: 'ISO 27001',
    status: 'Planeado',
    description: 'Certificación internacional de gestión de seguridad',
    icon: '🌐',
    date: 'Q1 2026'
  },
  {
    name: 'GDPR Compliant',
    status: 'Activo',
    description: 'Cumplimiento total con regulaciones europeas de privacidad',
    icon: '🇪🇺',
    date: 'Desde 2024'
  },
  {
    name: 'HIPAA Ready',
    status: 'Disponible',
    description: 'Preparado para cargas de trabajo del sector salud',
    icon: '🏥',
    date: 'Enterprise'
  }
]

const securityFeatures = [
  {
    category: 'Protección de Datos',
    items: [
      'Backups automáticos diarios',
      'Replicación multi-región',
      'Point-in-time recovery',
      'Disaster recovery plan'
    ]
  },
  {
    category: 'Seguridad de Red',
    items: [
      'WAF (Web Application Firewall)',
      'DDoS protection',
      'IP whitelisting',
      'VPN site-to-site'
    ]
  },
  {
    category: 'Gestión de Secretos',
    items: [
      'Vault integration',
      'Rotación automática de credenciales',
      'Secretos encriptados',
      'Gestión de certificados SSL'
    ]
  },
  {
    category: 'Monitoreo de Seguridad',
    items: [
      'Detección de anomalías',
      'Vulnerability scanning',
      'Alertas de seguridad',
      'Security dashboard'
    ]
  }
]

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-black dark:via-slate-950 dark:to-blue-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Confianza y Seguridad
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Seguridad por
                <span className="block gradient-text-blue">
                  Diseño
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                En InfraUX, la seguridad no es una ocurrencia tardía, es la base sobre la que construimos todo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs/security"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  Ver Documentación de Seguridad
                  <DocumentTextIcon className="h-6 w-6" />
                </Link>
                <Link
                  href="/security-center"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Centro de Seguridad
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security Pillars */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Nuestros Pilares de Seguridad
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Protección multicapa para tu infraestructura crítica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {securityPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={pillar.title}
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                              {pillar.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                        
                        <ul className="space-y-3">
                          {pillar.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircleIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                              <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Certificaciones y Compliance
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Cumplimos con los estándares más exigentes de la industria.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name}
                  className="relative group hover-lift-premium animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 text-center">
                    <div className="text-5xl mb-4">{cert.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                      cert.status === 'Activo' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : cert.status === 'En proceso'
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                        : cert.status === 'Disponible'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      {cert.status}
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">
                      {cert.description}
                    </p>
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-500">
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Características de Seguridad
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Todo lo que necesitas para mantener tu infraestructura segura.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, index) => (
                <div 
                  key={feature.category}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {feature.category}
                  </h3>
                  <ul className="space-y-3">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Dashboard Preview */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Visibilidad total de tu postura de seguridad
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Nuestro dashboard de seguridad te permite monitorear en tiempo real el estado de seguridad de tu infraestructura.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      <BellAlertIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        Alertas en tiempo real
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Recibe notificaciones instantáneas de eventos de seguridad críticos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      <DocumentCheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        Reportes de compliance
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Genera reportes detallados para auditorías y cumplimiento normativo.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                      <CpuChipIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        Análisis automatizado
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        IA que detecta patrones anómalos y previene amenazas antes de que ocurran.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl" />
                <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 border border-slate-200 dark:border-slate-800">
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center">
                    <ShieldCheckIcon className="h-32 w-32 text-slate-300 dark:text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bug Bounty Program */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl" />
              
              <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl p-16 text-white text-center shadow-premium-lg">
                <KeyIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                <h2 className="text-4xl font-bold mb-6">
                  Programa de Bug Bounty
                </h2>
                <p className="text-xl lg:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto font-medium">
                  La seguridad es un esfuerzo comunitario. Si has encontrado una vulnerabilidad, te agradecemos que nos lo comuniques de forma responsable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/security/bug-bounty"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Reportar Vulnerabilidad
                    <ArrowRightIcon className="h-6 w-6" />
                  </Link>
                  <Link
                    href="/docs/security/responsible-disclosure"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-2xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Política de Divulgación
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              ¿Tienes preguntas sobre seguridad?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Nuestro equipo de seguridad está disponible para responder todas tus dudas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto?departamento=seguridad"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Contactar al equipo de seguridad
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/docs/security"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Ver documentación
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}