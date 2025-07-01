// lib/seo-config.ts - CONFIGURACIÓN SEO CENTRALIZADA NIVEL ENTERPRISE
export const seoConfig = {
  domain: 'https://infraux.com',
  siteName: 'InfraUX',
  twitterHandle: '@infraux',
  defaultLocale: 'en_US',
  supportedLocales: ['en', 'es'],
  
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
  },
  
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
  },
  
  // Common metadata base
  common: {
    authors: [{ name: 'InfraUX Team', url: 'https://infraux.com/company' }],
    creator: 'InfraUX',
    publisher: 'InfraUX Inc.',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  },
  
  // Common keywords que se usan en varias páginas
  keywords: {
    brand: ['infraux', 'infraux platform', 'visual infrastructure'],
    cloud: ['aws', 'azure', 'gcp', 'multi-cloud', 'cloud infrastructure'],
    devops: ['devops', 'terraform', 'kubernetes', 'docker', 'ci/cd'],
    features: ['visual editor', 'drag and drop', 'infrastructure as code', 'automation'],
    business: ['startup', 'enterprise', 'team collaboration', 'scalable', 'cost optimization']
  }
}

// Función helper para crear metadata base
export const createMetadata = (options: {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  category?: string
  locale?: string
  alternateLanguages?: Record<string, string>
}) => ({
  title: options.title,
  description: options.description,
  keywords: options.keywords || [],
  ...seoConfig.common,
  metadataBase: new URL(seoConfig.domain),
  
  alternates: {
    canonical: options.canonical || '/',
    languages: options.alternateLanguages || {
      'en': options.canonical || '/',
      'x-default': options.canonical || '/'
    }
  },
  
  openGraph: {
    title: options.title,
    description: options.description,
    url: `${seoConfig.domain}${options.canonical || ''}`,
    siteName: seoConfig.siteName,
    locale: options.locale || seoConfig.defaultLocale,
    type: 'website',
    images: [
      {
        url: options.ogImage || '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: options.title,
        type: 'image/jpeg',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image' as const,
    title: options.title,
    description: options.description,
    site: seoConfig.twitterHandle,
    creator: seoConfig.twitterHandle,
    images: [options.ogImage || '/og-default.jpg'],
  },
  
  ...(seoConfig.verification.google && {
    verification: seoConfig.verification
  }),
  
  category: options.category || 'technology',
})

// Metadata específico por tipo de página
export const pageMetadata = {
  home: () => createMetadata({
    title: 'InfraUX | Visual Cloud Infrastructure Platform | Terraform, AWS, Azure, GCP',
    description: 'Transform your cloud infrastructure with InfraUX - the visual platform for DevOps teams. Design, deploy, and manage AWS, Azure, and GCP infrastructure with our intuitive drag-and-drop interface.',
    keywords: [
      ...seoConfig.keywords.brand,
      ...seoConfig.keywords.cloud,
      ...seoConfig.keywords.devops,
      ...seoConfig.keywords.features,
      'visual cloud infrastructure',
      'infrastructure platform',
      'devops platform',
      'terraform visual editor',
      'cloud architecture tool'
    ],
    canonical: '/',
    ogImage: '/og-homepage.jpg',
    alternateLanguages: { 'en': '/', 'es': '/', 'x-default': '/' }
  }),
  
  pricing: () => createMetadata({
    title: 'InfraUX Pricing | Free Cloud Infrastructure Platform | Transparent Plans',
    description: 'Start free with InfraUX cloud infrastructure platform. Transparent pricing for teams of all sizes. No hidden costs, cancel anytime.',
    keywords: [
      ...seoConfig.keywords.brand,
      ...seoConfig.keywords.business,
      'pricing',
      'free plan',
      'transparent pricing',
      'no hidden costs',
      'cancel anytime',
      'infrastructure pricing',
      'devops pricing'
    ],
    canonical: '/pricing',
    ogImage: '/og-pricing.jpg',
    category: 'business',
    alternateLanguages: { 'en': '/pricing', 'es': '/precios' }
  }),
  
  contact: () => createMetadata({
    title: 'Contact InfraUX | Get in Touch | Sales & Support',
    description: 'Contact InfraUX for sales inquiries, technical support, or general questions. We\'re here to help you transform your cloud infrastructure.',
    keywords: [
      ...seoConfig.keywords.brand,
      'contact infraux',
      'sales contact',
      'technical support',
      'customer support',
      'get in touch',
      'help center',
      'contact form',
      'support team',
      'sales team'
    ],
    canonical: '/contact',
    ogImage: '/og-contact.jpg',
    category: 'contact',
    alternateLanguages: { 'en': '/contact', 'es': '/contacto' }
  }),

  company: () => createMetadata({
    title: 'About InfraUX | Company Mission, Team & Vision | Cloud Infrastructure Leaders',
    description: 'Learn about InfraUX\'s mission to democratize cloud infrastructure. Meet our world-class team, discover our values, and see how we\'re revolutionizing DevOps for companies worldwide.',
    keywords: [
      ...seoConfig.keywords.brand,
      ...seoConfig.keywords.business,
      'about infraux',
      'company mission',
      'cloud infrastructure company',
      'devops team',
      'infrastructure leaders',
      'company values',
      'team culture',
      'startup story',
      'company vision',
      'cloud technology leaders',
      'infrastructure innovation',
      'remote team',
      'global company',
      'tech startup'
    ],
    canonical: '/company',
    ogImage: '/og-company.jpg',
    category: 'organization',
    alternateLanguages: { 'en': '/company', 'es': '/empresa' }
  }),

  solutions: {
    startups: () => createMetadata({
      title: 'InfraUX for Startups | Scalable Cloud Infrastructure | Cost-Effective DevOps',
      description: 'Cloud infrastructure solution designed for startups. Scale from zero to production with InfraUX\'s visual platform. Start free, grow without infrastructure complexity.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.business,
        'startup infrastructure',
        'startup cloud platform',
        'scalable infrastructure',
        'cost effective devops',
        'startup devops platform',
        'early stage infrastructure',
        'startup friendly pricing',
        'mvp infrastructure',
        'rapid scaling infrastructure'
      ],
      canonical: '/solutions/startups',
      ogImage: '/og-solutions-startups.jpg',
      alternateLanguages: { 'en': '/solutions/startups', 'es': '/soluciones/startups' }
    }),
    
    enterprise: () => createMetadata({
      title: 'InfraUX for Enterprise | Enterprise Cloud Infrastructure Management',
      description: 'Enterprise-grade cloud infrastructure platform with advanced security, compliance, SSO, and team collaboration features for large organizations.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.business,
        'enterprise infrastructure',
        'enterprise cloud management',
        'enterprise devops platform',
        'large scale infrastructure',
        'enterprise security',
        'enterprise compliance',
        'sso integration',
        'enterprise features',
        'corporate infrastructure'
      ],
      canonical: '/solutions/enterprise',
      ogImage: '/og-solutions-enterprise.jpg',
      alternateLanguages: { 'en': '/solutions/enterprise', 'es': '/soluciones/empresas' }
    }),

    devops: () => createMetadata({
      title: 'InfraUX for DevOps Teams | Visual DevOps Platform | Infrastructure Automation',
      description: 'Streamline DevOps workflows with InfraUX\'s visual infrastructure platform. Automate deployments, collaborate in real-time, and manage multi-cloud environments.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'devops platform',
        'visual devops',
        'devops automation',
        'devops workflow',
        'infrastructure automation',
        'devops collaboration',
        'ci/cd platform',
        'devops tools',
        'infrastructure pipeline'
      ],
      canonical: '/solutions/devops',
      ogImage: '/og-solutions-devops.jpg',
      alternateLanguages: { 'en': '/solutions/devops', 'es': '/soluciones/devops' }
    }),

    multiCloud: () => createMetadata({
      title: 'Multi-Cloud Infrastructure Management | AWS, Azure, GCP | InfraUX',
      description: 'Manage multi-cloud infrastructure across AWS, Azure, and GCP with a single visual platform. Unified management, consistent deployments, cost optimization.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.cloud,
        'multi-cloud management',
        'multi cloud platform',
        'aws azure gcp',
        'hybrid cloud management',
        'unified cloud platform',
        'cross cloud infrastructure',
        'multi-cloud deployment',
        'cloud consolidation',
        'multi-cloud strategy'
      ],
      canonical: '/solutions/multi-cloud',
      ogImage: '/og-solutions-multicloud.jpg',
      alternateLanguages: { 'en': '/solutions/multi-cloud', 'es': '/soluciones/multi-cloud' }
    })
  },

  product: {
    editor: () => createMetadata({
      title: 'Visual Infrastructure Editor | Drag & Drop Cloud Design | InfraUX',
      description: 'Design cloud infrastructure visually with InfraUX\'s intuitive drag-and-drop editor. No YAML, no complexity. Build AWS, Azure, and GCP architectures in minutes.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.features,
        'visual infrastructure editor',
        'drag drop cloud design',
        'infrastructure design tool',
        'cloud architecture editor',
        'visual terraform',
        'no code infrastructure',
        'cloud diagram tool',
        'infrastructure builder',
        'visual devops tool'
      ],
      canonical: '/product/editor',
      ogImage: '/og-product-editor.jpg',
      alternateLanguages: { 'en': '/product/editor', 'es': '/producto/editor' }
    }),

    deployment: () => createMetadata({
      title: 'Automated Infrastructure Deployment | Visual CI/CD Pipelines | InfraUX',
      description: 'Deploy infrastructure automatically with InfraUX\'s visual CI/CD pipelines. Automate Terraform, CloudFormation, and Pulumi deployments with zero downtime.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'automated infrastructure deployment',
        'visual ci/cd pipelines',
        'infrastructure automation',
        'terraform deployment',
        'automated devops',
        'deployment automation',
        'ci/cd platform',
        'infrastructure orchestration',
        'zero downtime deployment'
      ],
      canonical: '/product/deployment',
      ogImage: '/og-product-deployment.jpg',
      alternateLanguages: { 'en': '/product/deployment', 'es': '/producto/deployment' }
    }),

    collaboration: () => createMetadata({
      title: 'Team Infrastructure Collaboration | Real-time DevOps | InfraUX',
      description: 'Collaborate on infrastructure in real-time with your DevOps team. Share diagrams, review changes, and deploy together with InfraUX\'s collaboration features.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.business,
        'team infrastructure collaboration',
        'devops team collaboration',
        'real-time infrastructure',
        'shared infrastructure diagrams',
        'collaborative devops',
        'team cloud management',
        'infrastructure review process',
        'devops workflow',
        'team based infrastructure'
      ],
      canonical: '/product/collaboration',
      ogImage: '/og-product-collaboration.jpg',
      alternateLanguages: { 'en': '/product/collaboration', 'es': '/producto/colaboracion' }
    }),

    security: () => createMetadata({
      title: 'Infrastructure Security & Compliance | Cloud Security Scanning | InfraUX',
      description: 'Secure your cloud infrastructure with InfraUX\'s built-in security scanning, compliance checks, and best practices validation for AWS, Azure, and GCP.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.cloud,
        'infrastructure security',
        'cloud security scanning',
        'compliance checking',
        'security best practices',
        'infrastructure compliance',
        'cloud security validation',
        'devops security',
        'automated security checks',
        'infrastructure vulnerability scanning'
      ],
      canonical: '/product/security',
      ogImage: '/og-product-security.jpg',
      alternateLanguages: { 'en': '/product/security', 'es': '/producto/seguridad' }
    }),

    iac: () => createMetadata({
      title: 'Infrastructure as Code Generation | Terraform, Pulumi, CloudFormation | InfraUX',
      description: 'Generate Infrastructure as Code automatically from visual diagrams. Support for Terraform, Pulumi, CloudFormation, and Ansible with InfraUX.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'infrastructure as code',
        'terraform generator',
        'pulumi generator',
        'cloudformation generator',
        'iac automation',
        'code generation',
        'visual to code',
        'infrastructure code',
        'automated iac',
        'terraform automation'
      ],
      canonical: '/product/iac',
      ogImage: '/og-product-iac.jpg',
      alternateLanguages: { 'en': '/product/iac', 'es': '/producto/iac' }
    }),

    integrations: () => createMetadata({
      title: 'Cloud & DevOps Integrations | AWS, Azure, GCP, Git | InfraUX',
      description: 'Integrate InfraUX with your existing DevOps tools. Connect AWS, Azure, GCP, GitHub, GitLab, Slack, and more for seamless infrastructure management.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.cloud,
        'cloud integrations',
        'devops integrations',
        'aws integration',
        'azure integration',
        'gcp integration',
        'github integration',
        'gitlab integration',
        'slack integration',
        'infrastructure integrations',
        'api integrations'
      ],
      canonical: '/product/integrations',
      ogImage: '/og-product-integrations.jpg',
      alternateLanguages: { 'en': '/product/integrations', 'es': '/producto/integraciones' }
    })
  },

  // Content pages metadata
  content: {
    blog: () => createMetadata({
      title: 'Infrastructure Blog | IaC Tutorials & Cloud Best Practices | InfraUX',
      description: 'Learn Infrastructure as Code best practices, cloud architecture patterns, and DevOps tutorials. Expert insights on AWS, Azure, GCP, Terraform, and more.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'infrastructure blog',
        'iac tutorials',
        'cloud best practices',
        'devops blog',
        'terraform tutorials',
        'aws tutorials',
        'azure tutorials',
        'gcp tutorials',
        'infrastructure guides',
        'cloud architecture blog'
      ],
      canonical: '/blog',
      ogImage: '/og-blog.jpg',
      alternateLanguages: { 'en': '/blog', 'es': '/blog' }
    }),

    useCases: () => createMetadata({
      title: 'Infrastructure Use Cases | Real-World Cloud Architectures | InfraUX',
      description: 'Discover real-world infrastructure use cases and cloud architecture examples. Learn how companies deploy scalable, secure, and cost-effective solutions.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.cloud,
        'infrastructure use cases',
        'cloud architecture examples',
        'real world infrastructure',
        'scalable architecture',
        'enterprise infrastructure',
        'startup infrastructure',
        'cloud deployment examples',
        'infrastructure patterns',
        'architecture case studies'
      ],
      canonical: '/use-cases',
      ogImage: '/og-use-cases.jpg',
      alternateLanguages: { 'en': '/use-cases', 'es': '/casos-de-uso' }
    }),

    testimonials: () => createMetadata({
      title: 'Customer Success Stories | InfraUX Reviews & Testimonials',
      description: 'Read success stories from DevOps teams using InfraUX. See how companies reduced infrastructure complexity and deployment time by 70%.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.business,
        'customer testimonials',
        'infraux reviews',
        'devops success stories',
        'infrastructure transformation',
        'customer case studies',
        'deployment success',
        'devops efficiency',
        'infrastructure roi',
        'team productivity',
        'cloud migration success'
      ],
      canonical: '/testimonials',
      ogImage: '/og-testimonials.jpg',
      alternateLanguages: { 'en': '/testimonials', 'es': '/testimonios' }
    }),

    demo: () => createMetadata({
      title: 'Live Demo | See InfraUX Visual Infrastructure Editor in Action',
      description: 'Experience InfraUX\'s visual infrastructure editor with our interactive demo. Design, deploy, and manage cloud infrastructure in minutes, not hours.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.features,
        'infraux demo',
        'live demo',
        'interactive demo',
        'visual infrastructure demo',
        'try infraux',
        'infrastructure editor demo',
        'cloud design demo',
        'free trial',
        'hands on demo',
        'product walkthrough'
      ],
      canonical: '/demo',
      ogImage: '/og-demo.jpg',
      alternateLanguages: { 'en': '/demo', 'es': '/demo' }
    })
  },

  // Utility pages metadata
  utility: {
    documentation: () => createMetadata({
      title: 'Documentation & Learning Center | InfraUX Developer Guides',
      description: 'Complete InfraUX documentation with tutorials, API references, and best practices. Learn to build and deploy cloud infrastructure visually.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'infraux documentation',
        'developer guides',
        'api documentation',
        'infrastructure tutorials',
        'developer resources',
        'getting started guide',
        'infraux help',
        'learning center',
        'technical documentation',
        'developer portal'
      ],
      canonical: '/documentation',
      ogImage: '/og-documentation.jpg',
      alternateLanguages: { 'en': '/documentation', 'es': '/documentacion' }
    }),

    changelog: () => createMetadata({
      title: 'Changelog | InfraUX Product Updates & New Features',
      description: 'Stay updated with the latest InfraUX features, improvements, and bug fixes. See what\'s new in each release and upcoming features.',
      keywords: [
        ...seoConfig.keywords.brand,
        'infraux changelog',
        'product updates',
        'new features',
        'release notes',
        'software updates',
        'feature announcements',
        'product roadmap updates',
        'infraux releases',
        'whats new',
        'version history'
      ],
      canonical: '/changelog',
      ogImage: '/og-changelog.jpg',
      alternateLanguages: { 'en': '/changelog', 'es': '/changelog' }
    }),

    roadmap: () => createMetadata({
      title: 'Product Roadmap | InfraUX Future Features & Development',
      description: 'See what\'s coming next for InfraUX. View our product roadmap with upcoming features, improvements, and timeline for cloud infrastructure tools.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'infraux roadmap',
        'product roadmap',
        'future features',
        'upcoming features',
        'development timeline',
        'feature requests',
        'product planning',
        'infraux future',
        'development roadmap',
        'feature pipeline'
      ],
      canonical: '/roadmap',
      ogImage: '/og-roadmap.jpg',
      alternateLanguages: { 'en': '/roadmap', 'es': '/roadmap' }
    }),

    comparison: () => createMetadata({
      title: 'InfraUX vs Competitors | Infrastructure Tool Comparison',
      description: 'Compare InfraUX with other infrastructure tools like Terraform, Pulumi, and CloudFormation. See why teams choose InfraUX for visual infrastructure.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'infraux vs terraform',
        'infraux vs pulumi',
        'infrastructure tool comparison',
        'visual infrastructure tools',
        'terraform alternative',
        'cloudformation alternative',
        'infrastructure comparison',
        'devops tool comparison',
        'infrastructure platform comparison'
      ],
      canonical: '/comparacion',
      ogImage: '/og-comparison.jpg',
      alternateLanguages: { 'en': '/comparison', 'es': '/comparacion' }
    }),

    tutorials: () => createMetadata({
      title: 'Infrastructure Tutorials | Step-by-Step Cloud Guides | InfraUX',
      description: 'Learn cloud infrastructure with step-by-step tutorials. From basics to advanced patterns, master AWS, Azure, GCP with InfraUX visual guides.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'infrastructure tutorials',
        'cloud tutorials',
        'step by step guides',
        'infraux tutorials',
        'learn infrastructure',
        'cloud learning',
        'devops tutorials',
        'infrastructure training',
        'hands on tutorials',
        'practical guides'
      ],
      canonical: '/tutoriales',
      ogImage: '/og-tutorials.jpg',
      alternateLanguages: { 'en': '/tutorials', 'es': '/tutoriales' }
    }),

    freeTrial: () => createMetadata({
      title: 'Start Free Trial | Try InfraUX Visual Infrastructure Editor',
      description: 'Start your free InfraUX trial today. No credit card required. Experience visual infrastructure design, deployment, and management in minutes.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.features,
        'infraux free trial',
        'free trial',
        'try infraux',
        'get started free',
        'no credit card',
        'free infrastructure tool',
        'trial signup',
        'test infraux',
        'evaluate infraux',
        'free account'
      ],
      canonical: '/prueba-gratis',
      ogImage: '/og-free-trial.jpg',
      alternateLanguages: { 'en': '/free-trial', 'es': '/prueba-gratis' }
    }),

    signup: () => createMetadata({
      title: 'Sign Up | Create Your InfraUX Account',
      description: 'Create your InfraUX account and start building visual cloud infrastructure. Join thousands of DevOps teams already using InfraUX.',
      keywords: [
        ...seoConfig.keywords.brand,
        'infraux signup',
        'create account',
        'register infraux',
        'sign up free',
        'join infraux',
        'new user registration',
        'account creation',
        'get started',
        'infraux registration'
      ],
      canonical: '/registro',
      ogImage: '/og-signup.jpg',
      alternateLanguages: { 'en': '/signup', 'es': '/registro' }
    })
  },

  // Spanish product pages
  spanish: {
    product: {
      editor: () => createMetadata({
        title: 'Editor Visual de Infraestructura | InfraUX | Diseño Cloud Sin Código',
        description: 'Diseña tu infraestructura cloud con drag & drop. Editor visual intuitivo sin código, sin YAML, sin complejidad. Compatible con AWS, GCP y Azure.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.features,
          'editor visual infraestructura',
          'diseño cloud drag drop',
          'infraestructura sin código',
          'editor visual aws',
          'diseño infraestructura visual',
          'drag and drop cloud',
          'editor infraestructura español',
          'diseño cloud intuitivo',
          'infraestructura no-code',
          'diseñador visual cloud'
        ],
        canonical: '/producto/editor',
        ogImage: '/og-producto-editor.jpg',
        category: 'technology',
        alternateLanguages: { 'en': '/product/editor', 'es': '/producto/editor' }
      }),

      deployment: () => createMetadata({
        title: 'Deployment Automático | InfraUX | Despliegue Cloud Inteligente',
        description: 'Despliega infraestructura cloud automáticamente desde tu diseño visual. Un clic para desplegar en AWS, Azure y GCP con validación inteligente.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.devops,
          'deployment automático',
          'despliegue cloud',
          'despliegue automático aws',
          'deployment infraestructura',
          'despliegue inteligente',
          'automatización deployment',
          'despliegue multi-cloud',
          'deployment validation',
          'infraestructura automática',
          'despliegue visual'
        ],
        canonical: '/producto/deployment',
        ogImage: '/og-producto-deployment.jpg',
        category: 'technology',
        alternateLanguages: { 'en': '/product/deployment', 'es': '/producto/deployment' }
      }),

      collaboration: () => createMetadata({
        title: 'Colaboración en Equipo | InfraUX | Trabajo Colaborativo Cloud',
        description: 'Colabora en tiempo real en el diseño de infraestructura cloud. Trabajo en equipo, comentarios, versionado y gestión de permisos integrada.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.business,
          'colaboración infraestructura',
          'trabajo equipo cloud',
          'colaboración tiempo real',
          'versionado infraestructura',
          'permisos equipo cloud',
          'comentarios infraestructura',
          'gestión colaborativa',
          'teamwork cloud',
          'shared infrastructure',
          'collaborative design'
        ],
        canonical: '/producto/colaboracion',
        ogImage: '/og-producto-colaboracion.jpg',
        category: 'technology',
        alternateLanguages: { 'en': '/product/collaboration', 'es': '/producto/colaboracion' }
      }),

      integrations: () => createMetadata({
        title: 'Integraciones Cloud | InfraUX | Conecta Todas tus Herramientas',
        description: 'Integra InfraUX con tus herramientas DevOps favoritas. GitHub, GitLab, Jenkins, Slack, Jira y más de 50 integraciones disponibles.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.devops,
          'integraciones cloud',
          'integraciones devops',
          'integración github',
          'integración gitlab',
          'integración jenkins',
          'integración slack',
          'conectar herramientas',
          'apis integración',
          'ecosystem devops',
          'workflow integration'
        ],
        canonical: '/producto/integraciones',
        ogImage: '/og-producto-integraciones.jpg',
        category: 'technology',
        alternateLanguages: { 'en': '/product/integrations', 'es': '/producto/integraciones' }
      }),

      iac: () => createMetadata({
        title: 'Infrastructure as Code | InfraUX | Terraform Visual & Código Automático',
        description: 'Genera código Terraform automáticamente desde tu diseño visual. Infrastructure as Code simplificado con validación y mejores prácticas.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.devops,
          'infrastructure as code',
          'terraform visual',
          'generación código terraform',
          'iac automático',
          'código infraestructura',
          'terraform generator',
          'visual terraform',
          'iac simplificado',
          'terraform español',
          'generador terraform'
        ],
        canonical: '/producto/iac',
        ogImage: '/og-producto-iac.jpg',
        category: 'technology',
        alternateLanguages: { 'en': '/product/iac', 'es': '/producto/iac' }
      }),

      security: () => createMetadata({
        title: 'Seguridad Cloud | InfraUX | Análisis Seguridad Infraestructura',
        description: 'Análisis de seguridad integrado para tu infraestructura cloud. Detecta vulnerabilidades, cumplimiento normativo y mejores prácticas automáticamente.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.cloud,
          'seguridad cloud',
          'análisis seguridad infraestructura',
          'vulnerabilidades cloud',
          'cumplimiento normativo',
          'security scanning',
          'infraestructura segura',
          'mejores prácticas seguridad',
          'compliance cloud',
          'security validation',
          'auditoria infraestructura'
        ],
        canonical: '/producto/seguridad',
        ogImage: '/og-producto-seguridad.jpg',
        category: 'technology',
        alternateLanguages: { 'en': '/product/security', 'es': '/producto/seguridad' }
      })
    },

    solutions: {
      startups: () => createMetadata({
        title: 'InfraUX para Startups | Infraestructura Cloud Escalable y Económica',
        description: 'Infraestructura cloud perfecta para startups. Comienza gratis, escala sin límites. Diseña, despliega y gestiona tu stack tecnológico visualmente.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.business,
          'infraestructura startups',
          'cloud para startups',
          'infraestructura escalable',
          'startup cloud stack',
          'infraestructura económica',
          'mvp infrastructure',
          'startup devops',
          'cloud startup español',
          'infraestructura inicial',
          'escalabilidad startup'
        ],
        canonical: '/soluciones/startups',
        ogImage: '/og-soluciones-startups.jpg',
        category: 'business',
        alternateLanguages: { 'en': '/solutions/startups', 'es': '/soluciones/startups' }
      }),

      enterprises: () => createMetadata({
        title: 'InfraUX Enterprise | Infraestructura Cloud Empresarial Avanzada',
        description: 'Solución enterprise para infraestructura cloud a gran escala. Governance, compliance, seguridad avanzada y soporte dedicado para empresas.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.business,
          'infraestructura enterprise',
          'cloud empresarial',
          'infraestructura gran escala',
          'enterprise cloud management',
          'governance infraestructura',
          'compliance empresarial',
          'seguridad enterprise',
          'soporte dedicado',
          'infraestructura corporativa',
          'enterprise devops'
        ],
        canonical: '/soluciones/empresas',
        ogImage: '/og-soluciones-empresas.jpg',
        category: 'business',
        alternateLanguages: { 'en': '/solutions/enterprises', 'es': '/soluciones/empresas' }
      }),

      devops: () => createMetadata({
        title: 'InfraUX para DevOps | Herramientas Visuales para Equipos DevOps',
        description: 'Revoluciona tu workflow DevOps con herramientas visuales. Acelera deployments, mejora colaboración y reduce errores en infraestructura.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.devops,
          'herramientas devops',
          'devops visual',
          'workflow devops',
          'automatización devops',
          'devops colaborativo',
          'herramientas infraestructura',
          'devops español',
          'visual devops tools',
          'devops automation',
          'infrastructure devops'
        ],
        canonical: '/soluciones/devops',
        ogImage: '/og-soluciones-devops.jpg',
        category: 'technology',
        alternateLanguages: { 'en': '/solutions/devops', 'es': '/soluciones/devops' }
      }),

      multiCloud: () => createMetadata({
        title: 'Multi-Cloud Management | InfraUX | Gestión Multi-Nube Unificada',
        description: 'Gestiona infraestructura en múltiples clouds desde una sola plataforma. AWS, Azure, GCP unificados con visibilidad y control centralizado.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.cloud,
          'multi-cloud management',
          'gestión multi-nube',
          'infraestructura multi-cloud',
          'aws azure gcp',
          'multi cloud español',
          'gestión nubes múltiples',
          'control multi-cloud',
          'visibilidad multi-cloud',
          'unified cloud management',
          'hybrid cloud'
        ],
        canonical: '/soluciones/multi-cloud',
        ogImage: '/og-soluciones-multi-cloud.jpg',
        category: 'technology',
        alternateLanguages: { 'en': '/solutions/multi-cloud', 'es': '/soluciones/multi-cloud' }
      })
    },

    business: {
      pricing: () => createMetadata({
        title: 'Precios InfraUX | Planes Transparentes sin Costos Ocultos',
        description: 'Planes de precios transparentes para InfraUX. Comienza gratis, escala según necesites. Sin costos ocultos, cancela cuando quieras.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.business,
          'precios infraux',
          'planes precios',
          'precios transparentes',
          'sin costos ocultos',
          'planes infraestructura',
          'precios cloud',
          'plan gratis',
          'pricing español',
          'costos infraestructura',
          'planes devops'
        ],
        canonical: '/precios',
        ogImage: '/og-precios.jpg',
        category: 'business',
        alternateLanguages: { 'en': '/pricing', 'es': '/precios' }
      }),

      company: () => createMetadata({
        title: 'Sobre InfraUX | Empresa Innovadora en Infraestructura Cloud',
        description: 'Conoce InfraUX y nuestro equipo. Democratizamos la infraestructura cloud con herramientas visuales innovadoras para desarrolladores y empresas.',
        keywords: [
          ...seoConfig.keywords.brand,
          'sobre infraux',
          'empresa infraux',
          'equipo infraux',
          'misión infraux',
          'visión infraux',
          'innovación cloud',
          'democratizar infraestructura',
          'about infraux español',
          'company infraux',
          'equipo desarrollo'
        ],
        canonical: '/empresa',
        ogImage: '/og-empresa.jpg',
        category: 'business',
        alternateLanguages: { 'en': '/company', 'es': '/empresa' }
      }),

      careers: () => createMetadata({
        title: 'Carreras en InfraUX | Únete al Futuro de la Infraestructura Cloud',
        description: 'Carreras en InfraUX. Únete a nuestro equipo y ayuda a construir el futuro de la infraestructura cloud. Oportunidades remotas y presenciales.',
        keywords: [
          ...seoConfig.keywords.brand,
          'carreras infraux',
          'empleos infraux',
          'trabajar infraux',
          'oportunidades laborales',
          'equipo infraux',
          'remote jobs',
          'tech careers',
          'cloud careers',
          'devops jobs',
          'infrastructure jobs',
          'startup careers'
        ],
        canonical: '/carreras',
        ogImage: '/og-carreras.jpg',
        category: 'business',
        alternateLanguages: { 'en': '/careers', 'es': '/carreras' }
      }),

      whatIs: () => createMetadata({
        title: '¿Qué es InfraUX? | Plataforma Visual de Infraestructura Cloud',
        description: 'Descubre qué es InfraUX y cómo revoluciona la gestión de infraestructura cloud. Herramientas visuales que simplifican DevOps y deployment.',
        keywords: [
          ...seoConfig.keywords.brand,
          ...seoConfig.keywords.features,
          'qué es infraux',
          'que es infraux',
          'infraux explicado',
          'plataforma infraestructura',
          'herramientas visuales',
          'explicación infraux',
          'introducción infraux',
          'overview infraux español',
          'infraux definition',
          'platform overview'
        ],
        canonical: '/que-es-infraux',
        ogImage: '/og-que-es-infraux.jpg',
        category: 'technology',
        alternateLanguages: { 'en': '/product', 'es': '/que-es-infraux' }
      })
    }
  },

  // === COMMUNITY PAGES ===
  community: () => createMetadata({
    title: 'InfraUX Community | Join 50,000+ DevOps Engineers & Cloud Architects',
    description: 'Join the global InfraUX community of DevOps engineers, cloud architects, and infrastructure professionals. Learn, share knowledge, attend events, and grow your career.',
    keywords: [
      ...seoConfig.keywords.brand,
      ...seoConfig.keywords.devops,
      'devops community',
      'cloud architects community',
      'infrastructure professionals',
      'devops networking',
      'cloud events',
      'infrastructure events',
      'devops career',
      'cloud professionals network',
      'technical community',
      'infrastructure learning',
      'devops knowledge sharing',
      'cloud best practices',
      'infrastructure mentorship'
    ],
    canonical: '/community',
    ogImage: '/og-community.jpg',
    category: 'community',
    alternateLanguages: { 'en': '/community', 'es': '/comunidad' }
  }),

  communitySpanish: () => createMetadata({
    title: 'Comunidad InfraUX | Únete a 50,000+ Ingenieros DevOps y Arquitectos Cloud',
    description: 'Únete a la comunidad global InfraUX de ingenieros DevOps, arquitectos cloud y profesionales de infraestructura. Aprende, comparte conocimiento y haz crecer tu carrera.',
    keywords: [
      ...seoConfig.keywords.brand,
      ...seoConfig.keywords.devops,
      'comunidad devops',
      'comunidad arquitectos cloud',
      'profesionales infraestructura',
      'networking devops',
      'eventos cloud',
      'eventos infraestructura',
      'carrera devops',
      'red profesionales cloud',
      'comunidad técnica',
      'aprendizaje infraestructura',
      'compartir conocimiento devops',
      'mejores prácticas cloud',
      'mentoría infraestructura'
    ],
    canonical: '/comunidad',
    ogImage: '/og-comunidad.jpg',
    category: 'community',
    alternateLanguages: { 'en': '/community', 'es': '/comunidad' }
  }),

  // === DEMO PAGES ===
  demos: () => createMetadata({
    title: 'InfraUX Demos | Interactive Cloud Infrastructure Tutorials & Live Examples',
    description: 'Explore InfraUX through interactive demos. See how our visual infrastructure platform works with live examples, tutorials, and hands-on demonstrations.',
    keywords: [
      ...seoConfig.keywords.brand,
      ...seoConfig.keywords.features,
      ...seoConfig.keywords.devops,
      'infrastructure demos',
      'cloud demos',
      'visual builder demo',
      'terraform generation demo',
      'interactive tutorials',
      'live examples',
      'hands-on demo',
      'infrastructure playground',
      'cloud playground'
    ],
    canonical: '/demos',
    ogImage: '/og-demos.jpg',
    category: 'demonstration',
    alternateLanguages: { 'en': '/demos', 'es': '/demos' }
  }),

  visualBuilderDemo: () => createMetadata({
    title: 'Visual Builder Demo | Drag & Drop Infrastructure Design | InfraUX',
    description: 'Experience our visual infrastructure builder. Drag and drop cloud components to design AWS, Azure, and GCP architectures with real-time Terraform generation.',
    keywords: [
      ...seoConfig.keywords.brand,
      ...seoConfig.keywords.features,
      'visual builder demo',
      'drag drop infrastructure',
      'infrastructure designer',
      'cloud architecture builder',
      'visual terraform',
      'infrastructure canvas',
      'cloud design tool'
    ],
    canonical: '/demos/visual-builder',
    ogImage: '/og-visual-builder-demo.jpg',
    category: 'demonstration',
    alternateLanguages: { 'en': '/demos/visual-builder', 'es': '/demos/visual-builder' }
  }),

  // === RESOURCE PAGES ===
  resources: () => createMetadata({
    title: 'Resources | Infrastructure Guides, Templates & Best Practices | InfraUX',
    description: 'Comprehensive resource center with infrastructure guides, Terraform templates, video tutorials, webinars, and best practices for cloud architecture and DevOps.',
    keywords: [
      ...seoConfig.keywords.brand,
      ...seoConfig.keywords.devops,
      ...seoConfig.keywords.cloud,
      'infrastructure resources',
      'devops guides',
      'terraform templates',
      'cloud best practices',
      'infrastructure tutorials',
      'devops documentation',
      'cloud architecture guides',
      'iac templates',
      'infrastructure patterns'
    ],
    canonical: '/resources',
    ogImage: '/og-resources.jpg',
    category: 'educational',
    alternateLanguages: { 'en': '/resources', 'es': '/recursos' }
  }),

  resourcesSpanish: () => createMetadata({
    title: 'Recursos | Guías de Infraestructura, Plantillas y Mejores Prácticas | InfraUX',
    description: 'Centro de recursos completo con guías de infraestructura, plantillas Terraform, tutoriales en video, webinars y mejores prácticas para arquitectura cloud y DevOps.',
    keywords: [
      ...seoConfig.keywords.brand,
      ...seoConfig.keywords.devops,
      ...seoConfig.keywords.cloud,
      'recursos infraestructura',
      'guías devops',
      'plantillas terraform',
      'mejores prácticas cloud',
      'tutoriales infraestructura',
      'documentación devops',
      'guías arquitectura cloud',
      'plantillas iac',
      'patrones infraestructura'
    ],
    canonical: '/recursos',
    ogImage: '/og-recursos.jpg',
    category: 'educational',
    alternateLanguages: { 'en': '/resources', 'es': '/recursos' }
  }),

  api: () => createMetadata({
    title: 'API Documentation | Automate Infrastructure with InfraUX REST API',
    description: 'Complete API reference for InfraUX platform. Integrate, automate, and extend infrastructure management with our RESTful API. Authentication, endpoints, examples.',
    keywords: [
      ...seoConfig.keywords.brand,
      ...seoConfig.keywords.devops,
      'infraux api',
      'rest api documentation',
      'infrastructure api',
      'automation api',
      'developer api',
      'api integration',
      'infrastructure automation',
      'api reference',
      'webhook api',
      'terraform api'
    ],
    canonical: '/api',
    ogImage: '/og-api.jpg',
    category: 'technical',
    alternateLanguages: { 'en': '/api', 'es': '/api' }
  }),

  // === AUTHENTICATION PAGES ===
  login: () => createMetadata({
    title: 'Sign In | Access Your InfraUX Dashboard | Secure Login',
    description: 'Sign in to your InfraUX account. Access your cloud infrastructure projects, manage deployments, and collaborate with your team securely.',
    keywords: [
      ...seoConfig.keywords.brand,
      'infraux login',
      'sign in',
      'dashboard access',
      'secure login',
      'account access',
      'infrastructure dashboard',
      'cloud platform login'
    ],
    canonical: '/login',
    ogImage: '/og-login.jpg',
    category: 'authentication'
  }),

  register: () => createMetadata({
    title: 'Sign Up Free | Start Your Cloud Infrastructure Journey | InfraUX',
    description: 'Create your free InfraUX account today. Start designing, deploying, and managing cloud infrastructure with our visual platform. No credit card required.',
    keywords: [
      ...seoConfig.keywords.brand,
      'infraux signup',
      'free account',
      'register',
      'create account',
      'free trial',
      'cloud platform signup',
      'infrastructure platform'
    ],
    canonical: '/register',
    ogImage: '/og-register.jpg',
    category: 'authentication'
  }),

  // Legal and policy pages
  legal: {
    privacyPolicy: () => createMetadata({
      title: 'Privacy Policy | InfraUX | Data Protection & Privacy Rights',
      description: 'InfraUX privacy policy. Learn how we collect, use, and protect your personal data. GDPR compliant data handling and your privacy rights.',
      keywords: [
        ...seoConfig.keywords.brand,
        'privacy policy',
        'data protection',
        'gdpr compliance',
        'personal data',
        'privacy rights',
        'data handling',
        'information security',
        'data processing',
        'user privacy',
        'data collection'
      ],
      canonical: '/privacy-policy',
      ogImage: '/og-privacy-policy.jpg',
      category: 'legal',
      alternateLanguages: { 'en': '/privacy-policy', 'es': '/politica-de-privacidad' }
    }),

    privacyPolicySpanish: () => createMetadata({
      title: 'Política de Privacidad | InfraUX | Protección de Datos Personales',
      description: 'Política de privacidad de InfraUX. Conoce cómo recopilamos, usamos y protegemos tus datos personales. Cumplimiento GDPR y derechos de privacidad.',
      keywords: [
        ...seoConfig.keywords.brand,
        'política de privacidad',
        'protección de datos',
        'cumplimiento gdpr',
        'datos personales',
        'derechos privacidad',
        'manejo de datos',
        'seguridad información',
        'procesamiento datos',
        'privacidad usuario',
        'recopilación datos'
      ],
      canonical: '/politica-de-privacidad',
      ogImage: '/og-politica-privacidad.jpg',
      category: 'legal',
      alternateLanguages: { 'en': '/privacy-policy', 'es': '/politica-de-privacidad' }
    }),

    termsConditions: () => createMetadata({
      title: 'Terms and Conditions | InfraUX | Service Agreement & User Terms',
      description: 'InfraUX terms and conditions. User agreement, service terms, acceptable use policy, and legal obligations for using our cloud infrastructure platform.',
      keywords: [
        ...seoConfig.keywords.brand,
        'terms and conditions',
        'user agreement',
        'service terms',
        'legal obligations',
        'acceptable use',
        'service agreement',
        'user terms',
        'platform terms',
        'usage policy',
        'legal terms'
      ],
      canonical: '/terms-and-conditions',
      ogImage: '/og-terms-conditions.jpg',
      category: 'legal',
      alternateLanguages: { 'en': '/terms-and-conditions', 'es': '/terminos-y-condiciones' }
    }),

    termsConditionsSpanish: () => createMetadata({
      title: 'Términos y Condiciones | InfraUX | Acuerdo de Servicio y Términos de Uso',
      description: 'Términos y condiciones de InfraUX. Acuerdo de usuario, términos de servicio, política de uso aceptable y obligaciones legales.',
      keywords: [
        ...seoConfig.keywords.brand,
        'términos y condiciones',
        'acuerdo usuario',
        'términos servicio',
        'obligaciones legales',
        'uso aceptable',
        'acuerdo servicio',
        'términos usuario',
        'términos plataforma',
        'política uso',
        'términos legales'
      ],
      canonical: '/terminos-y-condiciones',
      ogImage: '/og-terminos-condiciones.jpg',
      category: 'legal',
      alternateLanguages: { 'en': '/terms-and-conditions', 'es': '/terminos-y-condiciones' }
    }),

    refundPolicy: () => createMetadata({
      title: 'Refund Policy | InfraUX | Money-Back Guarantee & Cancellation Terms',
      description: 'InfraUX refund policy. 30-day money-back guarantee, cancellation terms, billing policies, and refund procedures for our cloud platform.',
      keywords: [
        ...seoConfig.keywords.brand,
        'refund policy',
        'money-back guarantee',
        'cancellation terms',
        'billing policy',
        'refund procedures',
        '30-day guarantee',
        'payment terms',
        'subscription cancellation',
        'refund process',
        'return policy'
      ],
      canonical: '/refund-policy',
      ogImage: '/og-refund-policy.jpg',
      category: 'legal'
    }),

    security: () => createMetadata({
      title: 'Security Center | InfraUX | Enterprise Security & Compliance Standards',
      description: 'InfraUX security center. SOC 2, ISO 27001, enterprise-grade security, data encryption, compliance standards, and security best practices.',
      keywords: [
        ...seoConfig.keywords.brand,
        'security center',
        'enterprise security',
        'soc 2 compliance',
        'iso 27001',
        'data encryption',
        'security standards',
        'compliance certifications',
        'security best practices',
        'enterprise grade',
        'security measures'
      ],
      canonical: '/security-center',
      ogImage: '/og-security-center.jpg',
      category: 'legal',
      alternateLanguages: { 'en': '/security-center', 'es': '/seguridad' }
    }),

    securitySpanish: () => createMetadata({
      title: 'Centro de Seguridad | InfraUX | Seguridad Empresarial y Estándares de Cumplimiento',
      description: 'Centro de seguridad InfraUX. SOC 2, ISO 27001, seguridad de nivel empresarial, encriptación de datos, estándares de cumplimiento.',
      keywords: [
        ...seoConfig.keywords.brand,
        'centro de seguridad',
        'seguridad empresarial',
        'cumplimiento soc 2',
        'iso 27001',
        'encriptación datos',
        'estándares seguridad',
        'certificaciones cumplimiento',
        'mejores prácticas seguridad',
        'nivel empresarial',
        'medidas seguridad'
      ],
      canonical: '/seguridad',
      ogImage: '/og-seguridad.jpg',
      category: 'legal',
      alternateLanguages: { 'en': '/security-center', 'es': '/seguridad' }
    })
  }
}

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `${seoConfig.domain}${item.url}`
  }))
})
