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
  }
}

// Helper functions
export const generateOGImageUrl = (title: string, category: string = 'default'): string => {
  return `/og-${category}.jpg`
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
