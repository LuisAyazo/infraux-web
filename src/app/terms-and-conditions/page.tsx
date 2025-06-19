import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - InfraUX',
  description: 'Términos y condiciones de uso de InfraUX, la plataforma visual para infraestructura cloud.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      <main className="flex-grow">
        <div className="py-24 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Aceptación de los Términos
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Al acceder y utilizar InfraUX ("el Servicio"), usted acepta estar sujeto a estos Términos de Servicio ("Términos"). 
                  Si no está de acuerdo con estos términos, no debe utilizar el Servicio.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. ¿Qué es InfraUX?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  InfraUX es una plataforma visual para diseñar, desplegar y gestionar infraestructura cloud. 
                  Nuestro servicio permite a los usuarios crear diagramas de infraestructura y generar código 
                  Infrastructure as Code (IaC) automáticamente para múltiples proveedores cloud.
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Diseño visual de infraestructura</li>
                  <li>Generación automática de código Terraform, Pulumi, Ansible y CloudFormation</li>
                  <li>Soporte para AWS, Google Cloud Platform y Microsoft Azure</li>
                  <li>Colaboración en tiempo real entre equipos</li>
                  <li>Gestión de múltiples entornos y proyectos</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. Condiciones de Uso
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Al utilizar InfraUX, usted se compromete a:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Proporcionar información precisa y actualizada durante el registro</li>
                  <li>Mantener la seguridad de su cuenta y contraseña</li>
                  <li>No utilizar el servicio para actividades ilegales o no autorizadas</li>
                  <li>No intentar acceder a áreas restringidas del servicio</li>
                  <li>No interferir con el funcionamiento normal del servicio</li>
                  <li>Cumplir con todas las leyes y regulaciones aplicables</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Pagos y Facturación
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Los planes de pago de InfraUX se facturan de forma mensual o anual, según su elección:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Los pagos se procesan automáticamente al inicio de cada período de facturación</li>
                  <li>Los precios están sujetos a cambios con 30 días de aviso previo</li>
                  <li>No se realizan reembolsos por períodos parciales</li>
                  <li>Los planes anuales incluyen un descuento del 20%</li>
                  <li>Aceptamos tarjetas de crédito, PayPal y transferencias bancarias</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Cancelaciones
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Puede cancelar su suscripción en cualquier momento:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>La cancelación será efectiva al final del período de facturación actual</li>
                  <li>No se realizarán cargos adicionales después de la cancelación</li>
                  <li>Mantendrá acceso al servicio hasta el final del período pagado</li>
                  <li>Los datos se conservarán durante 30 días después de la cancelación</li>
                  <li>Puede reactivar su cuenta en cualquier momento</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Propiedad Intelectual
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Todo el contenido y la tecnología de InfraUX están protegidos por derechos de autor:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Usted mantiene todos los derechos sobre su contenido e infraestructura</li>
                  <li>InfraUX mantiene los derechos sobre la plataforma y tecnología</li>
                  <li>No puede copiar, modificar o distribuir el software de InfraUX</li>
                  <li>Otorga a InfraUX licencia para usar su contenido solo para proporcionar el servicio</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Limitación de Responsabilidad
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  InfraUX se proporciona "tal cual" sin garantías de ningún tipo. No seremos responsables por:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Pérdidas o daños indirectos, incidentales o consecuentes</li>
                  <li>Pérdida de datos o interrupciones del servicio</li>
                  <li>Errores o inexactitudes en el contenido</li>
                  <li>Acciones de terceros que utilicen el servicio</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Modificaciones a los Términos
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Los cambios serán notificados con 30 días de anticipación</li>
                  <li>El uso continuado del servicio constituye aceptación de los nuevos términos</li>
                  <li>Si no acepta los cambios, puede cancelar su cuenta</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  9. Contacto Legal
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Para cualquier consulta legal o sobre estos términos, contáctenos en:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Email:</strong> legal@infraux.com<br />
                    <strong>Dirección:</strong> InfraUX Technologies<br />
                    Cartagena, Colombia
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  Al utilizar InfraUX, usted reconoce que ha leído, entendido y acepta estar sujeto a estos Términos de Servicio.
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