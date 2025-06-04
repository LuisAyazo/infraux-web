import Header from '@/components/landing/Header';
import WhatIsInfraUX from '@/components/landing/WhatIsInfraUX';
import VisualNodeExamples from '@/components/landing/VisualNodeExamples';
import DeploymentFlow from '@/components/landing/DeploymentFlow';
import UseCases from '@/components/landing/UseCases';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';
import DemoPlaceholder from '@/components/landing/DemoPlaceholder';
import Pricing from '@/components/landing/Pricing';
import TrustedCompanies from '@/components/landing/TrustedCompanies';
import ThemeToggle from '@/components/ThemeToggle';
import { Metadata } from 'next';

// Enhanced SEO metadata for the home page
export const metadata: Metadata = {
  title: "InfraUX - Visualiza y Despliega tu Infraestructura Cloud sin Esfuerzo",
  description: "🚀 Diseña infraestructura cloud visualmente en AWS, GCP y Azure. Genera código Terraform, Pulumi y Ansible automáticamente. Colaboración en tiempo real. ¡Prueba gratis ahora!",
  openGraph: {
    title: "InfraUX: De Diagramas a Infraestructura Real en Minutos | AWS, GCP, Azure",
    description: "🎯 La herramienta visual que todo DevOps necesita. Diseña → Genera IaC → Despliega. Soporte completo para AWS, GCP, Azure, Terraform, Pulumi. ¡Empieza gratis!",
    images: [
      {
        url: '/og-home-page.png',
        width: 1200,
        height: 630,
        alt: 'InfraUX Dashboard - Diseña tu infraestructura cloud visualmente',
      },
    ],
  },
  twitter: {
    title: "InfraUX 🚀 Infraestructura Cloud Visual | Terraform + AWS + GCP + Azure",
    description: "⚡ Transforma diagramas en código IaC real. Multi-cloud. Colaboración DevOps. ¡El futuro de la infraestructura es visual! #CloudInfrastructure #DevOps #IaC",
  },
  alternates: {
    canonical: 'https://www.infraux.com',
  },
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="flex-grow" role="main">
          {/* Hero Section - Enhanced with semantic HTML */}
          <section 
            id="home" 
            className="relative py-32 px-6 text-center overflow-hidden"
            aria-labelledby="hero-title"
            itemScope 
            itemType="https://schema.org/WebPageElement"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-cloud-blue-500/10 via-electric-purple-500/10 to-emerald-green-500/10 animate-gradient-shift" aria-hidden="true"></div>
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-cloud-blue-400/20 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-electric-purple-400/20 rounded-full blur-3xl animate-float-delay" aria-hidden="true"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-green-400/10 rounded-full blur-3xl animate-float" aria-hidden="true"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="animate-fade-in-up">
                <h1 
                  id="hero-title" 
                  className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
                  itemProp="name"
                >
                  Visualiza y Despliega tu{' '}
                  <span className="bg-gradient-to-r from-electric-purple-600 via-cloud-blue-600 to-emerald-green-600 bg-clip-text text-transparent animate-gradient-shift">
                    Infraestructura Cloud
                  </span>{' '}
                  sin Esfuerzo
                </h1>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p 
                className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed"
                itemProp="description"
              >
                <span className="text-gray-900 dark:text-gray-100">Infra</span><span className="bg-gradient-to-r from-emerald-green-600 via-emerald-green-500 to-emerald-green-700 bg-clip-text text-transparent">UX</span> te permite diseñar, crear y gestionar tu infraestructura en GCP, AWS y Azure mediante diagramas intuitivos.
                Transforma tus ideas en código IaC listo para producción.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                <a 
                  href="#pricing" 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-purple-600 to-electric-purple-700 hover:from-electric-purple-700 hover:to-electric-purple-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-electric-purple-500/25 group"
                  aria-label="Comenzar con InfraUX - Ver planes y precios"
                >
                  Empezar Ahora
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center gap-2 border-2 border-electric-purple-600 text-electric-purple-600 dark:text-electric-purple-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-electric-purple-600 hover:text-white transform hover:scale-105 group"
                  aria-label="Ver demostración interactiva de InfraUX"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-8 0V9a3 3 0 013-3h2a3 3 0 013 3v5m-8 0v5a3 3 0 003 3h2a3 3 0 003-3v-5" />
                </svg>
                Solicitar Demo
              </a>
            </div>
            
            {/* Stats */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-electric-purple-600 dark:text-electric-purple-400 mb-2">1000+</div>
                <div className="text-gray-600 dark:text-gray-400">Proyectos Creados</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-emerald-green-600 dark:text-emerald-green-400 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Plantillas Disponibles</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-cloud-blue-600 dark:text-cloud-blue-400 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">Tiempo de Actividad</div>
              </div>
            </div>
          </div>
        </section>
        
        <WhatIsInfraUX />
        <DemoPlaceholder />
        <VisualNodeExamples />
        <DeploymentFlow />
        <UseCases />
        <Pricing />
        <TrustedCompanies />
        <Testimonials />
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}
