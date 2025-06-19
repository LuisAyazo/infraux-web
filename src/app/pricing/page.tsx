'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import { 
  CheckIcon,
  XMarkIcon,
  ArrowRightIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  InformationCircleIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  DocumentArrowDownIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  DocumentTextIcon,
  BeakerIcon,
  PuzzlePieceIcon,
  LockClosedIcon,
  GlobeAsiaAustraliaIcon,
  FireIcon,
  CubeIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

// Tooltip Component
function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="cursor-help"
      >
        {children}
      </div>
      {show && (
        <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-sm text-white bg-slate-900 dark:bg-slate-700 rounded-lg whitespace-nowrap max-w-xs">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-900 dark:border-t-slate-700" />
        </div>
      )}
    </div>
  );
}

// Type for features
type FeatureValue = {
  value: string | boolean;
  included: boolean;
  tooltip?: string;
};

const plans = [
  {
    name: 'Hobby',
    price: 0,
    period: '',
    description: 'Perfect for personal projects and learning',
    icon: RocketLaunchIcon,
    features: {
      'Active projects': { value: '1', included: true },
      'Users': { value: '1', included: true },
      'Diagrams per project': { value: '3', included: true },
      'Export diagrams': { value: 'PNG only', included: true },
      'Templates': { value: '5 basic', included: true },
      'Version history': { value: false, included: false },
      'Collaboration': { value: false, included: false },
      'Environments': { value: '1 (production)', included: true },
      'Integrations': { value: false, included: false },
      'API': { value: false, included: false },
      'Support': { value: 'Discord community', included: true },
      'Backup': { value: false, included: false }
    } as Record<string, FeatureValue>,
    highlights: [
      'Start free, no card required',
      'Ideal for learning',
      'Active community'
    ],
    cta: 'Start free',
    ctaLink: '/register',
    featured: false
  },
  {
    name: 'Starter',
    price: 19,
    period: '/month',
    description: 'For independent developers and freelancers',
    icon: UserGroupIcon,
    features: {
      'Active projects': { value: '5', included: true },
      'Users': { value: '1', included: true },
      'Diagrams per project': { value: 'Unlimited', included: true },
      'Export diagrams': { value: 'PNG, SVG, PDF', included: true },
      'Templates': { value: '50+ premium', included: true },
      'Version history': { value: '30 days', included: true },
      'Collaboration': { value: false, included: false },
      'Environments': { value: '2 (dev, prod)', included: true },
      'Integrations': { value: 'GitHub', included: true },
      'API': { value: 'Basic', included: true, tooltip: 'REST API with 1000 calls/month limit' },
      'Support': { value: 'Email (48h)', included: true },
      'Backup': { value: 'Daily', included: true }
    } as Record<string, FeatureValue>,
    highlights: [
      'Full export options',
      'Premium templates',
      'Change history'
    ],
    cta: 'Try 7 days free',
    ctaLink: '/register?plan=starter',
    featured: false
  },
  {
    name: 'Team',
    price: 49,
    period: '/user/month',
    description: 'For teams that need to collaborate',
    icon: UserGroupIcon,
    features: {
      'Active projects': { value: 'Unlimited', included: true },
      'Users': { value: 'Up to 10', included: true },
      'Diagrams per project': { value: 'Unlimited', included: true },
      'Export diagrams': { value: 'All formats', included: true },
      'Templates': { value: 'All + custom', included: true },
      'Version history': { value: 'Unlimited', included: true },
      'Collaboration': { value: 'Real-time', included: true, tooltip: 'Simultaneous editing with live cursors' },
      'Environments': { value: '3 (dev, staging, prod)', included: true, tooltip: 'Manage multiple environments from one place' },
      'Integrations': { value: 'GitHub, GitLab, Slack', included: true },
      'API': { value: 'Complete', included: true, tooltip: 'REST API without limits + webhooks' },
      'Support': { value: 'Priority (24h)', included: true },
      'Backup': { value: 'Continuous', included: true }
    } as Record<string, FeatureValue>,
    highlights: [
      'Real-time collaboration',
      'Cost analysis included',
      'Priority support'
    ],
    cta: 'Try 14 days free',
    ctaLink: '/register?plan=team',
    featured: true,
    badge: 'MOST POPULAR'
  },
  {
    name: 'Business',
    price: 99,
    period: '/user/month',
    description: 'For companies with advanced needs',
    icon: BuildingOfficeIcon,
    features: {
      'Active projects': { value: 'Unlimited', included: true },
      'Users': { value: 'Unlimited', included: true },
      'Diagrams per project': { value: 'Unlimited', included: true },
      'Export diagrams': { value: 'All + API', included: true },
      'Templates': { value: 'Private marketplace', included: true },
      'Version history': { value: 'Unlimited + archive', included: true },
      'Collaboration': { value: 'Advanced', included: true },
      'Environments': { value: 'Unlimited', included: true },
      'Integrations': { value: 'All + custom', included: true },
      'API': { value: 'Complete + GraphQL', included: true },
      'Support': { value: '24/7 with SLA', included: true, tooltip: 'Guaranteed response time < 4 hours' },
      'Backup': { value: 'Continuous + geo-redundant', included: true }
    } as Record<string, FeatureValue>,
    additionalFeatures: [
      { name: 'SSO/SAML', tooltip: 'Single sign-on with your identity provider' },
      { name: 'Advanced audit logs', tooltip: 'Detailed logging of all actions' },
      { name: 'Custom security policies' },
      { name: 'Dedicated account manager' },
      { name: 'Quarterly architecture review' },
      { name: 'Multi-region' }
    ],
    highlights: [
      'SSO/SAML included',
      'Account manager',
      'Guaranteed SLA'
    ],
    cta: 'Try 30 days free',
    ctaLink: '/register?plan=business',
    featured: false
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    icon: GlobeAltIcon,
    features: {
      'Active projects': { value: 'Unlimited', included: true },
      'Users': { value: 'Unlimited', included: true },
      'Diagrams per project': { value: 'Unlimited', included: true },
      'Export diagrams': { value: 'All + custom formats', included: true },
      'Templates': { value: 'Custom development', included: true },
      'Version history': { value: 'Custom policies', included: true },
      'Collaboration': { value: 'Enterprise', included: true },
      'Environments': { value: 'Custom configuration', included: true },
      'Integrations': { value: 'Dedicated API', included: true },
      'API': { value: 'Dedicated + SDK', included: true },
      'Support': { value: 'Dedicated 24/7', included: true },
      'Backup': { value: 'Custom + DR', included: true, tooltip: 'Disaster Recovery with custom RTO/RPO' }
    } as Record<string, FeatureValue>,
    additionalFeatures: [
      { name: '99.99% SLA', tooltip: 'Less than 4.38 minutes downtime per month' },
      { name: 'Custom training' },
      { name: 'Exclusive feature development' },
      { name: 'Compliance (SOC2, HIPAA, ISO)' },
      { name: 'Flexible contracts' },
      { name: 'Custom billing' },
      { name: 'Priority API' },
      { name: 'Multi-language support' }
    ],
    highlights: [
      '99.99% SLA',
      'Exclusive features',
      'Dedicated support'
    ],
    cta: 'Contact sales',
    ctaLink: '/contact',
    featured: false
  }
];

