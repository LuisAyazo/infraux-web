'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import { useState } from 'react';
import { 
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  CommandLineIcon,
  DocumentDuplicateIcon,
  RocketLaunchIcon,
  CubeIcon,
  CloudIcon,
  FolderIcon,
  PlayIcon,
  CodeBracketIcon,
  ChevronRightIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const requirements = [
  { name: 'Node.js', version: '16.0 o superior', check: 'node --version' },
  { name: 'npm', version: '7.0 o superior', check: 'npm --version' },
  { name: 'Git', version: '2.0 o superior', check: 'git --version' }
];

const steps = [
  {
    id: 'install',
    title: 'Instalar InfraUX CLI',
    icon: CommandLineIcon,
    content: `npm install -g @infraux/cli`,
    description: 'Instala la herramienta de línea de comandos de InfraUX globalmente en tu sistema.'
  },
  {
    id: 'verify',
    title: 'Verificar instalación',
    icon: CheckIcon,
    content: `infraux --version`,
    description: 'Confirma que InfraUX CLI se instaló correctamente.'
  },
  {
    id: 'login',
    title: 'Iniciar sesión',
    icon: CloudIcon,
    content: `infraux login`,
    description: 'Conecta tu CLI con tu cuenta de InfraUX.'
  },
  {
    id: 'create',
    title: 'Crear proyecto',
    icon: FolderIcon,
    content: `infraux init my-infrastructure`,
    description: 'Crea un nuevo proyecto de infraestructura.'
  },
  {
    id: 'open',
    title: 'Abrir editor',
    icon: CubeIcon,
    content: `cd my-infrastructure && infraux open`,
    description: 'Abre el editor visual en tu navegador.'
  }
];

const templates = [
  {
    name: 'Web App Básica',
    description: 'Aplicación web con balanceador de carga y base de datos',
    command: 'infraux init my-app --template=web-basic',
    provider: 'AWS'
  },
  {
    name: 'Microservicios',
    description: 'Arquitectura de microservicios con Kubernetes',
    command: 'infraux init my-services --template=microservices',
    provider: 'Multi-cloud'
  },
  {
    name: 'Serverless API',
    description: 'API REST serverless con Lambda y API Gateway',
    command: 'infraux init my-api --template=serverless',
    provider: 'AWS'
  },
  {
    name: 'Data Pipeline',
    description: 'Pipeline de procesamiento de datos con streaming',
    command: 'infraux init my-pipeline --template=data-pipeline',
    provider: 'GCP'
  }
];

export default function QuickstartPage() {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'cli' | 'web'>('cli');

  const copyToClipboard = (text: string, stepId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepId);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="border-b border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/documentacion" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                Documentación
              </Link>
              <span className="text-slate-400 dark:text-slate-600">/</span>
              <span className="text-slate-900 dark:text-white font-medium">Inicio Rápido</span>
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
                  <a href="#requirements" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    Requisitos previos
                  </a>
                  <a href="#installation" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    Instalación
                  </a>
                  <a href="#first-project" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    Tu primer proyecto
                  </a>
                  <a href="#templates" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    Plantillas disponibles
                  </a>
                  <a href="#next-steps" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 py-1">
                    Próximos pasos
                  </a>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4">Inicio Rápido</h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                  Comienza a usar InfraUX en menos de 5 minutos. Esta guía te llevará desde la instalación 
                  hasta tu primer diagrama de infraestructura desplegado.
                </p>

                {/* Installation Method Tabs */}
                <div className="mb-8">
                  <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
                    <button
                      onClick={() => setActiveTab('cli')}
                      className={`px-4 py-2 rounded-md font-medium transition-all ${
                        activeTab === 'cli'
                          ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      CLI (Recomendado)
                    </button>
                    <button
                      onClick={() => setActiveTab('web')}
                      className={`px-4 py-2 rounded-md font-medium transition-all ${
                        activeTab === 'web'
                          ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      Interfaz Web
                    </button>
                  </div>
                </div>

                {activeTab === 'cli' ? (
                  <>
                    <h2 id="requirements" className="text-3xl font-bold mt-12 mb-6">Requisitos previos</h2>
                    
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-8">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Asegúrate de tener instaladas las siguientes herramientas:
                      </p>
                      <div className="space-y-3">
                        {requirements.map((req, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <CheckIcon className="h-5 w-5 text-green-500" />
                              <span className="font-medium text-slate-900 dark:text-white">{req.name}</span>
                              <span className="text-sm text-slate-500">{req.version}</span>
                            </div>
                            <code className="text-sm bg-slate-900 dark:bg-slate-950 text-slate-100 px-2 py-1 rounded">
                              {req.check}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>

                    <h2 id="installation" className="text-3xl font-bold mt-12 mb-6">Instalación</h2>
                    
                    <p className="mb-6">
                      Sigue estos pasos para instalar y configurar InfraUX CLI:
                    </p>

                    <div className="space-y-6 mb-8">
                      {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                          <div key={step.id} className="relative">
                            <div className="flex gap-4">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                                  {index + 1}
                                </div>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                  <Icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                                  {step.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-3">
                                  {step.description}
                                </p>
                                <div className="relative group">
                                  <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 rounded-lg p-4 overflow-x-auto">
                                    <code>{step.content}</code>
                                  </pre>
                                  <button
                                    onClick={() => copyToClipboard(step.content, step.id)}
                                    className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                                  >
                                    {copiedStep === step.id ? (
                                      <CheckIcon className="h-4 w-4 text-green-400" />
                                    ) : (
                                      <DocumentDuplicateIcon className="h-4 w-4 text-slate-400" />
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                            {index < steps.length - 1 && (
                              <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                        <CheckIcon className="h-5 w-5" />
                        ¡Listo!
                      </h3>
                      <p className="text-green-800 dark:text-green-200">
                        Ya tienes InfraUX instalado y configurado. Ahora puedes crear tu primer proyecto.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6 mb-8">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                      <InformationCircleIcon className="h-5 w-5" />
                      Usar InfraUX desde la web
                    </h3>
                    <p className="text-indigo-800 dark:text-indigo-200 mb-4">
                      También puedes usar InfraUX directamente desde tu navegador sin instalar nada:
                    </p>
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                    >
                      <PlayIcon className="h-5 w-5" />
                      Abrir InfraUX Web
                    </Link>
                  </div>
                )}

                <h2 id="first-project" className="text-3xl font-bold mt-12 mb-6">Tu primer proyecto</h2>
                
                <p className="mb-6">
                  Vamos a crear un proyecto simple con una aplicación web, base de datos y balanceador de carga:
                </p>

                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-6 mb-8">
                  <div className="space-y-4 font-mono text-sm">
                    <div>
                      <span className="text-slate-500"># Crear un nuevo proyecto</span>
                      <div className="text-slate-100">$ infraux init my-first-app</div>
                    </div>
                    <div>
                      <span className="text-slate-500"># Entrar al directorio del proyecto</span>
                      <div className="text-slate-100">$ cd my-first-app</div>
                    </div>
                    <div>
                      <span className="text-slate-500"># Abrir el editor visual</span>
                      <div className="text-slate-100">$ infraux open</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    <ExclamationTriangleIcon className="h-5 w-5" />
                    Tip profesional
                  </h3>
                  <p className="text-yellow-800 dark:text-yellow-200">
                    El comando <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">infraux open</code> abrirá 
                    automáticamente el editor visual en tu navegador predeterminado. Si prefieres, puedes usar 
                    <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">infraux open --no-browser</code> y 
                    abrir manualmente la URL que se muestra.
                  </p>
                </div>

                <h2 id="templates" className="text-3xl font-bold mt-12 mb-6">Plantillas disponibles</h2>
                
                <p className="mb-6">
                  InfraUX incluye varias plantillas predefinidas para comenzar rápidamente:
                </p>

                <div className="grid gap-4 mb-8">
                  {templates.map((template, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {template.name}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {template.description}
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded">
                          {template.provider}
                        </span>
                      </div>
                      <div className="relative group">
                        <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 rounded p-3 text-sm overflow-x-auto">
                          <code>{template.command}</code>
                        </pre>
                        <button
                          onClick={() => copyToClipboard(template.command, `template-${index}`)}
                          className="absolute top-2 right-2 p-1.5 bg-slate-800 hover:bg-slate-700 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copiedStep === `template-${index}` ? (
                            <CheckIcon className="h-3.5 w-3.5 text-green-400" />
                          ) : (
                            <DocumentDuplicateIcon className="h-3.5 w-3.5 text-slate-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 id="next-steps" className="text-3xl font-bold mt-12 mb-6">Próximos pasos</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Link
                    href="/docs/guides/first-project"
                    className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg transition-all no-underline"
                  >
                    <CubeIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      Tutorial: Tu primer diagrama
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Aprende a crear tu primera infraestructura paso a paso con nuestro tutorial interactivo.
                    </p>
                  </Link>
                  
                  <Link
                    href="/docs/concepts"
                    className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg transition-all no-underline"
                  >
                    <CodeBracketIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      Conceptos clave
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Entiende los conceptos fundamentales de InfraUX y la infraestructura como código.
                    </p>
                  </Link>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8 mt-12 border-t border-slate-200 dark:border-slate-800">
                  <Link
                    href="/docs/intro"
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 no-underline"
                  >
                    <ArrowLeftIcon className="h-4 w-4" />
                    Introducción
                  </Link>
                  
                  <Link
                    href="/docs/guides/first-project"
                    className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium no-underline"
                  >
                    Tu primer proyecto
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterNew />
    </div>
  );
}