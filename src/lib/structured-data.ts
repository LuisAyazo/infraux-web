export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "InfraUX",
  "alternateName": "InfraUX Cloud Infrastructure Platform",
  "url": "https://www.infraux.com",
  "logo": "https://www.infraux.com/logo-infraux-purple.svg",
  "description": "Create, visualize, and deploy cloud infrastructure with InfraUX. Supports GCP, AWS, Azure, and integrates with Terraform, Pulumi, Ansible, and CloudFormation for seamless IaC workflows.",
  "foundingDate": "2024",
  "sameAs": [
    "https://twitter.com/InfraUX",
    "https://linkedin.com/company/infraux",
    "https://github.com/infraux"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CO",
    "addressLocality": "Bogotá"
  }
}

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "InfraUX",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "applicationSubCategory": "Cloud Infrastructure Management",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "priceValidUntil": "2025-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  },
  "description": "Visual cloud infrastructure management platform that supports GCP, AWS, Azure with Terraform, Pulumi, Ansible, and CloudFormation integration.",
  "screenshot": "https://www.infraux.com/screenshot.png",
  "softwareVersion": "1.0",
  "datePublished": "2024-01-01",
  "creator": {
    "@type": "Organization",
    "name": "InfraUX Team"
  },
  "featureList": [
    "Visual Infrastructure Design",
    "Multi-Cloud Support (GCP, AWS, Azure)",
    "IaC Generation (Terraform, Pulumi)",
    "Real-time Collaboration",
    "Automated Deployment",
    "Cost Optimization"
  ]
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es InfraUX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "InfraUX es una plataforma visual para diseñar, crear y gestionar infraestructura en la nube. Permite crear diagramas intuitivos que se transforman automáticamente en código Infrastructure as Code (IaC) para GCP, AWS y Azure."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué clouds soporta InfraUX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "InfraUX soporta los principales proveedores de nube: Google Cloud Platform (GCP), Amazon Web Services (AWS), y Microsoft Azure."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué herramientas IaC son compatibles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "InfraUX es compatible con Terraform, Pulumi, Ansible, y CloudFormation, permitiendo exportar tu infraestructura al formato que prefieras."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratuito InfraUX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "InfraUX ofrece un plan gratuito para proyectos personales y pequeños equipos, así como planes premium para empresas con funcionalidades avanzadas."
      }
    }
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "InfraUX",
  "url": "https://www.infraux.com",
  "description": "Plataforma visual para diseñar y desplegar infraestructura cloud sin esfuerzo",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.infraux.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://www.infraux.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Productos",
      "item": "https://www.infraux.com/#what-is-infraux"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Precios",
      "item": "https://www.infraux.com/#pricing"
    }
  ]
}
