'use client'

import { useState } from 'react'
import Link from 'next/link'
// StarIcon se mueve a PlanCard y ComparisonTable
import PlanCard from './PlanCard' 
import ComparisonTable from './ComparisonTable' // Importar el nuevo componente

// Exportar plansData para que pueda ser usado en otros lugares, como SettingsPage
export const plansData = [
  {
    name: 'Starter',
    id: 'starter',
    price: { monthly: 0, yearly: 0 },
    description: 'Ideal para individuos y pequeños proyectos de prueba.',
    badge: '🟢 Gratis',
    emoji: '🟢',
    features: [
      { name: '1 Usuario', included: true },
      { name: '1 Proyecto / Compañía', included: true },
      { name: 'Hasta 3 diagramas en total', included: true },
      { name: '1 Ambiente (ej. Sandbox)', included: true },
      { name: 'Hasta 20 recursos en total', included: true },
      { name: 'Soporte limitado para AWS, GCP y Azure', included: true },
      { name: 'Exportar a Terraform', included: true },
      { name: 'Deploy directo (limitado: 5 recursos/deploy, 2 deploys/mes)', included: true },
      { name: 'Despliegue Universal básico (Docker, Cloud Run, ECS)', included: true },
      { name: 'Plantillas básicas', included: true },
      { name: 'Versionado básico (últimas 3 versiones)', included: true },
      { name: 'Soporte por comunidad', included: true },
      { name: 'Colaboración en equipo', included: false },
      { name: 'Importación de infraestructura', included: false },
      { name: 'Análisis de costos', included: false },
    ],
    cta: 'Empezar Gratis',
    popular: false,
    savings: null,
  },
  {
    name: 'Professional',
    id: 'professional',
    price: { monthly: 49, yearly: 490 },
    description: 'Para profesionales y equipos pequeños que necesitan más capacidad y control.',
    badge: '🔵 Professional',
    emoji: '🔵',
    originalPrice: 29,
    features: [
      { name: 'Hasta 3 Usuarios', included: true },
      { name: 'Hasta 5 Proyectos / Compañías', included: true },
      { name: 'Hasta 10 diagramas por proyecto', included: true },
      { name: 'Hasta 3 Ambientes por proyecto (Dev, Staging, Prod)', included: true },
      { name: 'Hasta 200 recursos en total', included: true },
      { name: 'Soporte completo AWS, GCP, Azure', included: true },
      { name: 'Exportar a Terraform y CloudFormation', included: true },
      { name: 'Deploy directo ilimitado', included: true },
      { name: 'Despliegue Universal (ECS, Cloud Run, Fargate, Docker)', included: true },
            { name: 'Importación básica de IaC (hasta 50 recursos)', included: true },
      { name: 'Plantillas Premium', included: true },
      { name: 'Colaboración básica (comentarios en diagramas)', included: true },
      { name: 'Versionado estándar (historial de 30 días)', included: true },
      { name: 'Análisis de costos estimado', included: true },
      { name: 'Soporte por Email (respuesta en 24h)', included: true },
      { name: 'Roles/Permisos', included: false },
      { name: 'Promoción entre ambientes', included: false },
      { name: 'CI/CD', included: false },
      { name: 'Integraciones corporativas', included: false },
    ],
    cta: 'Prueba Gratuita 14 Días',
    popular: true,
    savings: 'Ahorra 2 meses',
  },
  {
    name: 'Team',
    id: 'team',
    price: { monthly: 149, yearly: 1490 },
    description: 'Colaboración avanzada y herramientas potentes para equipos en crecimiento.',
    badge: '🟣 Team',
    emoji: '🟣',
    originalPrice: 79,
    features: [
      { name: 'Hasta 10 Usuarios (ampliable)', included: true },
      { name: 'Proyectos y compañías ilimitados', included: true },
      { name: 'Diagramas ilimitados', included: true },
      { name: 'Ambientes ilimitados por proyecto', included: true },
      { name: 'Hasta 1000 recursos en total', included: true },
      { name: 'Soporte completo multi-cloud', included: true },
      { name: 'Exportar a Terraform, CloudFormation, Pulumi', included: true },
      { name: 'Deploy directo con flujos de aprobación', included: true },
      { name: 'Despliegue Universal Avanzado (Kubernetes, Functions, Jobs, ECS, Cloud Run, Fargate)', included: true },
      { name: 'Importación completa de infraestructura', included: true },
      { name: 'Promoción entre ambientes (manual y semi-automática)', included: true },
      { name: 'Plantillas Premium y personalizadas', included: true },
      { name: 'Colaboración avanzada (roles y permisos)', included: true },
      { name: 'Versionado avanzado (historial completo, etiquetas)', included: true },
      { name: 'Análisis de costos con alertas', included: true },
      { name: 'Integración básica CI/CD (webhooks, GitHub/GitLab)', included: true },
      { name: 'Soporte prioritario (email 8h, chat)', included: true },
    ],
    cta: 'Prueba Gratuita 14 Días',
    popular: false,
    savings: 'Ahorra 2 meses',
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: { monthly: null, yearly: null },
    description: 'Máximo control, escalabilidad y soporte personalizado para organizaciones exigentes.',
    badge: '🟠 Enterprise',
    emoji: '🟠',
    customPrice: 'desde $499', // Modificado aquí
    features: [
      { name: 'Usuarios, proyectos y ambientes ilimitados', included: true },
      { name: 'Recursos y diagramas ilimitados', included: true },
      { name: 'Soporte extendido para multi-cloud e híbridos', included: true },
      { name: 'Exportar: Terraform, CloudFormation, Pulumi, YAML personalizado', included: true },
      { name: 'Deploy directo con validaciones, aprobación, rollback, GitOps', included: true },
      { name: 'Despliegue Universal Full (Kubernetes, Docker, ECS, Cloud Run, Fargate, Azure Functions, Google Cloud Jobs...)', included: true },
      { name: 'Importación masiva de IaC (multi-archivo, multi-cloud)', included: true },
      { name: 'Promoción inteligente entre ambientes (con dependencias y workflows)', included: true },
      { name: 'Plantillas personalizadas por equipo o industria', included: true },
      { name: 'Versionado profesional con comparaciones y rollback', included: true },
      { name: 'Colaboración enterprise (roles, permisos, auditoría)', included: true },
      { name: 'Análisis de costos avanzado (visualizaciones, alertas, simulaciones)', included: true },
      { name: 'CI/CD personalizada (GitHub, GitLab, Bitbucket, pipelines externos)', included: true },
      { name: 'Integraciones empresariales (SSO, SAML, OAuth corporativo)', included: true },
      { name: 'Soporte 24/7 con SLA', included: true },
      { name: 'Canal privado (Slack, manager dedicado)', included: true },
      { name: 'Capacitación, onboarding y migración asistida', included: true },
      { name: 'Acceso a roadmap y features exclusivos', included: true },
    ],
    cta: 'Contactar Ventas',
    popular: false,
    savings: null,
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const [showComparison, setShowComparison] = useState(false)

  const comparisonFeatures = [
    { name: 'Usuarios', starter: '1', professional: 'Hasta 3', team: 'Hasta 10 (ampliable)', enterprise: 'Ilimitados' },
    { name: 'Proyectos / Compañías', starter: '1', professional: 'Hasta 5', team: 'Ilimitados', enterprise: 'Ilimitados' },
    { name: 'Diagramas por proyecto', starter: 'Hasta 3 (total)', professional: 'Hasta 10', team: 'Ilimitados', enterprise: 'Ilimitados' },
    { name: 'Ambientes por proyecto', starter: '1', professional: 'Hasta 3', team: 'Ilimitados', enterprise: 'Ilimitados' },
    { name: 'Recursos totales', starter: 'Hasta 20', professional: 'Hasta 200', team: 'Hasta 1000', enterprise: 'Ilimitados' },
    { name: 'Nubes soportadas', starter: 'AWS, GCP, Azure (limitado)', professional: 'AWS, GCP, Azure (completo)', team: 'Full Multi-cloud', enterprise: 'Multi-cloud + Híbrido' },
    { name: 'Exportar a IaC', starter: 'Terraform', professional: 'Terraform, CloudFormation', team: '+ Pulumi', enterprise: '+ YAML personalizado' },
    { name: 'Deploy directo', starter: 'Limitado (5 rec/deploy, 2x mes)', professional: 'Ilimitado', team: 'Con aprobación', enterprise: '+ Validaciones, GitOps' },
    { name: 'Despliegue Universal', starter: 'Docker, Cloud Run, ECS (limitado)', professional: 'ECS, Fargate, Docker', team: 'Kubernetes, Functions, Jobs, etc.', enterprise: 'Todo full incluyendo híbridos' },
    { name: 'Importar Infraestructura / IaC', starter: '❌', professional: 'Básica (hasta 50 recursos)', team: 'Completa', enterprise: 'Masiva (multi-cloud)' },
    { name: 'Promoción entre ambientes', starter: '❌', professional: '❌', team: 'Manual/Semi-auto', enterprise: 'Inteligente (con workflows)' },
    { name: 'Plantillas', starter: 'Básicas', professional: 'Premium', team: 'Premium + Custom', enterprise: 'Personalizadas x equipo/industria' },
    { name: 'Versionado', starter: 'Básico (últimas 3)', professional: 'Estándar (30 días)', team: 'Avanzado', enterprise: 'Profesional (historial completo)' },
    { name: 'Colaboración en equipo', starter: '❌', professional: 'Comentarios básicos', team: 'Roles/Permisos', enterprise: 'Roles avanzados, auditoría' },
    { name: 'Análisis de costos', starter: '❌', professional: 'Estimado', team: 'Con alertas', enterprise: 'Visualizaciones + simulaciones' },
    { name: 'CI/CD', starter: '❌', professional: '❌', team: 'Webhooks, GitHub/GitLab', enterprise: 'Integraciones completas CI/CD' },
    { name: 'Integraciones Empresariales (SSO, SAML, etc.)', starter: '❌', professional: '❌', team: '❌', enterprise: '✅' },
    { name: 'Soporte', starter: 'Comunidad', professional: 'Email (24h)', team: 'Prioritario (8h, chat)', enterprise: 'Dedicado 24/7, SLA, Slack privado' },
    { name: 'Capacitación & Onboarding', starter: '❌', professional: '❌', team: '❌', enterprise: 'Personalizado' },
    { name: 'Acceso a roadmap & features exclusivos', starter: '❌', professional: '❌', team: '❌', enterprise: '✅' },
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-green-500/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <h2 className="text-base font-semibold leading-7 text-electric-purple-600 dark:text-electric-purple-400">
            Precios
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Elige el plan perfecto para ti
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Comienza gratis y escala según crezcan tus necesidades. Sin compromisos, cancela cuando quieras.
          </p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="relative bg-gray-100 dark:bg-gray-800 p-1 rounded-xl border border-gray-200 dark:border-gray-700">
            <button
              type="button"
              className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                !isYearly
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md transform scale-105'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setIsYearly(false)}
            >
              Mensual
            </button>
            <button
              type="button"
              className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                isYearly
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md transform scale-105'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setIsYearly(true)}
            >
              Anual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-emerald-green-100 dark:bg-emerald-green-900/40 px-2 py-0.5 text-xs font-medium text-emerald-green-700 dark:text-emerald-green-300">
                Ahorra 2 meses
              </span>
            </button>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-electric-purple-100 dark:bg-electric-purple-900/30 text-electric-purple-700 dark:text-electric-purple-300 hover:bg-electric-purple-200 dark:hover:bg-electric-purple-900/50 rounded-lg text-sm font-medium transition-all duration-300 border border-electric-purple-300 dark:border-electric-purple-700 hover:scale-105"
            >
              {showComparison ? '📊 Ocultar' : '📊 Ver'} Comparativa
            </button>
            
            <Link
              href="/comparacion"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-green-600 hover:bg-emerald-green-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🔍 Comparativa Completa
            </Link>
          </div>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-sm grid-cols-1 gap-y-8 sm:mt-20 sm:max-w-2xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4 lg:gap-x-6 xl:gap-x-8">
          {plansData.map((plan, planIdx) => (
            <PlanCard key={plan.id} plan={plan} isYearly={isYearly} planIdx={planIdx} />
          ))}
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <ComparisonTable plansData={plansData} comparisonFeatures={comparisonFeatures} />
        )}

        <div className="mt-20 text-center animate-fade-in-up">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            ¿Necesitas algo más?{' '}
            <Link href="/contact" className="font-semibold text-electric-purple-600 dark:text-electric-purple-400 hover:text-electric-purple-700 dark:hover:text-electric-purple-300 transition-colors">
              Contáctanos
            </Link>{' '}
            para soluciones Enterprise a medida.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Sin Compromiso', description: 'Cancela en cualquier momento. Sin contratos anuales obligatorios.', icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, gradient: 'from-electric-purple-500 to-emerald-green-500' },
            { title: 'Escalabilidad Flexible', description: 'Ajusta tu plan según tus necesidades crezcan o cambien.', icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, gradient: 'from-emerald-green-500 to-cloud-blue-500' },
            { title: 'Soporte Experto', description: 'Equipo de expertos disponible para ayudarte a tener éxito.', icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75zm0 0c.621 0 1.23.047 1.829.138.6.09 1.176.227 1.725.414L12 2.25z" /></svg>, gradient: 'from-cloud-blue-500 to-electric-purple-500' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
