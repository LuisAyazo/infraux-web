'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ArrowRightIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  CommandLineIcon,
  ExclamationTriangleIcon,
  ArrowsRightLeftIcon,
  CloudArrowUpIcon,
  ServerIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import {
  SiTerraform,
  SiAnsible,
  SiPulumi,
  SiKubernetes,
  SiHelm,
  SiJenkins,
  SiGitlab
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

interface MigrationGuide {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'iac' | 'cicd' | 'gitops';
  difficulty: 'easy' | 'medium' | 'hard';
  timeEstimate: string;
  description: string;
  benefits: string[];
  steps: {
    title: string;
    description: string;
    command?: string;
  }[];
  considerations: string[];
}

export default function MigrationGuides() {
  const { language } = useLanguage();
  const [selectedGuide, setSelectedGuide] = useState<string>('terraform');
  const [activeCategory, setActiveCategory] = useState<'all' | 'iac' | 'cicd' | 'gitops'>('all');

  const categories = language === 'es' ? {
    all: 'Todas',
    iac: 'Infraestructura como Código',
    cicd: 'CI/CD',
    gitops: 'GitOps'
  } : {
    all: 'All',
    iac: 'Infrastructure as Code',
    cicd: 'CI/CD',
    gitops: 'GitOps'
  };

  const migrationGuides: MigrationGuide[] = language === 'es' ? [
    {
      id: 'terraform',
      name: 'Terraform',
      icon: SiTerraform,
      category: 'iac',
      difficulty: 'easy',
      timeEstimate: '2-4 horas',
      description: 'Migra tus módulos y configuraciones de Terraform a InfraUX manteniendo la compatibilidad.',
      benefits: [
        'Importa módulos existentes sin cambios',
        'Visualización automática de recursos',
        'Validación y políticas integradas',
        'Colaboración en tiempo real'
      ],
      steps: [
        {
          title: 'Exportar estado actual',
          description: 'Exporta tu estado de Terraform y configuraciones',
          command: 'terraform state pull > terraform.tfstate'
        },
        {
          title: 'Importar en InfraUX',
          description: 'Usa el importador de InfraUX para migrar tu infraestructura',
          command: 'infraux import terraform --state terraform.tfstate --modules ./modules'
        },
        {
          title: 'Validar recursos',
          description: 'Revisa y valida todos los recursos importados en la UI de InfraUX'
        },
        {
          title: 'Configurar pipelines',
          description: 'Configura los nuevos pipelines de deployment con las mejoras de InfraUX'
        }
      ],
      considerations: [
        'Revisa las versiones de providers compatibles',
        'Algunos recursos custom pueden requerir ajustes',
        'Planifica la migración por entornos'
      ]
    },
    {
      id: 'ansible',
      name: 'Ansible',
      icon: SiAnsible,
      category: 'iac',
      difficulty: 'medium',
      timeEstimate: '4-8 horas',
      description: 'Convierte tus playbooks de Ansible a flujos de InfraUX con mejoras automáticas.',
      benefits: [
        'Conversión automática de playbooks',
        'Mejor manejo de secretos',
        'Ejecución paralela optimizada',
        'Rollback automático'
      ],
      steps: [
        {
          title: 'Analizar playbooks',
          description: 'Ejecuta el analizador de InfraUX en tus playbooks',
          command: 'infraux analyze ansible --playbooks ./playbooks'
        },
        {
          title: 'Convertir a InfraUX',
          description: 'Convierte automáticamente los playbooks al formato InfraUX',
          command: 'infraux convert ansible --input ./playbooks --output ./infraux-flows'
        },
        {
          title: 'Migrar inventarios',
          description: 'Importa tus inventarios y variables de grupo',
          command: 'infraux import ansible-inventory --file ./inventory'
        },
        {
          title: 'Testear flujos',
          description: 'Ejecuta los nuevos flujos en modo dry-run para validar'
        }
      ],
      considerations: [
        'Algunos módulos custom necesitarán reescribirse',
        'Revisa las dependencias de Python',
        'Valida los permisos y accesos'
      ]
    },
    {
      id: 'pulumi',
      name: 'Pulumi',
      icon: SiPulumi,
      category: 'iac',
      difficulty: 'easy',
      timeEstimate: '2-3 horas',
      description: 'Migra tus stacks de Pulumi preservando la lógica de programación.',
      benefits: [
        'Soporte nativo para TypeScript/Python/Go',
        'Migración de estado transparente',
        'Mejores visualizaciones',
        'Testing integrado'
      ],
      steps: [
        {
          title: 'Exportar stacks',
          description: 'Exporta tus stacks de Pulumi',
          command: 'pulumi stack export > stack.json'
        },
        {
          title: 'Importar código',
          description: 'Importa tu código de infraestructura en InfraUX',
          command: 'infraux import pulumi --stack stack.json --code ./infra'
        },
        {
          title: 'Configurar secretos',
          description: 'Migra los secretos al vault de InfraUX'
        },
        {
          title: 'Validar y desplegar',
          description: 'Valida la migración y realiza un deployment de prueba'
        }
      ],
      considerations: [
        'Verifica la compatibilidad de SDKs',
        'Algunos providers pueden necesitar actualización',
        'Revisa las políticas de seguridad'
      ]
    },
    {
      id: 'jenkins',
      name: 'Jenkins',
      icon: SiJenkins,
      category: 'cicd',
      difficulty: 'hard',
      timeEstimate: '8-16 horas',
      description: 'Migra tus pipelines de Jenkins a los workflows nativos de InfraUX.',
      benefits: [
        'Pipelines como código por defecto',
        'Mejor integración con Git',
        'Escalado automático',
        'Métricas y observabilidad mejoradas'
      ],
      steps: [
        {
          title: 'Exportar pipelines',
          description: 'Exporta tus Jenkinsfiles y configuraciones',
          command: 'jenkins-cli export-jobs --format json > jenkins-jobs.json'
        },
        {
          title: 'Convertir a InfraUX',
          description: 'Convierte los pipelines al formato de InfraUX',
          command: 'infraux convert jenkins --input jenkins-jobs.json'
        },
        {
          title: 'Migrar plugins',
          description: 'Mapea los plugins de Jenkins a capacidades nativas de InfraUX'
        },
        {
          title: 'Configurar webhooks',
          description: 'Actualiza los webhooks y triggers en tus repositorios'
        },
        {
          title: 'Migrar artefactos',
          description: 'Transfiere los artefactos históricos si es necesario'
        }
      ],
      considerations: [
        'Algunos plugins no tendrán equivalente directo',
        'Revisa los scripts de shell embebidos',
        'Planifica la migración gradual de jobs'
      ]
    },
    {
      id: 'argocd',
      name: 'ArgoCD',
      icon: FaGitAlt,
      category: 'gitops',
      difficulty: 'medium',
      timeEstimate: '4-6 horas',
      description: 'Migra tus aplicaciones ArgoCD a InfraUX GitOps con características mejoradas.',
      benefits: [
        'GitOps mejorado con validaciones',
        'Multi-cluster nativo',
        'Mejor UI y experiencia',
        'Políticas de seguridad integradas'
      ],
      steps: [
        {
          title: 'Exportar aplicaciones',
          description: 'Exporta las definiciones de aplicaciones de ArgoCD',
          command: 'argocd app list -o json > argo-apps.json'
        },
        {
          title: 'Importar en InfraUX',
          description: 'Importa las aplicaciones en InfraUX',
          command: 'infraux import argocd --apps argo-apps.json'
        },
        {
          title: 'Configurar sincronización',
          description: 'Configura las políticas de sincronización y webhooks'
        },
        {
          title: 'Migrar RBAC',
          description: 'Transfiere los permisos y roles al sistema de InfraUX'
        }
      ],
      considerations: [
        'Revisa las diferencias en políticas de sync',
        'Algunos CRDs pueden necesitar ajustes',
        'Valida los health checks personalizados'
      ]
    }
  ] : [
    {
      id: 'terraform',
      name: 'Terraform',
      icon: SiTerraform,
      category: 'iac',
      difficulty: 'easy',
      timeEstimate: '2-4 hours',
      description: 'Migrate your Terraform modules and configurations to InfraUX while maintaining compatibility.',
      benefits: [
        'Import existing modules without changes',
        'Automatic resource visualization',
        'Integrated validation and policies',
        'Real-time collaboration'
      ],
      steps: [
        {
          title: 'Export current state',
          description: 'Export your Terraform state and configurations',
          command: 'terraform state pull > terraform.tfstate'
        },
        {
          title: 'Import to InfraUX',
          description: 'Use InfraUX importer to migrate your infrastructure',
          command: 'infraux import terraform --state terraform.tfstate --modules ./modules'
        },
        {
          title: 'Validate resources',
          description: 'Review and validate all imported resources in InfraUX UI'
        },
        {
          title: 'Configure pipelines',
          description: 'Set up new deployment pipelines with InfraUX enhancements'
        }
      ],
      considerations: [
        'Review compatible provider versions',
        'Some custom resources may need adjustments',
        'Plan migration by environments'
      ]
    },
    {
      id: 'ansible',
      name: 'Ansible',
      icon: SiAnsible,
      category: 'iac',
      difficulty: 'medium',
      timeEstimate: '4-8 hours',
      description: 'Convert your Ansible playbooks to InfraUX flows with automatic improvements.',
      benefits: [
        'Automatic playbook conversion',
        'Better secrets management',
        'Optimized parallel execution',
        'Automatic rollback'
      ],
      steps: [
        {
          title: 'Analyze playbooks',
          description: 'Run InfraUX analyzer on your playbooks',
          command: 'infraux analyze ansible --playbooks ./playbooks'
        },
        {
          title: 'Convert to InfraUX',
          description: 'Automatically convert playbooks to InfraUX format',
          command: 'infraux convert ansible --input ./playbooks --output ./infraux-flows'
        },
        {
          title: 'Migrate inventories',
          description: 'Import your inventories and group variables',
          command: 'infraux import ansible-inventory --file ./inventory'
        },
        {
          title: 'Test flows',
          description: 'Run new flows in dry-run mode to validate'
        }
      ],
      considerations: [
        'Some custom modules will need rewriting',
        'Review Python dependencies',
        'Validate permissions and access'
      ]
    },
    {
      id: 'pulumi',
      name: 'Pulumi',
      icon: SiPulumi,
      category: 'iac',
      difficulty: 'easy',
      timeEstimate: '2-3 hours',
      description: 'Migrate your Pulumi stacks preserving programming logic.',
      benefits: [
        'Native support for TypeScript/Python/Go',
        'Transparent state migration',
        'Better visualizations',
        'Integrated testing'
      ],
      steps: [
        {
          title: 'Export stacks',
          description: 'Export your Pulumi stacks',
          command: 'pulumi stack export > stack.json'
        },
        {
          title: 'Import code',
          description: 'Import your infrastructure code to InfraUX',
          command: 'infraux import pulumi --stack stack.json --code ./infra'
        },
        {
          title: 'Configure secrets',
          description: 'Migrate secrets to InfraUX vault'
        },
        {
          title: 'Validate and deploy',
          description: 'Validate migration and perform test deployment'
        }
      ],
      considerations: [
        'Verify SDK compatibility',
        'Some providers may need updates',
        'Review security policies'
      ]
    },
    {
      id: 'jenkins',
      name: 'Jenkins',
      icon: SiJenkins,
      category: 'cicd',
      difficulty: 'hard',
      timeEstimate: '8-16 hours',
      description: 'Migrate your Jenkins pipelines to InfraUX native workflows.',
      benefits: [
        'Pipelines as code by default',
        'Better Git integration',
        'Automatic scaling',
        'Enhanced metrics and observability'
      ],
      steps: [
        {
          title: 'Export pipelines',
          description: 'Export your Jenkinsfiles and configurations',
          command: 'jenkins-cli export-jobs --format json > jenkins-jobs.json'
        },
        {
          title: 'Convert to InfraUX',
          description: 'Convert pipelines to InfraUX format',
          command: 'infraux convert jenkins --input jenkins-jobs.json'
        },
        {
          title: 'Migrate plugins',
          description: 'Map Jenkins plugins to InfraUX native capabilities'
        },
        {
          title: 'Configure webhooks',
          description: 'Update webhooks and triggers in your repositories'
        },
        {
          title: 'Migrate artifacts',
          description: 'Transfer historical artifacts if needed'
        }
      ],
      considerations: [
        'Some plugins won\'t have direct equivalents',
        'Review embedded shell scripts',
        'Plan gradual job migration'
      ]
    },
    {
      id: 'argocd',
      name: 'ArgoCD',
      icon: FaGitAlt,
      category: 'gitops',
      difficulty: 'medium',
      timeEstimate: '4-6 hours',
      description: 'Migrate your ArgoCD applications to InfraUX GitOps with enhanced features.',
      benefits: [
        'Enhanced GitOps with validations',
        'Native multi-cluster',
        'Better UI and experience',
        'Integrated security policies'
      ],
      steps: [
        {
          title: 'Export applications',
          description: 'Export ArgoCD application definitions',
          command: 'argocd app list -o json > argo-apps.json'
        },
        {
          title: 'Import to InfraUX',
          description: 'Import applications to InfraUX',
          command: 'infraux import argocd --apps argo-apps.json'
        },
        {
          title: 'Configure sync',
          description: 'Set up sync policies and webhooks'
        },
        {
          title: 'Migrate RBAC',
          description: 'Transfer permissions and roles to InfraUX system'
        }
      ],
      considerations: [
        'Review sync policy differences',
        'Some CRDs may need adjustments',
        'Validate custom health checks'
      ]
    }
  ];

  const getDifficultyColor = (difficulty: MigrationGuide['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 dark:text-green-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'hard': return 'text-red-600 dark:text-red-400';
    }
  };

  const getDifficultyLabel = (difficulty: MigrationGuide['difficulty']) => {
    if (language === 'es') {
      switch (difficulty) {
        case 'easy': return 'Fácil';
        case 'medium': return 'Medio';
        case 'hard': return 'Difícil';
      }
    }
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  const filteredGuides = activeCategory === 'all' 
    ? migrationGuides 
    : migrationGuides.filter(g => g.category === activeCategory);

  const selectedGuideData = migrationGuides.find(g => g.id === selectedGuide);

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'es' ? 'Guías de Migración' : 'Migration Guides'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {language === 'es'
              ? 'Migra fácilmente desde tu herramienta actual a InfraUX con nuestras guías paso a paso'
              : 'Easily migrate from your current tool to InfraUX with our step-by-step guides'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as any)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Tool List */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              {language === 'es' ? 'Selecciona tu herramienta' : 'Select your tool'}
            </h3>
            <div className="space-y-3">
              {filteredGuides.map((guide) => {
                const Icon = guide.icon;
                return (
                  <button
                    key={guide.id}
                    onClick={() => setSelectedGuide(guide.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      selectedGuide === guide.id
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-500'
                        : 'bg-slate-50 dark:bg-slate-800 border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {guide.name}
                        </h4>
                        <div className="flex items-center gap-3 text-sm mt-1">
                          <span className={getDifficultyColor(guide.difficulty)}>
                            {getDifficultyLabel(guide.difficulty)}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400">
                            <ClockIcon className="h-3 w-3 inline mr-1" />
                            {guide.timeEstimate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Guide Details */}
          {selectedGuideData && (
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <selectedGuideData.icon className="h-10 w-10 text-slate-700 dark:text-slate-300" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {language === 'es' ? `Migrar desde ${selectedGuideData.name}` : `Migrate from ${selectedGuideData.name}`}
                    </h3>
                    <div className="flex items-center gap-4 text-sm mt-1">
                      <span className={getDifficultyColor(selectedGuideData.difficulty)}>
                        {getDifficultyLabel(selectedGuideData.difficulty)}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        <ClockIcon className="h-4 w-4 inline mr-1" />
                        {selectedGuideData.timeEstimate}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  {selectedGuideData.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  {language === 'es' ? 'Beneficios de migrar' : 'Migration benefits'}
                </h4>
                <ul className="space-y-2">
                  {selectedGuideData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                  {language === 'es' ? 'Pasos de migración' : 'Migration steps'}
                </h4>
                <div className="space-y-6">
                  {selectedGuideData.steps.map((step, index) => (
                    <div key={index} className="relative pl-8">
                      {/* Step number */}
                      <div className="absolute left-0 top-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      
                      {/* Step content */}
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-white mb-1">
                          {step.title}
                        </h5>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">
                          {step.description}
                        </p>
                        {step.command && (
                          <div className="bg-slate-900 text-slate-100 p-3 rounded-lg font-mono text-sm">
                            <code>{step.command}</code>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Considerations */}
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-5 w-5 text-amber-500" />
                  {language === 'es' ? 'Consideraciones importantes' : 'Important considerations'}
                </h4>
                <ul className="space-y-2">
                  {selectedGuideData.considerations.map((consideration, index) => (
                    <li key={index} className="text-slate-700 dark:text-slate-300">
                      • {consideration}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://docs.infraux.com/migration/${selectedGuideData.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <DocumentTextIcon className="h-5 w-5" />
                  {language === 'es' ? 'Ver guía completa' : 'View full guide'}
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                
                <a
                  href="https://discord.gg/infraux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {language === 'es' ? 'Obtener ayuda' : 'Get help'}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}