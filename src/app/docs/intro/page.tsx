'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CheckIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  CubeIcon,
  CloudIcon,
  UserGroupIcon,
  SparklesIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CubeIcon,
    title: 'Diseño Visual Intuitivo',
    description: 'Arrastra y suelta componentes para crear tu infraestructura sin escribir código'
  },
  {
    icon: CloudIcon,
    title: 'Multi-Cloud Nativo',
    description: 'Soporta AWS, Azure, GCP y más proveedores en una sola plataforma'
  },
  {
    icon: CodeBracketIcon,
    title: 'Generación de IaC',
    description: 'Convierte tus diagramas en código Terraform, CloudFormation o Pulumi'
  },
  {
    icon: UserGroupIcon,
    title: 'Colaboración en Tiempo Real',
    description: 'Trabaja con tu equipo simultáneamente en los mismos diagramas'
  },
  {
    icon: ChartBarIcon,
    title: 'Análisis de Costos',
    description: 'Estima y optimiza los costos de tu infraestructura antes de desplegar'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Seguridad Integrada',
    description: 'Validación automática de mejores prácticas y políticas de seguridad'
  }
];

const useCases = [
  {
    title: 'Startups',
    description: 'Construye y escala tu infraestructura rápidamente sin un equipo DevOps dedicado',
    icon: RocketLaunchIcon
  },
  {
    title: 'Empresas',
    description: 'Estandariza y gobierna la infraestructura en múltiples equipos y proyectos',
    icon: SparklesIcon
  },
  {
    title: 'Consultoras',
    description: 'Diseña y documenta arquitecturas para clientes de forma profesional',
    icon: LightBulbIcon
  }
];

const nextSteps = [
  {
    title: 'Instalación y Configuración',
    description: 'Configura InfraUX en tu entorno local',
    href: '/docs/quickstart',
    icon: CommandLineIcon
  },
  {
    title: 'Tu Primer Diagrama',
    description: 'Aprende a crear tu primera infraestructura',
    href: '/docs/guides/first-project',
    icon: CubeIcon
  },
  {
    title: 'Conceptos Clave',
    description: 'Entiende los conceptos fundamentales',
    href: '/docs/concepts',
    icon: BookOpenIcon
  }
];

export default function IntroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/docs" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                Documentación
              </Link>
              <span className="text-slate-400 dark:text-slate-600">/</span>
              <span className="text-slate-900 dark:text-white font-medium">Introducción</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">En esta página</h4>
                <nav className="space-y-2">
                  <a href="#what-is" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    ¿Qué es InfraUX?
                  </a>
                  <a href="#why" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    ¿Por qué InfraUX?
                  </a>
                  <a href="#features" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    Características principales
                  </a>
                  <a href="#use-cases" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    Casos de uso
                  </a>
                  <a href="#how-it-works" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    Cómo funciona
                  </a>
                  <a href="#next-steps" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    Próximos pasos
                  </a>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 prose prose-slate dark:prose-invert max-w-none">
              <h1 id="what-is" className="text-4xl font-bold mb-4">¿Qué es InfraUX?</h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                InfraUX es una plataforma visual para diseñar, desplegar y gestionar infraestructura cloud. 
                Transforma la complejidad de la infraestructura como código en una experiencia visual intuitiva, 
                permitiendo a equipos de todos los tamaños construir arquitecturas cloud robustas sin ser expertos en DevOps.
              </p>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6 mb-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                  <LightBulbIcon className="h-5 w-5" />
                  Concepto clave
                </h3>
                <p className="text-indigo-800 dark:text-indigo-200 m-0">
                  InfraUX actúa como un puente entre el diseño visual y el código de infraestructura, 
                  generando automáticamente código Terraform, CloudFormation o Pulumi a partir de tus diagramas.
                </p>
              </div>

              <h2 id="why" className="text-3xl font-bold mt-12 mb-6">¿Por qué InfraUX?</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Sin InfraUX</h3>
                  <ul className="space-y-2 m-0">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-slate-600 dark:text-slate-400">Escribir cientos de líneas de código IaC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-slate-600 dark:text-slate-400">Curva de aprendizaje pronunciada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-slate-600 dark:text-slate-400">Errores difíciles de detectar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span className="text-slate-600 dark:text-slate-400">Documentación desactualizada</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Con InfraUX</h3>
                  <ul className="space-y-2 m-0">
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Diseño visual drag & drop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Generación automática de código</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Validación en tiempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">Documentación siempre actualizada</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 id="features" className="text-3xl font-bold mt-12 mb-6">Características principales</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                          <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h2 id="use-cases" className="text-3xl font-bold mt-12 mb-6">Casos de uso</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {useCases.map((useCase, index) => {
                  const Icon = useCase.icon;
                  return (
                    <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 text-center">
                      <Icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                        {useCase.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <h2 id="how-it-works" className="text-3xl font-bold mt-12 mb-6">Cómo funciona</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Diseña visualmente</h3>
                    <p className="text-slate-600 dark:text-slate-400 m-0">
                      Usa nuestro editor visual para arrastrar y soltar componentes cloud, conectarlos y configurar sus propiedades.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Valida automáticamente</h3>
                    <p className="text-slate-600 dark:text-slate-400 m-0">
                      InfraUX valida tu diseño en tiempo real, detectando errores de configuración y sugiriendo mejoras.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Genera código IaC</h3>
                    <p className="text-slate-600 dark:text-slate-400 m-0">
                      Convierte tu diagrama en código Terraform, CloudFormation o Pulumi optimizado y listo para producción.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Despliega con confianza</h3>
                    <p className="text-slate-600 dark:text-slate-400 m-0">
                      Despliega tu infraestructura directamente desde InfraUX o integra con tu pipeline CI/CD existente.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="next-steps" className="text-3xl font-bold mt-12 mb-6">Próximos pasos</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {nextSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <Link
                      key={index}
                      href={step.href}
                      className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg transition-all no-underline"
                    >
                      <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 m-0">
                        {step.description}
                      </p>
                    </Link>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 mt-12 border-t border-slate-200 dark:border-slate-800">
                <Link
                  href="/docs"
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 no-underline"
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                  Volver a documentación
                </Link>
                
                <Link
                  href="/docs/quickstart"
                  className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium no-underline"
                >
                  Inicio rápido
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterNew />
    </div>
  );
}