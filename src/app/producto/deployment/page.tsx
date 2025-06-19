import { Metadata } from 'next'
import HeaderNew from '@/components/landing/HeaderNew'
import FooterNew from '@/components/landing/FooterNew'
import Link from 'next/link'
import {
  RocketLaunchIcon,
  CloudArrowUpIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BoltIcon,
  CogIcon,
  GlobeAltIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  ServerStackIcon,
  CubeIcon,
  CircleStackIcon,
  CodeBracketIcon,
  CpuChipIcon,
  QueueListIcon,
  ArrowLongRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Deployment Automatizado | InfraUX',
  description: 'Despliega tu infraestructura en cualquier cloud con un clic. CI/CD integrado, rollbacks automáticos y monitoreo en tiempo real.',
  keywords: ['deployment', 'ci/cd', 'despliegue automático', 'devops', 'cloud deployment', 'infraestructura'],
  openGraph: {
    title: 'Deployment Inteligente - InfraUX',
    description: 'Despliega con confianza en cualquier cloud',
    url: 'https://infraux.com/producto/deployment',
    siteName: 'InfraUX',
    locale: 'es_ES',
    type: 'website',
  },
}

const deploymentFeatures = [
  {
    icon: RocketLaunchIcon,
    title: 'Deploy con Un Clic',
    description: 'Despliega tu infraestructura completa con un solo clic. Sin scripts complejos.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ArrowPathIcon,
    title: 'Rollback Instantáneo',
    description: 'Revierte cambios en segundos si algo sale mal. Tu infraestructura siempre segura.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Monitoreo en Tiempo Real',
    description: 'Observa el progreso del deployment y métricas de rendimiento en vivo.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Validación Pre-Deploy',
    description: 'Detecta problemas antes de desplegar. Simulación y análisis de impacto.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: CogIcon,
    title: 'CI/CD Integrado',
    description: 'Conecta con GitHub, GitLab o Bitbucket. Pipelines automáticos.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: GlobeAltIcon,
    title: 'Multi-Region Deploy',
    description: 'Despliega en múltiples regiones simultáneamente. Optimización global.',
    color: 'from-pink-500 to-rose-500'
  }
]

const deploymentStages = [
  {
    name: 'Validación',
    icon: ShieldCheckIcon,
    description: 'Análisis de configuración y dependencias',
    status: 'completed'
  },
  {
    name: 'Plan',
    icon: ClockIcon,
    description: 'Generación del plan de ejecución',
    status: 'completed'
  },
  {
    name: 'Aprobación',
    icon: CheckCircleIcon,
    description: 'Revisión y aprobación de cambios',
    status: 'completed'
  },
  {
    name: 'Deployment',
    icon: CloudArrowUpIcon,
    description: 'Aplicando cambios en la nube',
    status: 'in-progress'
  },
  {
    name: 'Verificación',
    icon: BoltIcon,
    description: 'Tests post-deployment',
    status: 'pending'
  }
]

const supportedPlatforms = [
  { name: 'AWS', logo: '☁️', services: ['EC2', 'ECS', 'Fargate', 'Lambda', 'RDS', 'S3'] },
  { name: 'Google Cloud', logo: '🌐', services: ['GCE', 'GKE', 'Cloud Run', 'Cloud SQL', 'Cloud Functions'] },
  { name: 'Azure', logo: '🔷', services: ['VMs', 'AKS', 'Container Instances', 'Functions', 'SQL Database'] },
  { name: 'Kubernetes', logo: '⚓', services: ['EKS', 'GKE', 'AKS', 'On-premise', 'Rancher'] }
]

const deploymentTargets = [
  {
    name: 'AWS ECS',
    icon: '🚢',
    description: 'Containers en AWS',
    features: ['Auto-scaling', 'Load balancing', 'Service discovery']
  },
  {
    name: 'AWS Fargate',
    icon: '⚡',
    description: 'Serverless containers',
    features: ['Sin gestión de servidores', 'Pay per use', 'Auto-scaling']
  },
  {
    name: 'Google Cloud Run',
    icon: '🏃',
    description: 'Containers serverless',
    features: ['Escala a cero', 'HTTPS automático', 'Concurrencia configurable']
  },
  {
    name: 'Kubernetes',
    icon: '⚓',
    description: 'Orquestación avanzada',
    features: ['Multi-cloud', 'Self-healing', 'Rolling updates']
  }
]

const pipelineNodes = [
  { id: 'source', name: 'Source Code', icon: CodeBracketIcon, x: 50, y: 200 },
  { id: 'build', name: 'Build', icon: CubeIcon, x: 250, y: 200 },
  { id: 'test', name: 'Test', icon: CheckCircleIcon, x: 450, y: 200 },
  { id: 'security', name: 'Security Scan', icon: ShieldCheckIcon, x: 650, y: 200 },
  { id: 'deploy', name: 'Deploy', icon: CloudArrowUpIcon, x: 850, y: 200 }
]

