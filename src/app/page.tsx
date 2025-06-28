'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePostHog } from '@/hooks/usePostHog';
import { useLanguage } from '@/contexts/LanguageContext';
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
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  FireIcon,
  PuzzlePieceIcon,
  QuestionMarkCircleIcon,
  CalendarIcon,
  ChevronDownIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import {
  FaAws,
  FaGoogle,
  FaGithub,
  FaGitlab,
  FaSlack,
  FaDocker,
  FaMicrosoft
} from 'react-icons/fa';
import {
  SiTerraform,
  SiKubernetes,
  SiPulumi
} from 'react-icons/si';

// Hero Section mejorada con diseño premium
function HeroSection() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const { trackButtonClick, trackEvent } = usePostHog();
  const { language } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (isMounted) {
      const interval = setInterval(() => {
        setActiveDemo((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMounted]);

  const demos = language === 'es' ? [
    { title: 'Diseña visualmente', description: 'Arrastra y suelta recursos cloud', icon: CubeIcon, color: 'from-blue-500 to-cyan-500' },
    { title: 'Genera código IaC', description: 'Terraform, Pulumi, CloudFormation', icon: CodeBracketIcon, color: 'from-purple-500 to-pink-500' },
    { title: 'Despliega en minutos', description: 'CI/CD automatizado y visual', icon: RocketLaunchIcon, color: 'from-emerald-500 to-teal-500' }
  ] : [
    { title: 'Design visually', description: 'Drag and drop cloud resources', icon: CubeIcon, color: 'from-blue-500 to-cyan-500' },
    { title: 'Generate IaC code', description: 'Terraform, Pulumi, CloudFormation', icon: CodeBracketIcon, color: 'from-purple-500 to-pink-500' },
    { title: 'Deploy in minutes', description: 'Automated and visual CI/CD', icon: RocketLaunchIcon, color: 'from-emerald-500 to-teal-500' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20">
        <div className="relative text-center max-w-6xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-10 animate-fade-in">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {language === 'es'
                ? 'Versión 1.0-beta • Lanzamiento oficial: 27 de julio de 2025'
                : 'Version 1.0-beta • Official Launch: July 27, 2025'
              }
            </span>
          </div>

          {/* Main Title with premium typography - Mejorado para móviles */}
          <h1 className="animate-fade-in-up">
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4">
              {language === 'es' ? 'La infraestructura cloud' : 'Cloud infrastructure'}
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text-premium">
              {language === 'es' ? 'visual y colaborativa' : 'visual and collaborative'}
            </span>
          </h1>

          {/* Enhanced Subtitle - Mejorado para móviles */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mt-6 sm:mt-8 mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up animation-delay-200 px-4 sm:px-0">
            {language === 'es'
              ? <>Diseña, despliega y gestiona tu infraestructura en AWS, GCP y Azure con una interfaz visual intuitiva. <span className="text-emerald-600 dark:text-emerald-400 font-bold">Sin YAML, sin complejidad.</span></>
              : <>Design, deploy and manage your infrastructure on AWS, GCP and Azure with an intuitive visual interface. <span className="text-emerald-600 dark:text-emerald-400 font-bold">No YAML, no complexity.</span></>
            }
          </p>

          {/* Premium CTA Buttons - Mejorado para móviles */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-16 sm:mb-20 animate-fade-in-up animation-delay-400">
            <Link
              href="/registro"
              className="group relative inline-flex items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base sm:text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300 btn-premium w-full sm:w-auto"
              onClick={() => trackButtonClick('hero_start_free', { location: 'hero' })}
            >
              <span className="relative z-10">{language === 'es' ? 'Empieza gratis' : 'Start free'}</span>
              <ArrowRightIcon className="relative z-10 h-5 sm:h-6 w-5 sm:w-6 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
            </Link>
            <Link
              href="/demo"
              className="group inline-flex items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-base sm:text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 w-full sm:w-auto"
              onClick={() => trackButtonClick('hero_view_demo', { location: 'hero' })}
            >
              <PlayIcon className="h-5 sm:h-6 w-5 sm:w-6 text-emerald-600 dark:text-emerald-400" />
              {language === 'es' ? 'Ver demo interactiva' : 'View interactive demo'}
            </Link>
          </div>

          {/* Trust indicators - Mejorado para móviles */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-12 sm:mb-16 text-xs sm:text-sm text-slate-500 dark:text-slate-400 animate-fade-in animation-delay-600">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-500" />
              <span className="font-medium">{language === 'es' ? 'SOC2 Certificado' : 'SOC2 Certified'}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserGroupIcon className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-500" />
              <span className="font-medium">{language === 'es' ? '+5,000 equipos' : '+5,000 teams'}</span>
            </div>
            <div className="flex items-center gap-2">
              <GlobeAltIcon className="h-4 sm:h-5 w-4 sm:w-5 text-emerald-500" />
              <span className="font-medium">{language === 'es' ? '150+ países' : '150+ countries'}</span>
            </div>
          </div>

          {/* Zenix Mascot - Versión móvil */}
          <div className="xl:hidden flex justify-center mb-8 animate-fade-in animation-delay-800">
            <Image
              src="/images/zenix-hero.png"
              alt="ZeniX, la mascota de InfraUX, saludando"
              width={120}
              height={141}
              style={{ width: 'auto', height: 'auto' }}
              priority
              className="drop-shadow-xl"
            />
          </div>
          
          {/* Zenix Mascot - Versión desktop */}
          <div className="hidden xl:block absolute top-20 -right-20 2xl:-right-40 animate-fade-in animation-delay-800 z-20">
            <Image
              src="/images/zenix-hero.png"
              alt="ZeniX, la mascota de InfraUX, saludando"
              width={220}
              height={259}
              style={{ width: 'auto', height: 'auto' }}
              priority
              className="drop-shadow-2xl"
            />
          </div>

          {/* Premium Live Demo Preview */}
          <div className="relative max-w-5xl mx-auto animate-fade-in-up animation-delay-800">
            <div className="relative glass-premium rounded-3xl shadow-premium-lg overflow-hidden border border-white/20 dark:border-white/10">
              {/* Browser Chrome */}
              <div className="bg-white/50 dark:bg-black/50 backdrop-blur-xl px-6 py-4 border-b border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-6 py-1.5 bg-slate-100/50 dark:bg-slate-800/50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">app.infraux.com</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <ShieldCheckIcon className="h-5 w-5 text-emerald-500" />
                  </div>
                </div>
              </div>
              
              {/* Demo Content - Mejorado para móviles */}
              <div className="relative h-[300px] sm:h-[450px] bg-gradient-to-br from-slate-50/50 to-white/30 dark:from-slate-900/50 dark:to-black/30 backdrop-blur-sm">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                
                <div className="relative h-full flex items-center justify-center p-6 sm:p-12">
                  <div className="text-center transform transition-all duration-500">
                    {isMounted ? (
                      <>
                        <div className={`inline-flex p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${demos[activeDemo].color} shadow-xl mb-4 sm:mb-8 transform transition-all duration-500`}>
                          {React.createElement(demos[activeDemo].icon, { className: "h-12 sm:h-20 w-12 sm:w-20 text-white" })}
                        </div>
                        <h3 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                          {demos[activeDemo].title}
                        </h3>
                        <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
                          {demos[activeDemo].description}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className={`inline-flex p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${demos[0].color} shadow-xl mb-4 sm:mb-8`}>
                          {React.createElement(demos[0].icon, { className: "h-12 sm:h-20 w-12 sm:w-20 text-white" })}
                        </div>
                        <h3 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                          {demos[0].title}
                        </h3>
                        <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
                          {demos[0].description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Demo Navigation */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
                  {demos.map((demo, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveDemo(index);
                        trackEvent('demo_carousel_click', { demo_title: demo.title, index });
                      }}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === activeDemo
                          ? 'w-12 bg-emerald-500 shadow-emerald-glow'
                          : 'w-2 bg-slate-400/50 hover:bg-slate-400'
                      }`}
                      aria-label={`Ver demo: ${demo.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating decoration elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-2000" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Sección de métricas premium con animaciones
function MetricsSection() {
  const { language } = useLanguage();
  
  const metrics = language === 'es' ? [
    {
      value: '10x',
      label: 'Más rápido',
      description: 'que escribir IaC manual',
      icon: BoltIcon,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      value: '50%',
      label: 'Menos errores',
      description: 'en configuración',
      icon: ShieldCheckIcon,
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      value: '3min',
      label: 'Time to deploy',
      description: 'desde el diseño',
      icon: RocketLaunchIcon,
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      value: '24/7',
      label: 'Soporte experto',
      description: 'en tu idioma',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-purple-400 to-pink-500'
    }
  ] : [
    {
      value: '10x',
      label: 'Faster',
      description: 'than writing manual IaC',
      icon: BoltIcon,
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      value: '50%',
      label: 'Fewer errors',
      description: 'in configuration',
      icon: ShieldCheckIcon,
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      value: '3min',
      label: 'Time to deploy',
      description: 'from design',
      icon: RocketLaunchIcon,
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      value: '24/7',
      label: 'Expert support',
      description: 'in your language',
      icon: ChatBubbleLeftRightIcon,
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="group text-center transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${metric.gradient} shadow-lg mb-3 sm:mb-4 group-hover:shadow-xl transition-shadow`}>
                {React.createElement(metric.icon, { className: "h-6 sm:h-8 w-6 sm:w-8 text-white" })}
              </div>
              
              {/* Metric value with gradient text */}
              <div className={`text-3xl sm:text-5xl md:text-6xl font-black bg-gradient-to-br ${metric.gradient} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                {metric.value}
              </div>
              
              {/* Label */}
              <div className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                {metric.label}
              </div>
              
              {/* Description */}
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Grid premium con diseño técnico
function FeaturesGrid() {
  const { language } = useLanguage();
  
  const features = language === 'es' ? [
    {
      icon: CubeIcon,
      title: 'Editor Visual Intuitivo',
      description: 'Diseña arquitecturas complejas con drag & drop. Conecta recursos visualmente.',
      gradient: 'from-blue-500 to-cyan-500',
      stats: '200+ componentes'
    },
    {
      icon: CodeBracketIcon,
      title: 'Código IaC Automático',
      description: 'Genera Terraform, Pulumi o CloudFormation optimizado y listo para producción.',
      gradient: 'from-purple-500 to-pink-500',
      stats: '3 frameworks'
    },
    {
      icon: BoltIcon,
      title: 'Deployment Instantáneo',
      description: 'Despliega con un clic. Rollbacks automáticos. CI/CD visual integrado.',
      gradient: 'from-orange-500 to-red-500',
      stats: '<3 min deploy'
    },
    {
      icon: UserGroupIcon,
      title: 'Colaboración en Tiempo Real',
      description: 'Trabaja con tu equipo simultáneamente. Cambios sincronizados al instante.',
      gradient: 'from-emerald-500 to-teal-500',
      stats: 'Ilimitados usuarios'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Seguridad por Defecto',
      description: 'Mejores prácticas de seguridad aplicadas automáticamente. Compliance garantizado.',
      gradient: 'from-indigo-500 to-purple-500',
      stats: 'SOC2 & ISO'
    },
    {
      icon: ChartBarIcon,
      title: 'Análisis de Costos',
      description: 'Visualiza y optimiza gastos en tiempo real. Alertas de presupuesto inteligentes.',
      gradient: 'from-pink-500 to-rose-500',
      stats: 'Ahorra 30%+'
    }
  ] : [
    {
      icon: CubeIcon,
      title: 'Intuitive Visual Editor',
      description: 'Design complex architectures with drag & drop. Connect resources visually.',
      gradient: 'from-blue-500 to-cyan-500',
      stats: '200+ components'
    },
    {
      icon: CodeBracketIcon,
      title: 'Automatic IaC Code',
      description: 'Generate optimized Terraform, Pulumi or CloudFormation ready for production.',
      gradient: 'from-purple-500 to-pink-500',
      stats: '3 frameworks'
    },
    {
      icon: BoltIcon,
      title: 'Instant Deployment',
      description: 'Deploy with one click. Automatic rollbacks. Integrated visual CI/CD.',
      gradient: 'from-orange-500 to-red-500',
      stats: '<3 min deploy'
    },
    {
      icon: UserGroupIcon,
      title: 'Real-Time Collaboration',
      description: 'Work with your team simultaneously. Changes synced instantly.',
      gradient: 'from-emerald-500 to-teal-500',
      stats: 'Unlimited users'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security by Default',
      description: 'Security best practices applied automatically. Guaranteed compliance.',
      gradient: 'from-indigo-500 to-purple-500',
      stats: 'SOC2 & ISO'
    },
    {
      icon: ChartBarIcon,
      title: 'Cost Analysis',
      description: 'Visualize and optimize expenses in real-time. Smart budget alerts.',
      gradient: 'from-pink-500 to-rose-500',
      stats: 'Save 30%+'
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-[0.02]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
            <SparklesIcon className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {language === 'es' ? 'Plataforma todo-en-uno' : 'All-in-one platform'}
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6">
            {language === 'es' ? 'Todo lo que necesitas para' : 'Everything you need to'}
            <span className="block gradient-text-emerald">{language === 'es' ? 'gobernar tu cloud' : 'govern your cloud'}</span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium">
            {language === 'es'
              ? 'Una plataforma completa que transforma la complejidad de la nube en simplicidad visual'
              : 'A complete platform that transforms cloud complexity into visual simplicity'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative hover-lift-premium"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(feature.icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  
                  {/* Stats badge */}
                  <div className="absolute top-8 right-8">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                      {language === 'es' ? 'Aprender más' : 'Learn more'}
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sección de casos de uso premium
function UseCasesSection() {
  const { trackLinkClick } = usePostHog();
  const { language } = useLanguage();
  
  const useCases = language === 'es' ? [
    {
      title: 'Startups',
      description: 'Escala tu infraestructura tan rápido como tu negocio',
      icon: RocketLaunchIcon,
      gradient: 'from-violet-500 to-purple-500',
      benefits: [
        'Setup inicial en minutos',
        'Costos optimizados desde el día 1',
        'Best practices automáticas',
        'Sin necesidad de expertos DevOps'
      ],
      stats: { label: 'Tiempo de setup', value: '< 5 min' },
      cta: 'Ver casos de éxito',
      href: '/casos/startups'
    },
    {
      title: 'Empresas',
      description: 'Gobierna infraestructura compleja con control total',
      icon: GlobeAltIcon,
      gradient: 'from-emerald-500 to-teal-500',
      benefits: [
        'Multi-cloud unificado',
        'Compliance y auditoría',
        'RBAC granular',
        'Integraciones enterprise'
      ],
      stats: { label: 'Clouds soportados', value: '3+' },
      cta: 'Solicitar demo',
      href: '/casos/empresas',
      featured: true
    },
    {
      title: 'Agencias',
      description: 'Gestiona múltiples clientes desde una plataforma',
      icon: UserGroupIcon,
      gradient: 'from-blue-500 to-indigo-500',
      benefits: [
        'Workspaces aislados',
        'Templates reutilizables',
        'Facturación por cliente',
        'White-label disponible'
      ],
      stats: { label: 'Clientes por cuenta', value: 'Ilimitados' },
      cta: 'Plan para agencias',
      href: '/casos/agencias'
    }
  ] : [
    {
      title: 'Startups',
      description: 'Scale your infrastructure as fast as your business',
      icon: RocketLaunchIcon,
      gradient: 'from-violet-500 to-purple-500',
      benefits: [
        'Initial setup in minutes',
        'Optimized costs from day 1',
        'Automatic best practices',
        'No DevOps experts needed'
      ],
      stats: { label: 'Setup time', value: '< 5 min' },
      cta: 'View success stories',
      href: '/use-cases/startups'
    },
    {
      title: 'Enterprises',
      description: 'Govern complex infrastructure with total control',
      icon: GlobeAltIcon,
      gradient: 'from-emerald-500 to-teal-500',
      benefits: [
        'Unified multi-cloud',
        'Compliance and audit',
        'Granular RBAC',
        'Enterprise integrations'
      ],
      stats: { label: 'Supported clouds', value: '3+' },
      cta: 'Request demo',
      href: '/use-cases/enterprises',
      featured: true
    },
    {
      title: 'Agencies',
      description: 'Manage multiple clients from one platform',
      icon: UserGroupIcon,
      gradient: 'from-blue-500 to-indigo-500',
      benefits: [
        'Isolated workspaces',
        'Reusable templates',
        'Per-client billing',
        'White-label available'
      ],
      stats: { label: 'Clients per account', value: 'Unlimited' },
      cta: 'Agency plan',
      href: '/use-cases/agencies'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
            <UserGroupIcon className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {language === 'es' ? 'Para cada tipo de equipo' : 'For every type of team'}
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6">
            {language === 'es' ? 'Diseñado para equipos' : 'Designed for'}
            <span className="block gradient-text-emerald">{language === 'es' ? 'ambiciosos' : 'ambitious teams'}</span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium">
            {language === 'es'
              ? 'No importa tu tamaño o industria, InfraUX se adapta a tus necesidades'
              : 'No matter your size or industry, InfraUX adapts to your needs'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`group relative transform transition-all duration-500 hover:scale-105 ${
                useCase.featured ? 'lg:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`relative h-full bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-10 overflow-hidden ${
                useCase.featured
                  ? 'shadow-premium-lg border-2 border-emerald-500/20'
                  : 'shadow-premium border border-slate-200 dark:border-slate-800'
              }`}>
                {/* Featured badge */}
                {useCase.featured && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                      <FireIcon className="h-4 w-4" />
                      {language === 'es' ? 'MÁS POPULAR' : 'MOST POPULAR'}
                    </span>
                  </div>
                )}
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient} shadow-lg mb-6`}>
                    {React.createElement(useCase.icon, { className: "h-10 w-10 text-white" })}
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                    {useCase.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-2 mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <div className="flex-1">
                      <p className="text-sm text-slate-600 dark:text-slate-400">{useCase.stats.label}</p>
                      <p className={`text-2xl font-bold bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                        {useCase.stats.value}
                      </p>
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                          <CheckIcon className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <Link
                    href={useCase.href}
                    className={`inline-flex items-center gap-2 font-bold transition-all group/link ${
                      useCase.featured
                        ? 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300'
                        : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                    }`}
                    onClick={() => trackLinkClick(useCase.cta, useCase.href, { use_case: useCase.title })}
                  >
                    {useCase.cta}
                    <ArrowRightIcon className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/precios"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 text-white dark:text-slate-900 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {language === 'es' ? 'Ver todos los planes y comparación detallada' : 'View all plans and detailed comparison'}
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Sección de integraciones premium
function IntegrationsSection() {
  const { language } = useLanguage();
  
  const integrations = [
    {
      name: 'AWS',
      logo: FaAws,
      description: language === 'es' ? 'EC2, S3, Lambda, RDS' : 'EC2, S3, Lambda, RDS',
      gradient: 'from-orange-400 to-yellow-500',
      color: '#FF9900'
    },
    {
      name: 'Google Cloud',
      logo: FaGoogle,
      description: language === 'es' ? 'Compute, Storage, BigQuery' : 'Compute, Storage, BigQuery',
      gradient: 'from-blue-400 to-blue-600',
      color: '#4285F4'
    },
    {
      name: 'Azure',
      logo: FaMicrosoft,
      description: language === 'es' ? 'VMs, Blob, Functions' : 'VMs, Blob, Functions',
      gradient: 'from-blue-500 to-indigo-600',
      color: '#0078D4'
    },
    {
      name: 'Terraform',
      logo: SiTerraform,
      description: language === 'es' ? 'Generación HCL' : 'HCL generation',
      gradient: 'from-purple-500 to-purple-700',
      color: '#7B42BC'
    },
    {
      name: 'GitHub',
      logo: FaGithub,
      description: language === 'es' ? 'Actions, Repositorios' : 'Actions, Repos',
      gradient: 'from-gray-600 to-gray-800',
      color: '#181717'
    },
    {
      name: 'GitLab',
      logo: FaGitlab,
      description: language === 'es' ? 'CI/CD, Registro' : 'CI/CD, Registry',
      gradient: 'from-orange-500 to-red-600',
      color: '#FC6D26'
    },
    {
      name: 'Slack',
      logo: FaSlack,
      description: language === 'es' ? 'Notificaciones' : 'Notifications',
      gradient: 'from-purple-400 to-pink-500',
      color: '#4A154B'
    },
    {
      name: 'Pulumi',
      logo: SiPulumi,
      description: language === 'es' ? 'IaC moderno' : 'Modern IaC',
      gradient: 'from-purple-600 to-pink-600',
      color: '#8A3391'
    }
  ];

  const upcomingIntegrations = [
    { name: 'Kubernetes', icon: SiKubernetes },
    { name: 'Docker', icon: FaDocker },
    { name: 'Jenkins', icon: null },
    { name: 'CircleCI', icon: null },
    { name: 'Prometheus', icon: null },
    { name: 'Grafana', icon: null }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.01]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
            <PuzzlePieceIcon className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {language === 'es' ? 'Ecosistema completo' : 'Complete ecosystem'}
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6">
            {language === 'es' ? 'Se integra con tus' : 'Integrates with your'}
            <span className="block gradient-text-emerald">{language === 'es' ? 'herramientas favoritas' : 'favorite tools'}</span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium">
            {language === 'es'
              ? 'Conecta InfraUX con tu stack actual sin cambiar tu workflow'
              : 'Connect InfraUX with your current stack without changing your workflow'
            }
          </p>
        </div>

        {/* Main integrations grid - Mejorado para móviles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="group relative hover-lift-premium"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-full bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${integration.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {React.createElement(integration.logo, {
                      className: "h-10 sm:h-12 w-10 sm:w-12",
                      style: { color: integration.color }
                    })}
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {integration.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {integration.description}
                  </p>
                </div>
                
                {/* Connection indicator */}
                <div className="absolute top-3 right-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming integrations */}
        <div className="text-center">
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-4">
            {language === 'es' ? 'Próximamente' : 'Coming soon'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {upcomingIntegrations.map((item) => (
              <span
                key={item.name}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 flex items-center gap-2"
              >
                {item.icon && React.createElement(item.icon, { className: "h-4 w-4" })}
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            {language === 'es' ? '¿No ves tu herramienta favorita?' : "Don't see your favorite tool?"}
          </p>
          <Link
            href={language === 'es' ? '/contacto' : '/contact'}
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
          >
            {language === 'es' ? 'Solicitar integración' : 'Request integration'}
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Sección de Testimonios mejorada
function TestimonialsSection() {
  const { language } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = language === 'es' ? [
    {
      id: 1,
      name: 'Ana Pérez',
      role: 'Arquitecta Cloud Senior',
      company: 'TechSolutions',
      rating: 5,
      quote: 'InfraUX ha transformado la forma en que diseñamos y desplegamos infraestructura. Lo que antes tomaba días, ahora se hace en horas, ¡y con menos errores!',
      initial: 'A',
      bgColor: 'from-purple-500 to-pink-500',
      highlight: 'días → horas'
    },
    {
      id: 2,
      name: 'Carlos Vega',
      role: 'Ingeniero DevOps Lead',
      company: 'Innovatec',
      rating: 5,
      quote: 'La capacidad de visualizar la infraestructura antes de desplegarla es invaluable. InfraUX nos ha ahorrado incontables horas de debugging y optimización.',
      initial: 'C',
      bgColor: 'from-blue-500 to-cyan-500',
      highlight: 'visualizar antes de desplegar'
    },
    {
      id: 3,
      name: 'Sofía Ramírez',
      role: 'CTO',
      company: 'CloudNine Co.',
      rating: 5,
      quote: 'Como CTO, InfraUX me permite tener visibilidad completa de nuestra infraestructura. La herramienta facilita la toma de decisiones estratégicas y reduce significativamente los riesgos.',
      initial: 'S',
      bgColor: 'from-emerald-500 to-teal-500',
      highlight: 'visibilidad completa'
    },
    {
      id: 4,
      name: 'Miguel Torres',
      role: 'Developer Full Stack',
      company: 'StartupTech',
      rating: 5,
      quote: 'Como desarrollador, siempre me intimidaba la configuración de infraestructura. InfraUX hace que sea tan fácil como arrastrar y soltar. ¡Increíble!',
      initial: 'M',
      bgColor: 'from-orange-500 to-red-500',
      highlight: 'arrastrar y soltar'
    },
    {
      id: 5,
      name: 'Laura Jiménez',
      role: 'VP Engineering',
      company: 'ScaleUp Inc.',
      rating: 5,
      quote: 'El pre-deploy y post-deploy automatizado nos ha dado una confianza increíble. Podemos escalar nuestra infraestructura con un click y estar seguros de que todo funcionará perfectamente.',
      initial: 'L',
      bgColor: 'from-pink-500 to-rose-500',
      highlight: 'escalar con un click'
    },
    {
      id: 6,
      name: 'Roberto Silva',
      role: 'Site Reliability Engineer',
      company: 'MegaCorp',
      rating: 5,
      quote: 'La capacidad de InfraUX para manejar multi-cloud con validación en tiempo real es excepcional. Nuestros deployments son ahora 100% confiables.',
      initial: 'R',
      bgColor: 'from-indigo-500 to-purple-500',
      highlight: '100% confiables'
    },
    {
      id: 7,
      name: 'Patricia González',
      role: 'Head of Infrastructure',
      company: 'FinTech Solutions',
      rating: 5,
      quote: 'La colaboración en tiempo real ha revolucionado cómo nuestro equipo trabaja. Todos pueden ver y entender la infraestructura, no solo los expertos en DevOps.',
      initial: 'P',
      bgColor: 'from-violet-500 to-purple-500',
      highlight: 'colaboración en tiempo real'
    },
    {
      id: 8,
      name: 'Diego Martínez',
      role: 'Platform Engineer',
      company: 'E-commerce Giant',
      rating: 5,
      quote: 'Hemos reducido nuestros costos de infraestructura en un 40% gracias a las optimizaciones sugeridas por InfraUX. El ROI fue inmediato.',
      initial: 'D',
      bgColor: 'from-green-500 to-emerald-500',
      highlight: '40% reducción de costos'
    }
  ] : [
    {
      id: 1,
      name: 'Ana Pérez',
      role: 'Senior Cloud Architect',
      company: 'TechSolutions',
      rating: 5,
      quote: 'InfraUX has transformed how we design and deploy infrastructure. What used to take days now takes hours, with fewer errors!',
      initial: 'A',
      bgColor: 'from-purple-500 to-pink-500',
      highlight: 'days → hours'
    },
    {
      id: 2,
      name: 'Carlos Vega',
      role: 'Lead DevOps Engineer',
      company: 'Innovatec',
      rating: 5,
      quote: 'The ability to visualize infrastructure before deploying is invaluable. InfraUX has saved us countless hours of debugging and optimization.',
      initial: 'C',
      bgColor: 'from-blue-500 to-cyan-500',
      highlight: 'visualize before deploy'
    },
    {
      id: 3,
      name: 'Sofía Ramírez',
      role: 'CTO',
      company: 'CloudNine Co.',
      rating: 5,
      quote: 'As a CTO, InfraUX gives me complete visibility of our infrastructure. The tool facilitates strategic decision-making and significantly reduces risks.',
      initial: 'S',
      bgColor: 'from-emerald-500 to-teal-500',
      highlight: 'complete visibility'
    },
    {
      id: 4,
      name: 'Miguel Torres',
      role: 'Full Stack Developer',
      company: 'StartupTech',
      rating: 5,
      quote: 'As a developer, infrastructure configuration always intimidated me. InfraUX makes it as easy as drag and drop. Amazing!',
      initial: 'M',
      bgColor: 'from-orange-500 to-red-500',
      highlight: 'drag and drop'
    },
    {
      id: 5,
      name: 'Laura Jiménez',
      role: 'VP Engineering',
      company: 'ScaleUp Inc.',
      rating: 5,
      quote: 'Automated pre-deploy and post-deploy has given us incredible confidence. We can scale our infrastructure with one click and be sure everything will work perfectly.',
      initial: 'L',
      bgColor: 'from-pink-500 to-rose-500',
      highlight: 'scale with one click'
    },
    {
      id: 6,
      name: 'Roberto Silva',
      role: 'Site Reliability Engineer',
      company: 'MegaCorp',
      rating: 5,
      quote: "InfraUX's ability to handle multi-cloud with real-time validation is exceptional. Our deployments are now 100% reliable.",
      initial: 'R',
      bgColor: 'from-indigo-500 to-purple-500',
      highlight: '100% reliable'
    },
    {
      id: 7,
      name: 'Patricia González',
      role: 'Head of Infrastructure',
      company: 'FinTech Solutions',
      rating: 5,
      quote: 'Real-time collaboration has revolutionized how our team works. Everyone can see and understand the infrastructure, not just DevOps experts.',
      initial: 'P',
      bgColor: 'from-violet-500 to-purple-500',
      highlight: 'real-time collaboration'
    },
    {
      id: 8,
      name: 'Diego Martínez',
      role: 'Platform Engineer',
      company: 'E-commerce Giant',
      rating: 5,
      quote: "We've reduced our infrastructure costs by 40% thanks to InfraUX's suggested optimizations. The ROI was immediate.",
      initial: 'D',
      bgColor: 'from-green-500 to-emerald-500',
      highlight: '40% cost reduction'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.01]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
            <StarIcon className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {language === 'es' ? 'Testimonios de clientes' : 'Customer testimonials'}
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6">
            {language === 'es' ? 'Lo que dicen nuestros' : 'What our'}
            <span className="block gradient-text-emerald">{language === 'es' ? 'usuarios' : 'users say'}</span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium">
            {language === 'es'
              ? 'Miles de equipos confían en InfraUX para gestionar su infraestructura cloud'
              : 'Thousands of teams trust InfraUX to manage their cloud infrastructure'
            }
          </p>
        </div>

        {/* Featured testimonial - Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-premium-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeTestimonial].bgColor} opacity-5`} />
            
            <div className="relative z-10">
              {/* Quote */}
              <blockquote className="text-2xl lg:text-3xl font-medium text-slate-800 dark:text-slate-200 mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].bgColor} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">
                      {testimonials[activeTestimonial].initial}
                    </span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIconSolid
                      key={i}
                      className="h-6 w-6 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              
              {/* Highlight badge */}
              <div className="absolute top-8 right-8">
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${testimonials[activeTestimonial].bgColor} text-white text-sm font-bold shadow-lg`}>
                  <SparklesIcon className="h-4 w-4" />
                  {testimonials[activeTestimonial].highlight}
                </span>
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'w-8 bg-emerald-500'
                      : 'w-2 bg-slate-400/50 hover:bg-slate-400'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid of testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                  />
                ))}
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.bgColor} flex items-center justify-center`}>
                  <span className="text-sm font-bold text-white">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sección de FAQ
function FAQSection() {
  const { language } = useLanguage();
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  
  const faqs = language === 'es' ? [
    {
      question: '¿Qué es InfraUX y cómo funciona?',
      answer: 'InfraUX es una plataforma visual para diseñar, desplegar y gestionar infraestructura cloud. Funciona permitiéndote arrastrar y soltar recursos cloud en un editor visual, que luego genera automáticamente código IaC (Terraform, CloudFormation, etc.) optimizado y listo para producción. Todo el proceso es colaborativo en tiempo real.',
      category: 'general'
    },
    {
      question: '¿Necesito conocimientos de DevOps para usar InfraUX?',
      answer: 'No, InfraUX está diseñado para ser intuitivo y accesible para todos. Si bien los conocimientos de DevOps son útiles, nuestra interfaz visual y las mejores prácticas automáticas permiten que cualquier desarrollador pueda crear y gestionar infraestructura cloud profesional sin ser un experto.',
      category: 'general'
    },
    {
      question: '¿Qué proveedores cloud son compatibles?',
      answer: 'Actualmente soportamos AWS, Google Cloud Platform (GCP) y Microsoft Azure. Puedes usar múltiples proveedores en el mismo proyecto (multi-cloud) y cambiar entre ellos fácilmente. Estamos trabajando en agregar más proveedores según la demanda de nuestros usuarios.',
      category: 'technical'
    },
    {
      question: '¿Cómo funciona la colaboración en tiempo real?',
      answer: 'Múltiples miembros del equipo pueden trabajar en el mismo diagrama de infraestructura simultáneamente. Los cambios se sincronizan instantáneamente, puedes ver los cursores de otros usuarios, dejar comentarios, y todo el historial de cambios se guarda automáticamente. Es como Google Docs pero para infraestructura cloud.',
      category: 'features'
    },
    {
      question: '¿InfraUX es seguro para proyectos empresariales?',
      answer: 'Absolutamente. InfraUX cuenta con certificación SOC2, encriptación end-to-end, y cumple con los estándares de seguridad más estrictos. Nunca almacenamos credenciales cloud, todo el código generado es tuyo, y puedes auditar cada cambio. Además, ofrecemos opciones de deployment on-premise para empresas con requisitos especiales.',
      category: 'security'
    },
    {
      question: '¿Cuánto cuesta InfraUX?',
      answer: 'Ofrecemos un plan gratuito generoso que incluye hasta 3 proyectos y todas las características esenciales. Los planes de pago comienzan en $29/mes por usuario e incluyen proyectos ilimitados, soporte prioritario y características avanzadas. También tenemos planes especiales para startups y empresas.',
      category: 'pricing'
    }
  ] : [
    {
      question: 'What is InfraUX and how does it work?',
      answer: 'InfraUX is a visual platform for designing, deploying, and managing cloud infrastructure. It works by allowing you to drag and drop cloud resources in a visual editor, which then automatically generates optimized, production-ready IaC code (Terraform, CloudFormation, etc.). The entire process is collaborative in real-time.',
      category: 'general'
    },
    {
      question: 'Do I need DevOps knowledge to use InfraUX?',
      answer: 'No, InfraUX is designed to be intuitive and accessible to everyone. While DevOps knowledge is helpful, our visual interface and automatic best practices allow any developer to create and manage professional cloud infrastructure without being an expert.',
      category: 'general'
    },
    {
      question: 'Which cloud providers are supported?',
      answer: 'We currently support AWS, Google Cloud Platform (GCP), and Microsoft Azure. You can use multiple providers in the same project (multi-cloud) and switch between them easily. We are working on adding more providers based on user demand.',
      category: 'technical'
    },
    {
      question: 'How does real-time collaboration work?',
      answer: 'Multiple team members can work on the same infrastructure diagram simultaneously. Changes sync instantly, you can see other users\' cursors, leave comments, and all change history is saved automatically. It\'s like Google Docs but for cloud infrastructure.',
      category: 'features'
    },
    {
      question: 'Is InfraUX secure for enterprise projects?',
      answer: 'Absolutely. InfraUX is SOC2 certified, features end-to-end encryption, and meets the strictest security standards. We never store cloud credentials, all generated code is yours, and you can audit every change. We also offer on-premise deployment options for enterprises with special requirements.',
      category: 'security'
    },
    {
      question: 'How much does InfraUX cost?',
      answer: 'We offer a generous free plan that includes up to 3 projects and all essential features. Paid plans start at $29/month per user and include unlimited projects, priority support, and advanced features. We also have special plans for startups and enterprises.',
      category: 'pricing'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.01]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
            <QuestionMarkCircleIcon className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {language === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6">
            {language === 'es' ? 'Resolvemos tus' : 'We answer your'}
            <span className="block gradient-text-emerald">{language === 'es' ? 'dudas' : 'questions'}</span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium">
            {language === 'es'
              ? 'Todo lo que necesitas saber sobre InfraUX y cómo puede transformar tu infraestructura'
              : 'Everything you need to know about InfraUX and how it can transform your infrastructure'
            }
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`h-5 w-5 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
            {language === 'es'
              ? '¿No encuentras lo que buscas?'
              : "Can't find what you're looking for?"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={language === 'es' ? '/documentacion' : '/documentation'}
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
            >
              {language === 'es' ? 'Ver documentación completa' : 'View full documentation'}
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <Link
              href={language === 'es' ? '/contacto' : '/contact'}
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
            >
              {language === 'es' ? 'Contactar soporte' : 'Contact support'}
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


// CTA Final premium
function FinalCTA() {
  const { trackButtonClick } = usePostHog();
  const { language } = useLanguage();
  
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
          <RocketLaunchIcon className="h-5 w-5 text-white" />
          <span className="text-sm font-bold text-white">
            {language === 'es' ? 'Únete a +5,000 equipos innovadores' : 'Join +5,000 innovative teams'}
          </span>
        </div>
        
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          {language === 'es' ? 'Transforma tu infraestructura' : 'Transform your infrastructure'}
          <span className="block">{language === 'es' ? 'en minutos, no meses' : 'in minutes, not months'}</span>
        </h2>
        
        <p className="text-xl lg:text-2xl text-emerald-50 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
          {language === 'es'
            ? 'Empieza gratis hoy y descubre por qué somos la plataforma de infraestructura visual más amada por desarrolladores y equipos DevOps'
            : 'Start free today and discover why we are the most loved visual infrastructure platform by developers and DevOps teams'
          }
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          <Link
            href="/registro"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            onClick={() => trackButtonClick('final_cta_create_account', { location: 'final_cta' })}
          >
            <span className="relative z-10">{language === 'es' ? 'Crear cuenta gratis' : 'Create free account'}</span>
            <ArrowRightIcon className="relative z-10 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href={language === 'es' ? '/contacto' : '/contact'}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-transparent text-white font-bold text-lg rounded-2xl border-2 border-white/50 backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300"
            onClick={() => trackButtonClick('final_cta_contact_sales', { location: 'final_cta' })}
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
            {language === 'es' ? 'Hablar con ventas' : 'Talk to sales'}
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/90">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <CreditCardIcon className="h-5 w-5" />
            <span className="font-semibold">{language === 'es' ? 'No requiere tarjeta' : 'No credit card'}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <ClockIcon className="h-5 w-5" />
            <span className="font-semibold">{language === 'es' ? 'Setup en 3 minutos' : '3-minute setup'}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <ShieldCheckIcon className="h-5 w-5" />
            <span className="font-semibold">{language === 'es' ? 'SOC2 Certificado' : 'SOC2 Certified'}</span>
          </div>
        </div>
        
        {/* Customer logos or testimonial */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <p className="text-sm font-semibold text-white/80 mb-6">
            {language === 'es' ? 'Empresas que confían en nosotros' : 'Companies that trust us'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            {['Tech Corp', 'StartupX', 'CloudCo', 'DevOps Inc', 'Scale Fast'].map((company) => (
              <span key={company} className="text-white font-bold text-lg">
                {company}
              </span>
            ))}
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
        <TestimonialsSection />
        <IntegrationsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <FooterNew />
    </div>
  );
}