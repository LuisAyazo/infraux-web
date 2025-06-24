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
  ArrowLongRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Automated Deployment | InfraUX',
  description: 'Deploy your infrastructure to any cloud with one click. Integrated CI/CD, automatic rollbacks and real-time monitoring.',
  keywords: ['deployment', 'ci/cd', 'automatic deployment', 'devops', 'cloud deployment', 'infrastructure'],
  openGraph: {
    title: 'Intelligent Deployment - InfraUX',
    description: 'Deploy with confidence to any cloud',
    url: 'https://infraux.com/product/deployment',
    siteName: 'InfraUX',
    locale: 'en_US',
    type: 'website',
  },
}

const deploymentFeatures = [
  {
    icon: RocketLaunchIcon,
    title: 'One-Click Deploy',
    description: 'Deploy your complete infrastructure with a single click. No complex scripts.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ArrowPathIcon,
    title: 'Instant Rollback',
    description: 'Revert changes in seconds if something goes wrong. Your infrastructure always safe.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: ChartBarIcon,
    title: 'Real-Time Monitoring',
    description: 'Watch deployment progress and performance metrics live.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Pre-Deploy Validation',
    description: 'Detect issues before deploying. Simulation and impact analysis.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: CogIcon,
    title: 'Integrated CI/CD',
    description: 'Connect with GitHub, GitLab or Bitbucket. Automatic pipelines.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: GlobeAltIcon,
    title: 'Multi-Region Deploy',
    description: 'Deploy to multiple regions simultaneously. Global optimization.',
    color: 'from-pink-500 to-rose-500'
  }
]

