'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import NewPricingTable from '@/components/landing/NewPricingTable';
import {
  SparklesIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/solid';

const translations = {
  header: {
    title: 'Planes y Precios <span class="gradient-text-emerald">Transparentes</span>',
    subtitle: 'Elige el plan perfecto para tu equipo. Sin costos ocultos, cancela cuando quieras.',
    badge: 'Comparación Detallada de Planes',
  },
  plansMeta: {
    free: {
      name: 'Gratis',
      icon: SparklesIcon,
      price: '$0',
      period: 'Para siempre',
      description: 'Perfecto para explorar InfraUX y proyectos personales.',
      cta: 'Empezar Gratis',
      ctaLink: '/registro',
      featured: false,
    },
    pro: {
      name: 'Startup',
      icon: RocketLaunchIcon,
      price: '$29',
      period: '/ usuario / mes',
      description: 'Ideal para startups y equipos ágiles que están creciendo rápido.',
      cta: 'Prueba 14 días gratis',
      ctaLink: '/registro?plan=startup',
      featured: false,
    },
    business: {
      name: 'Empresarial',
      icon: BuildingOfficeIcon,
      price: '$99',
      period: '/ usuario / mes',
      description: 'Para equipos en crecimiento con colaboración avanzada.',
      cta: 'Prueba 14 días gratis',
      ctaLink: '/registro?plan=business',
      featured: true,
    },
    enterprise: {
      name: 'Corporativo',
      icon: BuildingOffice2Icon,
      price: 'Personalizado',
      period: 'Contactar ventas',
      description: 'Soluciones a medida para grandes organizaciones.',
      cta: 'Contactar Ventas',
      ctaLink: '/contacto',
      featured: false,
    },
  },
  pricingData: [
    {
      category: 'Plataforma Principal',
      features: [
        { name: 'Editor Visual de Diagramas', tooltip: 'Interfaz intuitiva de arrastrar y soltar para diseñar tu infraestructura.', plans: { free: true, pro: true, business: true, enterprise: true } },
        { name: 'Proyectos Activos', tooltip: 'Un proyecto es un contenedor para tus diagramas y configuraciones.', plans: { free: '1', pro: '5', business: '20', enterprise: 'Ilimitados' } },
        { name: 'Diagramas por Proyecto', plans: { free: '3', pro: '10', business: '50', enterprise: 'Ilimitados' } },
        { name: 'Usuarios por Organización', plans: { free: '1', pro: 'Hasta 5', business: 'Hasta 20', enterprise: 'Ilimitados' } },
        { name: 'Recursos por Diagrama', tooltip: 'Número máximo de recursos cloud que puedes agregar a cada diagrama.', plans: { free: '20', pro: '100', business: '500', enterprise: 'Ilimitados' } },
      ],
    },
    {
      category: 'Colaboración y Versiones',
      features: [
        { name: 'Colaboración en Tiempo Real', tooltip: 'Múltiples usuarios pueden editar el mismo diagrama simultáneamente.', plans: { free: false, pro: true, business: true, enterprise: true } },
        { name: 'Control de Versiones', tooltip: 'Historial completo de cambios con capacidad de rollback.', plans: { free: false, pro: '30 días', business: '1 año', enterprise: 'Ilimitado' } },
        { name: 'Comentarios y Anotaciones', tooltip: 'Agrega comentarios a recursos específicos para mejorar la colaboración.', plans: { free: false, pro: true, business: true, enterprise: true } },
        { name: 'Roles y Permisos', tooltip: 'Controla quién puede ver, editar o desplegar cada proyecto.', plans: { free: false, pro: 'Básicos', business: 'Avanzados', enterprise: 'Granulares' } },
      ],
    },
    {
      category: 'Despliegue y Ejecución',
      features: [
        { name: 'Exportar código IaC', tooltip: 'Genera código Terraform, CloudFormation, Pulumi y más.', plans: { free: 'Terraform', pro: 'Terraform + CFN', business: 'Todos', enterprise: 'Todos + Custom' } },
        { name: 'Despliegues por mes', tooltip: 'Número de despliegues que puedes ejecutar directamente desde InfraUX.', plans: { free: '5', pro: '50', business: '200', enterprise: 'Ilimitados' } },
        { name: 'Environments', tooltip: 'Administra múltiples entornos (dev, staging, prod) por proyecto.', plans: { free: '1', pro: '3', business: '10', enterprise: 'Ilimitados' } },
        { name: 'Rollback Automático', tooltip: 'Detecta fallos y revierte automáticamente los despliegues problemáticos.', plans: { free: false, pro: false, business: true, enterprise: true } },
        { name: 'Aprobaciones de Despliegue', tooltip: 'Workflow de aprobaciones para entornos críticos.', plans: { free: false, pro: false, business: true, enterprise: true } },
      ],
    },
    {
        category: 'Análisis y Optimización',
        features: [
            { name: 'Estimación de Costos', tooltip: 'Estima los costos de tu infraestructura antes de desplegar.', plans: { free: 'Básica', pro: 'Detallada', business: 'Avanzada con alertas', enterprise: 'Predictiva con ML' } },
            { name: 'Análisis de Seguridad', tooltip: 'Detecta problemas de seguridad en tu infraestructura.', plans: { free: false, pro: 'Básico', business: 'Completo', enterprise: 'Avanzado + Compliance' } },
            { name: 'Optimización de Recursos', tooltip: 'Sugerencias para optimizar costos y rendimiento.', plans: { free: false, pro: false, business: true, enterprise: true } },
            { name: 'Dashboards Personalizados', tooltip: 'Crea dashboards con métricas clave.', plans: { free: false, pro: '1', business: '5', enterprise: 'Ilimitados' } },
        ]
    },
    {
      category: 'Integraciones',
      features: [
        { name: 'Integración con Git', tooltip: 'Sincroniza tus diagramas con repositorios Git.', plans: { free: 'GitHub público', pro: 'GitHub, GitLab', business: 'Todos + Bitbucket', enterprise: 'Custom + Enterprise Git' } },
        { name: 'Webhooks', tooltip: 'Recibe notificaciones de eventos en tu infraestructura.', plans: { free: false, pro: '5', business: '20', enterprise: 'Ilimitados' } },
        { name: 'API REST', tooltip: 'Accede a InfraUX programáticamente.', plans: { free: false, pro: '1K req/mes', business: '10K req/mes', enterprise: 'Ilimitado' } },
        { name: 'Integraciones Enterprise', tooltip: 'Slack, Teams, Jira, ServiceNow, etc.', plans: { free: false, pro: false, business: 'Básicas', enterprise: 'Todas + Custom' } },
      ],
    },
    {
      category: 'Seguridad y Soporte',
      features: [
        { name: 'Autenticación SSO/SAML', tooltip: 'Intégrate con tu proveedor de identidad corporativo.', plans: { free: false, pro: false, business: 'SSO', enterprise: 'SSO + SAML + LDAP' } },
        { name: 'Encriptación de Datos', plans: { free: 'En tránsito', pro: 'En tránsito', business: 'En tránsito y reposo', enterprise: 'Completa + HSM' } },
        { name: 'Logs de Auditoría', plans: { free: false, pro: '30 días', business: '1 año', enterprise: 'Ilimitado + SIEM' } },
        { name: 'SLA de Uptime', plans: { free: false, pro: '99%', business: '99.5%', enterprise: '99.9%' } },
        { name: 'Soporte', plans: { free: 'Comunidad', pro: 'Email (48h)', business: 'Email + Chat (8h)', enterprise: 'Dedicado 24/7 + Teléfono' } },
        { name: 'Onboarding y Capacitación', plans: { free: 'Docs', pro: 'Videos', business: 'Webinars', enterprise: 'Personalizado 1-on-1' } },
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