export default function DeploymentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-900/20" />
          <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
                <RocketLaunchIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Deployment Inteligente
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Despliega con confianza
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">
                  en cualquier cloud
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                Deployment automatizado con validación, rollback instantáneo y 
                monitoreo en tiempo real. DevOps simplificado al máximo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <RocketLaunchIcon className="h-5 w-5" />
                  Comenzar a desplegar
                </Link>
                <Link
                  href="/demos/deployment"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Ver demo en vivo
                  <PlayIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Pipeline Builder Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Pipeline visual con nodos arrastrables
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Diseña tu pipeline de deployment arrastrando y conectando nodos
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 p-1">
                <div className="bg-white dark:bg-slate-800 rounded-t-3xl p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Pipeline Builder - Deployment a Multi-Cloud
                    </h3>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
                        Guardar Pipeline
                      </button>
                      <button className="px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors">
                        Ejecutar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                {/* Visual Pipeline */}
                <div className="relative h-96 bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full">
                    {/* Connection lines */}
                    {pipelineNodes.slice(0, -1).map((node, index) => (
                      <line
                        key={`line-${index}`}
                        x1={node.x + 80}
                        y1={node.y}
                        x2={pipelineNodes[index + 1].x}
                        y2={pipelineNodes[index + 1].y}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    ))}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Pipeline Nodes */}
                  {pipelineNodes.map((node) => {
                    const Icon = node.icon;
                    return (
                      <div
                        key={node.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-move"
                        style={{ left: node.x, top: node.y }}
                      >
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-indigo-500">
                          <div className="flex flex-col items-center gap-2">
                            <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl flex items-center justify-center">
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">
                              {node.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Add Node Button */}
                  <button className="absolute bottom-4 right-4 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
                    <CogIcon className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Pipeline Configuration */}
                <div className="mt-6 grid lg:grid-cols-2 gap-6">
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                      Configuración del Pipeline
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600 dark:text-slate-400">Trigger</span>
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Push to main</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600 dark:text-slate-400">Ambiente</span>
                        <span className="text-sm font-medium text-slate-900 dark:text-white">Production</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600 dark:text-slate-400">Aprobación</span>
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Automática</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                      Código Generado
                    </h4>
                    <pre className="text-xs text-slate-600 dark:text-slate-400 font-mono">
{`pipeline:
  stages:
    - source: github
    - build: docker
    - test: jest
    - security: trivy
    - deploy:
        targets:
          - aws-ecs
          - gcp-cloudrun`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Service Deployment */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Despliega a múltiples servicios simultáneamente
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Un solo pipeline, múltiples destinos. Código generado automáticamente.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {deploymentTargets.map((target) => (
                <div key={target.name} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{target.icon}</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {target.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {target.description}
                  </p>
                  <ul className="space-y-2">
                    {target.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full py-2 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all">
                    Configurar
                  </button>
                </div>
              ))}
            </div>
            
            {/* Code Generation Example */}
            <div className="mt-12 bg-slate-900 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <CodeBracketIcon className="h-6 w-6 text-emerald-400" />
                Código generado automáticamente para cada servicio
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">AWS ECS + Fargate</h4>
                  <pre className="text-xs text-slate-300 font-mono bg-slate-800 rounded-lg p-4 overflow-x-auto">
{`resource "aws_ecs_service" "app" {
  name            = "infraux-app"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 3
  launch_type     = "FARGATE"
  
  network_configuration {
    subnets         = aws_subnet.private.*.id
    security_groups = [aws_security_group.ecs.id]
  }
}`}
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">Google Cloud Run</h4>
                  <pre className="text-xs text-slate-300 font-mono bg-slate-800 rounded-lg p-4 overflow-x-auto">
{`resource "google_cloud_run_service" "app" {
  name     = "infraux-app"
  location = "us-central1"
  
  template {
    spec {
      containers {
        image = "gcr.io/project/infraux:latest"
        resources {
          limits = {
            cpu    = "2"
            memory = "2Gi"
          }
        }
      }
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Deploy Validation */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Validación pre-deploy inteligente
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Simula y valida antes de desplegar. Sin sorpresas en producción.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Pre-Deploy Checklist */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <QueueListIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  Pre-Deploy Checklist
                </h3>
              
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-slate-700 dark:text-slate-300">Configuración validada</span>
                    </div>
                    <span className="text-sm text-emerald-600 dark:text-emerald-400">Passed</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-slate-700 dark:text-slate-300">Tests unitarios</span>
                    </div>
                    <span className="text-sm text-emerald-600 dark:text-emerald-400">156/156</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-slate-700 dark:text-slate-300">Escaneo de seguridad</span>
                    </div>
                    <span className="text-sm text-emerald-600 dark:text-emerald-400">0 vulnerabilidades</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                    <div className="flex items-center gap-3">
                      <ExclamationTriangleIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      <span className="text-slate-700 dark:text-slate-300">Análisis de costos</span>
                    </div>
                    <span className="text-sm text-amber-600 dark:text-amber-400">+$45/mes estimado</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-3 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  Proceder con el deployment
                </button>
              </div>
              
              {/* Live Deployment Status */}
              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <CloudArrowUpIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  Estado del Deployment
                </h3>
                
                <div className="space-y-6">
                  {deploymentStages.map((stage, index) => (
                    <div key={stage.name} className="flex items-start gap-4">
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          stage.status === 'completed' ? 'bg-emerald-100 dark:bg-emerald-900/30' :
                          stage.status === 'in-progress' ? 'bg-indigo-100 dark:bg-indigo-900/30' :
                          'bg-slate-100 dark:bg-slate-700'
                        }`}>
                          <stage.icon className={`h-5 w-5 ${
                            stage.status === 'completed' ? 'text-emerald-600 dark:text-emerald-400' :
                            stage.status === 'in-progress' ? 'text-indigo-600 dark:text-indigo-400' :
                            'text-slate-400 dark:text-slate-500'
                          }`} />
                        </div>
                        {index < deploymentStages.length - 1 && (
                          <div className={`absolute top-10 left-5 w-0.5 h-12 ${
                            stage.status === 'completed' ? 'bg-emerald-200 dark:bg-emerald-800' :
                            'bg-slate-200 dark:bg-slate-700'
                          }`} />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          stage.status === 'pending' ? 'text-slate-500 dark:text-slate-400' :
                          'text-slate-900 dark:text-white'
                        }`}>
                          {stage.name}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {stage.description}
                        </p>
                        {stage.status === 'in-progress' && (
                          <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 h-2 rounded-full w-3/4 animate-pulse" />
                          </div>
                        )}
                      </div>
                      
                      {stage.status === 'completed' && (
                        <CheckCircleIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <ServerStackIcon className="h-4 w-4" />
                      <span>Desplegando a:</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs rounded-full">
                        AWS ECS
                      </span>
                      <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs rounded-full">
                        Cloud Run
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Deployment sin complicaciones
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Todas las herramientas que necesitas para desplegar con confianza
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deploymentFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`h-12 w-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Despliega en cualquier plataforma
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Compatible con los principales proveedores cloud
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportedPlatforms.map((platform) => (
                <div key={platform.name} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{platform.logo}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {platform.name}
                  </h3>
                  <ul className="space-y-2">
                    {platform.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <ExclamationTriangleIcon className="h-16 w-16 mb-6 text-white/80" />
                  <h2 className="text-3xl font-bold mb-4">
                    Seguridad ante todo
                  </h2>
                  <p className="text-xl text-indigo-100 mb-6">
                    InfraUX protege tu infraestructura con múltiples capas de seguridad 
                    y validación. Nunca más un deployment fallido en producción.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Simulación pre-deployment</h3>
                        <p className="text-indigo-100">
                          Ve exactamente qué cambiará antes de aplicar
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Rollback automático</h3>
                        <p className="text-indigo-100">
                          Revierte cambios si se detectan problemas
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-300 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Aprobaciones requeridas</h3>
                        <p className="text-indigo-100">
                          Control total sobre deployments críticos
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <div className="flex items-center gap-3 mb-6">
                      <ShieldCheckIcon className="h-8 w-8 text-emerald-300" />
                      <h3 className="text-xl font-semibold">Estado del Sistema</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Validación de seguridad</span>
                        <span className="text-emerald-300">✓ Pasada</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Análisis de dependencias</span>
                        <span className="text-emerald-300">✓ OK</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Tests de integración</span>
                        <span className="text-emerald-300">✓ 100%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Backup automático</span>
                        <span className="text-emerald-300">✓ Activo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Resultados que hablan por sí solos
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Métricas reales de equipos usando InfraUX
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-full mb-4">
                  <ArrowTrendingUpIcon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  10x
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Más rápido que deployment manual
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
                  <ShieldCheckIcon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  99.9%
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Tasa de éxito en deployments
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-4">
                  <ClockIcon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  &lt;30s
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Tiempo promedio de rollback
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Despliega con confianza desde hoy
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Únete a miles de equipos que despliegan sin estrés
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Empezar gratis
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
              >
                Hablar con ventas
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}