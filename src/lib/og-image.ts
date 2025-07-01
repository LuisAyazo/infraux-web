// lib/og-image.ts - Open Graph image generation utilities

export interface OGImageConfig {
  title: string
  subtitle?: string
  category?: string
  gradient?: string
  icon?: string
}

export const ogImageCategories = {
  product: {
    gradient: 'from-blue-500 via-purple-500 to-indigo-600',
    defaultIcon: '🔧'
  },
  solutions: {
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    defaultIcon: '🚀'
  },
  content: {
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    defaultIcon: '📝'
  },
  utility: {
    gradient: 'from-gray-500 via-slate-500 to-zinc-600',
    defaultIcon: '⚙️'
  },
  company: {
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-600',
    defaultIcon: '🏢'
  },
  default: {
    gradient: 'from-slate-500 via-gray-500 to-zinc-600',
    defaultIcon: '✨'
  }
}

export const generateOGImageUrl = (config: OGImageConfig): string => {
  const baseUrl = 'https://infraux.com'
  const params = new URLSearchParams()
  
  params.set('title', config.title)
  if (config.subtitle) params.set('subtitle', config.subtitle)
  if (config.category) params.set('category', config.category)
  if (config.gradient) params.set('gradient', config.gradient)
  if (config.icon) params.set('icon', config.icon)
  
  return `${baseUrl}/api/og?${params.toString()}`
}

export const getPrebuiltOGImage = (category: keyof typeof ogImageCategories): string => {
  return `/og-${category}.jpg`
}

// Predefined OG images for main sections
export const ogImages = {
  homepage: '/og-homepage.jpg',
  pricing: '/og-pricing.jpg',
  company: '/og-company.jpg',
  contact: '/og-contact.jpg',
  careers: '/og-careers.jpg',
  partners: '/og-partners.jpg',
  press: '/og-press.jpg',
  securityCenter: '/og-security-center.jpg',
  sla: '/og-sla.jpg',
  
  // Product pages
  productEditor: '/og-product-editor.jpg',
  productDeployment: '/og-product-deployment.jpg',
  productSecurity: '/og-product-security.jpg',
  productIac: '/og-product-iac.jpg',
  productCollaboration: '/og-product-collaboration.jpg',
  productIntegrations: '/og-product-integrations.jpg',
  
  // Solutions pages
  solutionsStartups: '/og-solutions-startups.jpg',
  solutionsDevops: '/og-solutions-devops.jpg',
  solutionsEnterprises: '/og-solutions-enterprises.jpg',
  solutionsMulticloud: '/og-solutions-multicloud.jpg',
  
  // Content pages
  blog: '/og-blog.jpg',
  useCases: '/og-use-cases.jpg',
  testimonials: '/og-testimonials.jpg',
  demo: '/og-demo.jpg',
  
  // Utility pages
  documentation: '/og-documentation.jpg',
  changelog: '/og-changelog.jpg',
  roadmap: '/og-roadmap.jpg',
  comparison: '/og-comparison.jpg',
  tutorials: '/og-tutorials.jpg',
  freeTrial: '/og-free-trial.jpg',
  signup: '/og-signup.jpg',
  
  // Default fallback
  default: '/og-default.jpg'
}

// Helper to get the right OG image for a page
export const getOGImageForPage = (pagePath: string): string => {
  const pathMap: Record<string, string> = {
    '/': ogImages.homepage,
    '/pricing': ogImages.pricing,
    '/company': ogImages.company,
    '/contact': ogImages.contact,
    '/careers': ogImages.careers,
    '/partners': ogImages.partners,
    '/press': ogImages.press,
    '/security-center': ogImages.securityCenter,
    '/sla': ogImages.sla,
    
    // Product pages
    '/product/editor': ogImages.productEditor,
    '/product/deployment': ogImages.productDeployment,
    '/product/security': ogImages.productSecurity,
    '/product/iac': ogImages.productIac,
    '/product/collaboration': ogImages.productCollaboration,
    '/product/integrations': ogImages.productIntegrations,
    
    // Solutions pages
    '/solutions/startups': ogImages.solutionsStartups,
    '/solutions/devops': ogImages.solutionsDevops,
    '/solutions/enterprises': ogImages.solutionsEnterprises,
    '/solutions/multi-cloud': ogImages.solutionsMulticloud,
    
    // Content pages
    '/blog': ogImages.blog,
    '/use-cases': ogImages.useCases,
    '/testimonials': ogImages.testimonials,
    '/demo': ogImages.demo,
    
    // Utility pages
    '/documentation': ogImages.documentation,
    '/changelog': ogImages.changelog,
    '/roadmap': ogImages.roadmap,
    '/comparacion': ogImages.comparison,
    '/tutoriales': ogImages.tutorials,
    '/prueba-gratis': ogImages.freeTrial,
    '/registro': ogImages.signup,
  }
  
  return pathMap[pagePath] || ogImages.default
}

// Twitter Card specific images (1.91:1 ratio)
export const twitterImages = {
  homepage: '/twitter-homepage.jpg',
  pricing: '/twitter-pricing.jpg',
  product: '/twitter-product.jpg',
  solutions: '/twitter-solutions.jpg',
  content: '/twitter-content.jpg',
  utility: '/twitter-utility.jpg',
  default: '/twitter-default.jpg'
}

export const getTwitterImageForPage = (pagePath: string): string => {
  if (pagePath === '/') return twitterImages.homepage
  if (pagePath === '/pricing') return twitterImages.pricing
  if (pagePath.startsWith('/product/')) return twitterImages.product
  if (pagePath.startsWith('/solutions/')) return twitterImages.solutions
  if (['/blog', '/use-cases', '/testimonials', '/demo'].includes(pagePath)) return twitterImages.content
  if (['/documentation', '/changelog', '/roadmap', '/comparacion', '/tutoriales'].includes(pagePath)) return twitterImages.utility
  
  return twitterImages.default
}
