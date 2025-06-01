'use client'

import { useState } from 'react'
import { CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline'

const plans = [
  {
    name: 'Starter',
    id: 'starter',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfecto para desarrolladores individuales y proyectos de prueba',
    badge: 'Gratis para siempre',
    features: [
      { name: 'Hasta 3 proyectos activos', included: true },
      { name: '1 ambiente de desarrollo', included: true },
      { name: 'Hasta 2 diagramas por proyecto', included: true },
      { name: 'Plantillas básicas de infraestructura', included: true },
      { name: 'Exportar solo a Terraform', included: true },
      { name: 'Documentación y tutoriales', included: true },
      { name: 'Soporte por comunidad', included: true },
      { name: 'Deploy directo a providers', included: false },
      { name: 'Multi-ambiente (dev/staging/prod)', included: false },
      { name: 'Migraciones automáticas', included: false },
      { name: 'Import de infraestructura existente', included: false },
      { name: 'Promoción entre ambientes', included: false },
    ],
    cta: 'Empezar Gratis',
    popular: false,
    savings: null,
  },
  {
    name: 'Professional',
    id: 'professional',
    price: { monthly: 49, yearly: 490 },
    description: 'Para desarrolladores y equipos pequeños que necesitan funcionalidades avanzadas',
    badge: 'Ideal para equipos',
    features: [
      { name: 'Hasta 25 proyectos activos', included: true },
      { name: 'Hasta 3 ambientes por proyecto', included: true },
      { name: 'Hasta 10 diagramas por proyecto', included: true },
      { name: 'Deploy directo a AWS, Azure, GCP', included: true },
      { name: 'Plantillas premium incluidas', included: true },
      { name: 'Exportar a Terraform, CloudFormation & Pulumi', included: true },
      { name: 'Import básico de recursos existentes', included: true },
      { name: 'Promoción manual entre ambientes', included: true },
      { name: 'Colaboración en equipo (hasta 5 miembros)', included: true },
      { name: 'Versionado y rollback básico', included: true },
      { name: 'Análisis de costos básico', included: true },
      { name: 'Migraciones automáticas avanzadas', included: false },
    ],
    cta: 'Prueba gratuita 14 días',
    popular: false,
    savings: '2 meses gratis',
  },
  {
    name: 'Team',
    id: 'team',
    price: { monthly: 99, yearly: 990 },
    description: 'Ideal para equipos medianos con necesidades de colaboración avanzada',
    badge: 'Más popular',
    features: [
      { name: 'Proyectos ilimitados', included: true },
      { name: 'Multi-ambiente completo (dev/staging/prod)', included: true },
      { name: 'Diagramas ilimitados por proyecto', included: true },
      { name: 'Deploy directo a todos los providers', included: true },
      { name: 'Import completo de infraestructura existente', included: true },
      { name: 'Promoción automática entre ambientes', included: true },
      { name: 'Migraciones automáticas con validación', included: true },
      { name: 'Todos los formatos IaC (Terraform, CloudFormation, Pulumi, Ansible)', included: true },
      { name: 'Colaboración en equipo (hasta 20 miembros)', included: true },
      { name: 'Versionado y rollback avanzado', included: true },
      { name: 'Integración CI/CD completa', included: true },
      { name: 'Análisis de costos avanzado con alertas', included: true },
    ],
    cta: 'Prueba gratuita 14 días',
    popular: true,
    savings: '2 meses gratis',
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: { monthly: 199, yearly: 1990 },
    description: 'Para organizaciones grandes con necesidades empresariales y de compliance',
    badge: 'Máximo control',
    features: [
      { name: 'Todo en Team', included: true },
      { name: 'Ambientes personalizados ilimitados', included: true },
      { name: 'Multi-región y multi-cloud avanzado', included: true },
      { name: 'Migraciones enterprise con rollback', included: true },
      { name: 'Import masivo con mapeo automático', included: true },
      { name: 'Promoción con pipelines personalizados', included: true },
      { name: 'Deploy a providers privados/on-premise', included: true },
      { name: 'Miembros de equipo ilimitados', included: true },
      { name: 'Plantillas personalizadas y privadas', included: true },
      { name: 'SSO empresarial completo (SAML, LDAP)', included: true },
      { name: 'Auditoría completa y logs detallados', included: true },
      { name: 'Soporte dedicado 24/7 + CSM', included: true },
    ],
    cta: 'Contactar Ventas',
    popular: false,
    savings: '2 meses gratis',
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-green-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <h2 className="text-base font-semibold leading-7 text-electric-purple-600 dark:text-electric-purple-400">
            Precios
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Elige el plan perfecto para ti
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Comienza gratis y escala según crezcan tus necesidades. Sin compromisos, cancela cuando quieras.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-16 flex justify-center animate-slide-up">
          <div className="relative bg-gray-100 dark:bg-gray-800 p-1 rounded-xl border border-gray-200 dark:border-gray-700">
            <button
              type="button"
              className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                !isYearly
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md transform scale-105'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Facturación Mensual
            </button>
            <button
              type="button"
              className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                isYearly
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md transform scale-105'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Facturación Anual
            </button>
          </div>
          {isYearly && (
            <div className="ml-6 inline-flex items-center rounded-full bg-gradient-to-r from-emerald-green-100 to-emerald-green-200 dark:from-emerald-green-900/30 dark:to-emerald-green-800/30 px-4 py-2 text-sm font-semibold text-emerald-green-700 dark:text-emerald-green-300 animate-bounce-in shadow-lg">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span>Ahorra hasta 20%</span>
            </div>
          )}
        </div>

        {/* Pricing cards */}
        <div className="isolate mx-auto mt-16 grid max-w-sm grid-cols-1 gap-y-8 sm:mt-20 sm:max-w-2xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4 lg:gap-x-6 xl:gap-x-8">
          {plans.map((plan, planIdx) => (
            <div
              key={plan.id}
              className={`group relative rounded-3xl p-6 xl:p-8 ring-1 transition-all duration-500 hover:scale-105 animate-slide-up ${
                plan.popular
                  ? 'bg-gradient-to-br from-electric-purple-50 to-emerald-green-50 dark:from-electric-purple-900/20 dark:to-emerald-green-900/20 ring-electric-purple-200 dark:ring-electric-purple-700 shadow-2xl hover:shadow-electric-purple-500/25 scale-105'
                  : 'bg-white dark:bg-gray-900 ring-gray-200 dark:ring-gray-700 hover:ring-electric-purple-300 dark:hover:ring-electric-purple-600 shadow-xl hover:shadow-2xl'
              }`}
              style={{ animationDelay: `${planIdx * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-40 rounded-full bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 px-3 py-2 text-sm font-medium text-white text-center animate-bounce-in shadow-lg">
                  <StarIcon className="inline h-4 w-4 mr-1" />
                  {plan.badge}
                </div>
              )}
              
              {!plan.popular && plan.badge && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-40 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 px-3 py-2 text-sm font-medium text-white text-center animate-bounce-in shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="flex items-center justify-between gap-x-2">
                <h3
                  className={`text-lg xl:text-xl font-bold leading-7 xl:leading-8 ${
                    plan.popular
                      ? 'text-electric-purple-600 dark:text-electric-purple-400'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.savings && isYearly && (
                  <span className="inline-flex items-center rounded-full bg-emerald-green-100 dark:bg-emerald-green-900/30 px-2 py-1 text-xs font-medium text-emerald-green-700 dark:text-emerald-green-300">
                    {plan.savings}
                  </span>
                )}
              </div>
              <p className="mt-3 xl:mt-4 text-xs xl:text-sm leading-5 xl:leading-6 text-gray-600 dark:text-gray-400">{plan.description}</p>
              <div className="mt-4 xl:mt-6 flex items-baseline gap-x-2">
                <span className="text-3xl xl:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {plan.price.monthly === 0 ? 'Gratis' : `$${isYearly ? plan.price.yearly : plan.price.monthly}`}
                </span>
                {plan.price.monthly > 0 && (
                  <div className="flex flex-col">
                    <span className="text-xs xl:text-sm font-semibold leading-5 xl:leading-6 text-gray-600 dark:text-gray-400">
                      {isYearly ? '/año' : '/mes'}
                    </span>
                    {isYearly && plan.price.monthly > 0 && (
                      <span className="text-xs text-gray-500 dark:text-gray-500 line-through">
                        ${plan.price.monthly * 12}/año
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              <button
                className={`mt-6 xl:mt-8 block w-full rounded-md px-3 py-2 text-center text-xs xl:text-sm font-semibold leading-5 xl:leading-6 transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 text-white shadow-lg hover:shadow-xl hover:from-electric-purple-700 hover:to-emerald-green-700'
                    : 'bg-electric-purple-600 text-white hover:bg-electric-purple-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.cta}
              </button>

              <ul role="list" className="mt-6 xl:mt-8 space-y-2 xl:space-y-3 text-xs xl:text-sm leading-5 xl:leading-6">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex gap-x-2 xl:gap-x-3 items-center">
                    {feature.included ? (
                      <CheckIcon className="h-4 w-4 xl:h-6 xl:w-5 flex-none text-emerald-green-600 dark:text-emerald-green-400" aria-hidden="true" />
                    ) : (
                      <XMarkIcon className="h-4 w-4 xl:h-6 xl:w-5 flex-none text-gray-400" aria-hidden="true" />
                    )}
                    <span className={feature.included ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ or additional info */}
        <div className="mt-20 text-center animate-fade-in-up">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            ¿Necesitas algo personalizado?{' '}
            <a href="#contact" className="font-semibold text-electric-purple-600 dark:text-electric-purple-400 hover:text-electric-purple-700 dark:hover:text-electric-purple-300 transition-colors">
              Contáctanos
            </a>{' '}
            para planes empresariales a medida.
          </p>
        </div>

        {/* Value propositions */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-r from-electric-purple-500 to-emerald-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sin Compromiso</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Cancela en cualquier momento. Sin contratos anuales obligatorios.</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-green-500 to-cloud-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Migración Gratuita</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Te ayudamos a migrar tus proyectos existentes sin costo adicional.</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-r from-cloud-blue-500 to-electric-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75zm0 0c.621 0 1.23.047 1.829.138.6.09 1.176.227 1.725.414L12 2.25z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Soporte 24/7</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Equipo de expertos disponible para resolver cualquier duda técnica.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