const faqs = [
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will apply on your next billing cycle and we\'ll automatically adjust the proration.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. Enterprise plans can use purchase orders.'
  },
  {
    question: 'Are there discounts for annual payment?',
    answer: 'Yes, we offer a 20% discount on all plans paid annually. This means you only pay for 10 months instead of 12.'
  },
  {
    question: 'What is SSO/SAML?',
    answer: 'Single Sign-On (SSO) with SAML allows your team to log in using existing corporate credentials (Google Workspace, Microsoft AD, Okta, etc.), improving security and simplifying access.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, there are no long-term contracts (except Enterprise). You can cancel your subscription at any time and maintain access until the end of your current billing period.'
  },
  {
    question: 'Do you offer discounts for startups or education?',
    answer: 'Yes, we have special programs with up to 50% discount for qualified startups (less than 2 years old, less than $2M in funding) and educational institutions. Contact us for more information.'
  },
  {
    question: 'What does cost analysis include?',
    answer: 'Cost analysis shows you a real-time estimate of how much your infrastructure will cost on AWS, GCP, or Azure, helping you optimize resources and avoid billing surprises.'
  },
  {
    question: 'How does real-time collaboration work?',
    answer: 'Multiple users can edit the same diagram simultaneously. You\'ll see other users\' cursors, real-time changes, and an integrated chat to coordinate work.'
  }
];

