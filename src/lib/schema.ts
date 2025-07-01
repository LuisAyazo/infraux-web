// lib/schema.ts - Schema.org structured data helpers

interface OrganizationSchema {
  "@context": "https://schema.org"
  "@type": "Organization"
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
  contactPoint: {
    "@type": "ContactPoint"
    telephone?: string
    contactType: string
    email?: string
  }
  address?: {
    "@type": "PostalAddress"
    addressCountry: string
    addressRegion?: string
    addressLocality?: string
  }
}

interface ProductSchema {
  "@context": "https://schema.org"
  "@type": "SoftwareApplication"
  name: string
  description: string
  url: string
  applicationCategory: string
  operatingSystem: string
  offers: {
    "@type": "Offer"
    price: string
    priceCurrency: string
    priceValidUntil?: string
    availability: string
  }
  aggregateRating?: {
    "@type": "AggregateRating"
    ratingValue: number
    reviewCount: number
    bestRating: number
    worstRating: number
  }
  author: {
    "@type": "Organization"
    name: string
    url: string
  }
}

interface BreadcrumbSchema {
  "@context": "https://schema.org"
  "@type": "BreadcrumbList"
  itemListElement: Array<{
    "@type": "ListItem"
    position: number
    name: string
    item: string
  }>
}

interface WebsiteSchema {
  "@context": "https://schema.org"
  "@type": "WebSite"
  name: string
  url: string
  description: string
  potentialAction: {
    "@type": "SearchAction"
    target: {
      "@type": "EntryPoint"
      urlTemplate: string
    }
    "query-input": string
  }
}

interface ArticleSchema {
  "@context": "https://schema.org"
  "@type": "Article"
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  author: {
    "@type": "Organization"
    name: string
    url: string
  }
  publisher: {
    "@type": "Organization"
    name: string
    url: string
    logo: {
      "@type": "ImageObject"
      url: string
    }
  }
  mainEntityOfPage: {
    "@type": "WebPage"
    "@id": string
  }
}

export const createOrganizationSchema = (): OrganizationSchema => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InfraUX",
  url: "https://infraux.com",
  logo: "https://infraux.com/logo.png",
  description: "Visual infrastructure management platform for cloud environments. Design, deploy, and manage AWS, Azure, and GCP infrastructure with an intuitive drag-and-drop editor.",
  sameAs: [
    "https://twitter.com/infraux",
    "https://linkedin.com/company/infraux",
    "https://github.com/infraux"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "support@infraux.com"
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US"
  }
})

export const createProductSchema = (): ProductSchema => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "InfraUX",
  description: "Visual infrastructure management platform for designing, deploying, and managing cloud infrastructure across AWS, Azure, and GCP with drag-and-drop simplicity.",
  url: "https://infraux.com",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 127,
    bestRating: 5,
    worstRating: 1
  },
  author: {
    "@type": "Organization",
    name: "InfraUX",
    url: "https://infraux.com"
  }
})

export const createWebsiteSchema = (): WebsiteSchema => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "InfraUX",
  url: "https://infraux.com",
  description: "Visual infrastructure management platform for cloud environments",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://infraux.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
})

export const createBreadcrumbSchema = (items: Array<{name: string, url: string}>): BreadcrumbSchema => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://infraux.com${item.url}`
  }))
})

export const createArticleSchema = (params: {
  title: string
  description: string
  url: string
  publishedDate: string
  modifiedDate: string
}): ArticleSchema => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: params.title,
  description: params.description,
  url: `https://infraux.com${params.url}`,
  datePublished: params.publishedDate,
  dateModified: params.modifiedDate,
  author: {
    "@type": "Organization",
    name: "InfraUX",
    url: "https://infraux.com"
  },
  publisher: {
    "@type": "Organization",
    name: "InfraUX",
    url: "https://infraux.com",
    logo: {
      "@type": "ImageObject",
      url: "https://infraux.com/logo.png"
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://infraux.com${params.url}`
  }
})

// Helper to generate schema JSON string for injection
export const generateSchemaScript = (schema: any): string => {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
}
