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
  CodeBracketIcon
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
                <CogIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  DevOps Platform
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                DevOps sin fricciones,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                  resultados exponenciales
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Automatiza todo tu pipeline de infraestructura. Desde el código hasta 
                producción en minutos, no días. La plataforma DevOps que acelera tu delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <BoltIcon className="h-5 w-5" />
                  Automatizar ahora
                </Link>
                <Link
                  href="/demos/devops-pipeline"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Ver pipeline en acción
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Resultados que hablan por sí solos
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Métricas reales de equipos DevOps usando InfraUX
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {devopsMetrics.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600 mb-2">
                    {item.metric}
                  </div>
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.label}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline Visualization */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Pipeline visual end-to-end
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Visualiza y controla todo tu flujo DevOps en un solo lugar
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                {pipelineStages.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <div key={stage.name} className="flex items-center">
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-2xl p-4 mb-3">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                          {stage.name}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                          {stage.description}
                        </p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {stage.tools.map((tool) => (
                            <span key={tool} className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      {index < pipelineStages.length - 1 && (
                        <ArrowRightIcon className="h-6 w-6 text-slate-400 mx-4 hidden lg:block" />
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Pipeline Status
                  </h4>
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm rounded-full">
                    Healthy
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Último deployment</p>
                    <p className="font-semibold text-slate-900 dark:text-white">hace 12 min</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Success rate</p>
                    <p className="font-semibold text-slate-900 dark:text-white">99.8%</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Avg. time</p>
                    <p className="font-semibold text-slate-900 dark:text-white">4.2 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Todo lo que un equipo DevOps necesita
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Herramientas integradas para acelerar tu delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devopsFeatures.map((feature) => {
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

        {/* Tools Integration */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Integrado con tus herramientas favoritas
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                No cambies tu stack, mejóralo con InfraUX
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {devopsTools.map((tool) => (
                <div key={tool.name} className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">{tool.logo}</div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {tool.name}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {tool.category}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                ¿No ves tu herramienta? {' '}
                <Link href="/integraciones" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                  Ver todas las integraciones
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* GitOps Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
                  <CodeBracketIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                    GitOps Ready
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Git como fuente única de verdad
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                  Adopta GitOps sin complicaciones. Cada cambio en tu repositorio 
                  se refleja automáticamente en tu infraestructura.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
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
                      <h3 className="font-semibold text-slate-900 dark:text-white">
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
                      <h3 className="font-semibold text-slate-900 dark:text-white">
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
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                >
                  Leer guía de GitOps
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-6 py-4 bg-slate-800 border-b border-slate-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-sm text-slate-400 font-mono">terminal</span>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="text-slate-400">$ git add infrastructure/</div>
                    <div className="text-slate-400">$ git commit -m "Scale to 10 replicas"</div>
                    <div className="text-slate-400">$ git push origin main</div>
                    <div className="text-emerald-400 mt-4">
                      ✓ Deployment triggered<br />
                      ✓ Building infrastructure...<br />
                      ✓ Applying changes...<br />
                      ✓ Deployment successful!
                    </div>
                    <div className="text-slate-400 mt-4">
                      Time elapsed: 2m 34s
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-12 text-white">
              <div className="max-w-4xl mx-auto">
                <CommandLineIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
                
                <blockquote className="text-2xl font-medium text-center mb-8">
                  "InfraUX transformó completamente nuestro proceso DevOps. 
                  Pasamos de deployments semanales a múltiples deployments diarios, 
                  con total confianza y sin aumentar el equipo."
                </blockquote>
                
                <div className="text-center mb-8">
                  <p className="font-semibold text-xl">Miguel Fernández</p>
                  <p className="text-indigo-100">Head of DevOps, TechCorp</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-2">50x</div>
                    <p className="text-indigo-100">más deployments</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-2">0</div>
                    <p className="text-indigo-100">rollbacks fallidos</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold mb-2">80%</div>
                    <p className="text-indigo-100">menos incidentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Acelera tu pipeline DevOps hoy
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Únete a los equipos que despliegan con confianza todos los días
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
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Hablar con un experto
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span>Setup en 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <ServerStackIcon className="h-5 w-5" />
                <span>Sin cambiar tu stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CpuChipIcon className="h-5 w-5" />
                <span>100% automatizado</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}