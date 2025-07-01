'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import TrustedCompanies from '@/components/landing/TrustedCompanies';
import BrandName from '@/components/BrandName';
import CloudNodesVisualization from '@/components/landing/CloudNodesVisualization';
import OptimizedImage, { HeroImage, ThumbnailImage } from '@/components/OptimizedImage';
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
  BanknotesIcon
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
  const { language } = useLanguage();

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

  const zenixMessages = language === 'es' ? [
    "¡Hola! 👋 Soy Zenix, tu asistente de infraestructura cloud visual",
    "Diseño arquitecturas perfectas mientras tú te enfocas en innovar 🚀",
    "Genero código IaC optimizado en segundos, no en horas ✨",
    "Te ayudo a desplegar sin errores y con total confianza 🛡️"
  ] : [
    "Hi! 👋 I'm Zenix, your visual cloud infrastructure assistant",
    "I design perfect architectures while you focus on innovation 🚀",
    "I generate optimized IaC code in seconds, not hours ✨",
    "I help you deploy error-free with total confidence 🛡️"
  ];

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-0 pb-32 min-h-screen flex items-center"
      aria-labelledby="hero-title"
    >
      {/* FONDO ÉPICO CON EFECTOS AVANZADOS MEJORADOS */}
      <div className="absolute inset-0">
        {/* Gradiente principal más profundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/40 to-teal-950/30" />
        
        {/* Segundo gradiente para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/20 via-transparent to-cyan-950/20" />
        
        {/* Patrón de grid animado con perspectiva - SUTIL */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-25 animate-pulse [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        {/* Grid adicional con degradado sutil */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" style={{
          backgroundImage: `linear-gradient(rgba(52, 211, 153, 0.08) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(52, 211, 153, 0.08) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Mesh gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-teal-500/10 via-transparent to-transparent blur-3xl" />
        </div>
        
        {/* Partículas flotantes animadas mejoradas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grandes orbes de luz con animación compleja */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/25 to-teal-400/25 rounded-full blur-3xl animate-float mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full blur-3xl animate-float mix-blend-screen" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full blur-3xl animate-float mix-blend-screen" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-full blur-3xl animate-float mix-blend-screen" style={{ animationDelay: '6s' }} />
          
          {/* Partículas medianas con movimiento */}
          <div className="absolute top-10 left-10 w-8 h-8 bg-emerald-400/50 rounded-full animate-float blur-sm" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-teal-400/50 rounded-full animate-float blur-sm" style={{ animationDuration: '10s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-20 w-10 h-10 bg-cyan-400/40 rounded-full animate-float blur-sm" style={{ animationDuration: '12s', animationDelay: '3s' }} />
          
          {/* Partículas pequeñas brillantes */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse shadow-lg shadow-teal-400/50" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-20 w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          {/* Líneas de conexión sutiles */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="url(#gradient1)" strokeWidth="1" className="animate-pulse" />
            <line x1="60%" y1="20%" x2="80%" y2="40%" stroke="url(#gradient2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <line x1="30%" y1="70%" x2="70%" y2="60%" stroke="url(#gradient3)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(52, 211, 153)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(52, 211, 153)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="rgb(52, 211, 153)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgb(34, 211, 238)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Efecto de neblina en la parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>
      
      {/* CONTENIDO PRINCIPAL RESPONSIVO */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 xl:gap-24 items-center min-h-screen py-16 sm:py-20">
          
          {/* COLUMNA IZQUIERDA: CLOUD NODES VISUALIZATION */}
          <div className="relative order-2 lg:order-1 flex items-center justify-center px-2 sm:px-4 lg:px-0 py-8 lg:py-0">
            {/* CLOUD NODES CONTAINER */}
            <div className="relative w-full max-w-2xl h-[500px] lg:h-[600px] xl:h-[700px]">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 rounded-3xl blur-3xl" />
              
              {/* Cloud Nodes Visualization Component */}
              <CloudNodesVisualization />
              
              
              <div className="absolute -top-4 sm:-top-6 lg:-top-8 right-4 sm:right-0 lg:-right-8 z-30">
                <div className="px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-bold shadow-xl text-xs sm:text-sm animate-float backdrop-blur-sm border border-white/20" style={{ animationDelay: '2s' }}>
                  <span className="hidden sm:inline">⚡ Deploy Instantáneo</span>
                  <span className="sm:hidden">⚡ Deploy Fast</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* ZENIX FLOTANTE - POSICIÓN CENTRAL ENTRE COLUMNAS */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 hidden lg:block">
            <div className="relative group">
              {/* Glow effect animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/40 to-teal-500/40 rounded-full blur-3xl scale-150 animate-pulse" />
              
              {/* Zenix con animación */}
              <img
                src="/images/zenix-hero.png"
                alt="Zenix - Tu Asistente AI para infraestructura cloud visual"
                className="w-32 h-32 xl:w-40 xl:h-40 relative z-10 drop-shadow-2xl animate-float hover:scale-110 transition-transform duration-500 cursor-pointer"
                loading="eager"
                width={160}
                height={160}
              />
              
              {/* Speech bubble */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-slate-900/95 backdrop-blur-xl text-white px-6 py-3 rounded-2xl shadow-2xl border border-emerald-400/50 whitespace-nowrap">
                  <p className="text-sm font-bold text-emerald-400">¡Hola! Soy Zenix 🦊</p>
                  <p className="text-xs mt-1 text-slate-300">Tu asistente AI para infraestructura cloud</p>
                  {/* Tail */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-slate-900/95" />
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50" />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-3 h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50" />
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                </div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
                </div>
              </div>
            </div>
          </div>
          
          {/* COLUMNA DERECHA: CONTENIDO TEXTUAL IMPACTANTE */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Badge de introducción */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-50 dark:bg-white/10 backdrop-blur-sm border border-emerald-200 dark:border-white/20 mb-6">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-700 dark:text-emerald-200 font-semibold">
                {language === 'es' ? '🚀 Visualiza tu Infraestructura Cloud en Tiempo Real' : '🚀 Visualize Your Cloud Infrastructure in Real-Time'}
              </span>
            </div>

            {/* Badge de lanzamiento beta */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-gradient-to-r dark:from-purple-500/20 dark:to-pink-500/20 backdrop-blur-sm border border-purple-200 dark:border-purple-400/30 mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-purple-700 dark:text-purple-200 text-sm font-medium">
                {language === 'es' ? '🎉 Lanzamiento Beta: 27 de Julio 2025' : '🎉 Beta Launch: July 27, 2025'}
              </span>
            </div>

            {/* TÍTULO PRINCIPAL ÉPICO */}
            <h1
              id="hero-title"
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight"
            >
              <span className="block text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Infraestructura' : 'Infrastructure'}
              </span>
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                {language === 'es' ? 'Cloud Moderna' : 'Modern Cloud'}
              </span>
              <span className="block text-slate-800 dark:text-emerald-100 text-4xl sm:text-5xl lg:text-6xl mt-4">
                {language === 'es' ? 'Visualmente Simple' : 'Visually Simple'}
              </span>
            </h1>

            {/* SUBTÍTULO IMPACTANTE */}
            <p className="text-xl sm:text-2xl text-slate-700 dark:text-emerald-100 leading-relaxed max-w-2xl">
              {language === 'es'
                ? 'Diseña arquitecturas cloud complejas de forma visual. Arrastra componentes, conecta servicios y genera código IaC listo para producción en AWS, GCP y Azure.'
                : 'Design complex cloud architectures visually. Drag components, connect services and generate production-ready IaC code for AWS, GCP and Azure.'
              }
            </p>

            {/* STATS IMPRESIONANTES MEJORADAS */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8">
              <div className="group cursor-pointer">
                <div className="text-center p-3 sm:p-4 rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-emerald-400/50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">10K+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-emerald-200 mt-1">{language === 'es' ? 'Arquitecturas' : 'Architectures'}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-emerald-300/70 mt-0.5">{language === 'es' ? 'Desplegadas' : 'Deployed'}</div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-center p-3 sm:p-4 rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-teal-400/50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">50K+</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-teal-200 mt-1">{language === 'es' ? 'Deployments' : 'Deployments'}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-teal-300/70 mt-0.5">{language === 'es' ? 'Exitosos' : 'Successful'}</div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-center p-3 sm:p-4 rounded-xl bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-cyan-200 mt-1">{language === 'es' ? 'Éxito' : 'Success'}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-cyan-300/70 mt-0.5">{language === 'es' ? 'Garantizado' : 'Guaranteed'}</div>
                </div>
              </div>
            </div>

            {/* CTA BUTTONS MEGA */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/register"
                onClick={() => trackButtonClick('hero_get_started')}
                className="group relative px-12 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-4 justify-center overflow-hidden"
              >
                <RocketLaunchIcon className="h-8 w-8 group-hover:animate-bounce" />
                {language === 'es' ? 'Comenzar Gratis' : 'Start Free'}
                <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
              
              <Link
                href="/demo"
                onClick={() => trackButtonClick('hero_watch_demo')}
                className="group px-12 py-6 bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/20 text-emerald-600 dark:text-white border-2 border-emerald-600 dark:border-white/30 hover:border-emerald-700 dark:hover:border-white/50 font-bold text-xl rounded-2xl backdrop-blur-sm transition-all duration-300 flex items-center gap-4 justify-center shadow-lg hover:shadow-xl"
              >
                <PlayCircleIcon className="h-8 w-8" />
                {language === 'es' ? 'Ver Demo' : 'Watch Demo'}
              </Link>
            </div>

            {/* FEATURE PILLS PREMIUM */}
            <div className="flex flex-wrap justify-center gap-3 pt-4 px-4 sm:px-0">
              {[
                { text: 'Multi-Cloud', icon: CloudIcon, color: 'from-blue-600 to-cyan-600', darkColor: 'dark:from-blue-400 dark:to-cyan-400' },
                { text: 'Auto IaC', icon: CodeBracketIcon, color: 'from-purple-600 to-pink-600', darkColor: 'dark:from-purple-400 dark:to-pink-400' },
                { text: 'AI-Powered', icon: SparklesIcon, color: 'from-emerald-600 to-teal-600', darkColor: 'dark:from-emerald-400 dark:to-teal-400' },
                { text: 'Enterprise', icon: ShieldCheckIcon, color: 'from-orange-600 to-red-600', darkColor: 'dark:from-orange-400 dark:to-red-400' }
              ].map((pill, index) => (
                <div key={pill.text} className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${pill.color} ${pill.darkColor} bg-opacity-90 backdrop-blur-sm rounded-full border border-slate-200 dark:border-white/30 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <pill.icon className="h-4 w-4" />
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ICONOS DE TECNOLOGÍAS - MEJORADOS VISUALMENTE */}
        <div className="mt-20 lg:mt-24">
          <p className="text-center text-lg font-bold text-slate-800 dark:text-white mb-12">
            {language === 'es' ? '✨ Integrado con las mejores tecnologías cloud' : '✨ Integrated with the best cloud technologies'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="p-4 bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/20 group-hover:border-orange-400/50 group-hover:bg-orange-50 dark:group-hover:bg-orange-500/10 transition-all duration-300 shadow-sm hover:shadow-lg">
                <FaAws className="h-12 w-12 text-orange-600 dark:text-orange-400 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-white mt-3 transition-colors">AWS</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="p-4 bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/20 group-hover:border-blue-400/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-all duration-300 shadow-sm hover:shadow-lg">
                <FaGoogle className="h-12 w-12 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-white mt-3 transition-colors">Google Cloud</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="p-4 bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/20 group-hover:border-blue-500/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-600/10 transition-all duration-300 shadow-sm hover:shadow-lg">
                <FaMicrosoft className="h-12 w-12 text-blue-700 dark:text-blue-500 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-white mt-3 transition-colors">Azure</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="p-4 bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/20 group-hover:border-purple-400/50 group-hover:bg-purple-50 dark:group-hover:bg-purple-500/10 transition-all duration-300 shadow-sm hover:shadow-lg">
                <SiTerraform className="h-12 w-12 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-white mt-3 transition-colors">Terraform</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="p-4 bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 transition-all duration-300 shadow-sm hover:shadow-lg">
                <SiKubernetes className="h-12 w-12 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-white mt-3 transition-colors">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="p-4 bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/20 group-hover:border-yellow-400/50 group-hover:bg-yellow-50 dark:group-hover:bg-yellow-500/10 transition-all duration-300 shadow-sm hover:shadow-lg">
                <SiPulumi className="h-12 w-12 text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-white mt-3 transition-colors">Pulumi</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="p-4 bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/20 group-hover:border-cyan-400/50 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 transition-all duration-300 shadow-sm hover:shadow-lg">
                <FaDocker className="h-12 w-12 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-white mt-3 transition-colors">Docker</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="p-4 bg-white dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/20 group-hover:border-slate-300/50 group-hover:bg-slate-50 dark:group-hover:bg-slate-500/10 transition-all duration-300 shadow-sm hover:shadow-lg">
                <FaGithub className="h-12 w-12 text-slate-700 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-white mt-3 transition-colors">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Spectacular Demos Section - NUEVA SECCIÓN ESPECTACULAR
function SpectacularDemosSection() {
  const { language } = useLanguage();
  const [activeDemo, setActiveDemo] = useState(0);
  
  const demos = language === 'es' ? [
    { 
      title: 'Diseño Visual de Infraestructura', 
      description: 'Modela arquitecturas complejas de AWS, GCP y Azure arrastrando y soltando componentes. Sin código, máxima potencia.', 
      icon: CubeIcon, 
      color: 'from-blue-500 to-cyan-500',
      image: '/images/demo-visual-design-ultra.svg',
      badge: 'Visual',
      stats: '10K+ arquitecturas'
    },
    { 
      title: 'Generación Automática de IaC', 
      description: 'Convierte tus diseños en código Terraform, CloudFormation o Pulumi listo para producción al instante.', 
      icon: CodeBracketIcon, 
      color: 'from-purple-500 to-pink-500',
      image: '/images/demo-code-generation-ultra.svg',
      badge: 'Smart',
      stats: '50K+ líneas generadas'
    },
    { 
      title: 'Deploy Multi-Ambiente', 
      description: 'Gestiona desarrollo, staging y producción con validación automática y rollback inteligente.', 
      icon: RocketLaunchIcon, 
      color: 'from-emerald-500 to-teal-500',
      image: '/images/demo-deployment-ultra.svg',
      badge: 'Pro',
      stats: '99.9% éxito'
    }
  ] : [
    { 
      title: 'Visual Infrastructure Design', 
      description: 'Model complex AWS, GCP and Azure architectures by dragging and dropping components. No code, maximum power.', 
      icon: CubeIcon, 
      color: 'from-blue-500 to-cyan-500',
      image: '/images/demo-visual-design-ultra.svg',
      badge: 'Visual',
      stats: '10K+ architectures'
    },
    { 
      title: 'Automatic IaC Generation', 
      description: 'Convert your designs into production-ready Terraform, CloudFormation or Pulumi code instantly.', 
      icon: CodeBracketIcon, 
      color: 'from-purple-500 to-pink-500',
      image: '/images/demo-code-generation-ultra.svg',
      badge: 'Smart',
      stats: '50K+ lines generated'
    },
    { 
      title: 'Multi-Environment Deploy', 
      description: 'Manage development, staging and production with automatic validation and intelligent rollback.', 
      icon: RocketLaunchIcon, 
      color: 'from-emerald-500 to-teal-500',
      image: '/images/demo-deployment-ultra.svg',
      badge: 'Pro',
      stats: '99.9% success'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* HEADER ESPECTACULAR MEJORADO */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-bold text-sm mb-8 shadow-xl animate-pulse">
            <SparklesIcon className="h-5 w-5" />
            {language === 'es' ? '🚀 DEMOS INTERACTIVOS EN VIVO' : '🚀 LIVE INTERACTIVE DEMOS'}
            <SparklesIcon className="h-5 w-5" />
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
            <span className="block mb-2 text-2xl sm:text-3xl md:text-4xl text-slate-700 dark:text-slate-400 font-medium">
              {language === 'es' ? 'El futuro de la' : 'The future of'}
            </span>
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              {language === 'es' ? 'Infraestructura Cloud' : 'Cloud Infrastructure'}
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white font-bold">
              {language === 'es' ? 'es Visual' : 'is Visual'}
            </span>
          </h2>
          <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            {language === 'es'
              ? (
                <>
                  Descubre cómo <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" /> transforma la forma en que trabajas con infraestructura cloud. Desde diseño visual hasta deploy automático en segundos.
                </>
              )
              : (
                <>
                  Discover how <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" /> transforms the way you work with cloud infrastructure. From visual design to automated deployment in seconds.
                </>
              )
            }
          </p>
          
          {/* Stats impresionantes */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">10K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">{language === 'es' ? 'Arquitecturas Creadas' : 'Architectures Created'}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">{language === 'es' ? 'Líneas de Código IaC' : 'IaC Code Lines'}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">{language === 'es' ? 'Tasa de Éxito' : 'Success Rate'}</div>
            </div>
          </div>
        </div>

        {/* DEMOS GRID RESPONSIVO - STACK EN TABLET */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className={`relative group cursor-pointer transition-all duration-500 overflow-hidden rounded-2xl lg:rounded-3xl ${
                index === activeDemo ? 'ring-2 ring-white/30 shadow-2xl scale-105' : 'hover:shadow-xl'
              }`}
              onClick={() => setActiveDemo(index)}
            >
              {/* DEMO CARD CON ALTURA FIJA - HOVER MEJORADO SIN BORDER PROBLEMÁTICO */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 h-full flex flex-col group-hover:bg-slate-50 dark:group-hover:bg-slate-750">
                
                {/* BADGE FLOTANTE RESPONSIVO */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 z-10">
                  <div className={`px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r ${demo.color} text-white rounded-full font-bold text-xs sm:text-sm shadow-lg`}>
                    {demo.badge}
                  </div>
                </div>
                
                {/* IMAGEN RESPONSIVA - ALTURA ADAPTATIVA */}
                <div className="relative mb-4 sm:mb-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 overflow-hidden h-32 sm:h-40 lg:h-48">
                  <div className={`absolute inset-0 bg-gradient-to-r ${demo.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <OptimizedImage
                    src={demo.image}
                    alt={`${demo.title} - Demo interactivo de InfraUX`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-lg lg:rounded-xl relative z-10"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                {/* CONTENIDO RESPONSIVO - FLEX GROW PARA ALTURA UNIFORME */}
                <div className="space-y-3 sm:space-y-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`p-2 sm:p-2.5 lg:p-3 rounded-lg lg:rounded-xl bg-gradient-to-r ${demo.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <demo.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">
                      {demo.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                    {demo.description}
                  </p>
                  
                  {/* STATS RESPONSIVAS - SIEMPRE EN LA PARTE INFERIOR */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {demo.stats}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 group-hover:text-emerald-500 transition-colors">
                      {language === 'es' ? 'Ver Demo →' : 'View Demo →'}
                    </div>
                  </div>
                </div>
                
                {/* EFECTO HOVER SUAVE */}
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl`} />
                
                {/* EFECTO DE BRILLO EN HOVER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA RESPONSIVO */}
        <div className="text-center">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-base sm:text-lg lg:text-xl rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <PlayCircleIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
            <span className="hidden sm:inline">{language === 'es' ? 'Probar Demos Interactivos' : 'Try Interactive Demos'}</span>
            <span className="sm:hidden">{language === 'es' ? 'Ver Demos' : 'View Demos'}</span>
            <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Key Features Section - MASSIVE VISUAL IMPACT
function KeyFeaturesSection() {
  const { language } = useLanguage();
  
  const features = language === 'es' ? [
    {
      icon: PaintBrushIcon,
      title: 'Diseño Visual de Arquitecturas',
      description: 'Modela infraestructuras complejas con nuestra interfaz drag-and-drop. Conecta servicios de AWS, GCP y Azure visualmente, sin necesidad de escribir código.',
      image: '/images/feature-visual-design-hero.svg',
      isNew: true
    },
    {
      icon: CubeTransparentIcon,
      title: 'Generación Automática de IaC',
      description: 'Convierte tus diseños en código Terraform, CloudFormation o Pulumi listo para producción. Código limpio, optimizado y siguiendo mejores prácticas.',
      image: '/images/feature-code-generation-hero.svg',
      isNew: false
    },
    {
      icon: UsersIcon,
      title: 'Gestión Multi-Ambiente',
      description: 'Administra desarrollo, staging y producción desde una sola plataforma. Deploy seguro con validación automática y rollback inteligente.',
      image: '/images/feature-deployment-hero.svg',
      isNew: true
    },
  ] : [
    {
      icon: PaintBrushIcon,
      title: 'Visual Architecture Design',
      description: 'Model complex infrastructures with our drag-and-drop interface. Connect AWS, GCP and Azure services visually, without writing code.',
      image: '/images/feature-visual-design-hero.svg',
      isNew: true
    },
    {
      icon: CubeTransparentIcon,
      title: 'Automatic IaC Generation',
      description: 'Convert your designs into production-ready Terraform, CloudFormation or Pulumi code. Clean, optimized code following best practices.',
      image: '/images/feature-code-generation-hero.svg',
      isNew: false
    },
    {
      icon: UsersIcon,
      title: 'Multi-Environment Management',
      description: 'Manage development, staging and production from a single platform. Secure deployment with automatic validation and intelligent rollback.',
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
            {language === 'es'
              ? 'Potencia que '
              : 'Power that '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              {language === 'es' ? 'Transforma' : 'Transforms'}
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {language === 'es'
              ? 'Tecnología avanzada que revoluciona la forma en que diseñas, despliegas y gestionas tu infraestructura cloud moderna.'
              : 'Advanced technology that revolutionizes how you design, deploy and manage your modern cloud infrastructure.'
            }
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
                      ✨ {language === 'es' ? 'Nuevo' : 'New'}
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
                    {language === 'es' ? 'Ver Demo' : 'View Demo'}
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
  const { language } = useLanguage();
  
  const steps = language === 'es' ? [
    {
      icon: CodeBracketIcon,
      title: '1. Diseña Visualmente',
      description: 'Arrastra y conecta recursos cloud de AWS, GCP y Azure. Modela VPCs, subnets, instancias, balanceadores y bases de datos visualmente.',
    },
    {
      icon: BoltIcon,
      title: '2. Genera IaC',
      description: 'Convierte tu diseño visual en código Terraform, CloudFormation o Pulumi optimizado y listo para producción con un solo clic.',
    },
    {
      icon: CloudArrowUpIcon,
      title: '3. Despliega Seguro',
      description: 'Valida, testea y despliega tu infraestructura en múltiples ambientes con checks automáticos de seguridad y compliance.',
    },
  ] : [
    {
      icon: CodeBracketIcon,
      title: '1. Design Visually',
      description: 'Drag and connect cloud resources from AWS, GCP and Azure. Model VPCs, subnets, instances, load balancers and databases visually.',
    },
    {
      icon: BoltIcon,
      title: '2. Generate IaC',
      description: 'Convert your visual design into optimized, production-ready Terraform, CloudFormation or Pulumi code with one click.',
    },
    {
      icon: CloudArrowUpIcon,
      title: '3. Deploy Safely',
      description: 'Validate, test and deploy your infrastructure across multiple environments with automatic security and compliance checks.',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10 dark:opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            {language === 'es'
              ? 'De Diseño a '
              : 'From Design to '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              {language === 'es' ? 'Infraestructura Real' : 'Real Infrastructure'}
            </span>
          </h2>
          <p className="mt-6 text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            {language === 'es'
              ? 'Un flujo de trabajo revolucionario que transforma tus ideas en infraestructura cloud funcional y escalable.'
              : 'A revolutionary workflow that transforms your ideas into functional and scalable cloud infrastructure.'
            }
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
                {language === 'es' ? 'Ver en Acción' : 'See in Action'}
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
                  ✨ {language === 'es' ? 'Proceso Simplificado' : 'Simplified Process'}
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 z-20">
                <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-xl text-sm">
                  🚀 {language === 'es' ? 'Deploy Rápido' : 'Fast Deploy'}
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
  const { language } = useLanguage();
  
  const testimonials = language === 'es' ? [
    {
      quote: (
        <>
          <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" /> ha revolucionado nuestra gestión de infraestructura. Lo que antes tomaba días, ahora se completa en minutos. Es intuitivo, potente y esencial.
        </>
      ),
      author: "Elena Rivas",
      role: "Lead DevOps Architect, NovaTech Solutions",
      rating: 5
    },
    {
      quote: "La capacidad de visualizar y generar código IaC al instante nos ha ahorrado incontables horas y ha minimizado errores críticos. ¡Un cambio de juego!",
      author: "Javier Morales",
      role: "CTO, Quantum Leap AI",
      rating: 5
    },
     {
      quote: (
        <>
          Desde que implementamos <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" />, la colaboración entre nuestros equipos de desarrollo y operaciones ha mejorado drásticamente. Altamente recomendado.
        </>
      ),
      author: "Sofia Chen",
      role: "Cloud Operations Manager, Apex Digital",
      rating: 5
    },
  ] : [
    {
      quote: (
        <>
          <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" /> has revolutionized our infrastructure management. What used to take days now completes in minutes. It's intuitive, powerful and essential.
        </>
      ),
      author: "Elena Rivas",
      role: "Lead DevOps Architect, NovaTech Solutions",
      rating: 5
    },
    {
      quote: "The ability to visualize and generate IaC code instantly has saved us countless hours and minimized critical errors. A game changer!",
      author: "Javier Morales",
      role: "CTO, Quantum Leap AI",
      rating: 5
    },
     {
      quote: (
        <>
          Since implementing <BrandName infraClassName="font-bold text-[#374151]" uxClassName="font-bold text-emerald-500" />, collaboration between our development and operations teams has improved dramatically. Highly recommended.
        </>
      ),
      author: "Sofia Chen",
      role: "Cloud Operations Manager, Apex Digital",
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
            {language === 'es'
              ? 'Confían en Nosotros Empresas Innovadoras'
              : 'Trusted by Innovative Companies'
            }
          </h2>
          
          {/* Statistics */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-center">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">10K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{language === 'es' ? 'Desarrolladores' : 'Developers'}</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">50K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{language === 'es' ? 'Deployments' : 'Deployments'}</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{language === 'es' ? 'Países' : 'Countries'}</div>
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
                  &ldquo;{typeof testimonial.quote === 'string' ? testimonial.quote : testimonial.quote}&rdquo;
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
  const { language } = useLanguage();
  
  const faqs = language === 'es' ? [
    {
      question: '¿Qué es InfraUX y cómo funciona?',
      answer: 'InfraUX es una plataforma visual para diseñar, generar y desplegar infraestructura cloud. Funciona mediante una interfaz drag-and-drop donde arrastras componentes de AWS, GCP o Azure, los conectas visualmente, y automáticamente genera código IaC (Terraform, CloudFormation, Pulumi) listo para producción.'
    },
    {
      question: '¿Necesito conocimientos de programación para usar InfraUX?',
      answer: 'No, no necesitas saber programar. InfraUX está diseñado para que cualquier persona pueda crear infraestructura cloud compleja de forma visual. Sin embargo, si tienes conocimientos técnicos, puedes personalizar el código generado según tus necesidades.'
    },
    {
      question: '¿Qué proveedores cloud soporta InfraUX?',
      answer: 'InfraUX soporta los tres principales proveedores cloud: Amazon Web Services (AWS), Google Cloud Platform (GCP) y Microsoft Azure. Puedes diseñar arquitecturas multi-cloud y generar código específico para cada proveedor.'
    },
    {
      question: '¿Puedo importar mi infraestructura existente?',
      answer: 'Sí, InfraUX permite importar tu infraestructura existente desde AWS, GCP o Azure. Simplemente conecta tu cuenta cloud y InfraUX creará un diagrama visual de tu arquitectura actual que puedes modificar y mejorar.'
    },
    {
      question: '¿Es seguro usar InfraUX con mi infraestructura?',
      answer: 'Absolutamente. InfraUX cumple con SOC 2, GDPR y los más altos estándares de seguridad. Nunca almacenamos tus credenciales cloud, usamos conexiones cifradas, y puedes desplegar desde tu propia CI/CD. Además, todo el código generado es tuyo y puedes auditarlo antes de desplegarlo.'
    },
    {
      question: '¿Cuánto cuesta InfraUX?',
      answer: 'InfraUX ofrece un plan gratuito para siempre que incluye 1 proyecto activo y hasta 3 diagramas. Los planes de pago comienzan desde $29/usuario/mes e incluyen más proyectos, colaboración en equipo, y características avanzadas. También ofrecemos planes enterprise personalizados.'
    }
  ] : [
    {
      question: 'What is InfraUX and how does it work?',
      answer: 'InfraUX is a visual platform for designing, generating, and deploying cloud infrastructure. It works through a drag-and-drop interface where you drag AWS, GCP, or Azure components, connect them visually, and it automatically generates production-ready IaC code (Terraform, CloudFormation, Pulumi).'
    },
    {
      question: 'Do I need programming knowledge to use InfraUX?',
      answer: 'No, you don\'t need to know how to code. InfraUX is designed so anyone can create complex cloud infrastructure visually. However, if you have technical knowledge, you can customize the generated code according to your needs.'
    },
    {
      question: 'Which cloud providers does InfraUX support?',
      answer: 'InfraUX supports the three major cloud providers: Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure. You can design multi-cloud architectures and generate specific code for each provider.'
    },
    {
      question: 'Can I import my existing infrastructure?',
      answer: 'Yes, InfraUX allows you to import your existing infrastructure from AWS, GCP, or Azure. Simply connect your cloud account and InfraUX will create a visual diagram of your current architecture that you can modify and improve.'
    },
    {
      question: 'Is it safe to use InfraUX with my infrastructure?',
      answer: 'Absolutely. InfraUX complies with SOC 2, GDPR, and the highest security standards. We never store your cloud credentials, use encrypted connections, and you can deploy from your own CI/CD. Additionally, all generated code is yours and you can audit it before deploying.'
    },
    {
      question: 'How much does InfraUX cost?',
      answer: 'InfraUX offers a free forever plan that includes 1 active project and up to 3 diagrams. Paid plans start from $29/user/month and include more projects, team collaboration, and advanced features. We also offer custom enterprise plans.'
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <FAQSchema
          faqs={faqs}
          title={language === 'es' ? 'Preguntas Frecuentes sobre InfraUX' : 'Frequently Asked Questions about InfraUX'}
          subtitle={language === 'es' ? 'Todo lo que necesitas saber para empezar a transformar tu infraestructura cloud' : 'Everything you need to know to start transforming your cloud infrastructure'}
          badge={language === 'es' ? 'FAQs' : 'FAQs'}
        />
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  const { language } = useLanguage();
  
  const ctaButtonClasses = "px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none shadow-xl hover:shadow-2xl transform hover:-translate-y-1";
  const primaryCtaClasses = `${ctaButtonClasses} bg-white hover:bg-slate-50 text-emerald-600 btn-premium`;
  const secondaryCtaClasses = `${ctaButtonClasses} bg-transparent hover:bg-white/10 text-white border-2 border-white`;

  const trustBadges = language === 'es' ? [
    { icon: ShieldCheckIcon, text: 'Seguridad de Nivel Empresarial' },
    { icon: CheckIcon, text: 'Soporte Experto Dedicado' },
    { icon: LockClosedIcon, text: 'Cumplimiento y Privacidad' },
    { icon: GlobeAltIcon, text: 'SOC 2 Compliant' },
    { icon: ChartBarIcon, text: '99.9% SLA' },
    { icon: UserGroupIcon, text: 'GDPR Ready' }
  ] : [
    { icon: ShieldCheckIcon, text: 'Enterprise-Level Security' },
    { icon: CheckIcon, text: 'Dedicated Expert Support' },
    { icon: LockClosedIcon, text: 'Compliance & Privacy' },
    { icon: GlobeAltIcon, text: 'SOC 2 Compliant' },
    { icon: ChartBarIcon, text: '99.9% SLA' },
    { icon: UserGroupIcon, text: 'GDPR Ready' }
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
          {language === 'es'
            ? '¿Listo para Transformar tu Cloud?'
            : 'Ready to Transform your Cloud?'
          }
        </h2>
        <p className="text-xl sm:text-2xl text-emerald-100 dark:text-emerald-200 mb-12 max-w-3xl mx-auto">
          {language === 'es'
            ? (
              <>
                Únete a la revolución de la infraestructura visual. Comienza gratis hoy mismo y experimenta el poder de <BrandName infraClassName="font-bold text-white" uxClassName="font-bold text-emerald-300" />.
              </>
            )
            : (
              <>
                Join the visual infrastructure revolution. Start free today and experience the power of <BrandName infraClassName="font-bold text-white" uxClassName="font-bold text-emerald-300" />.
              </>
            )
          }
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          <Link href="/register" className={primaryCtaClasses}>
            <RocketLaunchIcon className="inline-block mr-2 h-6 w-6" />
            {language === 'es' ? 'Crear Cuenta Gratis' : 'Create Free Account'}
          </Link>
          <Link href="/contact" className={secondaryCtaClasses}>
            <ChatBubbleLeftRightIcon className="inline-block mr-2 h-6 w-6" />
            {language === 'es' ? 'Hablar con Ventas' : 'Talk to Sales'}
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
        <SpectacularDemosSection />
        <TrustedCompanies />
        <KeyFeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <HomepageFAQSection />
        <FinalCTASection />
      </main>
      <FooterNew />
    </div>
  );
}
