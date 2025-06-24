'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';
import { 
  CheckIcon,
  XMarkIcon,
  ArrowRightIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  InformationCircleIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  DocumentArrowDownIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  DocumentTextIcon,
  BeakerIcon,
  PuzzlePieceIcon,
  LockClosedIcon,
  GlobeAsiaAustraliaIcon,
  FireIcon,
  CubeIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

// Componente de Tooltip
function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {show && (
        <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-slate-900 dark:bg-slate-700 rounded-lg whitespace-nowrap max-w-xs">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-900 dark:border-t-slate-700" />
        </div>
      )}
    </div>
  );
}

// Tipo para las características
type FeatureValue = {
  value: string | boolean;
  included: boolean;
  tooltip?: string;
};

const plans = [
  {
    name: 'Hobby',
    price: 0,
    period: '',
    description: 'Perfecto para proyectos personales y aprendizaje',
    icon: RocketLaunchIcon,
    features: {
      'Proyectos activos': { value: '1', included: true },
      'Usuarios': { value: '1', included: true },
      'Diagramas por proyecto': { value: '3', included: true },
      'Exportar diagramas': { value: 'Solo PNG', included: true },
      'Templates': { value: '5 básicas', included: true },
      'Historial de versiones': { value: false, included: false },
      'Colaboración': { value: false, included: false },
      'Ambientes': { value: '1 (producción)', included: true },
      'Integraciones': { value: false, included: false },
      'API': { value: false, included: false },
      'Soporte': { value: 'Comunidad Discord', included: true },
      'Backup': { value: false, included: false }
    } as Record<string, FeatureValue>,
    highlights: [
      'Empieza gratis, sin tarjeta',
      'Ideal para aprender',
      'Comunidad activa'
    ],
    cta: 'Empezar gratis',
    ctaLink: '/register',
    featured: false
  },
  {
    name: 'Starter',
    price: 19,
    period: '/mes',
    description: 'Para desarrolladores independientes y freelancers',
    icon: UserGroupIcon,
    features: {
      'Proyectos activos': { value: '5', included: true },
      'Usuarios': { value: '1', included: true },
      'Diagramas por proyecto': { value: 'Ilimitados', included: true },
      'Exportar diagramas': { value: 'PNG, SVG, PDF', included: true },
      'Templates': { value: '50+ premium', included: true },
      'Historial de versiones': { value: '30 días', included: true },
      'Colaboración': { value: false, included: false },
      'Ambientes': { value: '2 (dev, prod)', included: true },
      'Integraciones': { value: 'GitHub', included: true },
      'API': { value: 'Básica', included: true, tooltip: 'API REST con límite de 1000 llamadas/mes' },
      'Soporte': { value: 'Email (48h)', included: true },
      'Backup': { value: 'Diario', included: true }
    } as Record<string, FeatureValue>,
    highlights: [
      'Exportación completa',
      'Templates premium',
      'Historial de cambios'
    ],
    cta: 'Prueba 7 días gratis',
    ctaLink: '/register?plan=starter',
    featured: false
  },
  {
    name: 'Team',
    price: 49,
    period: '/usuario/mes',
    description: 'Para equipos que necesitan colaborar',
    icon: UserGroupIcon,
    features: {
      'Proyectos activos': { value: 'Ilimitados', included: true },
      'Usuarios': { value: 'Hasta 10', included: true },
      'Diagramas por proyecto': { value: 'Ilimitados', included: true },
      'Exportar diagramas': { value: 'Todos los formatos', included: true },
      'Templates': { value: 'Todas + custom', included: true },
      'Historial de versiones': { value: 'Ilimitado', included: true },
      'Colaboración': { value: 'Tiempo real', included: true, tooltip: 'Edición simultánea con cursores en vivo' },
      'Ambientes': { value: '3 (dev, staging, prod)', included: true, tooltip: 'Gestiona múltiples entornos desde un solo lugar' },
      'Integraciones': { value: 'GitHub, GitLab, Slack', included: true },
      'API': { value: 'Completa', included: true, tooltip: 'API REST sin límites + webhooks' },
      'Soporte': { value: 'Prioritario (24h)', included: true },
      'Backup': { value: 'Continuo', included: true }
    } as Record<string, FeatureValue>,
    highlights: [
      'Colaboración en tiempo real',
      'Análisis de costos incluido',
      'Soporte prioritario'
    ],
    cta: 'Prueba 14 días gratis',
    ctaLink: '/register?plan=team',
    featured: true,
    badge: 'MÁS POPULAR'
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    period: '',
    description: 'Soluciones a medida para grandes organizaciones',
    icon: GlobeAltIcon,
    features: {
      'Proyectos activos': { value: 'Ilimitados', included: true },
      'Usuarios': { value: 'Ilimitados', included: true },
      'Diagramas por proyecto': { value: 'Ilimitados', included: true },
      'Exportar diagramas': { value: 'Todos + formatos custom', included: true },
      'Templates': { value: 'Desarrollo personalizado', included: true },
      'Historial de versiones': { value: 'Políticas personalizadas', included: true },
      'Colaboración': { value: 'Enterprise', included: true },
      'Ambientes': { value: 'Ilimitados', included: true },
      'Integraciones': { value: 'Todas + custom', included: true },
      'API': { value: 'Dedicada + SDK', included: true },
      'Soporte': { value: 'Dedicado 24/7', included: true },
      'Backup': { value: 'Custom + DR', included: true, tooltip: 'Disaster Recovery con RTO/RPO personalizado' }
    } as Record<string, FeatureValue>,
    additionalFeatures: [
      { name: 'SSO/SAML', tooltip: 'Inicio de sesión único con tu proveedor de identidad' },
      { name: 'Audit logs avanzados', tooltip: 'Registro detallado de todas las acciones' },
      { name: 'Políticas de seguridad custom' },
      { name: 'Manager de cuenta dedicado' },
      { name: 'Revisión trimestral de arquitectura' },
      { name: 'Multi-región' },
      { name: 'SLA 99.99%', tooltip: 'Menos de 4.38 minutos de downtime al mes' },
      { name: 'Capacitación personalizada' },
      { name: 'Desarrollo de features exclusivas' },
      { name: 'Compliance (SOC2, HIPAA, ISO)' },
      { name: 'Contratos flexibles' },
      { name: 'Facturación personalizada' },
      { name: 'API prioritaria' },
      { name: 'Soporte multi-idioma' }
    ],
    highlights: [
      'SLA 99.99%',
      'SSO/SAML incluido',
      'Soporte dedicado'
    ],
    cta: 'Contactar ventas',
    ctaLink: '/contacto',
    featured: false
  }
];

