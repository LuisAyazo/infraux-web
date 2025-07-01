import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo-config';
import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import { 
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = pageMetadata.legal.refundPolicy();

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      <main className="flex-grow">
        <div className="py-24 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Refund Policy
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Guarantee Badge */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 text-center border border-green-200 dark:border-green-800">
                <ShieldCheckIcon className="h-16 w-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Garantía de Satisfacción de 7 Días
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Si no está completamente satisfecho con InfraUX, le devolvemos su dinero sin preguntas.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Nuestra Garantía
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  En InfraUX, confiamos en la calidad de nuestra plataforma. Por eso ofrecemos una garantía 
                  de satisfacción que le permite probar nuestro servicio sin riesgo.
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 my-6">
                  <div className="flex items-start gap-4">
                    <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Período de Gracia de 7 Días
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Todos los nuevos usuarios tienen 7 días desde la fecha de su primera suscripción de pago 
                        para solicitar un reembolso completo si no están satisfechos con el servicio.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. Condiciones para Reembolso
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Los reembolsos están disponibles bajo las siguientes condiciones:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">Elegible para reembolso:</h4>
                      <ul className="list-disc pl-5 mt-2 text-slate-600 dark:text-slate-400 space-y-1">
                        <li>Primera suscripción dentro de los primeros 7 días</li>
                        <li>Problemas técnicos que impidan el uso del servicio</li>
                        <li>Cobros duplicados o erróneos</li>
                        <li>Cancelación antes del próximo ciclo de facturación</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <XCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">No elegible para reembolso:</h4>
                      <ul className="list-disc pl-5 mt-2 text-slate-600 dark:text-slate-400 space-y-1">
                        <li>Solicitudes después de 7 días del primer pago</li>
                        <li>Planes anuales después de 30 días</li>
                        <li>Uso parcial del mes en curso</li>
                        <li>Violación de los términos de servicio</li>
                        <li>Servicios ya consumidos o utilizados</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. Proceso de Solicitud de Reembolso
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Solicitar un reembolso es simple y directo:
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        Contacte a nuestro equipo
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Envíe un email a <a href="mailto:support@infraux.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">support@infraux.com</a> con 
                        el asunto "Solicitud de Reembolso"
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        Proporcione información
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Incluya su email de cuenta, fecha de suscripción y razón del reembolso (opcional)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        Procesamiento
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Procesaremos su solicitud en 24-48 horas hábiles
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        Reembolso completado
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        El dinero se reflejará en su cuenta en 5-10 días hábiles según su banco
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Tipos de Planes y Reembolsos
                </h2>
                
                <div className="space-y-6">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                      <CurrencyDollarIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      Planes Mensuales
                    </h3>
                    <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-2">
                      <li>Reembolso completo dentro de los primeros 7 días</li>
                      <li>Sin reembolso por tiempo no utilizado después de 7 días</li>
                      <li>Cancelación efectiva al final del período pagado</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      Planes Anuales
                    </h3>
                    <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-2">
                      <li>Reembolso completo dentro de los primeros 30 días</li>
                      <li>Reembolso prorrateado entre días 31-60 (casos especiales)</li>
                      <li>Sin reembolso después de 60 días</li>
                      <li>El descuento anual se pierde al solicitar reembolso</li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                      <InformationCircleIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      Plan Gratuito (Hobby)
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      No aplica para reembolsos ya que es un plan sin costo.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Excepciones Especiales
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Consideramos reembolsos fuera del período estándar en las siguientes circunstancias:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Interrupciones del servicio:</strong> Si InfraUX no está disponible por más de 24 horas consecutivas</li>
                  <li><strong>Cambios significativos:</strong> Si modificamos sustancialmente las características incluidas en su plan</li>
                  <li><strong>Errores de facturación:</strong> Cobros incorrectos o duplicados serán reembolsados completamente</li>
                  <li><strong>Circunstancias excepcionales:</strong> Evaluadas caso por caso por nuestro equipo</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Método de Reembolso
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Los reembolsos se procesan de la siguiente manera:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Se devuelven al mismo método de pago utilizado para la compra</li>
                  <li>Tarjetas de crédito/débito: 5-10 días hábiles</li>
                  <li>PayPal: 3-5 días hábiles</li>
                  <li>Transferencias bancarias: 10-15 días hábiles</li>
                  <li>Se enviará confirmación por email cuando se procese</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Después del Reembolso
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Una vez procesado el reembolso:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Su cuenta se convertirá al plan gratuito (Hobby)</li>
                  <li>Mantendrá acceso a sus datos durante 30 días</li>
                  <li>Podrá exportar sus diagramas y configuraciones</li>
                  <li>Puede volver a suscribirse en cualquier momento</li>
                  <li>No habrá penalizaciones para futuras suscripciones</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Preguntas Frecuentes sobre Reembolsos
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      ¿Puedo obtener un reembolso parcial?
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      No ofrecemos reembolsos parciales por tiempo no utilizado, excepto en casos especiales 
                      de planes anuales dentro del período de 31-60 días.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      ¿Qué pasa con mis datos después del reembolso?
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Sus datos permanecen seguros y accesibles durante 30 días. Después de este período, 
                      se eliminarán permanentemente a menos que reactive su cuenta.
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      ¿Puedo solicitar múltiples reembolsos?
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      La garantía de 7 días solo aplica para nuevos usuarios en su primera suscripción. 
                      Los usuarios que ya han recibido un reembolso no son elegibles para futuros reembolsos 
                      bajo la garantía de satisfacción.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  9. Contacto para Reembolsos
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Para solicitar un reembolso o si tiene preguntas sobre esta política:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <EnvelopeIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">Email de soporte</p>
                        <a href="mailto:support@infraux.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                          support@infraux.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <ClockIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-slate-200">Tiempo de respuesta</p>
                        <p className="text-slate-600 dark:text-slate-400">24-48 horas hábiles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  Esta política de reembolsos forma parte de nuestros <Link href="/terms-and-conditions" className="text-indigo-600 dark:text-indigo-400 hover:underline">Términos de Servicio</Link> y 
                  está sujeta a cambios. Recomendamos revisar esta página periódicamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterNew />
    </div>
  );
}