const deploymentStages = [
  {
    name: 'Validation',
    icon: ShieldCheckIcon,
    description: 'Configuration and dependency analysis',
    status: 'completed'
  },
  {
    name: 'Plan',
    icon: ClockIcon,
    description: 'Execution plan generation',
    status: 'completed'
  },
  {
    name: 'Approval',
    icon: CheckCircleIcon,
    description: 'Change review and approval',
    status: 'completed'
  },
  {
    name: 'Deployment',
    icon: CloudArrowUpIcon,
    description: 'Applying changes to the cloud',
    status: 'in-progress'
  },
  {
    name: 'Verification',
    icon: BoltIcon,
    description: 'Post-deployment tests',
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
    description: 'Containers on AWS',
    features: ['Auto-scaling', 'Load balancing', 'Service discovery']
  },
  {
    name: 'AWS Fargate',
    icon: '⚡',
    description: 'Serverless containers',
    features: ['No server management', 'Pay per use', 'Auto-scaling']
  },
  {
    name: 'Google Cloud Run',
    icon: '🏃',
    description: 'Serverless containers',
    features: ['Scale to zero', 'Automatic HTTPS', 'Configurable concurrency']
  },
  {
    name: 'Kubernetes',
    icon: '⚓',
    description: 'Advanced orchestration',
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <HeaderNew />
      
      <main className="flex-grow">
        {/* Hero Section - Premium Style */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-black dark:via-slate-950 dark:to-emerald-950/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8 animate-fade-in">
                <RocketLaunchIcon className="h-5 w-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Intelligent Deployment
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 animate-fade-in-up">
                Deploy with confidence
                <span className="block gradient-text-emerald">
                  to any cloud
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium animate-fade-in-up animation-delay-200">
                Automated deployment with validation, instant rollback and 
                real-time monitoring. DevOps simplified to the max.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-300"
                >
                  <RocketLaunchIcon className="h-6 w-6" />
                  Start deploying
                </Link>
                <Link
                  href="/demos/deployment"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-400"
                >
                  Watch live demo
                  <PlayIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Pipeline Builder Section - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Visual pipeline with draggable nodes
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Design your deployment pipeline by dragging and connecting nodes
              </p>
            </div>
            
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              
              <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1">
                  <div className="bg-white dark:bg-slate-900 rounded-t-3xl p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Pipeline Builder - Multi-Cloud Deployment
                      </h3>
                      <div className="flex gap-3">
                        <button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                          Save Pipeline
                        </button>
                        <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                          Execute
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  {/* Visual Pipeline */}
                  <div className="relative h-96 bg-slate-50 dark:bg-black rounded-2xl overflow-hidden">
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
                          strokeWidth="3"
                          strokeDasharray="5,5"
                          className="animate-pulse"
                        />
                      ))}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Pipeline Nodes */}
                    {pipelineNodes.map((node, index) => {
                      const Icon = node.icon;
                      return (
                        <div
                          key={node.id}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-move animate-fade-in"
                          style={{ 
                            left: node.x, 
                            top: node.y,
                            animationDelay: `${index * 100}ms`
                          }}
                        >
                          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 border-2 border-transparent hover:border-emerald-500">
                            <div className="flex flex-col items-center gap-3">
                              <div className="h-14 w-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <Icon className="h-7 w-7 text-white" />
                              </div>
                              <span className="text-sm font-bold text-slate-900 dark:text-white">
                                {node.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Add Node Button */}
                    <button className="absolute bottom-6 right-6 p-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-110 transition-all duration-300">
                      <CogIcon className="h-6 w-6" />
                    </button>
                  </div>
                  
                  {/* Pipeline Configuration */}
                  <div className="mt-8 grid lg:grid-cols-2 gap-6">
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                        Pipeline Configuration
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Trigger</span>
                          <span className="font-semibold text-slate-900 dark:text-white">Push to main</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Environment</span>
                          <span className="font-semibold text-slate-900 dark:text-white">Production</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 dark:text-slate-400">Approval</span>
                          <span className="font-semibold text-emerald-600 dark:text-emerald-400">Automatic</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                        Generated Code
                      </h4>
                      <pre className="text-sm text-slate-600 dark:text-slate-400 font-mono">
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
          </div>
        </section>

        {/* Multi-Service Deployment - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Deploy to multiple services simultaneously
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                One pipeline, multiple targets. Automatically generated code.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {deploymentTargets.map((target, index) => (
                <div 
                  key={target.name} 
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 border border-slate-200 dark:border-slate-800 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{target.icon}</span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {target.name}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {target.description}
                  </p>
                  <ul className="space-y-3">
                    {target.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                    Configure
                  </button>
                </div>
              ))}
            </div>
            
            {/* Code Generation Example - Premium Style */}
            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              <div className="relative bg-slate-900 rounded-3xl p-8 shadow-premium-lg border border-slate-800">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <CodeBracketIcon className="h-7 w-7 text-emerald-400" />
                  Automatically generated code for each service
                </h3>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-4 uppercase tracking-wider">AWS ECS + Fargate</h4>
                    <pre className="text-sm text-emerald-300 font-mono bg-black/50 rounded-2xl p-6 overflow-x-auto">
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
                    <h4 className="text-sm font-semibold text-emerald-400 mb-4 uppercase tracking-wider">Google Cloud Run</h4>
                    <pre className="text-sm text-emerald-300 font-mono bg-black/50 rounded-2xl p-6 overflow-x-auto">
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
          </div>
        </section>

        {/* Pre-Deploy Validation - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Intelligent pre-deploy validation
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Simulate and validate before deploying. No surprises in production.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Pre-Deploy Checklist */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-8 border border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  <QueueListIcon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                  Pre-Deploy Checklist
                </h3>
              
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Configuration validated</span>
                    </div>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Passed</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Unit tests</span>
                    </div>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">156/156</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Security scan</span>
                    </div>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">0 vulnerabilities</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-5 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-800">
                    <div className="flex items-center gap-3">
                      <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Cost analysis</span>
                    </div>
                    <span className="text-sm font-bold text-amber-600 dark:text-amber-400">+$45/month estimated</span>
                  </div>
                </div>
                
                <button className="mt-8 w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300">
                  Proceed with deployment
                </button>
              </div>
              
              {/* Live Deployment Status */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-premium-lg p-8 border border-slate-200 dark:border-slate-800">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                  <CloudArrowUpIcon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                  Deployment Status
                </h3>
                
                <div className="space-y-6">
                  {deploymentStages.map((stage, index) => (
                    <div key={stage.name} className="flex items-start gap-4">
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                          stage.status === 'completed' ? 'bg-emerald-100 dark:bg-emerald-900/30' :
                          stage.status === 'in-progress' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                          'bg-slate-100 dark:bg-slate-800'
                        }`}>
                          <stage.icon className={`h-6 w-6 ${
                            stage.status === 'completed' ? 'text-emerald-600 dark:text-emerald-400' :
                            stage.status === 'in-progress' ? 'text-white' :
                            'text-slate-400 dark:text-slate-500'
                          }`} />
                        </div>
                        {index < deploymentStages.length - 1 && (
                          <div className={`absolute top-12 left-6 w-0.5 h-14 ${
                            stage.status === 'completed' ? 'bg-emerald-200 dark:bg-emerald-800' :
                            'bg-slate-200 dark:bg-slate-700'
                          }`} />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className={`font-bold text-lg ${
                          stage.status === 'pending' ? 'text-slate-500 dark:text-slate-400' :
                          'text-slate-900 dark:text-white'
                        }`}>
                          {stage.name}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {stage.description}
                        </p>
                        {stage.status === 'in-progress' && (
                          <div className="mt-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-3/4 animate-pulse" />
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
                      <span>Deploying to:</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs rounded-full font-semibold">
                        AWS ECS
                      </span>
                      <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs rounded-full font-semibold">
                        Cloud Run
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Deployment without complications
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                All the tools you need to deploy with confidence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deploymentFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group relative hover-lift-premium animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Supported Platforms - Premium Style */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Deploy to any platform
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Compatible with major cloud providers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportedPlatforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 border border-slate-200 dark:border-slate-800 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-6">{platform.logo}</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {platform.name}
                  </h3>
                  <ul className="space-y-2">
                    {platform.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />
              
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-16 text-white shadow-premium-lg">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <ExclamationTriangleIcon className="h-20 w-20 mb-8 text-white/90" />
                    <h2 className="text-4xl font-bold mb-6">
                      Security first
                    </h2>
                    <p className="text-xl text-emerald-50 mb-8 font-medium">
                      InfraUX protects your infrastructure with multiple layers of security
                      and validation. Never again a failed deployment in production.
                    </p>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-100 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg">Pre-deployment simulation</h3>
                          <p className="text-emerald-50">
                            See exactly what will change before applying
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-100 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg">Automatic rollback</h3>
                          <p className="text-emerald-50">
                            Revert changes if problems are detected
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="h-6 w-6 text-emerald-100 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg">Required approvals</h3>
                          <p className="text-emerald-50">
                            Total control over critical deployments
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                      <div className="flex items-center gap-3 mb-6">
                        <ShieldCheckIcon className="h-8 w-8 text-emerald-100" />
                        <h3 className="text-2xl font-bold">System Status</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Security validation</span>
                          <span className="text-emerald-100 font-bold">✓ Passed</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Dependency analysis</span>
                          <span className="text-emerald-100 font-bold">✓ OK</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Integration tests</span>
                          <span className="text-emerald-100 font-bold">✓ 100%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Automatic backup</span>
                          <span className="text-emerald-100 font-bold">✓ Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Results that speak for themselves
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-medium">
                Real metrics from teams using InfraUX
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl mb-6 shadow-premium">
                  <ArrowTrendingUpIcon className="h-12 w-12 text-white" />
                </div>
                <div className="text-5xl font-black text-slate-900 dark:text-white mb-3">
                  10x
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  Faster than manual deployment
                </p>
              </div>
              
              <div className="text-center animate-fade-in-up animation-delay-200">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-6 shadow-premium">
                  <ShieldCheckIcon className="h-12 w-12 text-white" />
                </div>
                <div className="text-5xl font-black text-slate-900 dark:text-white mb-3">
                  99.9%
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  Deployment success rate
                </p>
              </div>
              
              <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl mb-6 shadow-premium">
                  <ClockIcon className="h-12 w-12 text-white" />
                </div>
                <div className="text-5xl font-black text-slate-900 dark:text-white mb-3">
                  &lt;30s
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
                  Average rollback time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Style */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 animate-fade-in">
              Deploy with confidence starting today
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium animate-fade-in-up">
              Join thousands of teams deploying without stress
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up animation-delay-200"
              >
                Start free
                <ArrowRightIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-premium hover:shadow-premium-lg hover-lift-premium transition-all duration-300 animate-fade-in-up animation-delay-300"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  )
}