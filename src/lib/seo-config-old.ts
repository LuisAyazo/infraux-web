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

  // Product pages metadata
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
      title: 'InfraUX Blog | Cloud Infrastructure Insights & DevOps Best Practices',
      description: 'Latest insights on cloud infrastructure, DevOps best practices, tutorials, and industry trends. Learn how to build scalable, secure, and cost-effective infrastructure.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'infrastructure blog',
        'devops blog',
        'cloud infrastructure tutorials',
        'infrastructure best practices',
        'devops insights',
        'cloud architecture blog',
        'infrastructure guides',
        'devops tutorials'
      ],
      canonical: '/blog',
      ogImage: '/og-blog.jpg',
      alternateLanguages: { 'en': '/blog', 'es': '/blog' }
    }),

    blogPost: (title: string, description: string, slug: string) => createMetadata({
      title: `${title} | InfraUX Blog`,
      description: description,
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'infrastructure tutorial',
        'devops guide',
        'cloud best practices'
      ],
      canonical: `/blog/${slug}`,
      ogImage: `/og-blog-${slug}.jpg`,
      category: 'article'
    }),

    resources: () => createMetadata({
      title: 'Infrastructure Resources | Guides, Templates & Best Practices | InfraUX',
      description: 'Free infrastructure resources, templates, guides, and best practices. Download Terraform modules, architecture templates, and DevOps checklists.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'infrastructure resources',
        'terraform templates',
        'architecture templates',
        'devops guides',
        'infrastructure best practices',
        'free resources',
        'infrastructure checklists',
        'cloud templates'
      ],
      canonical: '/resources',
      ogImage: '/og-resources.jpg',
      alternateLanguages: { 'en': '/resources', 'es': '/recursos' }
    }),

    tutorials: () => createMetadata({
      title: 'Infrastructure Tutorials | Learn Cloud Architecture & DevOps | InfraUX',
      description: 'Step-by-step infrastructure tutorials. Learn cloud architecture, DevOps practices, and how to use InfraUX to build scalable infrastructure.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.devops,
        'infrastructure tutorials',
        'cloud architecture tutorials',
        'devops tutorials',
        'learn infrastructure',
        'cloud tutorials',
        'step by step guides',
        'infrastructure training'
      ],
      canonical: '/tutorials',
      ogImage: '/og-tutorials.jpg',
      alternateLanguages: { 'en': '/tutorials', 'es': '/tutoriales' }
    }),

    useCases: () => createMetadata({
      title: 'Infrastructure Use Cases | Real-World Architecture Examples | InfraUX',
      description: 'Explore real-world infrastructure use cases and architecture examples. See how companies use InfraUX to solve complex infrastructure challenges.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.business,
        'infrastructure use cases',
        'architecture examples',
        'real world infrastructure',
        'infrastructure case studies',
        'cloud architecture examples',
        'devops use cases',
        'infrastructure patterns'
      ],
      canonical: '/use-cases',
      ogImage: '/og-use-cases.jpg',
      alternateLanguages: { 'en': '/use-cases', 'es': '/casos-de-uso' }
    }),

    testimonials: () => createMetadata({
      title: 'Customer Testimonials | InfraUX Success Stories | DevOps Reviews',
      description: 'Read what DevOps teams and infrastructure engineers say about InfraUX. Real testimonials from customers who transformed their infrastructure management.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.business,
        'infraux testimonials',
        'customer reviews',
        'devops testimonials',
        'infrastructure success stories',
        'customer feedback',
        'user reviews',
        'infrastructure testimonials'
      ],
      canonical: '/testimonials',
      ogImage: '/og-testimonials.jpg',
      alternateLanguages: { 'en': '/testimonials', 'es': '/testimonios' }
    }),

    successStories: () => createMetadata({
      title: 'Customer Success Stories | How Teams Scale with InfraUX',
      description: 'Discover how engineering teams use InfraUX to scale their infrastructure, reduce costs, and accelerate deployment cycles. Real success stories and case studies.',
      keywords: [
        ...seoConfig.keywords.brand,
        ...seoConfig.keywords.business,
        'success stories',
        'customer case studies',
        'infrastructure success',
        'scaling infrastructure',
        'devops transformation',
        'infrastructure roi',
        'customer results'
      ],
      canonical: '/success-stories',
      ogImage: '/og-success-stories.jpg',
      alternateLanguages: { 'en': '/success-stories', 'es': '/casos-exito' }
    })
  },

  // Utility pages metadata
  legal: {
    terms: () => createMetadata({
      title: 'Terms and Conditions | InfraUX Legal Terms of Service',
      description: 'InfraUX Terms and Conditions of Service. Legal terms, user agreement, and service conditions for using the InfraUX platform.',
      keywords: [
        ...seoConfig.keywords.brand,
        'terms and conditions',
        'terms of service',
        'user agreement',
        'legal terms',
        'service terms'
      ],
      canonical: '/terms-and-conditions',
      ogImage: '/og-legal.jpg',
      alternateLanguages: { 'en': '/terms-and-conditions', 'es': '/terminos-y-condiciones' }
    }),

    privacy: () => createMetadata({
      title: 'Privacy Policy | How InfraUX Protects Your Data',
      description: 'InfraUX Privacy Policy. Learn how we collect, use, and protect your data. GDPR compliant data handling and privacy practices.',
      keywords: [
        ...seoConfig.keywords.brand,
        'privacy policy',
        'data protection',
        'gdpr compliance',
        'data privacy',
        'user privacy'
      ],
      canonical: '/privacy-policy',
      ogImage: '/og-legal.jpg',
      alternateLanguages: { 'en': '/privacy-policy', 'es': '/politica-de-privacidad' }
    })
  }
}

// Helper function to generate dynamic OG image URLs
export const generateOGImageUrl = (title: string, category: string = 'default'): string => {
  // For now, return static images, but this can be extended to dynamic generation
  return `/og-${category}.jpg`
}

// Helper function for breadcrumb schema
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
