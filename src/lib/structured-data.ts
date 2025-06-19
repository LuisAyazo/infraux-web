// Structured data schemas for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "InfraUX",
  "alternateName": "InfraUX Cloud Infrastructure Platform",
  "url": "https://www.infraux.com",
  "logo": "https://www.infraux.com/logo-infraux-purple.svg",
  "description": "InfraUX es una plataforma visual para diseñar, gestionar y desplegar infraestructura cloud en AWS, GCP y Azure sin escribir código.",
  "foundingDate": "2024",
  "founders": [
    {
      "@type": "Person",
      "name": "Carlos Rodríguez"
    },
    {
      "@type": "Person", 
      "name": "Ana Martínez"
    },
    {
      "@type": "Person",
      "name": "Luis Chen"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Market Street, Suite 400",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-415-555-0123",
      "contactType": "sales",
      "areaServed": "US",
      "availableLanguage": ["English", "Spanish"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+52-55-5555-0123",
      "contactType": "sales",
      "areaServed": "MX",
      "availableLanguage": "Spanish"
    }
  ],
  "sameAs": [
    "https://twitter.com/InfraUX",
    "https://www.linkedin.com/company/infraux",
    "https://github.com/infraux",
    "https://www.youtube.com/@infraux"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "InfraUX",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "0",
    "highPrice": "99",
    "priceCurrency": "USD",
    "offerCount": "5",
    "offers": [
      {
        "@type": "Offer",
        "name": "Hobby",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Plan gratuito para proyectos personales"
      },
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "19",
        "priceCurrency": "USD",
        "description": "Para desarrolladores independientes"
      },
      {
        "@type": "Offer",
        "name": "Team",
        "price": "49",
        "priceCurrency": "USD",
        "description": "Para equipos que necesitan colaborar"
      },
      {
        "@type": "Offer",
        "name": "Business",
        "price": "99",
        "priceCurrency": "USD",
        "description": "Para empresas con necesidades avanzadas"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "500"
  },
  "screenshot": "https://www.infraux.com/screenshots/dashboard.png",
  "featureList": [
    "Diseño visual de infraestructura drag & drop",
    "Generación automática de código Terraform",
    "Soporte multi-cloud (AWS, GCP, Azure)",
    "Colaboración en tiempo real",
    "Análisis de costos integrado",
    "Validación en tiempo real",
    "Templates predefinidos",
    "Control de versiones integrado"
  ],
  "softwareVersion": "2.0",
  "datePublished": "2025-01-01",
  "dateModified": "2025-06-19"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "InfraUX",
  "url": "https://www.infraux.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.infraux.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "InfraUX",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.infraux.com/logo-infraux-purple.svg"
    }
  }
};

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
      "item": "https://www.infraux.com/que-es-infraux"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Precios",
      "item": "https://www.infraux.com/precios"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es InfraUX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "InfraUX es una plataforma visual que permite diseñar, gestionar y desplegar infraestructura cloud en AWS, GCP y Azure sin necesidad de escribir código. Convierte diagramas en código Terraform automáticamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta InfraUX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "InfraUX ofrece un plan gratuito para proyectos personales. Los planes de pago comienzan desde $19/mes para desarrolladores independientes, $49/usuario/mes para equipos, y planes enterprise personalizados."
      }
    },
    {
      "@type": "Question",
      "name": "¿InfraUX reemplaza a Terraform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, InfraUX complementa a Terraform. Genera código Terraform optimizado y compatible que puedes usar con tus flujos de trabajo existentes. Es una capa visual sobre las herramientas IaC tradicionales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué clouds soporta InfraUX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "InfraUX soporta los tres principales proveedores cloud: Amazon Web Services (AWS), Google Cloud Platform (GCP) y Microsoft Azure. Puedes gestionar recursos en múltiples clouds desde una sola interfaz."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo importar mi infraestructura existente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, InfraUX puede importar tu infraestructura existente desde AWS, GCP o Azure, así como desde archivos Terraform existentes. Esto te permite visualizar y gestionar recursos ya desplegados."
      }
    }
  ]
};

// Product schema for pricing page
export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "InfraUX Platform",
  "description": "Plataforma visual para gestión de infraestructura cloud",
  "brand": {
    "@type": "Brand",
    "name": "InfraUX"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Hobby",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.infraux.com/precios",
      "description": "Plan gratuito para proyectos personales"
    },
    {
      "@type": "Offer",
      "name": "Starter",
      "price": "19",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.infraux.com/precios",
      "description": "Para desarrolladores independientes y freelancers"
    },
    {
      "@type": "Offer",
      "name": "Team",
      "price": "49",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.infraux.com/precios",
      "description": "Para equipos que necesitan colaborar",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "49",
        "priceCurrency": "USD",
        "unitText": "usuario/mes"
      }
    },
    {
      "@type": "Offer",
      "name": "Business",
      "price": "99",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.infraux.com/precios",
      "description": "Para empresas con necesidades avanzadas",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "99",
        "priceCurrency": "USD",
        "unitText": "usuario/mes"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Carlos Mendoza"
      },
      "reviewBody": "InfraUX transformó completamente nuestra forma de trabajar. Pasamos de 3 semanas a 3 días para configurar nuevos ambientes."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ana García"
      },
      "reviewBody": "Como CTO, necesitaba una herramienta que permitiera a todo mi equipo entender y contribuir a nuestra infraestructura. InfraUX cumplió perfectamente."
    }
  ]
};

// Course schema for resources
export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "InfraUX: De Cero a Experto",
  "description": "Curso completo para dominar InfraUX y la gestión visual de infraestructura cloud",
  "provider": {
    "@type": "Organization",
    "name": "InfraUX",
    "sameAs": "https://www.infraux.com"
  },
  "educationalCredentialAwarded": "Certificado InfraUX Professional",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "duration": "PT8H",
    "inLanguage": "es"
  }
};

// Local business schema for contact page
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "InfraUX Headquarters",
  "image": "https://www.infraux.com/office.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Market Street, Suite 400",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "url": "https://www.infraux.com",
  "telephone": "+1-415-555-0123",
  "priceRange": "$0 - $99",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};
