'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import NewPricingTable from '@/components/landing/NewPricingTable';
import {
  FireIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/solid';

const translations = {
  header: {
    title: 'El Plan Perfecto para <span class="gradient-text-emerald">Cada Equipo</span>',
    subtitle: 'Desde desarrolladores individuales hasta grandes empresas, InfraUX tiene un plan que se ajusta a tus necesidades.',
    badge: 'Comparación Detallada de Características',
  },
  plansMeta: {
    free: {
      name: 'Gratis',
      icon: FireIcon,
      price: '$0',
      period: 'Para siempre',
      description: 'Para individuos y proyectos pequeños. Empieza con las funcionalidades clave.',
      cta: 'Empieza Gratis',
      ctaLink: '/register',
      featured: false,
    },
    pro: {
      name: 'Pro',
      icon: UserGroupIcon,
      price: '$24',
      period: '/ usuario / mes',
      description: 'Para profesionales y equipos que necesitan colaborar y escalar.',
      cta: 'Prueba 14 días gratis',
      ctaLink: '/register?plan=pro',
      featured: true,
    },
    enterprise: {
      name: 'Enterprise',
      icon: BuildingOffice2Icon,
      price: 'Personalizado',
      period: 'Facturado anualmente',
      description: 'Para organizaciones con necesidades avanzadas de seguridad, despliegue y soporte.',
      cta: 'Contactar a Ventas',
      ctaLink: '/contacto',
      featured: false,
    },
  },
  pricingData: [
    {
      category: 'Plataforma Principal',
      features: [
        { name: 'Editor Visual de Diagramas', tooltip: 'Interfaz intuitiva de arrastrar y soltar para diseñar tu infraestructura.', plans: { free: true, pro: true, enterprise: true } },
        { name: 'Proyectos Activos', tooltip: 'Un proyecto es un contenedor para tus diagramas y configuraciones.', plans: { free: '3', pro: 'Ilimitados', enterprise: 'Ilimitados' } },
        { name: 'Diagramas por Proyecto', plans: { free: '5', pro: 'Ilimitados', enterprise: 'Ilimitados' } },
        { name: 'Usuarios', plans: { free: '1', pro: 'Hasta 10', enterprise: 'Ilimitados' } },
      ],
    },
    {
      category: 'Código y Automatización',
      features: [
        { name: 'Generación de Código IaC', tooltip: 'Genera automáticamente Infraestructura como Código a partir de tus diagramas.', plans: { free: 'Terraform', pro: 'Terraform, Pulumi, CloudFormation', enterprise: 'Todos + Ansible y Custom' } },
        { name: 'Vista Previa en Vivo', tooltip: 'Ve las actualizaciones de código en tiempo real mientras editas tus diagramas.', plans: { free: true, pro: true, enterprise: true } },
        { name: 'Historial de Versiones', tooltip: 'Rastrea los cambios en tus diagramas y revierte a versiones anteriores.', plans: { free: '7 días', pro: '365 días', enterprise: 'Ilimitado' } },
        { name: 'Plantillas', tooltip: 'Empieza con arquitecturas pre-construidas para casos de uso comunes.', plans: { free: 'Plantillas Básicas', pro: 'Librería de Plantillas Premium', enterprise: 'Plantillas Corporativas Custom' } },
      ],
    },
    {
      category: 'Despliegue y CI/CD',
      features: [
        { name: 'Constructor Visual de Pipelines', tooltip: 'Crea pipelines de CI/CD con nodos para construir, probar y desplegar.', plans: { free: 'Acceso Beta', pro: true, enterprise: true } },
        { name: 'Despliegues Automatizados', tooltip: 'Despliega tu infraestructura directamente desde InfraUX a tu cuenta en la nube.', plans: { free: '1 al mes', pro: '50 al mes', enterprise: 'Ilimitados' } },
        { name: 'Historial y Logs de Despliegue', tooltip: 'Rastrea todas tus actividades de despliegue y ve logs detallados.', plans: { free: 'Últimos 5', pro: 'Historial Completo', enterprise: 'Historial Completo' } },
        { name: 'Actualizaciones de Despliegue en Tiempo Real', tooltip: 'Ve el progreso del despliegue en vivo a través de WebSockets.', plans: { free: false, pro: true, enterprise: true } },
        { name: 'Plataformas Soportadas', tooltip: 'Proveedores de nube a los que puedes desplegar.', plans: { free: 'N/A', pro: 'AWS, GCP', enterprise: 'AWS, GCP, Azure, Kubernetes' } },
      ],
    },
    {
        category: 'Entornos y Promociones',
        features: [
            { name: 'Múltiples Entornos', tooltip: 'Gestiona entornos separados como desarrollo, staging y producción.', plans: { free: '2 (dev, prod)', pro: '5', enterprise: 'Ilimitados' } },
            { name: 'Promover a Entorno', tooltip: 'Promueve cambios de un diagrama de un entorno a otro (ej. de staging a producción).', plans: { free: '5 al mes', pro: 'Ilimitado', enterprise: 'Ilimitado' } },
            { name: 'Credenciales por Entorno', tooltip: 'Usa diferentes credenciales de nube para cada entorno.', plans: { free: false, pro: true, enterprise: true } },
            { name: 'Caché de Entornos', tooltip: 'Tiempos de carga más rápidos al cachear las configuraciones de los entornos.', plans: { free: false, pro: true, enterprise: true } },
        ],
    },
    {
        category: 'Analíticas y Observabilidad',
        features: [
            { name: 'Feature Flags', tooltip: 'Gestiona el lanzamiento de características con la integración de PostHog.', plans: { free: 'Acceso Beta', pro: true, enterprise: true } },
            { name: 'Analíticas de Comportamiento', tooltip: 'Entiende cómo tu equipo usa InfraUX con analíticas detalladas.', plans: { free: false, pro: 'Dashboard Básico', enterprise: 'Analíticas y Reportes Avanzados' } },
            { name: 'Seguimiento de Eventos de Despliegue', tooltip: 'Rastrea eventos de despliegue (inicio, éxito, fallo) en tus herramientas de analítica.', plans: { free: false, pro: true, enterprise: true } },
        ]
    },
    {
      category: 'Colaboración e Integraciones',
      features: [
        { name: 'Colaboración en Tiempo Real', tooltip: 'Trabaja en el mismo diagrama con tu equipo simultáneamente.', plans: { free: false, pro: true, enterprise: true } },
        { name: 'Integración con Git (GitHub, GitLab)', tooltip: 'Sincroniza tus diagramas con tus repositorios de Git.', plans: { free: 'Básica (Repos Públicos)', pro: 'Completa (Repos Privados)', enterprise: 'Completa + Integración CI/CD' } },
        { name: 'Acceso API', tooltip: 'Interactúa programáticamente con tus proyectos de InfraUX.', plans: { free: false, pro: '1,000 llamadas/mes', enterprise: 'Ilimitado + Alta Prioridad' } },
      ],
    },
    {
      category: 'Seguridad y Soporte',
      features: [
        { name: 'Autenticación SSO/SAML', tooltip: 'Intégrate con tu proveedor de identidad corporativo (Okta, Azure AD).', plans: { free: false, pro: false, enterprise: true } },
        { name: 'Logs de Auditoría Avanzados', plans: { free: false, pro: 'Logs Básicos', enterprise: 'Registro de Auditoría Completo' } },
        { name: 'SLA de Uptime', plans: { free: false, pro: false, enterprise: '99.9%' } },
        { name: 'Soporte', plans: { free: 'Comunidad en Discord', pro: 'Soporte por Email (24h)', enterprise: 'Manager Dedicado y Prioridad 24/7' } },
      ],
    },
  ],
  faqs: {
    title: '¿Tienes Preguntas? Tenemos Respuestas',
    subtitle: 'Encuentra respuestas a preguntas comunes sobre planes, facturación y características.',
    badge: 'Preguntas Frecuentes',
    items: [
      { question: '¿Puedo cambiar de plan en cualquier momento?', answer: 'Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplicarán en tu próximo ciclo de facturación y ajustaremos el prorrateo automáticamente.' },
      { question: '¿Qué métodos de pago aceptan?', answer: 'Aceptamos todas las tarjetas de crédito principales (Visa, MasterCard, American Express), PayPal y transferencias bancarias para planes anuales. Los planes Enterprise pueden usar órdenes de compra.' },
      { question: '¿Hay descuentos por pago anual?', answer: 'Sí, ofrecemos un 20% de descuento en todos los planes pagados anualmente. Esto significa que pagas solo 10 meses en lugar de 12.' },
      { question: '¿Qué es SSO/SAML?', answer: 'Single Sign-On (SSO) con SAML permite a tu equipo iniciar sesión usando las credenciales corporativas existentes (Google Workspace, Microsoft AD, Okta, etc.), mejorando la seguridad y simplificando el acceso.' },
    ],
  },
  finalCta: {
    title: '¿Listo para Transformar <span class="block gradient-text-emerald">Tu Infraestructura?</span>',
    subtitle: 'Únete a miles de equipos que ya confían en InfraUX para gestionar su infraestructura en la nube de forma visual.',
    badge: 'Garantía de Devolución de 30 Días',
    cta_main: 'Empezar Prueba Gratis',
    cta_secondary: 'Hablar con Ventas',
  },
};

export default function PricingPage() {
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
