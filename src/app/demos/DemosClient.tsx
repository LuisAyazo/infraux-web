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
      'Compatibilidad multi-cloud',
      'Documentación automática'
    ],
    gradient: 'from-purple-600 to-pink-600',
    popular: true
  },
  {
    id: 'deployment-pipeline',
    title: 'Pipeline de Despliegue',
    description: 'Despliega tu infraestructura automáticamente con pipelines CI/CD',
    duration: '4 min',
    category: 'Despliegue',
    icon: CloudIcon,
    image: '/demos/deployment-preview.png',
    features: [
      'Integración con Git',
      'Rollback automático',
      'Notificaciones en tiempo real',
      'Múltiples entornos'
    ],
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    id: 'monitoring-dashboard',
    title: 'Dashboard de Monitoreo',
    description: 'Visualiza métricas y alertas de tu infraestructura en tiempo real',
    duration: '3 min',
    category: 'Monitoreo',
    icon: ChartBarIcon,
    image: '/demos/monitoring-preview.png',
    features: [
      'Métricas personalizables',
      'Alertas inteligentes',
      'Histórico de datos',
      'Exportación de reportes'
    ],
    gradient: 'from-orange-600 to-red-600'
  },
  {
    id: 'team-collaboration',
    title: 'Colaboración en Equipo',
    description: 'Trabaja con tu equipo en proyectos de infraestructura compartidos',
    duration: '6 min',
    category: 'Colaboración',
    icon: UserGroupIcon,
    image: '/demos/collaboration-preview.png',
    features: [
      'Comentarios en tiempo real',
      'Control de versiones',
      'Permisos granulares',
      'Historial de cambios'
    ],
    gradient: 'from-indigo-600 to-blue-600'
  },
  {
    id: 'security-scanning',
    title: 'Escaneo de Seguridad',
    description: 'Identifica y corrige vulnerabilidades en tu infraestructura',
    duration: '4 min',
    category: 'Seguridad',
    icon: ShieldCheckIcon,
    image: '/demos/security-preview.png',
    features: [
      'Escaneo automático',
      'Reportes detallados',
      'Recomendaciones',
      'Cumplimiento normativo'
    ],
    gradient: 'from-red-600 to-pink-600'
  }
];

const categories = [
  { name: 'Todos', id: 'all', icon: BeakerIcon },
  { name: 'Diseño', id: 'design', icon: CubeIcon },
  { name: 'Código', id: 'code', icon: CommandLineIcon },
  { name: 'Despliegue', id: 'deployment', icon: CloudIcon },
  { name: 'Monitoreo', id: 'monitoring', icon: ChartBarIcon },
  { name: 'Colaboración', id: 'collaboration', icon: UserGroupIcon },
  { name: 'Seguridad', id: 'security', icon: ShieldCheckIcon }
];

export default function DemosClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderNew />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <SparklesIcon className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Demos Interactivos</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Explora InfraUX en
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Acción
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Descubre cómo InfraUX puede transformar tu flujo de trabajo de infraestructura 
                con nuestras demos interactivas paso a paso.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/demos/visual-builder"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  <PlayIcon className="h-5 w-5 mr-2" />
                  Comenzar Demo
                </Link>
                <Link 
                  href="/register"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Crear Cuenta Gratis
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Demos Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Demos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Valoración Media</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">3-6 min</div>
              <div className="text-gray-600">Duración Promedio</div>
            </div>
          </div>
        </div>

        {/* Demos Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo) => {
              const IconComponent = demo.icon;
              return (
                <div key={demo.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    {demo.new && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                        Nuevo
                      </span>
                    )}
                    {demo.popular && (
                      <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Image */}
                  <div className={`h-48 bg-gradient-to-br ${demo.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="h-16 w-16 text-white/80" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                        {demo.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {demo.duration}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {demo.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {demo.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {demo.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/demos/${demo.id}`}
                      className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group-hover:bg-blue-700"
                    >
                      Ver Demo
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Crea tu cuenta gratuita y accede a todas las funcionalidades de InfraUX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Crear Cuenta Gratis
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Hablar con Ventas
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterNew />
    </div>
  );
}
