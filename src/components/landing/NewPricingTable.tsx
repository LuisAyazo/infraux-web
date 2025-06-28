'use client';

import React, { useState } from 'react';
import {
  CheckIcon,
  XMarkIcon,
  SparklesIcon,
  InformationCircleIcon,
  FireIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

// --- TYPES ---

type PlanMeta = {
  name: string;
  icon: React.ElementType;
  price: string;
  period: string;
  description: string;
  cta: string;
  ctaLink: string;
  featured: boolean;
};

type Feature = {
  name: string;
  tooltip?: string;
  plans: {
    free: string | boolean;
    pro: string | boolean;
    business: string | boolean;
    enterprise: string | boolean;
  };
};

type FeatureCategory = {
  category: string;
  features: Feature[];
};

type FAQ = {
  question: string;
  answer: string;
};

type Translations = {
  header: {
    title: string;
    subtitle: string;
    badge: string;
  };
  plansMeta: {
    free: PlanMeta;
    pro: PlanMeta;
    business: PlanMeta;
    enterprise: PlanMeta;
  };
  pricingData: FeatureCategory[];
  faqs: {
    title: string;
    subtitle: string;
    badge: string;
    items: FAQ[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    badge: string;
    cta_main: string;
    cta_secondary: string;
  };
};

interface NewPricingTableProps {
  translations: Translations;
}

// --- HELPER COMPONENTS ---

function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex items-center">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {show && (
        <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-sm font-medium text-white bg-slate-800 rounded-lg shadow-lg whitespace-nowrap max-w-xs">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800" />
        </div>
      )}
    </div>
  );
}

function FeatureCell({ value }: { value: string | boolean | undefined }) {
  if (value === undefined) {
    return <span className="text-sm text-slate-400">-</span>;
  }
  if (typeof value === 'boolean') {
    return value ? (
      <CheckIcon className="h-6 w-6 text-emerald-500" />
    ) : (
      <XMarkIcon className="h-6 w-6 text-slate-400" />
    );
  }
  return <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{value}</span>;
}

// --- MAIN COMPONENT ---

export default function NewPricingTable({ translations }: NewPricingTableProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { header, plansMeta, pricingData, faqs, finalCta } = translations;

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 mb-6">
          <SparklesIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            {header.badge}
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4" dangerouslySetInnerHTML={{ __html: header.title }} />
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {header.subtitle}
        </p>
      </div>

      {/* Pricing Table */}
      <div className="overflow-x-auto mb-32">
        <div className="min-w-full align-middle">
          <table className="min-w-full border-separate border-spacing-0">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="sticky top-0 z-10 hidden lg:table-cell w-1/4 p-4 bg-white dark:bg-slate-900"></th>
                {Object.values(plansMeta).map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className={`sticky top-0 z-10 w-1/5 p-4 lg:p-6 bg-white dark:bg-slate-900 ${
                      plan.featured ? 'border-2 border-emerald-500 rounded-t-2xl' : 'border-b border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className={`flex items-center justify-center h-12 w-12 rounded-xl ${plan.featured ? 'bg-emerald-500' : 'bg-slate-100 dark:bg-slate-800'}`}>
                        <plan.icon className={`h-7 w-7 ${plan.featured ? 'text-white' : 'text-emerald-500'}`} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                      <div className="text-center">
                        <p className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{plan.period}</p>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 min-h-[5rem]">{plan.description}</p>
                      <Link href={plan.ctaLink} className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                        plan.featured ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                      }`}>
                        {plan.cta}
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {pricingData.map(({ category, features }) => (
                <React.Fragment key={category}>
                  <tr>
                    <th
                      colSpan={5}
                      scope="colgroup"
                      className="py-4 px-4 text-left text-lg font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/50"
                    >
                      {category}
                    </th>
                  </tr>
                  {features.map((feature) => (
                    <tr key={feature.name}>
                      <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                          <span>{feature.name}</span>
                          {feature.tooltip && (
                            <Tooltip content={feature.tooltip}>
                              <InformationCircleIcon className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                            </Tooltip>
                          )}
                        </div>
                      </td>
                      {Object.keys(plansMeta).map((planKey) => {
                        const plan = plansMeta[planKey as keyof typeof plansMeta];
                        if (!plan) return null;
                        return (
                          <td
                            key={planKey}
                            className={`p-4 text-center border-b border-slate-200 dark:border-slate-800 ${
                              plan.featured ? 'border-x-2 border-emerald-500 bg-emerald-50/30 dark:bg-emerald-900/10' : ''
                            }`}
                          >
                            <div className="flex justify-center items-center">
                              <FeatureCell value={feature.plans[planKey as keyof typeof feature.plans]} />
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
               <tr>
                <td className="p-4"></td>
                {Object.values(plansMeta).map((plan) => {
                  if (!plan) return null;
                  return (
                    <td key={plan.name} className={`p-4 ${plan.featured ? 'border-x-2 border-b-2 border-emerald-500 rounded-b-2xl' : ''}`}>
                      <Link href={plan.ctaLink} className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                         plan.featured ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                       }`}>
                         {plan.cta}
                       </Link>
                   </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto mb-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
            <QuestionMarkCircleIcon className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {faqs.badge}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
            {faqs.title}
          </h2>
           <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4">
            {faqs.subtitle}
          </p>
        </div>
        <div className="space-y-4">
          {faqs.items.map((faq, index) => (
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

      {/* Final CTA */}
      <div className="relative py-20 px-8 lg:px-16 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-3xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
            <ShieldCheckIcon className="h-5 w-5 text-emerald-500" />
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
              {finalCta.badge}
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6" dangerouslySetInnerHTML={{ __html: finalCta.title }} />
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-4xl mx-auto font-medium">
            {finalCta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/registro" className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300">
              <span className="relative z-10">{finalCta.cta_main}</span>
              <ArrowRightIcon className="relative z-10 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300">
              <ChatBubbleLeftRightIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              {finalCta.cta_secondary}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}