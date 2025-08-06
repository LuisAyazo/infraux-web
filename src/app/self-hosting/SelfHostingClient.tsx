'use client';

import React, { useState } from 'react';
import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { 
  CommandLineIcon,
  ServerIcon,
  CloudIcon,
  CheckIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  BoltIcon,
  CubeIcon,
  ClipboardDocumentCheckIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';
import { 
  SiDocker, 
  SiKubernetes, 
  SiTerraform,
  SiUbuntu,
  SiCentos,
  SiDebian,
  SiRedhat
} from 'react-icons/si';
import CaseStudies from '@/components/landing/CaseStudies';

interface InstallMethod {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  requirements: string[];
  installCommand: string;
  configExample?: string;
  recommended?: boolean;
}

export default function SelfHostingClient() {
  const { language } = useLanguage();
  const [activeMethod, setActiveMethod] = useState('docker');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const installMethods: InstallMethod[] = [
    {
      id: 'docker',
      name: 'Docker Compose',
      icon: SiDocker,
      description: language === 'es' 
        ? 'La forma más rápida de empezar. Perfecto para desarrollo y producción pequeña.'
        : 'The fastest way to get started. Perfect for development and small production.',
      requirements: [
        'Docker Engine 20.10+',
        'Docker Compose 2.0+',
        '4GB RAM minimum',
        '10GB disk space'
      ],
      installCommand: `# Clone the repository
git clone https://github.com/infraux/infraux.git
cd infraux

# Copy environment variables
cp .env.example .env

# Start InfraUX
docker-compose up -d

# Access at http://localhost:3000`,
      configExample: `version: '3.8'
services:
  infraux:
    image: infraux/infraux:latest
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/infraux
      - REDIS_URL=redis://redis:6379
    volumes:
      - ./data:/app/data`,
      recommended: true
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes (Helm)',
      icon: SiKubernetes,
      description: language === 'es'
        ? 'Para despliegues en producción escalables. Incluye auto-scaling y alta disponibilidad.'
        : 'For scalable production deployments. Includes auto-scaling and high availability.',
      requirements: [
        'Kubernetes 1.24+',
        'Helm 3.0+',
        '8GB RAM minimum',
        'StorageClass configured'
      ],
      installCommand: `# Add InfraUX Helm repository
helm repo add infraux https://charts.infraux.com
helm repo update

# Install InfraUX
helm install infraux infraux/infraux \\
  --namespace infraux \\
  --create-namespace \\
  --values values.yaml

# Check status
kubectl get pods -n infraux`,
      configExample: `# values.yaml
replicaCount: 3
image:
  repository: infraux/infraux
  tag: latest
ingress:
  enabled: true
  host: infraux.yourdomain.com
persistence:
  enabled: true
  size: 20Gi`
    },
    {
      id: 'terraform',
      name: 'Terraform Module',
      icon: SiTerraform,
      description: language === 'es'
        ? 'Despliega InfraUX como parte de tu infraestructura existente en AWS, GCP o Azure.'
        : 'Deploy InfraUX as part of your existing infrastructure on AWS, GCP or Azure.',
      requirements: [
        'Terraform 1.0+',
        'Cloud provider account',
        'VPC/Network configured',
        'Database instance'
      ],
      installCommand: `# main.tf
module "infraux" {
  source  = "infraux/infraux/aws"
  version = "1.0.0"
  
  vpc_id     = var.vpc_id
  subnet_ids = var.subnet_ids
  
  instance_type = "t3.large"
  min_size      = 2
  max_size      = 10
}

# Deploy
terraform init
terraform apply`,
      configExample: `# AWS Example
resource "aws_ecs_service" "infraux" {
  name            = "infraux"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.infraux.arn
  desired_count   = 3
  
  load_balancer {
    target_group_arn = aws_lb_target_group.infraux.arn
    container_name   = "infraux"
    container_port   = 3000
  }
}`
    }
  ];

  const systemRequirements = {
    minimum: {
      cpu: '2 vCPUs',
      ram: '4GB',
      disk: '10GB SSD',
      os: language === 'es' ? 'Linux (cualquier distro)' : 'Linux (any distro)'
    },
    recommended: {
      cpu: '4 vCPUs',
      ram: '8GB',
      disk: '50GB SSD',
      os: 'Ubuntu 22.04 LTS'
    },
    production: {
      cpu: '8+ vCPUs',
      ram: '16GB+',
      disk: '100GB+ SSD',
      os: language === 'es' ? 'Ubuntu/RHEL con soporte' : 'Ubuntu/RHEL with support'
    }
  };

  const faqs = language === 'es' ? [
    {
      question: '¿Puedo migrar de self-host a cloud después?',
      answer: 'Sí, InfraUX incluye herramientas de migración que te permiten exportar todos tus datos y configuraciones para importarlos en InfraUX Cloud sin pérdida de información.'
    },
    {
      question: '¿Cómo se actualizan las versiones self-hosted?',
      answer: 'Las actualizaciones son opcionales y controladas por ti. Puedes actualizar manualmente cuando lo desees usando Docker pull o Helm upgrade. Recomendamos revisar las notas de versión antes de actualizar.'
    },
    {
      question: '¿Qué bases de datos son compatibles?',
      answer: 'InfraUX soporta PostgreSQL 13+ (recomendado), MySQL 8+, y MariaDB 10.5+. Para Redis, cualquier versión 6.0+ es compatible.'
    },
    {
      question: '¿Necesito una licencia para self-host?',
      answer: 'No, InfraUX es 100% open source bajo Apache 2.0. Puedes usarlo gratuitamente para siempre, incluso para uso comercial, sin límites de usuarios o proyectos.'
    },
    {
      question: '¿Qué soporte está disponible para self-host?',
      answer: 'La comunidad ofrece soporte gratuito en Discord y GitHub. También ofrecemos planes de soporte enterprise con SLAs garantizados para instalaciones críticas.'
    }
  ] : [
    {
      question: 'Can I migrate from self-host to cloud later?',
      answer: 'Yes, InfraUX includes migration tools that allow you to export all your data and configurations to import them into InfraUX Cloud without data loss.'
    },
    {
      question: 'How are self-hosted versions updated?',
      answer: 'Updates are optional and controlled by you. You can manually update when desired using Docker pull or Helm upgrade. We recommend reviewing release notes before updating.'
    },
    {
      question: 'Which databases are compatible?',
      answer: 'InfraUX supports PostgreSQL 13+ (recommended), MySQL 8+, and MariaDB 10.5+. For Redis, any version 6.0+ is compatible.'
    },
    {
      question: 'Do I need a license to self-host?',
      answer: 'No, InfraUX is 100% open source under Apache 2.0. You can use it for free forever, even for commercial use, with no limits on users or projects.'
    },
    {
      question: 'What support is available for self-host?',
      answer: 'The community offers free support on Discord and GitHub. We also offer enterprise support plans with guaranteed SLAs for critical installations.'
    }
  ];

  const activeInstallMethod = installMethods.find(m => m.id === activeMethod)!;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-emerald-300 text-sm font-semibold mb-6">
                <ServerIcon className="h-4 w-4" />
                {language === 'es' ? '100% Open Source • Apache 2.0' : '100% Open Source • Apache 2.0'}
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
                {language === 'es' ? 'Self-Host InfraUX' : 'Self-Host InfraUX'}
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed">
                {language === 'es'
                  ? 'Despliega InfraUX en tu propia infraestructura. Control total, gratis para siempre, sin límites.'
                  : 'Deploy InfraUX on your own infrastructure. Full control, free forever, no limits.'
                }
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#install"
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  <CommandLineIcon className="h-5 w-5" />
                  {language === 'es' ? 'Ver Instrucciones' : 'View Instructions'}
                </a>
                
                <a
                  href="https://github.com/infraux/infraux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/30 transition-all duration-300 flex items-center gap-2"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                  {language === 'es' ? 'Ver Código' : 'View Code'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Requisitos del Sistema' : 'System Requirements'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {language === 'es'
                  ? 'InfraUX es ligero y funciona en cualquier servidor Linux'
                  : 'InfraUX is lightweight and runs on any Linux server'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Minimum */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  {language === 'es' ? 'Mínimo' : 'Minimum'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CpuChipIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.minimum.cpu}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ServerIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.minimum.ram} RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CubeIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.minimum.disk}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CommandLineIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.minimum.os}</span>
                  </div>
                </div>
              </div>
              
              {/* Recommended */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 shadow-lg border-2 border-emerald-200 dark:border-emerald-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {language === 'es' ? 'Recomendado' : 'Recommended'}
                  </h3>
                  <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">
                    {language === 'es' ? 'Popular' : 'Popular'}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CpuChipIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.recommended.cpu}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ServerIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.recommended.ram} RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CubeIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.recommended.disk}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CommandLineIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.recommended.os}</span>
                  </div>
                </div>
              </div>
              
              {/* Production */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  {language === 'es' ? 'Producción' : 'Production'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CpuChipIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.production.cpu}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ServerIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.production.ram} RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CubeIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.production.disk}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CommandLineIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-700 dark:text-slate-300">{systemRequirements.production.os}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Supported OS */}
            <div className="mt-12 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {language === 'es' ? 'Sistemas operativos soportados:' : 'Supported operating systems:'}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <SiUbuntu className="h-6 w-6" />
                  <span>Ubuntu</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <SiDebian className="h-6 w-6" />
                  <span>Debian</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <SiCentos className="h-6 w-6" />
                  <span>CentOS</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <SiRedhat className="h-6 w-6" />
                  <span>RHEL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Methods */}
        <section id="install" className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Métodos de Instalación' : 'Installation Methods'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {language === 'es'
                  ? 'Elige el método que mejor se adapte a tu infraestructura'
                  : 'Choose the method that best fits your infrastructure'
                }
              </p>
            </div>
            
            {/* Method Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {installMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => setActiveMethod(method.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeMethod === method.id
                        ? 'bg-emerald-500 text-white shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{method.name}</span>
                    {method.recommended && (
                      <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs">
                        {language === 'es' ? 'Recomendado' : 'Recommended'}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Active Method Content */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Instructions */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {activeInstallMethod.name}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {activeInstallMethod.description}
                </p>
                
                {/* Requirements */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    {language === 'es' ? 'Requisitos:' : 'Requirements:'}
                  </h4>
                  <ul className="space-y-2">
                    {activeInstallMethod.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <CheckIcon className="h-4 w-4 text-emerald-500" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Install Command */}
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    {language === 'es' ? 'Instalación:' : 'Installation:'}
                  </h4>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
                      <code>{activeInstallMethod.installCommand}</code>
                    </pre>
                    <button
                      onClick={() => navigator.clipboard.writeText(activeInstallMethod.installCommand)}
                      className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <ClipboardDocumentCheckIcon className="h-4 w-4 text-slate-400" />
                    </button>
                  </div>
                </div>
                
                {/* Additional Resources */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`https://docs.infraux.com/self-hosting/${activeMethod}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                  >
                    <DocumentTextIcon className="h-5 w-5" />
                    {language === 'es' ? 'Documentación Completa' : 'Full Documentation'}
                  </a>
                  
                  <a
                    href="https://github.com/infraux/infraux/tree/main/examples"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                  >
                    <CodeBracketIcon className="h-5 w-5" />
                    {language === 'es' ? 'Ver Ejemplos' : 'View Examples'}
                  </a>
                </div>
              </div>
              
              {/* Right: Configuration Example */}
              {activeInstallMethod.configExample && (
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    {language === 'es' ? 'Ejemplo de Configuración:' : 'Configuration Example:'}
                  </h4>
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{activeInstallMethod.configExample}</code>
                    </pre>
                    <button
                      onClick={() => navigator.clipboard.writeText(activeInstallMethod.configExample!)}
                      className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <ClipboardDocumentCheckIcon className="h-4 w-4 text-slate-400" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Todo Incluido, Sin Límites' : 'Everything Included, No Limits'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {language === 'es'
                  ? 'La versión self-hosted incluye todas las características enterprise'
                  : 'The self-hosted version includes all enterprise features'
                }
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheckIcon,
                  title: language === 'es' ? 'Control Total' : 'Full Control',
                  description: language === 'es' 
                    ? 'Tus datos nunca salen de tu infraestructura. Cumple con cualquier regulación.'
                    : 'Your data never leaves your infrastructure. Comply with any regulation.'
                },
                {
                  icon: CpuChipIcon,
                  title: language === 'es' ? 'Sin Límites' : 'No Limits',
                  description: language === 'es'
                    ? 'Usuarios ilimitados, proyectos ilimitados, sin restricciones artificiales.'
                    : 'Unlimited users, unlimited projects, no artificial restrictions.'
                },
                {
                  icon: BoltIcon,
                  title: language === 'es' ? 'Alto Rendimiento' : 'High Performance',
                  description: language === 'es'
                    ? 'Optimizado para tu hardware. Sin latencia de red externa.'
                    : 'Optimized for your hardware. No external network latency.'
                },
                {
                  icon: CodeBracketIcon,
                  title: language === 'es' ? 'Personalizable' : 'Customizable',
                  description: language === 'es'
                    ? 'Modifica el código fuente. Añade integraciones propias. Es tu InfraUX.'
                    : 'Modify the source code. Add your own integrations. It\'s your InfraUX.'
                },
                {
                  icon: CloudIcon,
                  title: language === 'es' ? 'Air-Gapped' : 'Air-Gapped',
                  description: language === 'es'
                    ? 'Funciona sin conexión a internet. Perfecto para entornos seguros.'
                    : 'Works without internet connection. Perfect for secure environments.'
                },
                {
                  icon: ServerIcon,
                  title: language === 'es' ? 'Multi-Región' : 'Multi-Region',
                  description: language === 'es'
                    ? 'Despliega múltiples instancias. Sincroniza entre regiones.'
                    : 'Deploy multiple instances. Sync between regions.'
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                    <div className="inline-flex p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                      <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
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

        {/* Case Studies */}
        <CaseStudies />

        {/* FAQs */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {language === 'es'
                  ? 'Todo lo que necesitas saber sobre self-hosting'
                  : 'Everything you need to know about self-hosting'
                }
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <ChevronUpIcon className="h-5 w-5 text-slate-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-slate-500" />
                    )}
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-600 dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {language === 'es'
                  ? '¿Tienes más preguntas?'
                  : 'Have more questions?'
                }
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://discord.gg/infraux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <QuestionMarkCircleIcon className="h-5 w-5" />
                  {language === 'es' ? 'Pregunta en Discord' : 'Ask on Discord'}
                </a>
                
                <a
                  href="https://github.com/infraux/infraux/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                  {language === 'es' ? 'GitHub Discussions' : 'GitHub Discussions'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {language === 'es'
                ? '¿Listo para empezar con self-hosting?'
                : 'Ready to start self-hosting?'
              }
            </h2>
            
            <p className="text-xl mb-8 text-emerald-50 max-w-2xl mx-auto">
              {language === 'es'
                ? 'Únete a miles de equipos que ya confían en InfraUX para gestionar su infraestructura'
                : 'Join thousands of teams already trusting InfraUX to manage their infrastructure'
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/infraux/infraux"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <CodeBracketIcon className="h-5 w-5" />
                {language === 'es' ? 'Clonar Repositorio' : 'Clone Repository'}
              </a>
              
              <Link
                href="/cloud"
                className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2"
              >
                <CloudIcon className="h-5 w-5" />
                {language === 'es' ? 'Probar Cloud Gratis' : 'Try Cloud Free'}
              </Link>
            </div>
            
            <p className="mt-6 text-emerald-100 text-sm">
              {language === 'es'
                ? 'Sin tarjeta de crédito • Setup en 5 minutos • Soporte de la comunidad'
                : 'No credit card • 5-minute setup • Community support'
              }
            </p>
          </div>
        </section>
      </main>
      
      <FooterNew />
    </div>
  );
}