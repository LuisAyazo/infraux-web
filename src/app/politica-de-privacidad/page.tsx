import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - InfraUX',
  description: 'Política de privacidad de InfraUX. Conoce cómo protegemos y manejamos tus datos personales.',
};

export default function PoliticaDePrivacidadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      <main className="flex-grow">
        <div className="py-24 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Política de Privacidad
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Introducción
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  En InfraUX, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta Política de Privacidad 
                  describe cómo recopilamos, usamos, almacenamos y protegemos su información personal cuando utiliza 
                  nuestra plataforma de gestión de infraestructura cloud.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Al utilizar InfraUX, usted acepta las prácticas descritas en esta política. Si no está de acuerdo, 
                  por favor no utilice nuestros servicios.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. Información que Recolectamos
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Recopilamos diferentes tipos de información para proporcionar y mejorar nuestros servicios:
                </p>
                
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  2.1 Información Personal
                </h3>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Datos de registro:</strong> Nombre, dirección de correo electrónico, empresa</li>
                  <li><strong>Información de pago:</strong> Procesada de forma segura a través de Paddle (no almacenamos datos de tarjetas)</li>
                  <li><strong>Información de perfil:</strong> Foto de perfil, preferencias de usuario, configuración</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  2.2 Datos de Uso
                </h3>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Actividad en la aplicación:</strong> Diagramas creados, proyectos, colaboraciones</li>
                  <li><strong>Logs de acceso:</strong> Direcciones IP, tipo de navegador, páginas visitadas</li>
                  <li><strong>Métricas de rendimiento:</strong> Tiempos de carga, errores, uso de funcionalidades</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  2.3 Cookies y Tecnologías Similares
                </h3>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Cookies esenciales:</strong> Para mantener su sesión y preferencias</li>
                  <li><strong>Cookies de análisis:</strong> Para entender cómo usa la plataforma (Mixpanel, PostHog)</li>
                  <li><strong>Cookies de marketing:</strong> Solo con su consentimiento explícito</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. Cómo Usamos su Información
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Proporcionar y mantener nuestros servicios</li>
                  <li>Procesar pagos y gestionar suscripciones</li>
                  <li>Enviar notificaciones importantes sobre su cuenta</li>
                  <li>Mejorar y personalizar su experiencia</li>
                  <li>Desarrollar nuevas funcionalidades</li>
                  <li>Prevenir fraude y actividades maliciosas</li>
                  <li>Cumplir con obligaciones legales</li>
                  <li>Enviar comunicaciones de marketing (solo con su consentimiento)</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Compartir Información con Terceros
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  No vendemos su información personal. Solo compartimos datos con terceros en los siguientes casos:
                </p>
                
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  4.1 Proveedores de Servicios
                </h3>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Paddle:</strong> Procesamiento de pagos y facturación</li>
                  <li><strong>Mixpanel/PostHog:</strong> Análisis de uso y mejora del producto</li>
                  <li><strong>AWS/GCP:</strong> Alojamiento de infraestructura</li>
                  <li><strong>SendGrid:</strong> Envío de correos transaccionales</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  4.2 Requisitos Legales
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Podemos divulgar información si es requerido por ley, orden judicial o para proteger nuestros derechos.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  4.3 Transferencias de Negocio
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  En caso de fusión, adquisición o venta de activos, su información puede ser transferida con previo aviso.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Seguridad de los Datos
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Encriptación de datos en tránsito (TLS/SSL) y en reposo</li>
                  <li>Autenticación de dos factores (2FA) disponible</li>
                  <li>Acceso restringido a datos personales</li>
                  <li>Auditorías de seguridad regulares</li>
                  <li>Cumplimiento con estándares de la industria</li>
                  <li>Respaldos automáticos y recuperación ante desastres</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Sus Derechos
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Usted tiene los siguientes derechos sobre su información personal:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Acceso:</strong> Solicitar una copia de sus datos personales</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                  <li><strong>Eliminación:</strong> Solicitar la eliminación de su cuenta y datos</li>
                  <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado</li>
                  <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos</li>
                  <li><strong>Restricción:</strong> Limitar el procesamiento de sus datos</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Cómo Eliminar su Cuenta
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Para eliminar su cuenta y todos los datos asociados:
                </p>
                <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Inicie sesión en su cuenta de InfraUX</li>
                  <li>Vaya a Configuración → Cuenta</li>
                  <li>Haga clic en "Eliminar cuenta"</li>
                  <li>Confirme la eliminación ingresando su contraseña</li>
                </ol>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  También puede solicitar la eliminación contactando a support@infraux.com. 
                  Procesaremos su solicitud dentro de 30 días.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Retención de Datos
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Conservamos su información personal solo durante el tiempo necesario:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Datos de cuenta activa:</strong> Mientras mantenga su cuenta</li>
                  <li><strong>Datos después de cancelación:</strong> 30 días para permitir reactivación</li>
                  <li><strong>Registros de facturación:</strong> 7 años por requisitos legales</li>
                  <li><strong>Logs de seguridad:</strong> 90 días</li>
                  <li><strong>Copias de seguridad:</strong> Máximo 90 días después de eliminación</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  9. Menores de Edad
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  InfraUX no está dirigido a menores de 18 años. No recopilamos intencionalmente 
                  información de menores. Si descubrimos que hemos recopilado datos de un menor, 
                  los eliminaremos inmediatamente.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  10. Transferencias Internacionales
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Sus datos pueden ser transferidos y procesados en países diferentes al suyo. 
                  Garantizamos que estas transferencias cumplan con las regulaciones aplicables 
                  mediante:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Cláusulas contractuales estándar de la UE</li>
                  <li>Certificaciones de privacidad</li>
                  <li>Evaluaciones de impacto de privacidad</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  11. Cambios a esta Política
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Podemos actualizar esta política ocasionalmente. Los cambios significativos serán 
                  notificados por correo electrónico o mediante un aviso prominente en la plataforma 
                  con al menos 30 días de anticipación.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  12. Contacto
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Si tiene preguntas sobre esta política o sobre cómo manejamos sus datos, contáctenos:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Email de privacidad:</strong> privacy@infraux.com<br />
                    <strong>Email de soporte:</strong> support@infraux.com<br />
                    <strong>Dirección:</strong> InfraUX Technologies<br />
                    Cartagena, Colombia
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  Esta política de privacidad es efectiva a partir de la fecha indicada arriba y 
                  se aplica a todos los usuarios de InfraUX.
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