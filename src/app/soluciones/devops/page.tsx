import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import { 
  CogIcon,
  CommandLineIcon,
  ArrowPathIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  CloudArrowUpIcon,
  BeakerIcon,
  ShieldCheckIcon,
  ClockIcon,
  CpuChipIcon,
  ServerStackIcon,
  CodeBracketIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'InfraUX para DevOps | Automatización Total de Infraestructura',
  description: 'Plataforma DevOps completa. CI/CD, IaC, monitoreo y automatización en un solo lugar. Acelera tu pipeline 10x.',
  keywords: ['devops', 'ci/cd', 'automatización', 'infrastructure as code', 'pipeline', 'kubernetes'],
  openGraph: {
    title: 'InfraUX para DevOps',
    description: 'La plataforma DevOps que tu equipo necesita',
    url: 'https://infraux.com/soluciones/devops',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
}

const devopsFeatures = [
  {
    icon: ArrowPathIcon,
    title: 'CI/CD Integrado',
    description: 'Pipelines visuales con integración nativa para GitHub, GitLab y Bitbucket.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CodeBracketIcon,
    title: 'GitOps Nativo',
    description: 'Tu repositorio Git como fuente de verdad. Cambios automáticos con cada commit.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Observabilidad Total',
    description: 'Métricas, logs y traces en un solo dashboard. Alertas inteligentes incluidas.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BoltIcon,
    title: 'Automatización Extrema',
    description: 'Desde el commit hasta producción sin intervención manual. Zero-touch deployment.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: BeakerIcon,
    title: 'Testing Automatizado',
    description: 'Tests de infraestructura, seguridad y performance en cada deployment.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security by Design',
    description: 'Escaneo de vulnerabilidades, secrets management y compliance automático.',
    color: 'from-pink-500 to-rose-500'
  }
]

const devopsMetrics = [
  {
    metric: '10x',
    label: 'Más deployments',
    description: 'por día'
  },
  {
    metric: '90%',
    label: 'Menos tiempo',
    description: 'en tareas manuales'
  },
  {
    metric: '0',
    label: 'Downtime',
    description: 'en deployments'
  },
  {
    metric: '24/7',
    label: 'Monitoreo',
    description: 'automático'
  }
]

const pipelineStages = [
  {
    name: 'Code',
    icon: CodeBracketIcon,
    tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    description: 'Control de versiones integrado'
  },
  {
    name: 'Build',
    icon: CogIcon,
    tools: ['Docker', 'Buildpacks', 'Kaniko'],
    description: 'Build automático y optimizado'
  },
  {
    name: 'Test',
    icon: BeakerIcon,
    tools: ['Jest', 'Cypress', 'Terraform Test'],
    description: 'Testing multi-nivel'
  },
  {
    name: 'Deploy',
    icon: CloudArrowUpIcon,
    tools: ['Kubernetes', 'ECS', 'Lambda'],
    description: 'Deploy a cualquier target'
  },
  {
    name: 'Monitor',
    icon: ChartBarIcon,
    tools: ['Prometheus', 'Grafana', 'DataDog'],
    description: 'Observabilidad completa'
  }
]

const devopsTools = [
  { name: 'Terraform', logo: '🔧', category: 'IaC' },
  { name: 'Kubernetes', logo: '⚓', category: 'Orchestration' },
  { name: 'Docker', logo: '🐳', category: 'Containers' },
  { name: 'Jenkins', logo: '🤖', category: 'CI/CD' },
  { name: 'Prometheus', logo: '📊', category: 'Monitoring' },
  { name: 'Ansible', logo: '🔄', category: 'Configuration' },
  { name: 'ArgoCD', logo: '🚀', category: 'GitOps' },
  { name: 'Vault', logo: '🔐', category: 'Secrets' }
]

export default function DevOpsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section - Premium Style */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <CogIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  DevOps Platform
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                DevOps sin fricciones
                <span className="block gradient-text-emerald mt-2">
                  Resultados exponenciales
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Automatiza todo tu pipeline de infraestructura. Desde el código hasta 
                producción en minutos, no días. La plataforma DevOps que acelera tu delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/registro"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  <BoltIcon className="h-6 w-6" />
                  Automatizar ahora
                </Link>
                <Link
                  href="/demos/devops-pipeline"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Ver pipeline en acción
                  <ArrowRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Resultados que hablan por sí solos
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Métricas reales de equipos DevOps usando InfraUX
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {devopsMetrics.map((item, index) => (
                <div key={item.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-6xl font-black gradient-text-emerald mb-3">
                    {item.metric}
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.label}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline Visualization - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Pipeline visual end-to-end
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Visualiza y controla todo tu flujo DevOps en un solo lugar
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-10 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-8 mb-10">
                  {pipelineStages.map((stage, index) => {
                    const Icon = stage.icon;
                    return (
                      <div key={stage.name} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="text-center">
                          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-5 mb-4 shadow-premium">
                            <Icon className="h-10 w-10 text-white" />
                          </div>
                          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                            {stage.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            {stage.description}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {stage.tools.map((tool) => (
                              <span key={tool} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full font-medium">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        {index < pipelineStages.length - 1 && (
                          <ArrowRightIcon className="h-8 w-8 text-slate-300 dark:text-slate-700 mx-6 hidden lg:block" />
                        )}
                      </div>
                    );
                  })}
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Pipeline Status
                    </h4>
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-bold rounded-full">
                      Healthy
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">Último deployment</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">hace 12 min</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">Success rate</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">99.8%</p>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">Avg. time</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">4.2 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Todo lo que un equipo DevOps necesita
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Herramientas integradas para acelerar tu delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devopsFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title} 
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tools Integration - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Integrado con tus herramientas favoritas
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                No cambies tu stack, mejóralo con InfraUX
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {devopsTools.map((tool, index) => (
                <div 
                  key={tool.name} 
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 text-center shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 border border-slate-200 dark:border-slate-800 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-4xl mb-3">{tool.logo}</div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {tool.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {tool.category}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                ¿No ves tu herramienta? {' '}
                <Link href="/integraciones" className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                  Ver todas las integraciones
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* GitOps Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
                  <CodeBracketIcon className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    GitOps Ready
                  </span>
                </div>
                
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Git como fuente única de verdad
                </h2>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium">
                  Adopta GitOps sin complicaciones. Cada cambio en tu repositorio 
                  se refleja automáticamente en tu infraestructura.
                </p>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Sincronización automática
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Push to deploy. Tan simple como eso.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Rollback con git revert
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Vuelve a cualquier estado anterior instantáneamente.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Multi-environment branching
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Dev, staging y prod con estrategias de branching.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <Link
                  href="/recursos/guia-gitops"
                  className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                >
                  Leer guía de GitOps
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
                <div className="relative bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-800">
                  <div className="flex items-center gap-2 px-6 py-4 bg-slate-800 border-b border-slate-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-sm text-slate-400 font-mono">terminal</span>
                  </div>
                  <div className="p-8 font-mono text-sm">
                    <div className="text-slate-400">$ git add infrastructure/</div>
                    <div className="text-slate-400">$ git commit -m "Scale to 10 replicas"</div>
                    <div className="text-slate-400">$ git push origin main</div>
                    <div className="text-emerald-400 mt-6">
                      ✓ Deployment triggered<br />
                      ✓ Building infrastructure...<br />
                      ✓ Applying changes...<br />
                      ✓ Deployment successful!
                    </div>
                    <div className="text-slate-400 mt-6">
                      Time elapsed: 2m 34s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-16 text-white shadow-premium-lg">
                <div className="max-w-4xl mx-auto">
                  <CommandLineIcon className="h-20 w-20 mx-auto mb-8 text-white/90" />
                  
                  <blockquote className="text-3xl font-medium text-center mb-10">
                    "InfraUX transformó completamente nuestro proceso DevOps. 
                    Pasamos de deployments semanales a múltiples deployments diarios, 
                    con total confianza y sin aumentar el equipo."
                  </blockquote>
                  
                  <div className="text-center mb-10">
                    <p className="font-bold text-2xl">Miguel Fernández</p>
                    <p className="text-emerald-100 text-lg">Head of DevOps, TechCorp</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                      <div className="text-4xl font-black mb-3">50x</div>
                      <p className="text-emerald-100 font-medium">más deployments</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                      <div className="text-4xl font-black mb-3">0</div>
                      <p className="text-emerald-100 font-medium">rollbacks fallidos</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                      <div className="text-4xl font-black mb-3">80%</div>
                      <p className="text-emerald-100 font-medium">menos incidentes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Acelera tu pipeline DevOps hoy
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Únete a los equipos que despliegan con confianza todos los días
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Empezar gratis
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Hablar con un experto
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-8 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span className="font-medium">Setup en 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <ServerStackIcon className="h-5 w-5" />
                <span className="font-medium">Sin cambiar tu stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CpuChipIcon className="h-5 w-5" />
                <span className="font-medium">100% automatizado</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}