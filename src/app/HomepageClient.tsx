'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import Footer from '@/components/landing/Footer';
import TrustedCompanies from '@/components/landing/TrustedCompanies';
import BrandName from '@/components/BrandName';
import CloudNodesVisualization from '@/components/landing/CloudNodesVisualization';
import OptimizedImage, { HeroImage, ThumbnailImage } from '@/components/OptimizedImage';
import PremiumFeatures from '@/components/landing/PremiumFeatures';
// import DeploymentOptions from '@/components/landing/DeploymentOptions';
// import CommunitySection from '@/components/landing/CommunitySection';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePostHog } from '@/hooks/usePostHog';
import { useLanguage, useTranslations } from '@/contexts/LanguageContext';
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
  StarIcon,
  PlayCircleIcon,
  PresentationChartBarIcon,
  ChatBubbleLeftRightIcon as TestimonialIcon,
  PaintBrushIcon,
  CubeTransparentIcon,
  UsersIcon,
  EyeIcon,
  AcademicCapIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  BanknotesIcon,
  ServerIcon
} from '@heroicons/react/24/outline';
import FAQSchema from '@/components/FAQSchema';
import TestimonialSchema from '@/components/TestimonialSchema';
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

// NUEVA HOMEPAGE REVOLUCIONARIA CON ZENIX COMO PROTAGONISTA
function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [zenixMessage, setZenixMessage] = useState(0);
  const { trackButtonClick, trackEvent } = usePostHog();
  const { t } = useLanguage();
  const heroTranslations = useTranslations('hero');

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (isMounted) {
      // Cambiar mensajes de Zenix cada 3 segundos
      const zenixInterval = setInterval(() => {
        setZenixMessage((prev) => (prev + 1) % 4);
      }, 3000);
      
      return () => {
        clearInterval(zenixInterval);
      };
    }
  }, [isMounted]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dark:bg-slate-900 pt-0 pb-16 min-h-screen flex items-center justify-center"
      aria-labelledby="hero-title"
    >
      {/* FONDO SUPER MINIMALISTA */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-purple-500/10" />
      </div>
      
      {/* CONTENIDO PRINCIPAL RESPONSIVO */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        {/* Zenix Mascot */}
        <div className="absolute bottom-20 right-0 z-0 pointer-events-none">
            <OptimizedImage
                src="/images/zenix-hero.png"
                alt="Zenix, la mascota de InfraUX"
                width={400}
                height={400}
                className="w-64 h-64 lg:w-96 lg:h-96 animate-float"
            />
        </div>
        
        {/* Texto principal centrado y por encima */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-semibold">
              <ShieldCheckIcon className="h-4 w-4" />
              Visual Platform Engineering
            </div>
          </div>
          
          <h1
            id="hero-title"
            className="text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight"
          >
            <span className="block text-slate-900 dark:text-white mb-2">
              {t('hero.title')}
            </span>
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
              {t('hero.titleHighlight')}
            </span>
          </h1>

          {/* SUBTÍTULO - SIMPLIFICADO */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mt-6 text-center">
            {t('hero.subtitle')}
          </p>

          {/* CTA BUTTONS - SIMPLIFICADOS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/register"
              onClick={() => trackButtonClick('hero_start_free')}
              className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <CloudIcon className="h-5 w-5" />
              {t('hero.cta.primary')}
              <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
          </div>

          {/* Trust indicators - MEJORADO */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm mt-8">
            <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              <CheckIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">{t('hero.trustIndicators.noCreditCard')}</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              <CheckIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">{t('hero.trustIndicators.freeProjects')}</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              <CheckIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">{t('hero.trustIndicators.zenixAI')}</span>
            </div>
          </div>
        </div>

        {/* ICONOS DE TECNOLOGÍAS - MEJORADOS VISUALMENTE */}
        <div className="mt-20 lg:mt-24">
          <p className="text-center text-lg font-bold text-slate-700 dark:text-slate-300 mb-12">
            {t('hero.techStackTitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 max-w-5xl mx-auto">
            {[
              { src: '/images/cloud-providers/aws.png', alt: 'AWS' },
              { src: '/images/cloud-providers/gcp.png', alt: 'Google Cloud' },
              { src: '/images/cloud-providers/azure.png', alt: 'Azure' },
              { src: '/images/cloud-providers/terraform.png', alt: 'Terraform' },
              { src: '/images/cloud-providers/kubernetes.png', alt: 'Kubernetes' },
              { src: '/images/cloud-providers/pulumi.png', alt: 'Pulumi' },
              { src: '/images/cloud-providers/docker.png', alt: 'Docker' },
              { src: '/images/cloud-providers/github.png', alt: 'GitHub' },
            ].map((provider) => (
              <div key={provider.alt} className="flex flex-col items-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="p-3 bg-white rounded-xl shadow-md flex items-center justify-center h-16 w-16">
                  <OptimizedImage src={provider.src} alt={provider.alt} width={40} height={40} className="h-10 w-10 object-contain" />
                </div>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-2">{provider.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Video Placeholder Section
function VideoPlaceholderSection() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Próximamente: Demo en Video
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Estamos preparando una demostración en video para mostrarte todo el poder de InfraUX.
          </p>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <PlayCircleIcon className="h-20 w-20 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Key Features Section - MASSIVE VISUAL IMPACT
function KeyFeaturesSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: PaintBrushIcon,
      title: t('features.items.0.title'),
      description: t('features.items.0.description'),
      image: '/images/feature-visual-design-hero.svg',
      isNew: true
    },
    {
      icon: CubeTransparentIcon,
      title: t('features.items.1.title'),
      description: t('features.items.1.description'),
      image: '/images/feature-code-generation-hero.svg',
      isNew: false
    },
    {
      icon: UsersIcon,
      title: t('features.items.2.title'),
      description: t('features.items.2.description'),
      image: '/images/feature-deployment-hero.svg',
      isNew: true
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Effects - Simplified */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            {t('features.title')} {' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              {t('features.titleHighlight')}
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>
        
        {/* Clean Feature Cards RESPONSIVAS */}
        <div className="space-y-12 lg:space-y-20">
          {features.map((feature, index) => (
            <div key={feature.title} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Text Content RESPONSIVO */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} space-y-4 lg:space-y-6 text-center lg:text-left`}>
                <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4 justify-center lg:justify-start">
                  <div className="p-2.5 lg:p-3 rounded-lg lg:rounded-xl bg-emerald-500 shadow-lg">
                    <feature.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  {feature.isNew && (
                    <div className="px-2.5 py-1 lg:px-3 lg:py-1 rounded-full bg-emerald-500 text-white text-xs lg:text-sm font-semibold">
                      ✨ {t('common.new')}
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {feature.description}
                </p>
                
                <div className="pt-2 lg:pt-4">
                  <button className="px-6 lg:px-8 py-2.5 lg:py-3 bg-emerald-500 text-white rounded-lg font-semibold text-base lg:text-lg shadow-lg hover:bg-emerald-600 hover:shadow-xl transition-all duration-300">
                    {t('features.cta')}
                  </button>
                </div>
              </div>
              
              {/* Clean Image RESPONSIVA */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative order-first lg:order-none`}>
                <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500">
                  <OptimizedImage
                    src={feature.image}
                    alt={`${feature.title} - Característica principal de InfraUX`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg lg:rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section - COMPLETAMENTE REDISEÑADA CON IMAGEN MASIVA
function HowItWorksSection() {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: CodeBracketIcon,
      title: t('howItWorks.steps.0.title'),
      description: t('howItWorks.steps.0.description'),
    },
    {
      icon: BoltIcon,
      title: t('howItWorks.steps.1.title'),
      description: t('howItWorks.steps.1.description'),
    },
    {
      icon: CloudArrowUpIcon,
      title: t('howItWorks.steps.2.title'),
      description: t('howItWorks.steps.2.description'),
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10 dark:opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            {t('howItWorks.title')} {' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              {t('howItWorks.titleHighlight')}
            </span>
          </h2>
          <p className="mt-6 text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        {/* NUEVA ESTRUCTURA HORIZONTAL CON IMAGEN DOMINANTE */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Steps Column */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-6 group">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-emerald-500/25 transition-all duration-300 transform group-hover:scale-110">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Connecting line for non-last items */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 mt-20 w-0.5 h-16 bg-gradient-to-b from-emerald-400 to-teal-400 opacity-30" />
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <div className="pt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <RocketLaunchIcon className="h-6 w-6" />
                {t('howItWorks.cta')}
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* MASSIVE Image Column */}
          <div className="relative lg:order-last">
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-3 shadow-2xl border-4 border-emerald-200 dark:border-emerald-500/50 backdrop-blur-sm hover-lift-premium transform hover:scale-[1.02] transition-all duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-teal-500/20 animate-pulse rounded-3xl" />
              
              <OptimizedImage
                src="/images/dashboard-showcase.svg"
                alt="Proceso Visual de InfraUX - Flujo de trabajo completo desde diseño hasta deployment"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-2xl relative z-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/30 via-transparent to-transparent pointer-events-none rounded-3xl" />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 z-20">
                <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-bold shadow-xl text-sm">
                  ✨ {t('howItWorks.badges.simplified')}
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 z-20">
                <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-xl text-sm">
                  🚀 {t('howItWorks.badges.fastDeploy')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      quote: t('testimonials.items.0.quote'),
      author: t('testimonials.items.0.author'),
      role: t('testimonials.items.0.role'),
      rating: 5
    },
    {
      quote: t('testimonials.items.1.quote'),
      author: t('testimonials.items.1.author'),
      role: t('testimonials.items.1.role'),
      rating: 5
    },
    {
      quote: t('testimonials.items.2.quote'),
      author: t('testimonials.items.2.author'),
      role: t('testimonials.items.2.role'),
      rating: 5
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIconSolid
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/30">
      <TestimonialSchema testimonials={testimonials} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t('testimonials.title')}
          </h2>
          
          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-center">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">10K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{t('testimonials.stats.developers')}</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">50K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{t('testimonials.stats.deployments')}</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{t('testimonials.stats.countries')}</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <figure key={testimonial.author} className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700/50 flex flex-col hover-lift-premium">
              {renderStars(testimonial.rating)}
              <blockquote className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
                <TestimonialIcon className="h-10 w-10 text-emerald-500 dark:text-emerald-400 mb-4 opacity-75" />
                <p className="italic text-lg leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// Homepage FAQ Section
function HomepageFAQSection() {
  const { t } = useLanguage();
  const faqTranslations = useTranslations('faq');
  
  const faqs = [
    {
      question: t('faq.items.0.question'),
      answer: t('faq.items.0.answer')
    },
    {
      question: t('faq.items.1.question'),
      answer: t('faq.items.1.answer')
    },
    {
      question: t('faq.items.2.question'),
      answer: t('faq.items.2.answer')
    },
    {
      question: t('faq.items.3.question'),
      answer: t('faq.items.3.answer')
    },
    {
      question: t('faq.items.4.question'),
      answer: t('faq.items.4.answer')
    },
    {
      question: t('faq.items.5.question'),
      answer: t('faq.items.5.answer')
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <FAQSchema
          faqs={faqs}
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
          badge={t('faq.badge')}
        />
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  const { t } = useLanguage();
  
  const ctaButtonClasses = "px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none shadow-xl hover:shadow-2xl transform hover:-translate-y-1";
  const primaryCtaClasses = `${ctaButtonClasses} bg-white hover:bg-slate-50 text-emerald-600 btn-premium`;
  const secondaryCtaClasses = `${ctaButtonClasses} bg-transparent hover:bg-white/10 text-white border-2 border-white`;

  const trustBadges = [
    { icon: ShieldCheckIcon, text: t('finalCta.trustBadges.0') },
    { icon: CheckIcon, text: t('finalCta.trustBadges.1') },
    { icon: LockClosedIcon, text: t('finalCta.trustBadges.2') },
    { icon: GlobeAltIcon, text: t('finalCta.trustBadges.3') },
    { icon: ChartBarIcon, text: t('finalCta.trustBadges.4') },
    { icon: UserGroupIcon, text: t('finalCta.trustBadges.5') }
  ];

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-700 dark:via-teal-700 dark:to-cyan-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          {t('finalCta.title')}
        </h2>
        <p className="text-xl sm:text-2xl text-emerald-100 dark:text-emerald-200 mb-12 max-w-3xl mx-auto">
          {t('finalCta.subtitle')}
        </p>
        
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mb-16">
          <Link href="/register" className={primaryCtaClasses}>
            <CloudIcon className="inline-block mr-2 h-6 w-6" />
            {t('finalCta.cta.cloud')}
          </Link>
        </div>
        
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-emerald-100 dark:text-emerald-200">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={badge.text} className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-colors">
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium text-center">{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Export the complete homepage client component
export default function HomepageClient() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white antialiased">
      <HeaderNew />
      <main className="flex-grow" role="main">
        <HeroSection />
        <VideoPlaceholderSection />
        <KeyFeaturesSection />
        {/* <TrustedCompanies /> */}
        <TestimonialsSection />
        <HomepageFAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
