'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  CheckIcon,
  XMarkIcon,
  MinusIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface Feature {
  name: string;
  infraux: boolean | string;
  terraform: boolean | string;
  ansible: boolean | string;
  pulumi: boolean | string;
  crossplane: boolean | string;
  tooltip?: string;
}

interface ComparisonCategory {
  title: string;
  features: Feature[];
}

export default function ComparisonTable() {
  const { language } = useLanguage();
  const [expandedTooltip, setExpandedTooltip] = useState<string | null>(null);

  const categories: ComparisonCategory[] = language === 'es' ? [
    {
      title: 'Características Core',
      features: [
        {
          name: '100% Open Source',
          infraux: true,
          terraform: 'Parcial',
          ansible: true,
          pulumi: 'Parcial',
          crossplane: true,
          tooltip: 'InfraUX es completamente open source bajo Apache 2.0, sin características premium bloqueadas'
        },
        {
          name: 'Self-hosting gratuito',
          infraux: true,
          terraform: false,
          ansible: true,
          pulumi: false,
          crossplane: true
        },
        {
          name: 'Sin límites de usuarios',
          infraux: true,
          terraform: false,
          ansible: true,
          pulumi: false,
          crossplane: true
        },
        {
          name: 'Multi-cloud nativo',
          infraux: true,
          terraform: true,
          ansible: 'Manual',
          pulumi: true,
          crossplane: true
        },
        {
          name: 'GitOps integrado',
          infraux: true,
          terraform: 'Manual',
          ansible: false,
          pulumi: 'Manual',
          crossplane: true
        }
      ]
    },
    {
      title: 'Experiencia de Desarrollo',
      features: [
        {
          name: 'UI visual intuitiva',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: false,
          tooltip: 'InfraUX incluye una interfaz visual para diseñar y gestionar infraestructura sin escribir código'
        },
        {
          name: 'Colaboración en tiempo real',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: false
        },
        {
          name: 'Validación en tiempo real',
          infraux: true,
          terraform: 'Limitada',
          ansible: false,
          pulumi: 'Limitada',
          crossplane: 'Limitada'
        },
        {
          name: 'Rollback automático',
          infraux: true,
          terraform: false,
          ansible: 'Manual',
          pulumi: false,
          crossplane: true
        },
        {
          name: 'Métricas y observabilidad',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: 'Básica'
        }
      ]
    },
    {
      title: 'Seguridad y Compliance',
      features: [
        {
          name: 'Políticas como código',
          infraux: true,
          terraform: 'Sentinel ($)',
          ansible: false,
          pulumi: true,
          crossplane: true
        },
        {
          name: 'Auditoría completa',
          infraux: true,
          terraform: 'Cloud ($)',
          ansible: 'Básica',
          pulumi: 'Cloud ($)',
          crossplane: 'Básica'
        },
        {
          name: 'Gestión de secretos',
          infraux: true,
          terraform: 'Externa',
          ansible: 'Vault',
          pulumi: true,
          crossplane: 'Externa'
        },
        {
          name: 'RBAC granular',
          infraux: true,
          terraform: 'Cloud ($)',
          ansible: 'Tower ($)',
          pulumi: 'Cloud ($)',
          crossplane: true
        },
        {
          name: 'Compliance automático',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: false
        }
      ]
    },
    {
      title: 'Escalabilidad',
      features: [
        {
          name: 'Auto-scaling',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: true
        },
        {
          name: 'Multi-región',
          infraux: true,
          terraform: 'Manual',
          ansible: 'Manual',
          pulumi: 'Manual',
          crossplane: true
        },
        {
          name: 'Gestión de estado distribuido',
          infraux: true,
          terraform: 'Cloud ($)',
          ansible: false,
          pulumi: 'Cloud ($)',
          crossplane: true
        },
        {
          name: 'Ejecución paralela',
          infraux: true,
          terraform: 'Limitada',
          ansible: true,
          pulumi: true,
          crossplane: true
        },
        {
          name: 'Caché inteligente',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: false
        }
      ]
    },
    {
      title: 'Integraciones',
      features: [
        {
          name: 'CI/CD nativo',
          infraux: true,
          terraform: 'Externa',
          ansible: 'Externa',
          pulumi: 'Externa',
          crossplane: 'Externa'
        },
        {
          name: 'Marketplace de módulos',
          infraux: true,
          terraform: true,
          ansible: true,
          pulumi: false,
          crossplane: false
        },
        {
          name: 'API REST completa',
          infraux: true,
          terraform: 'Cloud ($)',
          ansible: 'Tower ($)',
          pulumi: 'Cloud ($)',
          crossplane: true
        },
        {
          name: 'Webhooks',
          infraux: true,
          terraform: 'Cloud ($)',
          ansible: 'Tower ($)',
          pulumi: 'Cloud ($)',
          crossplane: true
        },
        {
          name: 'SDK multi-lenguaje',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: true,
          crossplane: false
        }
      ]
    }
  ] : [
    {
      title: 'Core Features',
      features: [
        {
          name: '100% Open Source',
          infraux: true,
          terraform: 'Partial',
          ansible: true,
          pulumi: 'Partial',
          crossplane: true,
          tooltip: 'InfraUX is completely open source under Apache 2.0, with no premium features locked'
        },
        {
          name: 'Free self-hosting',
          infraux: true,
          terraform: false,
          ansible: true,
          pulumi: false,
          crossplane: true
        },
        {
          name: 'No user limits',
          infraux: true,
          terraform: false,
          ansible: true,
          pulumi: false,
          crossplane: true
        },
        {
          name: 'Native multi-cloud',
          infraux: true,
          terraform: true,
          ansible: 'Manual',
          pulumi: true,
          crossplane: true
        },
        {
          name: 'Integrated GitOps',
          infraux: true,
          terraform: 'Manual',
          ansible: false,
          pulumi: 'Manual',
          crossplane: true
        }
      ]
    },
    {
      title: 'Developer Experience',
      features: [
        {
          name: 'Intuitive visual UI',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: false,
          tooltip: 'InfraUX includes a visual interface to design and manage infrastructure without writing code'
        },
        {
          name: 'Real-time collaboration',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: false
        },
        {
          name: 'Real-time validation',
          infraux: true,
          terraform: 'Limited',
          ansible: false,
          pulumi: 'Limited',
          crossplane: 'Limited'
        },
        {
          name: 'Automatic rollback',
          infraux: true,
          terraform: false,
          ansible: 'Manual',
          pulumi: false,
          crossplane: true
        },
        {
          name: 'Metrics and observability',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: 'Basic'
        }
      ]
    },
    {
      title: 'Security & Compliance',
      features: [
        {
          name: 'Policy as code',
          infraux: true,
          terraform: 'Sentinel ($)',
          ansible: false,
          pulumi: true,
          crossplane: true
        },
        {
          name: 'Complete auditing',
          infraux: true,
          terraform: 'Cloud ($)',
          ansible: 'Basic',
          pulumi: 'Cloud ($)',
          crossplane: 'Basic'
        },
        {
          name: 'Secrets management',
          infraux: true,
          terraform: 'External',
          ansible: 'Vault',
          pulumi: true,
          crossplane: 'External'
        },
        {
          name: 'Granular RBAC',
          infraux: true,
          terraform: 'Cloud ($)',
          ansible: 'Tower ($)',
          pulumi: 'Cloud ($)',
          crossplane: true
        },
        {
          name: 'Automatic compliance',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: false
        }
      ]
    },
    {
      title: 'Scalability',
      features: [
        {
          name: 'Auto-scaling',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: true
        },
        {
          name: 'Multi-region',
          infraux: true,
          terraform: 'Manual',
          ansible: 'Manual',
          pulumi: 'Manual',
          crossplane: true
        },
        {
          name: 'Distributed state management',
          infraux: true,
          terraform: 'Cloud ($)',
          ansible: false,
          pulumi: 'Cloud ($)',
          crossplane: true
        },
        {
          name: 'Parallel execution',
          infraux: true,
          terraform: 'Limited',
          ansible: true,
          pulumi: true,
          crossplane: true
        },
        {
          name: 'Smart caching',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: false,
          crossplane: false
        }
      ]
    },
    {
      title: 'Integrations',
      features: [
        {
          name: 'Native CI/CD',
          infraux: true,
          terraform: 'External',
          ansible: 'External',
          pulumi: 'External',
          crossplane: 'External'
        },
        {
          name: 'Module marketplace',
          infraux: true,
          terraform: true,
          ansible: true,
          pulumi: false,
          crossplane: false
        },
        {
          name: 'Complete REST API',
          infraux: true,
          terraform: 'Cloud ($)',
          ansible: 'Tower ($)',
          pulumi: 'Cloud ($)',
          crossplane: true
        },
        {
          name: 'Webhooks',
          infraux: true,
          terraform: 'Cloud ($)',
          ansible: 'Tower ($)',
          pulumi: 'Cloud ($)',
          crossplane: true
        },
        {
          name: 'Multi-language SDK',
          infraux: true,
          terraform: false,
          ansible: false,
          pulumi: true,
          crossplane: false
        }
      ]
    }
  ];

  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <CheckIcon className="h-5 w-5 text-emerald-500" />;
    } else if (value === false) {
      return <XMarkIcon className="h-5 w-5 text-slate-300 dark:text-slate-600" />;
    } else {
      return <span className="text-sm text-amber-600 dark:text-amber-400">{value}</span>;
    }
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'es' ? 'InfraUX vs Alternativas' : 'InfraUX vs Alternatives'}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {language === 'es'
              ? 'Compara InfraUX con otras herramientas populares de infraestructura como código'
              : 'Compare InfraUX with other popular infrastructure as code tools'
            }
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-4 px-6 font-semibold text-slate-900 dark:text-white">
                  {language === 'es' ? 'Característica' : 'Feature'}
                </th>
                <th className="text-center py-4 px-4 min-w-[120px]">
                  <div className="font-semibold text-slate-900 dark:text-white">InfraUX</div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                    {language === 'es' ? 'Open Source' : 'Open Source'}
                  </div>
                </th>
                <th className="text-center py-4 px-4 min-w-[120px]">
                  <div className="font-semibold text-slate-700 dark:text-slate-300">Terraform</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">HashiCorp</div>
                </th>
                <th className="text-center py-4 px-4 min-w-[120px]">
                  <div className="font-semibold text-slate-700 dark:text-slate-300">Ansible</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Red Hat</div>
                </th>
                <th className="text-center py-4 px-4 min-w-[120px]">
                  <div className="font-semibold text-slate-700 dark:text-slate-300">Pulumi</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pulumi Corp</div>
                </th>
                <th className="text-center py-4 px-4 min-w-[120px]">
                  <div className="font-semibold text-slate-700 dark:text-slate-300">Crossplane</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">CNCF</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-slate-100 dark:bg-slate-900/50">
                    <td colSpan={6} className="py-3 px-6">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                    </td>
                  </tr>
                  {category.features.map((feature, featureIndex) => (
                    <tr 
                      key={`${categoryIndex}-${featureIndex}`}
                      className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-700 dark:text-slate-300">
                            {feature.name}
                          </span>
                          {feature.tooltip && (
                            <button
                              onMouseEnter={() => setExpandedTooltip(feature.name)}
                              onMouseLeave={() => setExpandedTooltip(null)}
                              className="relative"
                            >
                              <InformationCircleIcon className="h-4 w-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" />
                              {expandedTooltip === feature.name && (
                                <div className="absolute z-10 left-0 bottom-full mb-2 w-64 p-3 bg-slate-900 text-white text-sm rounded-lg shadow-xl">
                                  {feature.tooltip}
                                  <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900"></div>
                                </div>
                              )}
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center bg-emerald-50/50 dark:bg-emerald-900/10">
                        {renderValue(feature.infraux)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {renderValue(feature.terraform)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {renderValue(feature.ansible)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {renderValue(feature.pulumi)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {renderValue(feature.crossplane)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <CheckIcon className="h-5 w-5 text-emerald-500" />
            <span className="text-slate-600 dark:text-slate-400">
              {language === 'es' ? 'Incluido' : 'Included'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <XMarkIcon className="h-5 w-5 text-slate-300 dark:text-slate-600" />
            <span className="text-slate-600 dark:text-slate-400">
              {language === 'es' ? 'No disponible' : 'Not available'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-600 dark:text-amber-400">($)</span>
            <span className="text-slate-600 dark:text-slate-400">
              {language === 'es' ? 'Requiere plan pago' : 'Requires paid plan'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-600 dark:text-amber-400">{language === 'es' ? 'Manual' : 'Manual'}</span>
            <span className="text-slate-600 dark:text-slate-400">
              {language === 'es' ? 'Configuración manual' : 'Manual configuration'}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-300 text-sm font-semibold mb-6">
            <SparklesIcon className="h-4 w-4" />
            {language === 'es' ? 'La mejor opción open source' : 'The best open source choice'}
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'es' 
              ? '¿Por qué elegir InfraUX?' 
              : 'Why choose InfraUX?'
            }
          </h3>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            {language === 'es'
              ? 'InfraUX combina lo mejor de todas las herramientas en una plataforma unificada, 100% open source, sin límites artificiales ni costos ocultos.'
              : 'InfraUX combines the best of all tools into a unified platform, 100% open source, with no artificial limits or hidden costs.'
            }
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/self-hosting"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {language === 'es' ? 'Empezar Gratis' : 'Start Free'}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            
            <a
              href="/migration"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {language === 'es' ? 'Ver Guías de Migración' : 'View Migration Guides'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
