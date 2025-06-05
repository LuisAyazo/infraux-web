'use client'

import { CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline'

// Definimos los tipos para las props del PlanCard
// Es una buena práctica definir los tipos de los datos que se esperan.
// Asumimos la estructura de 'plan' basada en 'plansData' en Pricing.tsx
interface Feature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: {
    monthly: number | null;
    yearly: number | null;
  };
  description: string;
  badge?: string; // badge es opcional
  emoji?: string; // emoji es opcional
  features: Feature[];
  cta: string;
  popular: boolean;
  savings: string | null;
  customPrice?: string; // customPrice es opcional
}

interface PlanCardProps {
  plan: Plan;
  isYearly: boolean;
  planIdx: number; // Para el animationDelay
}

export default function PlanCard({ plan, isYearly, planIdx }: PlanCardProps) {
  return (
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
          {plan.badge || 'Popular'} {/* Fallback por si badge no está definido en un plan popular */}
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
            plan.customPrice ? plan.customPrice : // Manejo para precio custom
            plan.price.monthly === null ? 'Custom' : // Otra forma de manejar precio custom si customPrice no existe
            `$${isYearly ? plan.price.yearly : plan.price.monthly}`}
        </span>
        {plan.price.monthly !== 0 && plan.price.monthly !== null && !plan.customPrice && (
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
        // Podríamos usar Link de Next.js si cta es una URL, o un simple button para acciones.
        // Por ahora, lo mantenemos como button. Si plan.ctaLink existe, podríamos usarlo.
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
  )
}
