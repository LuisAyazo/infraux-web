'use client';

interface Testimonial {
  quote: string | React.ReactNode;
  author: string;
  role: string;
  rating: number;
  company?: string;
  date?: string;
}

interface TestimonialSchemaProps {
  testimonials: Testimonial[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export default function TestimonialSchema({ 
  testimonials, 
  aggregateRating = { ratingValue: 4.9, reviewCount: 127 }
}: TestimonialSchemaProps) {
  // Convertir quotes de React.ReactNode a string para el schema
  const schemaTestimonials = testimonials.map(testimonial => {
    const quoteText = typeof testimonial.quote === 'string' 
      ? testimonial.quote 
      : 'InfraUX ha transformado completamente nuestra forma de trabajar con infraestructura cloud.';
    
    return {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.author,
        "jobTitle": testimonial.role.split(',')[0], // Tomar solo el título
        "worksFor": {
          "@type": "Organization",
          "name": testimonial.company || testimonial.role.split(',')[1]?.trim() || "Tech Company"
        }
      },
      "reviewBody": quoteText,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "datePublished": testimonial.date || new Date().toISOString().split('T')[0],
      "itemReviewed": {
        "@type": "SoftwareApplication",
        "name": "InfraUX",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web Browser"
      }
    };
  });

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "InfraUX",
    "description": "Plataforma visual para diseñar y desplegar infraestructura cloud",
    "brand": {
      "@type": "Brand",
      "name": "InfraUX"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": schemaTestimonials
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewSchema),
      }}
    />
  );
}

// Componente visual mejorado para testimonios
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1 mb-4" aria-label={`Calificación: ${rating} de 5 estrellas`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <figure className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700/50 flex flex-col hover:shadow-2xl transition-shadow duration-300">
      {renderStars(testimonial.rating)}
      <blockquote className="text-slate-700 dark:text-slate-300 mb-6 flex-grow">
        <svg
          className="h-10 w-10 text-emerald-500 dark:text-emerald-400 mb-4 opacity-75"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="italic text-lg leading-relaxed">
          {typeof testimonial.quote === 'string' ? (
            `"${testimonial.quote}"`
          ) : (
            <span>&ldquo;{testimonial.quote}&rdquo;</span>
          )}
        </p>
      </blockquote>
      <figcaption className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {testimonial.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

// Hook para cargar testimonios dinámicamente
export function useTestimonials() {
  // En el futuro, esto podría cargar testimonios desde una API
  const testimonials: Testimonial[] = [
    {
      quote: "InfraUX ha revolucionado nuestra gestión de infraestructura. Lo que antes tomaba días, ahora se completa en minutos.",
      author: "Elena Rivas",
      role: "Lead DevOps Architect, NovaTech Solutions",
      rating: 5,
      date: "2024-12-15"
    },
    {
      quote: "La capacidad de visualizar y generar código IaC al instante nos ha ahorrado incontables horas y ha minimizado errores críticos.",
      author: "Javier Morales",
      role: "CTO, Quantum Leap AI",
      rating: 5,
      date: "2024-12-20"
    },
    {
      quote: "Desde que implementamos InfraUX, la colaboración entre nuestros equipos de desarrollo y operaciones ha mejorado drásticamente.",
      author: "Sofia Chen",
      role: "Cloud Operations Manager, Apex Digital",
      rating: 5,
      date: "2024-12-25"
    }
  ];

  return testimonials;
}