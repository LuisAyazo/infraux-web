'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import NewPricingTable from '@/components/landing/NewPricingTable';
import {
  SparklesIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  ServerIcon,
} from '@heroicons/react/24/solid';

const translations = {
  header: {
    title: 'Precios <span class="gradient-text-emerald">Flexibles</span>',
    subtitle: 'Planes diseñados para escalar con tus necesidades, desde proyectos personales hasta grandes empresas.',
    badge: 'Planes para todos',
  },
  plansMeta: {
    free: {
      name: 'Gratis',
      icon: SparklesIcon,
      price: '$0',
      period: 'Para siempre',
      description: 'Perfecto para proyectos personales y equipos pequeños. Sin tarjeta de crédito.',
      cta: 'Empezar Gratis',
      ctaLink: '/registro',
      featured: true,
    },
    startup: {
        name: 'Startup',
        icon: RocketLaunchIcon,
        price: '$299',
        period: 'por usuario/mes',
        description: 'Para equipos en crecimiento que necesitan más potencia',
        cta: 'Empezar Prueba',
        ctaLink: '/registro?plan=startup',
        featured: false,
    },
    business: {
      name: 'Business',
      icon: BuildingOfficeIcon,
      price: '$999',
      period: 'por usuario/mes',
      description: 'Para empresas con necesidades avanzadas de seguridad y soporte.',
      cta: 'Contactar Ventas',
      ctaLink: '/contacto',
      featured: false,
    },
    enterprise: {
      name: 'Enterprise',
      icon: ServerIcon,
      price: 'Personalizado',
      period: 'Contactar ventas',
      description: 'Infraestructura dedicada, integraciones personalizadas y soporte premium.',
      cta: 'Contactar Ventas',
      ctaLink: '/contacto',
      featured: false,
    },
  },
  pricingData: [
    {
      category: 'Plataforma Principal',
      features: [
        { name: 'Editor Visual de Diagramas', tooltip: 'Interfaz intuitiva de arrastrar y soltar para diseñar tu infraestructura.', plans: { free: true, startup: true, business: true, enterprise: true } },
        { name: 'Proyectos Activos', tooltip: 'Un proyecto es un contenedor para tus diagramas y configuraciones.', plans: { free: '2', startup: '10', business: 'Ilimitados', enterprise: 'Ilimitados' } },
        { name: 'Diagramas por Proyecto', plans: { free: '10', startup: 'Ilimitados', business: 'Ilimitados', enterprise: 'Ilimitados' } },
        { name: 'Miembros del Equipo', plans: { free: '3', startup: 'Ilimitados', business: 'Ilimitados', enterprise: 'Ilimitados' } },
        { name: 'Recursos por Diagrama', tooltip: 'Número máximo de recursos cloud que puedes agregar a cada diagrama.', plans: { free: '50', startup: 'Ilimitados', business: 'Ilimitados', enterprise: 'Ilimitados' } },
      ],
    },
    {
      category: 'Código y Automatización',
      features: [
        { name: 'Generación de Código IaC', tooltip: 'Genera automáticamente código de Infraestructura como Código desde tus diagramas.', plans: { free: 'Terraform, CloudFormation', startup: 'Todos los proveedores', business: 'Todos los proveedores', enterprise: 'Todos + Personalizado' } },
        { name: 'Vista Previa en Vivo', tooltip: 'Ve actualizaciones de código en tiempo real mientras editas tus diagramas.', plans: { free: true, startup: true, business: true, enterprise: true } },
        { name: 'Historial de Versiones', tooltip: 'Rastrea cambios en tus diagramas y revierte a versiones anteriores.', plans: { free: '7 días', startup: '30 días', business: 'Ilimitado', enterprise: 'Ilimitado' } },
        { name: 'Plantillas', tooltip: 'Comienza con arquitecturas pre-construidas para casos de uso comunes.', plans: { free: 'Comunidad', startup: 'Todas las plantillas', business: 'Todas las plantillas', enterprise: 'Enterprise Personalizado' } },
        { name: 'Importar Infraestructura Existente', tooltip: 'Importa tu infraestructura actual desde tu proveedor cloud.', plans: { free: 'Hasta 50 recursos', startup: 'Ilimitado', business: 'Ilimitado', enterprise: 'Ilimitado' } },
      ],
    },
    {
      category: 'Despliegue y Ejecución',
      features: [
        { name: 'Despliegues por Mes', tooltip: 'Despliega tu infraestructura directamente desde InfraUX.', plans: { free: '10', startup: '100', business: 'Ilimitados', enterprise: 'Ilimitados' } },
        { name: 'Entornos de Despliegue', tooltip: 'Gestiona diferentes entornos como dev, staging y producción.', plans: { free: '2', startup: 'Ilimitados', business: 'Ilimitados', enterprise: 'Ilimitados' } },
        { name: 'Rollback Automático', tooltip: 'Revierte automáticamente los cambios en caso de fallo.', plans: { free: false, startup: true, business: true, enterprise: true } },
        { name: 'Plataformas Soportadas', tooltip: 'Proveedores cloud donde puedes desplegar.', plans: { free: 'AWS, GCP, Azure', startup: 'Todos', business: 'Todos', enterprise: 'Todos + On-premise' } },
        { name: 'Integración CI/CD', plans: { free: 'Básica', startup: 'Completa', business: 'Completa', enterprise: 'Pipelines personalizados' } },
      ],
    },
    {
        category: 'Colaboración y Equipos',
        features: [
            { name: 'Colaboración en Tiempo Real', tooltip: 'Trabaja en el mismo diagrama con tu equipo simultáneamente.', plans: { free: true, startup: true, business: true, enterprise: true } },
            { name: 'Comentarios y Revisiones', tooltip: 'Comenta y revisa cambios antes de aplicarlos.', plans: { free: 'Básico', startup: 'Completo', business: 'Completo', enterprise: 'Flujos avanzados' } },
            { name: 'Control de Acceso', tooltip: 'Define roles y permisos para tu equipo.', plans: { free: 'Básico', startup: 'Avanzado', business: 'Avanzado', enterprise: 'RBAC Personalizado' } },
            { name: 'Logs de Auditoría', plans: { free: false, startup: '30 días', business: '90 días', enterprise: 'Ilimitado + Exportar' } },
        ],
    },
    {
        category: 'Rendimiento y Límites',
        features: [
            { name: 'Límite de API', tooltip: 'Solicitudes por hora a nuestra API.', plans: { free: '1K/hora', startup: '10K/hora', business: '50K/hora', enterprise: 'Ilimitado' } },
            { name: 'Ancho de Banda', tooltip: 'Transferencia de datos mensual permitida.', plans: { free: '10GB', startup: '100GB', business: '1TB', enterprise: 'Ilimitado' } },
            { name: 'Almacenamiento', tooltip: 'Espacio para tus diagramas y código generado.', plans: { free: '5GB', startup: '50GB', business: '500GB', enterprise: 'Ilimitado' } },
            { name: 'Tiempo de Cómputo', tooltip: 'Horas de cómputo mensuales para despliegues.', plans: { free: '100 horas', startup: '1000 horas', business: 'Ilimitado', enterprise: 'Ilimitado' } },
        ]
    },
    {
      category: 'Soporte y SLA',
      features: [
        { name: 'Soporte de la Comunidad', plans: { free: true, startup: true, business: true, enterprise: true } },
        { name: 'Soporte Prioritario', plans: { free: false, startup: 'Email', business: 'Email y Chat', enterprise: '24/7 Dedicado' } },
        { name: 'SLA de Uptime', plans: { free: false, startup: '99.5%', business: '99.9%', enterprise: '99.99%' } },
        { name: 'Capacitación Personalizada', plans: { free: false, startup: false, business: false, enterprise: true } },
        { name: 'Gerente de Éxito Dedicado', plans: { free: false, startup: false, business: true, enterprise: true } },
      ],
    },
  ],
  faqs: {
    title: 'Preguntas Frecuentes',
    subtitle: 'Encuentra respuestas a las preguntas más comunes sobre nuestros planes y características.',
    badge: 'Preguntas Frecuentes',
    items: [
      { question: '¿Qué incluye el plan gratuito?', answer: 'El plan gratuito incluye 2 proyectos activos, 10 despliegues al mes, colaboración en tiempo real para hasta 3 miembros del equipo y todas las características principales. Es perfecto para proyectos personales y equipos pequeños.' },
      { question: '¿Puedo cambiar de plan en cualquier momento?', answer: 'Sí, puedes cambiar de plan en cualquier momento desde tu panel de control. Las actualizaciones son inmediatas y se prorratean.' },
      { question: '¿Qué métodos de pago aceptan?', answer: 'Aceptamos las principales tarjetas de crédito, incluyendo Visa, Mastercard y American Express. Para planes Enterprise, también ofrecemos facturación.' },
      { question: '¿Cómo funciona el soporte?', answer: 'Todos los planes incluyen soporte de la comunidad. Los planes de pago ofrecen soporte por correo electrónico y, en el plan Enterprise, soporte dedicado 24/7.' },
      { question: '¿Ofrecen descuentos para startups o educación?', answer: '¡Sí! Ofrecemos descuentos especiales para startups y planes gratuitos para instituciones educativas. Contáctanos para más información.' },
    ],
  },
  finalCta: {
    title: '¿Listo para Transformar tu Infraestructura?',
    subtitle: 'Únete a miles de desarrolladores que construyen mejor infraestructura con InfraUX.',
    badge: 'Sin Riesgos • Cancela Cuando Quieras',
    cta_main: 'Empezar Gratis',
    cta_secondary: 'Hablar con un Experto',
  },
};

export default function PreciosClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      <main className="flex-grow">
        <NewPricingTable translations={translations} />
      </main>
      <FooterNew />
    </div>
  );
}
