'use client'

import { useState } from 'react'
import Link from 'next/link' // Importar Link
import { CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline'

// Exportar plansData para que pueda ser usado en otros lugares, como SettingsPage
export const plansData = [
  {
    name: 'Starter',
    id: 'starter',
    price: { monthly: 0, yearly: 0 },
    description: 'Ideal para individuos y pequeños proyectos de prueba.',
    badge: 'Gratis para Siempre',
    features: [
      { name: '1 Usuario', included: true },
      { name: '1 Proyecto/Compañía', included: true },
      { name: 'Hasta 3 diagramas en total', included: true },
      { name: '1 Ambiente (ej. Sandbox)', included: true },
      { name: 'Hasta 20 recursos en total', included: true },
      { name: 'Soporte AWS, GCP, Azure (limitado por recursos)', included: true },
      { name: 'Exportar a Terraform', included: true },
      { name: 'Deploy directo (limitado: 5 recursos/deploy, 2 deploys/mes)', included: true },
      { name: 'Despliegue Universal Esencial (Docker, Cloud Run, ECS) con límites del plan', included: true },
      { name: 'Plantillas básicas', included: true },
      { name: 'Versionado básico (últimas 3 versiones)', included: true },
      { name: 'Soporte por comunidad', included: true },
      { name: 'Importación de infraestructura', included: false },
      { name: 'Colaboración en equipo', included: false },
      { name: 'Análisis de costos', included: false },
    ],
    cta: 'Empezar Gratis',
    popular: false,
    savings: null,
  },
  {
    name: 'Professional',
    id: 'professional',
    price: { monthly: 29, yearly: 290 }, // Precio ajustado
    description: 'Para profesionales y equipos pequeños que necesitan más capacidad y control.',
    badge: 'Ideal para Crecer',
    features: [
      { name: 'Hasta 3 Usuarios', included: true },
      { name: 'Hasta 5 Proyectos/Compañías', included: true },
      { name: 'Hasta 10 diagramas por proyecto', included: true },
      { name: 'Hasta 3 Ambientes por proyecto (Dev, Staging, Prod)', included: true },
      { name: 'Hasta 200 recursos en total', included: true },
      { name: 'Soporte completo AWS, GCP, Azure', included: true },
      { name: 'Exportar a Terraform, CloudFormation', included: true },
      { name: 'Deploy directo ilimitado', included: true },
      { name: 'Despliegue Universal (ECS, Cloud Run, Fargate, Docker) y más', included: true },
      { name: 'Importación básica de IaC (hasta 20 recursos)', included: true },
      { name: 'Plantillas Premium', included: true },
      { name: 'Colaboración básica (comentarios en diagramas)', included: true },
      { name: 'Versionado estándar (historial de 30 días)', included: true },
      { name: 'Análisis de costos estimado', included: true },
      { name: 'Soporte por Email (respuesta en 24h)', included: true },
    ],
    cta: 'Prueba Gratuita de 14 Días',
    popular: true, // Hacer este más popular que el "Team" inicial
    savings: 'Ahorra 2 meses',
  },
  {
    name: 'Team',
    id: 'team',
    price: { monthly: 79, yearly: 790 }, // Precio ajustado
    description: 'Colaboración avanzada y herramientas potentes para equipos en crecimiento.',
    badge: 'Mejor Valor', // Cambiado de "Más popular"
    features: [
      { name: 'Hasta 10 Usuarios (ampliable)', included: true },
      { name: 'Proyectos/Compañías ilimitados', included: true },
      { name: 'Diagramas ilimitados', included: true },
      { name: 'Ambientes ilimitados por proyecto', included: true },
      { name: 'Hasta 1000 recursos en total', included: true },
      { name: 'Soporte completo AWS, GCP, Azure', included: true },
      { name: 'Exportar a Terraform, CloudFormation, Pulumi', included: true },
      { name: 'Deploy directo con flujos de aprobación', included: true },
      { name: 'Despliegue Universal Avanzado (Kubernetes, Functions, Jobs, ECS, Cloud Run, Fargate) y más', included: true },
      { name: 'Importación completa de infraestructura', included: true },
      { name: 'Promoción entre ambientes (manual y semi-auto)', included: true },
      { name: 'Plantillas Premium y personalizadas por equipo', included: true },
      { name: 'Colaboración avanzada (roles y permisos)', included: true },
      { name: 'Versionado avanzado (historial completo, etiquetas)', included: true },
      { name: 'Análisis de costos avanzado con alertas', included: true },
      { name: 'Integración CI/CD (Webhooks, GitHub/GitLab básico)', included: true },
      { name: 'Soporte Prioritario (Email 8h, Chat)', included: true },
    ],
    cta: 'Prueba Gratuita de 14 Días',
    popular: false, 
    savings: 'Ahorra 2 meses',
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: { monthly: null, yearly: null }, // Custom pricing
    description: 'Soluciones a medida para grandes organizaciones con requisitos complejos.',
    badge: 'Máximo Control',
    features: [
      { name: 'Todo en el plan Team, y además:', included: true },
      { name: 'Usuarios y recursos personalizados/ilimitados', included: true },
      { name: 'Soporte para nubes privadas y on-premise', included: true },
      { name: 'Despliegue Universal Completo y Personalizado (Todas las plataformas soportadas, flujos avanzados)', included: true },
      { name: 'Exportación a formatos IaC personalizados', included: true },
      { name: 'Pipelines de deploy y promoción personalizados', included: true },
      { name: 'Importación masiva asistida con mapeo automático', included: true },
      { name: 'Seguridad Avanzada (SSO, SAML, RBAC detallado)', included: true },
      { name: 'Logs de auditoría exhaustivos', included: true },
      { name: 'Optimización de costos y consultoría', included: true },
      { name: 'Integración CI/CD avanzada y personalizada', included: true },
      { name: 'Soporte Dedicado 24/7 con CSM y SLAs', included: true },
      { name: 'Capacitación y onboarding personalizado para equipos', included: true },
    ],
    cta: 'Contactar Ventas',
    popular: false,
    savings: null,
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
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
              <span>Ahorra ~16%</span> {/* Ajustado el ahorro */}
            </div>
          )}
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-sm grid-cols-1 gap-y-8 sm:mt-20 sm:max-w-2xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4 lg:gap-x-6 xl:gap-x-8">
          {plansData.map((plan, planIdx) => (
            <div
              key={plan.id}
              className={`group relative rounded-3xl p-6 xl:p-8 ring-1 transition-all duration-500 hover:scale-[1.03] animate-slide-up ${
                plan.popular
                  ? 'bg-gradient-to-br from-electric-purple-50 to-emerald-green-50 dark:from-electric-purple-900/30 dark:to-emerald-green-900/30 ring-2 ring-electric-purple-500 dark:ring-electric-purple-600 shadow-2xl hover:shadow-electric-purple-500/30 scale-[1.03]'
                  : 'bg-white dark:bg-gray-800/80 backdrop-blur-sm ring-gray-200 dark:ring-gray-700 hover:ring-electric-purple-400 dark:hover:ring-electric-purple-500 shadow-xl hover:shadow-2xl'
              }`}
              style={{ animationDelay: `${planIdx * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-auto min-w-[120px] whitespace-nowrap rounded-full bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 px-4 py-2 text-xs font-semibold text-white text-center animate-bounce-in shadow-lg">
                  <StarIcon className="inline h-4 w-4 mr-1.5 -mt-0.5" />
                  {plan.badge}
                </div>
              )}
              
              {!plan.popular && plan.badge && (
                 <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-auto min-w-[120px] whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold text-white text-center shadow-md ${plan.id === 'starter' ? 'bg-gray-500' : 'bg-gradient-to-r from-gray-600 to-gray-700'}`}>
                  {plan.badge}
                </div>
              )}

              <div className="flex items-center justify-between gap-x-2 mt-4">
                <h3
                  className={`text-xl xl:text-2xl font-bold leading-7 xl:leading-8 ${
                    plan.popular
                      ? 'text-electric-purple-600 dark:text-electric-purple-400'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                {plan.savings && isYearly && plan.price.monthly !== null && (
                  <span className="inline-flex items-center rounded-full bg-emerald-green-100 dark:bg-emerald-green-900/40 px-2.5 py-1 text-xs font-medium text-emerald-green-700 dark:text-emerald-green-300">
                    {plan.savings}
                  </span>
                )}
              </div>
              <p className="mt-3 xl:mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400 h-12">{plan.description}</p>
              <div className="mt-4 xl:mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {plan.price.monthly === 0 ? 'Gratis' : 
                   plan.price.monthly === null ? 'Custom' : 
                   `$${isYearly ? plan.price.yearly : plan.price.monthly}`}
                </span>
                {plan.price.monthly !== 0 && plan.price.monthly !== null && (
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                      {isYearly ? '/año' : '/mes'}
                    </span>
                    {isYearly && plan.price.monthly && plan.price.yearly && (plan.price.monthly * 12 > plan.price.yearly) && (
                      <span className="text-xs text-gray-500 dark:text-gray-500 line-through">
                        ${plan.price.monthly * 12}/año
                      </span>
                    )}
                  </div>
                )}
              </div>
              
              <button
                className={`mt-6 xl:mt-8 block w-full rounded-md px-3 py-2.5 text-center text-sm font-semibold leading-6 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-electric-purple-600 to-emerald-green-500 text-white shadow-lg hover:shadow-xl hover:from-electric-purple-700 hover:to-emerald-green-600 focus:ring-electric-purple-500'
                    : plan.id === 'starter' 
                    ? 'bg-gray-600 text-white hover:bg-gray-700 shadow-md hover:shadow-lg focus:ring-gray-500'
                    : 'bg-electric-purple-600 text-white hover:bg-electric-purple-700 shadow-md hover:shadow-lg focus:ring-electric-purple-500'
                }`}
              >
                {plan.cta}
              </button>

              <ul role="list" className="mt-6 xl:mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3 items-start">
                    {feature.included ? (
                      <CheckIcon className="h-6 w-5 flex-none text-emerald-green-600 dark:text-emerald-green-400 mt-0.5" aria-hidden="true" />
                    ) : (
                      <XMarkIcon className="h-6 w-5 flex-none text-gray-400 dark:text-gray-500 mt-0.5" aria-hidden="true" />
                    )}
                    <span className={feature.included ? 'dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in-up">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            ¿Necesitas algo más?{' '}
            <Link href="/contact" className="font-semibold text-electric-purple-600 dark:text-electric-purple-400 hover:text-electric-purple-700 dark:hover:text-electric-purple-300 transition-colors">
              Contáctanos
            </Link>{' '}
            para soluciones Enterprise a medida.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Sin Compromiso', description: 'Cancela en cualquier momento. Sin contratos anuales obligatorios.', icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, gradient: 'from-electric-purple-500 to-emerald-green-500' },
            { title: 'Escalabilidad Flexible', description: 'Ajusta tu plan según tus necesidades crezcan o cambien.', icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, gradient: 'from-emerald-green-500 to-cloud-blue-500' },
            { title: 'Soporte Experto', description: 'Equipo de expertos disponible para ayudarte a tener éxito.', icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75zm0 0c.621 0 1.23.047 1.829.138.6.09 1.176.227 1.725.414L12 2.25z" /></svg>, gradient: 'from-cloud-blue-500 to-electric-purple-500' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