// Icons for features
const featureIcons: { [key: string]: any } = {
  'Active projects': CubeIcon,
  'Users': UserGroupIcon,
  'Diagrams per project': DocumentTextIcon,
  'Export diagrams': DocumentArrowDownIcon,
  'Templates': PuzzlePieceIcon,
  'Version history': ClockIcon,
  'Collaboration': ChatBubbleLeftRightIcon,
  'Environments': BeakerIcon,
  'Integrations': PuzzlePieceIcon,
  'API': CodeBracketIcon,
  'Support': PhoneIcon,
  'Backup': ArrowPathIcon
};

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const getPrice = (plan: typeof plans[0]) => {
    if (typeof plan.price === 'string') return plan.price;
    if (plan.price === 0) return 'Free';
    
    const price = billingPeriod === 'yearly' ? Math.floor(plan.price * 0.8) : plan.price;
    return `$${price}`;
  };

  const getPeriod = (plan: typeof plans[0]) => {
    if (typeof plan.price === 'string' || plan.price === 0) return '';
    return billingPeriod === 'yearly' ? `${plan.period} (billed annually)` : plan.period;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      
      <main className="flex-grow">
        <div className="py-24 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-6">
                <SparklesIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Simple pricing, no surprises
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                Plans that scale with your team
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
                From personal projects to enterprise infrastructure. 
                No hidden costs, cancel anytime.
              </p>
              
              {/* Billing Toggle */}
              <div className="inline-flex items-center gap-4 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    billingPeriod === 'monthly'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    billingPeriod === 'yearly'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Annual
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300">
                    -20%
                  </span>
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 mb-24">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.name}
                    className={`relative flex flex-col rounded-2xl p-4 lg:p-5 xl:p-6 transition-all duration-300 ${
                      plan.featured
                        ? 'bg-gradient-to-b from-indigo-600 to-purple-600 text-white shadow-2xl scale-105 z-10'
                        : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl'
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                          <StarIcon className="h-4 w-4" />
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex-grow flex flex-col">
                      {/* Plan Header */}
                      <div className="text-center mb-4">
                        <Icon className={`h-8 w-8 lg:h-10 lg:w-10 mx-auto mb-3 ${
                          plan.featured ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'
                        }`} />
                        <h3 className={`text-lg lg:text-xl font-bold mb-2 ${
                          plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'
                        }`}>
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline justify-center gap-1 mb-3">
                          <span className={`text-2xl lg:text-3xl xl:text-4xl font-bold ${
                            plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'
                          }`}>
                            {getPrice(plan)}
                          </span>
                          {getPeriod(plan) && (
                            <span className={`text-sm ${
                              plan.featured ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'
                            }`}>
                              {getPeriod(plan)}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm h-12 ${
                          plan.featured ? 'text-indigo-100' : 'text-slate-600 dark:text-slate-400'
                        }`}>
                          {plan.description}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto pt-4">
                        <Link
                          href={plan.ctaLink}
                          className={`block w-full text-center py-2.5 px-4 rounded-xl font-semibold transition-all duration-200 text-sm ${
                            plan.featured
                              ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg'
                              : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg'
                          }`}
                        >
                          {plan.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAQs */}
            <div className="max-w-4xl mx-auto mb-24">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                Frequently asked questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <span className="font-medium text-slate-900 dark:text-white pr-8">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUpIcon className="h-5 w-5 text-slate-500 flex-shrink-0" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5 text-slate-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-5">
                        <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 mb-8">
                <SparklesIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  30-day money-back guarantee
                </span>
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to transform your infrastructure?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
                Join thousands of teams already trusting InfraUX to manage their cloud infrastructure visually
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Start free trial
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <QuestionMarkCircleIcon className="h-5 w-5" />
                  Talk to sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterNew />
    </div>
  );
}