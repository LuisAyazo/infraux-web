'use client';

import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import TrustedCompanies from '@/components/landing/TrustedCompanies';
import LatestBlogPosts from '@/components/landing/LatestBlogPosts';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import {
  ArrowRightIcon,
  PlayCircleIcon,
  BoltIcon,
  CloudIcon,
  CodeBracketIcon,
  SparklesIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
  CheckIcon,
  ChatBubbleLeftRightIcon as TestimonialIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  PaintBrushIcon, // Para Diseño Visual
  CubeTransparentIcon, // Para IaC Multi-Proveedor
  UsersIcon, // Para Colaboración
  EyeIcon, // Para Showcase
  AcademicCapIcon, // Para Casos de Uso - ¿Qué es?
  CpuChipIcon, // Para Casos de Uso - DevOps
  CloudArrowUpIcon, // Para Casos de Uso - Migración
  BanknotesIcon, // Para Casos de Uso - Optimización
} from '@heroicons/react/24/outline';
import type { ElementType } from 'react';

// --- Sección Hero ---
function HeroSection() {
  const ctaButtonClasses = "px-8 py-3.5 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-md hover:shadow-lg transform hover:-translate-y-0.5";
  const primaryCtaClasses = `${ctaButtonClasses} bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500`;
  const secondaryCtaClasses = `${ctaButtonClasses} bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-700/30 focus:ring-indigo-500`;

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-white dark:bg-slate-900 pt-20 pb-28 sm:pt-28 sm:pb-36 md:pt-32 md:pb-40" // Ajuste de padding
      aria-labelledby="hero-title"
    >
      {/* Grid de fondo sutil */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] opacity-20 dark:opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10"> {/* Max-width ajustado */}
        <h1 
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 leading-tight" // Tracking más ajustado, leading
        >
          La Nube, Reimaginada.
          <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2 sm:mt-3">
            Visualiza. Automatiza. Domina.
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
          InfraUX es la plataforma definitiva para diseñar, desplegar y gestionar tu infraestructura cloud con una claridad y velocidad sin precedentes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="https://app.infraux.com/register" className={primaryCtaClasses}>
            Comenzar Gratis
            <ArrowRightIcon className="inline-block ml-2 h-5 w-5" />
          </Link>
          <Link href="/demo" className={secondaryCtaClasses}>
            <PlayCircleIcon className="inline-block mr-2 h-5 w-5" />
            Ver Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- Sección de Características Clave ---
function KeyFeaturesSection() {
  const features = [
    {
      icon: PaintBrushIcon,
      title: 'Diseño Visual Intuitivo',
      description: 'Modela arquitecturas complejas arrastrando y soltando componentes. Sin YAML al inicio.',
    },
    {
      icon: CubeTransparentIcon,
      title: 'IaC Multi-Proveedor',
      description: 'Genera código Terraform, Pulumi o Ansible listo para producción al instante.',
    },
    {
      icon: UsersIcon,
      title: 'Colaboración en Tiempo Real',
      description: 'Trabaja en equipo sobre la misma infraestructura visual, agilizando la entrega.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"> {/* Max-width aumentado */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Potencia tu Flujo de Trabajo Cloud
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            InfraUX te brinda las herramientas para innovar más rápido y con mayor confianza.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-slate-100 dark:border-slate-700/50"
              style={{ animationDelay: `${index * 100}ms` }} // Efecto de entrada escalonado
            >
              <div className="flex-shrink-0 mb-6">
                <div className="bg-indigo-100 dark:bg-indigo-500/20 p-4 rounded-lg inline-block">
                  <feature.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-base text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sección "Cómo Funciona" ---
function HowItWorksSection() {
    const steps = [
    {
      icon: CodeBracketIcon,
      title: '1. Diseña',
      description: 'Modela tu infraestructura visualmente. Arrastra, suelta y conecta nodos representando tus recursos cloud.',
    },
    {
      icon: BoltIcon,
      title: '2. Genera',
      description: 'Convierte tu diseño en código IaC (Terraform, Pulumi, Ansible) con un solo clic, listo para producción.',
    },
    {
      icon: CloudArrowUpIcon,
      title: '3. Despliega',
      description: 'Valida y despliega tu infraestructura en AWS, GCP o Azure directamente desde InfraUX.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Transforma Ideas en Realidad Cloud
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Un proceso simple y poderoso para llevar tu infraestructura al siguiente nivel.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12"> {/* Aumentado gap-y */}
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="flex justify-center mb-5">
                <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-full border-2 border-indigo-200 dark:border-indigo-500/30">
                  <step.icon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-base text-slate-600 dark:text-slate-400">{step.description}</p>
              {/* Línea conectora para desktop, opcional */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-1/2 w-1/2">
                  <svg className="w-full h-auto text-slate-200 dark:text-slate-700" fill="none" viewBox="0 0 100 1" preserveAspectRatio="none">
                    <path d="M0 0.5H100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sección Casos de Uso ---
const useCasesData = [
  {
    title: '¿Qué es InfraUX?',
    description: 'Descubre la plataforma que redefine la gestión de infraestructura en la nube.',
    href: '/que-es-infraux',
    icon: AcademicCapIcon,
  },
  {
    title: 'Equipos DevOps Ágiles',
    description: 'Acelera tus ciclos CI/CD con IaC automatizado y colaboración visual sin fricciones.',
    href: '/casos-de-uso/devops',
    icon: CpuChipIcon,
  },
  {
    title: 'Migraciones Cloud Exitosas',
    description: 'Planifica y ejecuta migraciones a AWS, GCP o Azure con total confianza y visibilidad.',
    href: '/casos-de-uso/migracion',
    icon: CloudArrowUpIcon,
  },
  {
    title: 'Optimización Inteligente de Costos',
    description: 'Visualiza, analiza y optimiza tus gastos en la nube para maximizar el ROI.',
    href: '/casos-de-uso/optimizacion-costos',
    icon: BanknotesIcon,
  },
];

function UseCasesSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Adaptado a tus Necesidades Cloud
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            InfraUX es la solución versátil para una amplia gama de desafíos y objetivos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {useCasesData.map((item) => (
            <Link href={item.href} key={item.title} className="group block p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/10 border border-transparent hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-indigo-100 dark:bg-indigo-500/20 p-3.5 rounded-lg">
                    <item.icon className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1.5">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline decoration-2 underline-offset-2">
                    Saber más <ArrowRightIcon className="inline-block h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sección Interactive Showcase ---
function InteractiveShowcaseSimplified() {
  const ctaButtonClasses = "px-6 py-3 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-md hover:shadow-lg transform hover:-translate-y-0.5";
  const primaryCtaClasses = `${ctaButtonClasses} bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500`;
  
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="lg:pr-8"> {/* Espacio para la imagen */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-5">
              Tu Nube, Bajo Control Total
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Gestiona toda tu infraestructura multi-nube desde una interfaz visual cohesiva. Simplifica la complejidad, fomenta la colaboración y acelera tus despliegues como nunca antes.
            </p>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 mb-10">
              {[
                "Visualización 360° de todos tus recursos cloud.",
                "Generación automática de código IaC optimizado.",
                "Colaboración en tiempo real para equipos distribuidos.",
                "Validación y despliegue seguro con un clic."
              ].map(text => (
                <li key={text} className="flex items-center">
                  <CheckIcon className="flex-shrink-0 h-6 w-6 text-indigo-500 dark:text-indigo-400 mr-3" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
             <Link href="/demo" className={primaryCtaClasses}>
                Explora la Demo Interactiva
                <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700 shadow-2xl aspect-video">
              {/* Idealmente, aquí iría una imagen o un componente de demo real */}
              {/* Reemplaza esto con una imagen de tu producto: <img src="/path/to/your-product-showcase.png" alt="InfraUX Showcase" className="rounded-lg object-cover w-full h-full" /> */}
              <div className="w-full h-full bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <EyeIcon className="h-24 w-24 text-slate-400 dark:text-slate-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sección Testimonios ---
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "InfraUX ha revolucionado nuestra gestión de infraestructura. Lo que antes tomaba días, ahora se completa en minutos. Es intuitivo, potente y esencial.",
      author: "Elena Rivas",
      role: "Lead DevOps Architect, NovaTech Solutions",
    },
    {
      quote: "La capacidad de visualizar y generar código IaC al instante nos ha ahorrado incontables horas y ha minimizado errores críticos. ¡Un cambio de juego!",
      author: "Javier Morales",
      role: "CTO, Quantum Leap AI",
    },
     {
      quote: "Desde que implementamos InfraUX, la colaboración entre nuestros equipos de desarrollo y operaciones ha mejorado drásticamente. Altamente recomendado.",
      author: "Sofia Chen",
      role: "Cloud Operations Manager, Apex Digital",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Confían en Nosotros Empresas Innovadoras
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700/50 flex flex-col">
              <blockquote className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
                <TestimonialIcon className="h-10 w-10 text-indigo-500 dark:text-indigo-400 mb-4 opacity-75" />
                <p className="italic text-lg leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sección CTA Final ---
function FinalCTASection() {
  const ctaButtonClasses = "px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-xl hover:shadow-2xl transform hover:-translate-y-1";
  const primaryCtaClasses = `${ctaButtonClasses} bg-white hover:bg-slate-50 text-indigo-600 focus:ring-indigo-300`;
  const secondaryCtaClasses = `${ctaButtonClasses} bg-transparent hover:bg-white/10 text-white border-2 border-white focus:ring-white/70`;

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          ¿Listo para Transformar tu Cloud?
        </h2>
        <p className="text-xl sm:text-2xl text-indigo-100 dark:text-indigo-200 mb-12 max-w-2xl mx-auto">
          Únete a la revolución de la infraestructura visual. Comienza gratis hoy mismo y experimenta el poder de InfraUX.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link href="https://app.infraux.com/register" className={primaryCtaClasses}>
            Crear Cuenta Gratis
          </Link>
          <Link href="/contact" className={secondaryCtaClasses}> {/* Asumiendo una página de contacto o demo */}
            Hablar con Ventas
          </Link>
        </div>
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-indigo-200 dark:text-indigo-300">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="h-5 w-5" />
            <span>Seguridad de Nivel Empresarial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="h-5 w-5" /> 
            <span>Soporte Experto Dedicado</span>
          </div>
          <div className="flex items-center gap-2">
            <LockClosedIcon className="h-5 w-5" /> 
            <span>Cumplimiento y Privacidad</span>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white antialiased">
      <Header />
      <main className="flex-grow" role="main">
        <HeroSection />
        <TrustedCompanies />
        <KeyFeaturesSection />
        <HowItWorksSection />
        <InteractiveShowcaseSimplified />
        <UseCasesSection />
        <LatestBlogPosts />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
