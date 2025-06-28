'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import { useState } from 'react';
import { 
  PlayIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  CubeIcon,
  CloudIcon,
  ServerIcon,
  CircleStackIcon as DatabaseIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CircleStackIcon,
  ArrowsPointingOutIcon,
  PlusIcon,
  TrashIcon,
  DocumentDuplicateIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const demoSteps = [
  {
    title: 'Selecciona tu proveedor cloud',
    description: 'Comienza eligiendo entre AWS, Azure o Google Cloud Platform',
    duration: '0:30'
  },
  {
    title: 'Arrastra componentes al canvas',
    description: 'Añade servidores, bases de datos, redes y más con drag & drop',
    duration: '1:00'
  },
  {
    title: 'Conecta los recursos',
    description: 'Define las relaciones y dependencias entre componentes',
    duration: '0:45'
  },
  {
    title: 'Configura propiedades',
    description: 'Personaliza cada recurso con configuraciones específicas',
    duration: '1:30'
  },
  {
    title: 'Genera el código',
    description: 'Obtén código Terraform optimizado y listo para desplegar',
    duration: '0:15'
  }
];

const features = [
  {
    icon: CubeIcon,
    title: 'Componentes predefinidos',
    description: 'Más de 200 componentes cloud listos para usar'
  },
  {
    icon: ArrowsPointingOutIcon,
    title: 'Canvas infinito',
    description: 'Espacio ilimitado para diseñar arquitecturas complejas'
  },
  {
    icon: ArrowPathIcon,
    title: 'Sincronización en tiempo real',
    description: 'Los cambios se reflejan instantáneamente en el código'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Validación automática',
    description: 'Detecta errores de configuración antes de desplegar'
  }
];

const mockComponents = [
  { id: 1, type: 'EC2', icon: ServerIcon, name: 'Web Server', provider: 'aws' },
  { id: 2, type: 'RDS', icon: DatabaseIcon, name: 'Database', provider: 'aws' },
  { id: 3, type: 'S3', icon: CircleStackIcon, name: 'Storage', provider: 'aws' },
  { id: 4, type: 'CloudFront', icon: GlobeAltIcon, name: 'CDN', provider: 'aws' },
  { id: 5, type: 'Lambda', icon: CpuChipIcon, name: 'Function', provider: 'aws' },
  { id: 6, type: 'VPC', icon: CloudIcon, name: 'Network', provider: 'aws' }
];

export default function VisualBuilderDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [canvasComponents, setCanvasComponents] = useState<any[]>([]);

  const handleDragStart = (e: React.DragEvent, component: any) => {
    e.dataTransfer.setData('component', JSON.stringify(component));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const component = JSON.parse(e.dataTransfer.getData('component'));
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setCanvasComponents([...canvasComponents, {
      ...component,
      id: Date.now(),
      x,
      y
    }]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/demos" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                Demos
              </Link>
              <span className="text-slate-400 dark:text-slate-600">/</span>
              <span className="text-slate-900 dark:text-white font-medium">Constructor Visual</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-4">
                  <CubeIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                    Demo interactiva
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                  Constructor Visual de Infraestructura
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Diseña tu infraestructura cloud arrastrando y soltando componentes. 
                  Sin código, sin complicaciones.
                </p>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <ClockIcon className="h-5 w-5" />
                    <span>5 minutos</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckIcon className="h-5 w-5" />
                    <span>Sin registro requerido</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <PlayIcon className="h-5 w-5" />
                    Ver demo completa
                  </button>
                  <Link
                    href="/registro"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    Probar ahora
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              {/* Demo Preview */}
              <div className="relative">
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="bg-white/90 dark:bg-slate-900/90 rounded-full p-6 shadow-lg hover:scale-110 transition-transform"
                    >
                      <PlayIcon className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Prueba el constructor visual
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Components Sidebar */}
              <div className="lg:col-span-1">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                  Componentes AWS
                </h3>
                <div className="space-y-2">
                  {mockComponents.map((component) => {
                    const Icon = component.icon;
                    return (
                      <div
                        key={component.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, component)}
                        className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-move hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                      >
                        <Icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                        <div>
                          <div className="font-medium text-sm text-slate-900 dark:text-white">
                            {component.type}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {component.name}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Canvas */}
              <div className="lg:col-span-3">
                <div 
                  className="relative h-[600px] bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  {canvasComponents.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <CubeIcon className="h-16 w-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                        <p className="text-slate-500 dark:text-slate-400">
                          Arrastra componentes aquí para comenzar
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {canvasComponents.map((component) => {
                    const Icon = component.icon;
                    return (
                      <div
                        key={component.id}
                        className="absolute bg-white dark:bg-slate-800 border-2 border-indigo-500 dark:border-indigo-400 rounded-lg p-4 shadow-lg cursor-move"
                        style={{ left: component.x - 50, top: component.y - 30 }}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                          <span className="font-medium text-slate-900 dark:text-white">
                            {component.type}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Canvas Actions */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <ArrowPathIcon className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                      <DocumentDuplicateIcon className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => setCanvasComponents([])}
                      className="p-2 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                    Generar Terraform
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Cómo funciona
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {demoSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < demoSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-200 dark:bg-slate-700" />
                  )}
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {step.description}
                    </p>
                    <span className="text-xs text-slate-500 dark:text-slate-500">
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Características principales
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              ¿Listo para construir visualmente?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Únete a miles de equipos que ya diseñan su infraestructura de forma visual
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registro"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Empezar gratis
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                Ver más demos
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}