const faqs = [
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer: 'Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplicarán en tu próximo ciclo de facturación y ajustaremos el prorrateo automáticamente.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos todas las tarjetas de crédito principales (Visa, MasterCard, American Express), PayPal y transferencias bancarias para planes anuales. Los planes Enterprise pueden usar órdenes de compra.'
  },
  {
    question: '¿Hay descuentos por pago anual?',
    answer: 'Sí, ofrecemos un 20% de descuento en todos los planes pagados anualmente. Esto significa que pagas solo 10 meses en lugar de 12.'
  },
  {
    question: '¿Qué es SSO/SAML?',
    answer: 'Single Sign-On (SSO) con SAML permite a tu equipo iniciar sesión usando las credenciales corporativas existentes (Google Workspace, Microsoft AD, Okta, etc.), mejorando la seguridad y simplificando el acceso.'
  },
  {
    question: '¿Puedo cancelar en cualquier momento?',
    answer: 'Sí, no hay contratos a largo plazo (excepto Enterprise). Puedes cancelar tu suscripción en cualquier momento y mantendrás el acceso hasta el final de tu período de facturación actual.'
  },
  {
    question: '¿Ofrecen descuentos para startups o educación?',
    answer: 'Sí, tenemos programas especiales con hasta 50% de descuento para startups calificadas (menos de 2 años, menos de $2M en funding) y instituciones educativas. Contáctanos para más información.'
  },
  {
    question: '¿Qué incluye el análisis de costos?',
    answer: 'El análisis de costos te muestra una estimación en tiempo real de cuánto costará tu infraestructura en AWS, GCP o Azure, ayudándote a optimizar recursos y evitar sorpresas en la factura.'
  },
  {
    question: '¿Cómo funciona la colaboración en tiempo real?',
    answer: 'Múltiples usuarios pueden editar el mismo diagrama simultáneamente. Verás los cursores de otros usuarios, cambios en tiempo real y un chat integrado para coordinar el trabajo.'
  }
];

