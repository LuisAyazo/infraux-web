'use client';

import React, { useState } from 'react';
import {
  QuestionMarkCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';

// FAQ Schema component for better SEO
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function FAQSchema({ 
  faqs, 
  title = "Got Questions? We Have Answers",
  subtitle = "Find answers to common questions about our platform",
  badge = "Frequently Asked Questions"
}: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <FAQSection 
        faqs={faqs} 
        title={title}
        subtitle={subtitle}
        badge={badge}
      />
    </>
  );
}

// Visual FAQ Component
function FAQSection({ 
  faqs, 
  title,
  subtitle,
  badge
}: { 
  faqs: FAQItem[];
  title: string;
  subtitle: string;
  badge: string;
}) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto mb-32">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
          <QuestionMarkCircleIcon className="h-5 w-5 text-emerald-500" />
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            {badge}
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all duration-300">
            <button
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <span className="font-bold text-lg text-slate-900 dark:text-white pr-8">
                {faq.question}
              </span>
              <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                <ChevronDownIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${expandedFaq === index ? 'max-h-96' : 'max-h-0'}`}>
              <div className="px-8 pb-6">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}