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
    description: 'Elige entre AWS, Azure o GCP según tus necesidades',
    duration: '30s',
    completed: false
  },
  {
    title: 'Arrastra componentes al canvas',
    description: 'Usa la interfaz drag & drop para añadir recursos',
    duration: '2 min',
    completed: false
  },
  {
    title: 'Configura las propiedades',
    description: 'Personaliza cada recurso con sus configuraciones específicas',
    duration: '1.5 min',
    completed: false
  },
  {
    title: 'Conecta los componentes',
    description: 'Establece las relaciones entre tus recursos cloud',
    duration: '1 min',
    completed: false
  },
  {
    title: 'Valida y despliega',
    description: 'Revisa tu arquitectura y genera el código de deployment',
    duration: '30s',
    completed: false
  }
];

const cloudComponents = [
  {
    name: 'EC2 Instance',
    icon: ServerIcon,
    category: 'Compute',
    provider: 'AWS',
    color: 'bg-orange-500'
  },
  {
    name: 'RDS Database',
    icon: DatabaseIcon,
    category: 'Database',
    provider: 'AWS',
    color: 'bg-blue-500'
  },
  {
    name: 'Load Balancer',
    icon: GlobeAltIcon,
    category: 'Network',
    provider: 'AWS',
    color: 'bg-green-500'
  },
  {
    name: 'S3 Bucket',
    icon: CubeIcon,
    category: 'Storage',
    provider: 'AWS',
    color: 'bg-purple-500'
  },
  {
    name: 'CloudFront',
    icon: CloudIcon,
    category: 'CDN',
    provider: 'AWS',
    color: 'bg-indigo-500'
  },
  {
    name: 'Security Group',
    icon: ShieldCheckIcon,
    category: 'Security',
    provider: 'AWS',
    color: 'bg-red-500'
  }
];

interface CloudComponent {
  name: string;
  icon: any;
  category: string;
  provider: string;
  color: string;
}

interface CanvasComponent extends CloudComponent {
  id: number;
  x: number;
  y: number;
}

export default function VisualBuilderClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [draggedComponent, setDraggedComponent] = useState<CloudComponent | null>(null);
  const [canvasComponents, setCanvasComponents] = useState<CanvasComponent[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleDragStart = (component: CloudComponent) => {
    setDraggedComponent(component);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedComponent) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setCanvasComponents([...canvasComponents, {
        ...draggedComponent,
        id: Date.now(),
        x,
        y
      }]);
      setDraggedComponent(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const startDemo = () => {
    setIsPlaying(true);
    // Simulate demo progression
    setTimeout(() => {
      setCurrentStep(1);
      // Add more demo logic here
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderNew />
      
      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/demos" className="hover:text-blue-600">Demos</Link>
            <span>›</span>
            <span className="text-gray-900">Constructor Visual</span>
          </nav>
        </div>

        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
              <CubeIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Demo Interactiva</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Constructor Visual de Infraestructura
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Aprende a diseñar tu infraestructura cloud de forma visual con nuestro 
              editor drag & drop. Desde componentes básicos hasta arquitecturas complejas.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                5 minutos
              </div>
              <div className="flex items-center">
                <CubeIcon className="h-4 w-4 mr-1" />
                Nivel: Principiante
              </div>
              <div className="flex items-center">
                <CloudIcon className="h-4 w-4 mr-1" />
                AWS, Azure, GCP
              </div>
            </div>
          </div>

          {/* Demo Controls */}
          <div className="flex justify-center mb-8">
            {!isPlaying ? (
              <button
                onClick={startDemo}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <PlayIcon className="h-5 w-5 mr-2" />
                Iniciar Demo
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                  <ArrowLeftIcon className="h-5 w-5" />
                </button>
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm">
                  Paso {currentStep + 1} de {demoSteps.length}
                </span>
                <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Demo Interface */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-12 min-h-[600px]">
              {/* Components Sidebar */}
              <div className="col-span-3 bg-gray-50 p-6 border-r">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Componentes AWS
                </h3>
                
                <div className="space-y-4">
                  {cloudComponents.map((component, index) => {
                    const IconComponent = component.icon;
                    return (
                      <div
                        key={index}
                        draggable
                        onDragStart={() => handleDragStart(component)}
                        className="flex items-center p-3 bg-white rounded-lg border cursor-move hover:shadow-md transition-shadow"
                      >
                        <div className={`p-2 rounded-lg ${component.color} mr-3`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{component.name}</div>
                          <div className="text-sm text-gray-500">{component.category}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Canvas Area */}
              <div className="col-span-6 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Canvas de Diseño
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <ArrowsPointingOutIcon className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <ArrowPathIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div
                  className="relative w-full h-96 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  {canvasComponents.length === 0 ? (
                    <div className="text-center text-gray-500">
                      <CubeIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p>Arrastra componentes aquí para empezar</p>
                    </div>
                  ) : (
                    canvasComponents.map((component) => {
                      const IconComponent = component.icon;
                      return (
                        <div
                          key={component.id}
                          className="absolute p-3 bg-white rounded-lg shadow-md border"
                          style={{ left: component.x - 40, top: component.y - 40 }}
                        >
                          <div className={`p-2 rounded ${component.color} mb-2`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-xs font-medium text-center">
                            {component.name}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Properties Panel */}
              <div className="col-span-3 bg-gray-50 p-6 border-l">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Propiedades
                </h3>
                
                {canvasComponents.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <p className="text-sm">
                      Selecciona un componente para ver sus propiedades
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="my-resource"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Región
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>us-east-1</option>
                        <option>us-west-2</option>
                        <option>eu-west-1</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tamaño de Instancia
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>t3.micro</option>
                        <option>t3.small</option>
                        <option>t3.medium</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Steps Progress */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Pasos de la Demo
            </h3>
            
            <div className="space-y-4">
              {demoSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 rounded-lg border ${
                    index <= currentStep
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    index < currentStep
                      ? 'bg-green-500 text-white'
                      : index === currentStep
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {index < currentStep ? (
                      <CheckIcon className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  
                  <div className="ml-4 flex-grow">
                    <h4 className={`font-semibold ${
                      index <= currentStep ? 'text-gray-900' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm ${
                      index <= currentStep ? 'text-gray-700' : 'text-gray-500'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {step.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para crear tu propia infraestructura?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Regístrate gratis y accede al constructor visual completo con todas las funcionalidades.
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
                href="/demos"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Ver Más Demos
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterNew />
    </div>
  );
}
