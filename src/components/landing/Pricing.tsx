'use client'

import { useState } from 'react'
import { CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline'

const plans = [
  {
    name: 'Starter',
    id: 'starter',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfecto para proyectos personales y pruebas de concepto',
    features: [
      { name: 'Hasta 3 proyectos', included: true },
      { name: 'Plantillas básicas', included: true },
      { name: 'Exportar a Terraform', included: true },
      { name: 'Soporte por email', included: true },
      { name: 'Colaboración en equipo', included: false },
      { name: 'Plantillas avanzadas', included: false },
      { name: 'Integración CI/CD', included: false },
      { name: 'Soporte prioritario', included: false },
    ],
    cta: 'Empezar Gratis',
    popular: false,
  },
  {
    name: 'Professional',
    id: 'professional',
    price: { monthly: 29, yearly: 290 },
    description: 'Ideal para equipos pequeños y medianos que necesitan más potencia',
    features: [
      { name: 'Proyectos ilimitados', included: true },
      { name: 'Todas las plantillas', included: true },
      { name: 'Exportar a múltiples IaC', included: true },
      { name: 'Colaboración en equipo', included: true },
      { name: 'Versionado avanzado', included: true },
      { name: 'Integración CI/CD básica', included: true },
      { name: 'Soporte prioritario', included: true },
      { name: 'Análisis de costos', included: false },
    ],
    cta: 'Empezar Prueba',
    popular: true,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: { monthly: 99, yearly: 990 },
    description: 'Para organizaciones grandes con necesidades empresariales',
    features: [
      { name: 'Todo en Professional', included: true },
      { name: 'Plantillas personalizadas', included: true },
      { name: 'SSO y SAML', included: true },
      { name: 'Auditoría completa', included: true },
      { name: 'Análisis de costos', included: true },
      { name: 'Integración CI/CD avanzada', included: true },
      { name: 'Soporte dedicado 24/7', included: true },
      { name: 'Despliegue on-premise', included: true },
    ],
    cta: 'Contactar Ventas',
    popular: false,
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
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
          <div className="relative bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button
              type="button"
              className={`relative w-24 rounded-md py-2 text-sm font-medium transition-all duration-300 ${
                !isYearly
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Mensual
            </button>
            <button
              type="button"
              className={`relative w-24 rounded-md py-2 text-sm font-medium transition-all duration-300 ${
                isYearly
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Anual
            </button>
          </div>
          {isYearly && (
            <div className="ml-4 inline-flex items-center rounded-full bg-emerald-green-100 dark:bg-emerald-green-900/30 px-3 py-1 text-sm font-medium text-emerald-green-700 dark:text-emerald-green-300 animate-bounce-in">
              <span>Ahorra 2 meses</span>
            </div>
          )}
        </div>

        {/* Pricing cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {plans.map((plan, planIdx) => (
            <div
              key={plan.id}
              className={`group relative rounded-3xl p-8 ring-1 transition-all duration-500 hover:scale-105 animate-slide-up ${
                plan.popular
                  ? 'bg-gradient-to-br from-electric-purple-50 to-emerald-green-50 dark:from-electric-purple-900/20 dark:to-emerald-green-900/20 ring-electric-purple-200 dark:ring-electric-purple-700 shadow-2xl hover:shadow-electric-purple-500/25'
                  : 'bg-white dark:bg-gray-900 ring-gray-200 dark:ring-gray-700 hover:ring-electric-purple-300 dark:hover:ring-electric-purple-600 shadow-xl hover:shadow-2xl'
              }`}
              style={{ animationDelay: `${planIdx * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 px-3 py-2 text-sm font-medium text-white text-center animate-bounce-in">
                  <StarIcon className="inline h-4 w-4 mr-1" />
                  Más Popular
                </div>
              )}

              <div className="flex items-center justify-between gap-x-4">
                <h3
                  className={`text-lg font-semibold leading-8 ${
                    plan.popular
                      ? 'text-electric-purple-600 dark:text-electric-purple-400'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {plan.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  {plan.price.monthly === 0 ? '' : isYearly ? '/año' : '/mes'}
                </span>
              </p>
              
              <button
                className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-electric-purple-600 to-emerald-green-600 text-white shadow-lg hover:shadow-xl hover:from-electric-purple-700 hover:to-emerald-green-700'
                    : 'bg-electric-purple-600 text-white hover:bg-electric-purple-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.cta}
              </button>

              <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3 items-center">
                    {feature.included ? (
                      <CheckIcon className="h-6 w-5 flex-none text-emerald-green-600 dark:text-emerald-green-400" aria-hidden="true" />
                    ) : (
                      <XMarkIcon className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
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
          <p className="text-lg text-gray-600 dark:text-gray-400">
            ¿Necesitas algo personalizado?{' '}
            <a href="#contact" className="font-semibold text-electric-purple-600 dark:text-electric-purple-400 hover:text-electric-purple-700 dark:hover:text-electric-purple-300 transition-colors">
              Contáctanos
            </a>{' '}
            para planes empresariales a medida.
          </p>
        </div>
      </div>
    </section>
  )
}
