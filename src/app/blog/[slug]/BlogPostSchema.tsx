// Schema.org structured data for blog posts
export function generateBlogPostSchema(post: {
  title: string
  excerpt: string
  date: string
  author: {
    name: string
    role: string
  }
  tags: string[]
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
      "worksFor": {
        "@type": "Organization",
        "name": "InfraUX"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "InfraUX",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.infraux.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.infraux.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": "Technology",
    "inLanguage": "es-ES"
  }
}