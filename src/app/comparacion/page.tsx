'use client'

import Link from 'next/link'
import { CheckIcon, XMarkIcon, StarIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { plansData } from '@/components/landing/Pricing'

const comparisonFeatures = [
  { name: 'Usuarios', starter: '1', professional: 'Hasta 3', team: 'Hasta 10 (ampliable)', enterprise: 'Ilimitados' },
  { name: 'Proyectos / Compañías', starter: '1', professional: 'Hasta 5', team: 'Ilimitados', enterprise: 'Ilimitados' },
  { name: 'Diagramas por proyecto', starter: 'Hasta 3 (total)', professional: 'Hasta 10', team: 'Ilimitados', enterprise: 'Ilimitados' },
  { name: 'Ambientes por proyecto', starter: '1', professional: 'Hasta 3', team: 'Ilimitados', enterprise: 'Ilimitados' },
  { name: 'Recursos totales', starter: 'Hasta 20', professional: 'Hasta 200', team: 'Hasta 1000', enterprise: 'Ilimitados' },
  { name: 'Nubes soportadas', starter: 'AWS, GCP, Azure (limitado)', professional: 'AWS, GCP, Azure (completo)', team: 'Full Multi-cloud', enterprise: 'Multi-cloud + Híbrido' },
  { name: 'Exportar a IaC', starter: 'Terraform', professional: 'Terraform, CloudFormation', team: '+ Pulumi', enterprise: '+ YAML personalizado' },
  { name: 'Deploy directo', starter: 'Limitado (5 rec/deploy, 2x mes)', professional: 'Ilimitado', team: 'Con aprobación', enterprise: '+ Validaciones, GitOps' },
  { name: 'Despliegue Universal', starter: 'Docker, Cloud Run, ECS (limitado)', professional: 'ECS, Fargate, Docker', team: 'Kubernetes, Functions, Jobs, etc.', enterprise: 'Todo full incluyendo híbridos' },
  { name: 'Importar Infraestructura / IaC', starter: '❌', professional: 'Básica (hasta 50 recursos)', team: 'Completa', enterprise: 'Masiva (multi-cloud)' },
  { name: 'Promoción entre ambientes', starter: '❌', professional: '❌', team: 'Manual/Semi-auto', enterprise: 'Inteligente (con workflows)' },
  { name: 'Plantillas', starter: 'Básicas', professional: 'Premium', team: 'Premium + Custom', enterprise: 'Personalizadas x equipo/industria' },
  { name: 'Versionado', starter: 'Básico (últimas 3)', professional: 'Estándar (30 días)', team: 'Avanzado', enterprise: 'Profesional (historial completo)' },
  { name: 'Colaboración en equipo', starter: '❌', professional: 'Comentarios básicos', team: 'Roles/Permisos', enterprise: 'Roles avanzados, auditoría' },
  { name: 'Análisis de costos', starter: '❌', professional: 'Estimado', team: 'Con alertas', enterprise: 'Visualizaciones + simulaciones' },
  { name: 'CI/CD', starter: '❌', professional: '❌', team: 'Webhooks, GitHub/GitLab', enterprise: 'Integraciones completas CI/CD' },
  { name: 'Integraciones Empresariales (SSO, SAML, etc.)', starter: '❌', professional: '❌', team: '❌', enterprise: '✅' },
  { name: 'Soporte', starter: 'Comunidad', professional: 'Email (24h)', team: 'Prioritario (8h, chat)', enterprise: 'Dedicado 24/7, SLA, Slack privado' },
  { name: 'Capacitación & Onboarding', starter: '❌', professional: '❌', team: '❌', enterprise: 'Personalizado' },
  { name: 'Acceso a roadmap & features exclusivos', starter: '❌', professional: '❌', team: '❌', enterprise: '✅' },
]

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <Link 
            href="/#pricing" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Volver a Precios
          </Link>
          <h1 className="text-4xl font-bold mb-4">Comparativa Detallada de Planes</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Compara todas las características de nuestros planes para encontrar el que mejor se adapte a tus necesidades.
          </p>
        </div>
      </div>

      {/* Plans Overview */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plansData.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'border-electric-purple-500 bg-gradient-to-br from-electric-purple-50 to-emerald-green-50 dark:from-electric-purple-900/30 dark:to-emerald-green-900/30 shadow-lg'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 hover:border-electric-purple-400'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <StarIcon className="h-4 w-4" />
                    Más Popular
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <div className="text-3xl mb-2">{plan.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {plan.price.monthly === 0 ? 'Gratis' : 
                   plan.price.monthly === null ? plan.customPrice || 'Custom' : 
                   `$${plan.price.monthly}/mes`}
                </div>
                <button
                  className={`w-full px-4 py-2 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-electric-purple-600 to-emerald-green-500 text-white hover:shadow-lg'
                      : 'bg-electric-purple-600 text-white hover:bg-electric-purple-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-electric-purple-500 to-emerald-green-500">
            <h2 className="text-2xl font-bold text-white text-center">Comparativa Detallada de Características</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white min-w-[250px] sticky left-0 bg-gray-50 dark:bg-gray-700/50 z-10">
                    Características
                  </th>
                  {plansData.map((plan) => (
                    <th
                      key={plan.id}
                      className={`px-6 py-4 text-center text-sm font-semibold min-w-[200px] ${
                        plan.popular
                          ? 'text-electric-purple-600 dark:text-electric-purple-400 bg-electric-purple-50 dark:bg-electric-purple-900/20'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-2xl">{plan.emoji}</span>
                        <span className="font-bold">{plan.name}</span>
                        <div className="text-lg font-bold">
                          {plan.price.monthly === 0 ? 'Gratis' : 
                           plan.price.monthly === null ? plan.customPrice || 'Custom' : 
                           `$${plan.price.monthly}/mes`}
                        </div>
                        {plan.popular && (
                          <div className="flex items-center gap-1 text-electric-purple-500">
                            <StarIcon className="h-4 w-4" />
                            <span className="text-xs">Más Popular</span>
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {comparisonFeatures.map((feature, idx) => (
                  <tr
                    key={feature.name}
                    className={`${
                      idx % 2 === 0 ? 'bg-white dark:bg-gray-800/50' : 'bg-gray-50 dark:bg-gray-700/30'
                    } hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-inherit z-10">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      <div className={`${feature.starter === '❌' ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`}>
                        {feature.starter === '❌' ? (
                          <XMarkIcon className="h-5 w-5 mx-auto" />
                        ) : feature.starter === '✅' ? (
                          <CheckIcon className="h-5 w-5 mx-auto text-emerald-500" />
                        ) : (
                          feature.starter
                        )}
                      </div>
                    </td>
                    <td className={`px-6 py-4 text-sm text-center ${
                      plansData[1].popular ? 'bg-electric-purple-50/50 dark:bg-electric-purple-900/10' : ''
                    }`}>
                      <div className={`${feature.professional === '❌' ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`}>
                        {feature.professional === '❌' ? (
                          <XMarkIcon className="h-5 w-5 mx-auto" />
                        ) : feature.professional === '✅' ? (
                          <CheckIcon className="h-5 w-5 mx-auto text-emerald-500" />
                        ) : (
                          feature.professional
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      <div className={`${feature.team === '❌' ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`}>
                        {feature.team === '❌' ? (
                          <XMarkIcon className="h-5 w-5 mx-auto" />
                        ) : feature.team === '✅' ? (
                          <CheckIcon className="h-5 w-5 mx-auto text-emerald-500" />
                        ) : (
                          feature.team
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      <div className={`${feature.enterprise === '❌' ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`}>
                        {feature.enterprise === '❌' ? (
                          <XMarkIcon className="h-5 w-5 mx-auto" />
                        ) : feature.enterprise === '✅' ? (
                          <CheckIcon className="h-5 w-5 mx-auto text-emerald-500" />
                        ) : (
                          feature.enterprise
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Footer */}
          <div className="px-6 py-8 bg-gray-50 dark:bg-gray-700/30">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                ¿Listo para empezar?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Elige el plan que mejor se adapte a tus necesidades
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {plansData.map((plan) => (
                <button
                  key={plan.id}
                  className={`px-8 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-electric-purple-600 to-emerald-green-500 text-white shadow-lg hover:shadow-xl'
                      : plan.id === 'starter'
                      ? 'bg-gray-600 text-white hover:bg-gray-700'
                      : 'bg-electric-purple-600 text-white hover:bg-electric-purple-700'
                  }`}
                >
                  {plan.cta}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Garantías Incluidas
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>✅ Prueba gratuita de 14 días en todos los planes</li>
              <li>✅ Cancela en cualquier momento sin compromiso</li>
              <li>✅ Migración gratuita entre planes</li>
              <li>✅ Soporte técnico incluido en todos los planes</li>
              <li>✅ Actualizaciones automáticas sin costo adicional</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-electric-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ¿Tienes preguntas?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Nuestro equipo está aquí para ayudarte a elegir el plan perfecto para tu organización.
            </p>
            <div className="space-y-2">
              <Link 
                href="/contact" 
                className="block w-full text-center px-4 py-2 bg-electric-purple-600 text-white rounded-lg hover:bg-electric-purple-700 transition-colors"
              >
                Contáctanos
              </Link>
              <Link 
                href="/#faq" 
                className="block w-full text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Ver FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