// Iconos para características
const featureIcons: { [key: string]: any } = {
  'Proyectos activos': CubeIcon,
  'Usuarios': UserGroupIcon,
  'Diagramas por proyecto': DocumentTextIcon,
  'Exportar diagramas': DocumentArrowDownIcon,
  'Templates': PuzzlePieceIcon,
  'Historial de versiones': ClockIcon,
  'Colaboración': ChatBubbleLeftRightIcon,
  'Ambientes': BeakerIcon,
  'Integraciones': PuzzlePieceIcon,
  'API': CodeBracketIcon,
  'Soporte': PhoneIcon,
  'Backup': ArrowPathIcon
};

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const getPrice = (plan: typeof plans[0]) => {
    if (typeof plan.price === 'string') return plan.price;
    if (plan.price === 0) return 'Gratis';
    
    const price = billingPeriod === 'yearly' ? Math.floor(plan.price * 0.8) : plan.price;
    return `$${price}`;
  };

  const getPeriod = (plan: typeof plans[0]) => {
    if (typeof plan.price === 'string' || plan.price === 0) return '';
    return billingPeriod === 'yearly' ? `${plan.period} (facturado anualmente)` : plan.period;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        <div className="py-24 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-6">
                <SparklesIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Precios simples, sin sorpresas
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Planes que escalan con tu equipo
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
                Desde proyectos personales hasta infraestructuras enterprise. 
                Sin costos ocultos, cancela cuando quieras.
              </p>
              
              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    billingPeriod === 'monthly'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Mensual
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    billingPeriod === 'yearly'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Anual
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300">
                    -20%
                  </span>
                </button>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                {plans.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <div
                      key={plan.name}
                      className={`relative flex flex-col rounded-2xl p-4 lg:p-5 xl:p-6 transition-all duration-300 ${
                        plan.featured
                          ? 'bg-gradient-to-b from-indigo-600 to-purple-600 text-white shadow-2xl scale-105 z-10'
                          : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl'
                      }`}
                    >
                    {plan.badge && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                          <StarIcon className="h-4 w-4" />
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex-grow flex flex-col">
                      {/* Plan Header */}
                      <div className="text-center mb-4">
                        <Icon className={`h-8 w-8 lg:h-10 lg:w-10 mx-auto mb-3 ${
                          plan.featured ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'
                        }`} />
                        <h3 className={`text-lg lg:text-xl font-bold mb-2 ${
                          plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'
                        }`}>
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline justify-center gap-1 mb-3">
                          <span className={`text-2xl lg:text-3xl xl:text-4xl font-bold ${
                            plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'
                          }`}>
                            {getPrice(plan)}
                          </span>
                          {getPeriod(plan) && (
                            <span className={`text-sm ${
                              plan.featured ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'
                            }`}>
                              {getPeriod(plan)}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm h-12 ${
                          plan.featured ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'
                        }`}>
                          {plan.description}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3 mb-6">
                        {plan.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckIcon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                              plan.featured ? 'text-white' : 'text-green-500'
                            }`} />
                            <span className={`text-sm ${
                              plan.featured ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'
                            }`}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto pt-4">
                        <Link
                          href={plan.ctaLink}
                          className={`block w-full text-center py-2.5 px-4 rounded-xl font-semibold transition-all duration-200 text-sm ${
                            plan.featured
                              ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg'
                              : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg'
                          }`}
                        >
                          {plan.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>

            {/* FAQs */}
            <div className="max-w-4xl mx-auto mb-24">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                Preguntas frecuentes
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <span className="font-medium text-slate-900 dark:text-white pr-8">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUpIcon className="h-5 w-5 text-slate-500 flex-shrink-0" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5 text-slate-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-5">
                        <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-8">
                <SparklesIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  30 días de garantía de devolución
                </span>
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                ¿Listo para transformar tu infraestructura?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
                Únete a miles de equipos que ya confían en InfraUX para gestionar su infraestructura cloud de forma visual
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Empezar prueba gratis
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <QuestionMarkCircleIcon className="h-5 w-5" />
                  Hablar con ventas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterNew />
    </div>
  );
}
