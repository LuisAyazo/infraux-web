'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import Image from 'next/image';
import { 
  PlayIcon,
  ArrowRightIcon,
  ClockIcon,
  SparklesIcon,
  CommandLineIcon,
  CloudIcon,
  CubeIcon,
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BeakerIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const demos = [
  {
    id: 'visual-builder',
    title: 'Constructor Visual de Infraestructura',
    description: 'Arrastra y suelta componentes cloud para diseñar tu infraestructura visualmente',
    duration: '5 min',
    category: 'Diseño',
    icon: CubeIcon,
    image: '/demos/visual-builder-preview.png',
    features: [
      'Drag & drop intuitivo',
      'Vista previa en tiempo real',
      'Validación automática',
      'Plantillas predefinidas'
    ],
    gradient: 'from-blue-600 to-cyan-600',
    new: true
  },
  {
    id: 'terraform-generation',
    title: 'Generación de Código Terraform',
    description: 'Convierte tus diagramas en código Terraform listo para producción',
    duration: '3 min',
    category: 'Código',
    icon: CommandLineIcon,
    image: '/demos/terraform-preview.png',
    features: [
      'Código optimizado',
      'Mejores prácticas incluidas',
      'Módulos reutilizables',
      'Sintaxis validada'
    ],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'multi-cloud',
    title: 'Gestión Multi-Cloud',
    description: 'Administra recursos en AWS, Azure y GCP desde una sola interfaz',
    duration: '7 min',
    category: 'Cloud',
    icon: CloudIcon,
    image: '/demos/multi-cloud-preview.png',
    features: [
      'Soporte AWS, Azure, GCP',
      'Vista unificada',
      'Migración entre clouds',
      'Comparación de costos'
    ],
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'cost-analysis',
    title: 'Análisis de Costos en Tiempo Real',
    description: 'Visualiza y optimiza los costos de tu infraestructura cloud',
    duration: '4 min',
    category: 'FinOps',
    icon: ChartBarIcon,
    image: '/demos/cost-analysis-preview.png',
    features: [
      'Estimación instantánea',
      'Alertas de presupuesto',
      'Recomendaciones de ahorro',
      'Reportes detallados'
    ],
    gradient: 'from-green-600 to-teal-600'
  },
  {
    id: 'team-collaboration',
    title: 'Colaboración en Equipo',
    description: 'Trabaja en tiempo real con tu equipo en los diagramas de infraestructura',
    duration: '6 min',
    category: 'Colaboración',
    icon: UserGroupIcon,
    image: '/demos/collaboration-preview.png',
    features: [
      'Edición simultánea',
      'Comentarios en contexto',
      'Control de versiones',
      'Revisión de cambios'
    ],
    gradient: 'from-orange-600 to-red-600'
  },
  {
    id: 'security-compliance',
    title: 'Seguridad y Compliance',
    description: 'Valida automáticamente el cumplimiento de políticas de seguridad',
    duration: '5 min',
    category: 'Seguridad',
    icon: ShieldCheckIcon,
    image: '/demos/security-preview.png',
    features: [
      'Escaneo automático',
      'Políticas personalizadas',
      'Reportes de compliance',
      'Remediación sugerida'
    ],
    gradient: 'from-red-600 to-pink-600'
  },
  {
    id: 'environments',
    title: 'Gestión de Ambientes',
    description: 'Administra múltiples ambientes (dev, staging, prod) con facilidad',
    duration: '4 min',
    category: 'DevOps',
    icon: BeakerIcon,
    image: '/demos/environments-preview.png',
    features: [
      'Clonación de ambientes',
      'Promoción entre stages',
      'Configuración por ambiente',
      'Rollback automático'
    ],
    gradient: 'from-teal-600 to-cyan-600'
  },
  {
    id: 'documentation',
    title: 'Documentación Automática',
    description: 'Genera documentación técnica actualizada de tu infraestructura',
    duration: '3 min',
    category: 'Documentación',
    icon: DocumentTextIcon,
    image: '/demos/documentation-preview.png',
    features: [
      'Diagramas actualizados',
      'Descripción de recursos',
      'Exportación en múltiples formatos',
      'Integración con wikis'
    ],
    gradient: 'from-gray-600 to-slate-600'
  }
];

const categories = [
  { name: 'Todos', count: demos.length },
  { name: 'Diseño', count: demos.filter(d => d.category === 'Diseño').length },
  { name: 'Código', count: demos.filter(d => d.category === 'Código').length },
  { name: 'Cloud', count: demos.filter(d => d.category === 'Cloud').length },
  { name: 'FinOps', count: demos.filter(d => d.category === 'FinOps').length },
  { name: 'Colaboración', count: demos.filter(d => d.category === 'Colaboración').length },
  { name: 'Seguridad', count: demos.filter(d => d.category === 'Seguridad').length },
  { name: 'DevOps', count: demos.filter(d => d.category === 'DevOps').length },
  { name: 'Documentación', count: demos.filter(d => d.category === 'Documentación').length }
];

export default function DemosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800" />
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-6">
                <SparklesIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Demos interactivas
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Descubre el poder de
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  InfraUX en acción
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Explora nuestras demos interactivas y descubre cómo InfraUX puede transformar
                la forma en que gestionas tu infraestructura cloud
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#demos"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <PlayIcon className="h-5 w-5" />
                  Ver todas las demos
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Prueba gratis
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    category.name === 'Todos'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-70">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Demos Grid */}
        <section id="demos" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo) => {
                const Icon = demo.icon;
                return (
                  <Link
                    key={demo.id}
                    href={`/demos/${demo.id}`}
                    className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Image Preview */}
                    <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                      <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-10`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-24 w-24 text-slate-300 dark:text-slate-600" />
                      </div>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white/90 dark:bg-slate-900/90 rounded-full p-4 scale-0 group-hover:scale-100 transition-transform duration-300">
                          <PlayIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                        </div>
                      </div>
                      
                      {/* New Badge */}
                      {demo.new && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                            NUEVO
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          {demo.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                          <ClockIcon className="h-4 w-4" />
                          {demo.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {demo.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {demo.description}
                      </p>
                      
                      <div className="space-y-2">
                        {demo.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <div className="h-1.5 w-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
                        Ver demo
                        <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              ¿Listo para transformar tu infraestructura?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Comienza tu prueba gratuita de 30 días y descubre todo lo que InfraUX puede hacer por ti
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Empezar ahora
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Solicitar demo personalizada
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}