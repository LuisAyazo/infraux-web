'use client'

import { StarIcon } from '@heroicons/react/24/outline'

// Asumimos la estructura de 'plan' basada en 'plansData' en Pricing.tsx
interface Plan {
  id: string; // id es usado para el key y la lógica de estilo del botón
  name: string;
  emoji?: string;
  popular: boolean;
  cta: string; // cta es usado para el texto del botón
  // Añade otros campos de plan si son necesarios para la cabecera de la tabla
}

// Asumimos la estructura de 'feature' basada en 'comparisonFeatures' en Pricing.tsx
interface ComparisonFeature {
  name: string;
  starter: string;
  professional: string;
  team: string;
  enterprise: string;
}

interface ComparisonTableProps {
  plansData: Plan[];
  comparisonFeatures: ComparisonFeature[];
}

export default function ComparisonTable({ plansData, comparisonFeatures }: ComparisonTableProps) {
  return (
    <div className="mt-16 animate-fade-in-up">
      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 bg-gray-700 dark:bg-gray-800"> {/* Encabezado a gris oscuro */}
          <h3 className="text-xl font-bold text-white text-center">Comparativa Detallada de Planes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white min-w-[200px]">
                  Características
                </th>
                {plansData.map((plan) => (
                  <th
                    key={plan.id}
                    className={`px-4 py-3 text-center text-sm font-semibold min-w-[150px] ${
                      plan.popular
                        ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700' // Texto de cabecera popular a neutro
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-lg">{plan.emoji}</span>
                      <span>{plan.name}</span>
                      {plan.popular && (
                        <StarIcon className="h-4 w-4 text-yellow-400" /> /* Estrella a color amarillo */
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
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                    {feature.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-center text-gray-600 dark:text-gray-300">
                    {feature.starter}
                  </td>
                  {/* Se elimina el fondo especial para la celda del plan professional para consistencia */}
                  <td className="px-4 py-3 text-sm text-center text-gray-600 dark:text-gray-300">
                    {feature.professional}
                  </td>
                  <td className="px-4 py-3 text-sm text-center text-gray-600 dark:text-gray-300">
                    {feature.team}
                  </td>
                  <td className="px-4 py-3 text-sm text-center text-gray-600 dark:text-gray-300">
                    {feature.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/30">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {plansData.map((plan) => (
              <button
                key={plan.id}
                // Asumimos que plan.cta existe y es relevante aquí.
                // Si el CTA debe ser diferente o llevar a una acción específica, esto podría necesitar ajuste.
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-electric-purple-600 hover:bg-electric-purple-700 text-white shadow-lg hover:shadow-xl' // Botón popular con color sólido
                    : plan.id === 'starter' 
                    ? 'bg-gray-500 hover:bg-gray-600 text-white' // Botón starter ligeramente más claro
                    : 'bg-electric-purple-500 hover:bg-electric-purple-600 text-white' // Otros botones no populares con un tono de púrpura ligeramente menos intenso
                }`}
              >
                {plan.cta || 'Seleccionar Plan'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
