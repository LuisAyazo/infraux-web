'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  CommandLineIcon,
  CubeIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  CloudIcon,
  CodeBracketIcon,
  PlayIcon,
  ArrowPathIcon,
  ClockIcon,
  CurrencyDollarIcon,
  LockClosedIcon,
  GlobeAltIcon,
  BeakerIcon,
  RocketLaunchIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Hero Section con animaciones y gradientes modernos
function HeroSection() {
  const [activeDemo, setActiveDemo] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    { title: 'Diseña visualmente', description: 'Arrastra y suelta recursos cloud' },
    { title: 'Genera código IaC', description: 'Terraform, Pulumi, CloudFormation' },
    { title: 'Despliega en minutos', description: 'CI/CD automatizado y visual' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-8">
            <SparklesIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Nueva versión 2.0 disponible
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            La infraestructura cloud
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              visual y colaborativa
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Diseña, despliega y gestiona tu infraestructura en AWS, GCP y Azure con una interfaz visual intuitiva. 
            Sin YAML, sin complejidad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="https://app.infraux.com/register"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Empieza gratis
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <PlayIcon className="h-5 w-5" />
              Ver demo interactiva
            </Link>
          </div>

          {/* Live Demo Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-3xl opacity-20" />
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-slate-100 dark:bg-slate-800 px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-slate-600 dark:text-slate-400">editor.infraux.com</span>
                  </div>
                </div>
              </div>
              <div className="p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-6">
                    {demos[activeDemo].title === 'Diseña visualmente' && React.createElement(CubeIcon, { className: "h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto" })}
                    {demos[activeDemo].title === 'Genera código IaC' && React.createElement(CodeBracketIcon, { className: "h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto" })}
                    {demos[activeDemo].title === 'Despliega en minutos' && React.createElement(RocketLaunchIcon, { className: "h-16 w-16 text-pink-600 dark:text-pink-400 mx-auto" })}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {demos[activeDemo].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {demos[activeDemo].description}
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-2 pb-6">
                {demos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDemo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeDemo 
                        ? 'w-8 bg-indigo-600 dark:bg-indigo-400' 
                        : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sección de métricas impactantes
function MetricsSection() {
  const metrics = [
    { value: '10x', label: 'Más rápido', description: 'que escribir IaC manual' },
    { value: '50%', label: 'Menos errores', description: 'en configuración' },
    { value: '3min', label: 'Time to deploy', description: 'desde el diseño' },
    { value: '24/7', label: 'Soporte experto', description: 'en tu idioma' }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Grid mejorado
function FeaturesGrid() {
  const features = [
    {
      icon: CubeIcon,
      title: 'Editor Visual Intuitivo',
      description: 'Diseña arquitecturas complejas con drag & drop. Conecta recursos visualmente.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: CodeBracketIcon,
      title: 'Código IaC Automático',
      description: 'Genera Terraform, Pulumi o CloudFormation optimizado y listo para producción.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: BoltIcon,
      title: 'Deployment Instantáneo',
      description: 'Despliega con un clic. Rollbacks automáticos. CI/CD visual integrado.',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      icon: UserGroupIcon,
      title: 'Colaboración en Tiempo Real',
      description: 'Trabaja con tu equipo simultáneamente. Cambios sincronizados al instante.',
      gradient: 'from-green-600 to-teal-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Seguridad por Defecto',
      description: 'Mejores prácticas de seguridad aplicadas automáticamente. Compliance garantizado.',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Análisis de Costos',
      description: 'Visualiza y optimiza gastos en tiempo real. Alertas de presupuesto inteligentes.',
      gradient: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Todo lo que necesitas para gobernar tu cloud
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Una plataforma completa que transforma la complejidad de la nube en simplicidad visual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                {React.createElement(feature.icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sección de casos de uso mejorada
function UseCasesSection() {
  const useCases = [
    {
      title: 'Startups',
      description: 'Escala tu infraestructura tan rápido como tu negocio',
      icon: RocketLaunchIcon,
      benefits: [
        'Setup inicial en minutos',
        'Costos optimizados desde el día 1',
        'Best practices automáticas',
        'Sin necesidad de expertos DevOps'
      ],
      cta: 'Ver casos de éxito',
      href: '/casos/startups'
    },
    {
      title: 'Empresas',
      description: 'Gobierna infraestructura compleja con control total',
      icon: GlobeAltIcon,
      benefits: [
        'Multi-cloud unificado',
        'Compliance y auditoría',
        'RBAC granular',
        'Integraciones enterprise'
      ],
      cta: 'Solicitar demo',
      href: '/casos/empresas'
    },
    {
      title: 'Agencias',
      description: 'Gestiona múltiples clientes desde una plataforma',
      icon: UserGroupIcon,
      benefits: [
        'Workspaces aislados',
        'Templates reutilizables',
        'Facturación por cliente',
        'White-label disponible'
      ],
      cta: 'Plan para agencias',
      href: '/casos/agencias'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Diseñado para equipos ambiciosos
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            No importa tu tamaño o industria, InfraUX se adapta a tus necesidades
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
                {React.createElement(useCase.icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {useCase.description}
              </p>
              <ul className="space-y-3 mb-8">
                {useCase.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={useCase.href}
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
              >
                {useCase.cta}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/precios"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            Ver todos los planes y comparación detallada
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Sección de integración
function IntegrationsSection() {
  const integrations = [
    { name: 'AWS', logo: '🔶' },
    { name: 'Google Cloud', logo: '🔷' },
    { name: 'Azure', logo: '🔵' },
    { name: 'Terraform', logo: '💜' },
    { name: 'GitHub', logo: '⚫' },
    { name: 'GitLab', logo: '🟠' },
    { name: 'Slack', logo: '🟣' },
    { name: 'Datadog', logo: '🟪' }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Se integra con tus herramientas favoritas
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Conecta InfraUX con tu stack actual sin cambiar tu workflow
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-3">{integration.logo}</div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      name: 'Hobby',
      price: 'Gratis',
      description: 'Para proyectos personales',
      features: [
        '1 proyecto activo',
        '1 usuario',
        'Exportar PNG básico',
        'Templates básicas',
        'Comunidad Discord'
      ],
      cta: 'Empezar gratis',
      ctaLink: '/register',
      featured: false
    },
    {
      name: 'Team',
      price: '$49',
      period: '/usuario/mes',
      description: 'Para equipos que colaboran',
      features: [
        'Proyectos ilimitados',
        'Hasta 10 usuarios',
        'Colaboración en tiempo real',
        'Todos los formatos de exportación',
        'Análisis de costos incluido',
        'Integraciones completas',
        'API sin límites',
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
      description: 'Soluciones a medida',
      features: [
        'Todo de Team +',
        'Usuarios ilimitados',
        'SSO/SAML',
        'SLA 99.99%',
        'Soporte dedicado 24/7',
        'Manager de cuenta',
        'Desarrollo de features',
        'Compliance certificado'
      ],
      cta: 'Contactar ventas',
      ctaLink: '/contacto',
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Precios simples y transparentes
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Sin costos ocultos. Cancela cuando quieras. Escala según crezcas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-gradient-to-b from-indigo-600 to-purple-600 text-white shadow-2xl scale-105'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-4xl font-bold ${plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-lg ${plan.featured ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`${plan.featured ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckIcon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                        plan.featured ? 'text-indigo-200' : 'text-green-600 dark:text-green-400'
                      }`} />
                      <span className={`text-sm ${plan.featured ? 'text-indigo-50' : 'text-slate-700 dark:text-slate-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={plan.ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.featured
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Final
function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Únete a miles de equipos que ya confían en InfraUX
        </h2>
        <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
          Empieza gratis hoy y descubre por qué somos la plataforma de infraestructura visual más amada por desarrolladores
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://app.infraux.com/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Crear cuenta gratis
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-200"
          >
            Hablar con ventas
          </Link>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-indigo-100">
          <div className="flex items-center gap-2">
            <CreditCardIcon className="h-5 w-5" />
            <span>No requiere tarjeta</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5" />
            <span>Setup en 3 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="h-5 w-5" />
            <span>SOC2 Certificado</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Agregar el ícono que faltaba
function CreditCardIcon(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

export default function HomePageNew() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      <main className="flex-grow">
        <HeroSection />
        <MetricsSection />
        <FeaturesGrid />
        <UseCasesSection />
        <IntegrationsSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <FooterNew />
    </div>
  );
}