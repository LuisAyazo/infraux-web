'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import Image from 'next/image';
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
      'Environments': { value: 'Unlimited', included: true },
      'Integrations': { value: 'All + custom', included: true },
      'API': { value: 'Dedicated + SDK', included: true },
      'Support': { value: 'Dedicated 24/7', included: true },
      'Backup': { value: 'Custom + DR', included: true, tooltip: 'Disaster Recovery with custom RTO/RPO' }
    } as Record<string, FeatureValue>,
    additionalFeatures: [
      { name: 'SSO/SAML', tooltip: 'Single sign-on with your identity provider' },
      { name: 'Advanced audit logs', tooltip: 'Detailed logging of all actions' },
      { name: 'Custom security policies' },
      { name: 'Dedicated account manager' },
      { name: 'Quarterly architecture review' },
      { name: 'Multi-region' },
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
      'SSO/SAML included',
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

            {/* Plans Grid - Premium Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                {plans.map((plan, index) => {
                  const Icon = plan.icon;
                  return (
                    <div
                      key={plan.name}
                      className={`group relative transform transition-all duration-500 hover:scale-105 ${
                        plan.featured ? 'lg:scale-110 z-20' : ''
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`relative h-full flex flex-col rounded-3xl overflow-hidden ${
                        plan.featured
                          ? 'bg-gradient-to-b from-emerald-600 to-emerald-700 text-white shadow-premium-lg'
                          : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-premium hover:shadow-premium-lg'
                      }`}>
                        {/* Featured badge */}
                        {plan.badge && (
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-10">
                            <span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-sm font-black px-5 py-2 rounded-full shadow-lg">
                              <StarIcon className="h-4 w-4" />
                              {plan.badge}
                            </span>
                          </div>
                        )}
                        
                        {/* Gradient overlay for non-featured plans */}
                        {!plan.featured && (
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent dark:from-slate-800/50 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        )}
                        
                        <div className="relative z-10 flex-grow flex flex-col p-8">
                          {/* Plan Header */}
                          <div className="text-center mb-8">
                            <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                              plan.featured
                                ? 'bg-white/20 backdrop-blur-sm'
                                : 'bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg'
                            }`}>
                              <Icon className={`h-10 w-10 ${
                                plan.featured ? 'text-white' : 'text-white'
                              }`} />
                            </div>
                            
                            <h3 className={`text-2xl font-bold mb-2 ${
                              plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'
                            }`}>
                              {plan.name}
                            </h3>
                            
                            {/* Price */}
                            <div className="mb-4">
                              <span className={`text-5xl font-black ${
                                plan.featured ? 'text-white' : 'text-slate-900 dark:text-white'
                              }`}>
                                {getPrice(plan)}
                              </span>
                              {getPeriod(plan) && (
                                <span className={`text-sm font-medium ml-2 ${
                                  plan.featured ? 'text-emerald-100' : 'text-slate-600 dark:text-slate-400'
                                }`}>
                                  {getPeriod(plan)}
                                </span>
                              )}
                            </div>
                            
                            <p className={`text-base ${
                              plan.featured ? 'text-emerald-100' : 'text-slate-600 dark:text-slate-400'
                            }`}>
                              {plan.description}
                            </p>
                          </div>

                          {/* Features List */}
                          <div className="space-y-4 mb-8 flex-grow">
                            {plan.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                  plan.featured
                                    ? 'bg-white/20'
                                    : 'bg-emerald-100 dark:bg-emerald-900/30'
                                }`}>
                                  <CheckIcon className={`h-3 w-3 ${
                                    plan.featured ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'
                                  }`} />
                                </div>
                                <span className={`text-sm font-medium ${
                                  plan.featured ? 'text-emerald-50' : 'text-slate-700 dark:text-slate-300'
                                }`}>
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <div className="mt-auto">
                            <Link
                              href={plan.ctaLink}
                              className={`block w-full text-center py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${
                                plan.featured
                                  ? 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg'
                                  : 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-700 hover:to-emerald-600 shadow-lg hover:shadow-xl'
                              }`}
                            >
                              {plan.cta}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQs - Premium Design */}
            <div className="max-w-4xl mx-auto mb-32">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
                  <QuestionMarkCircleIcon className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Preguntas frecuentes
                  </span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                  ¿Tienes preguntas? Tenemos respuestas
                </h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <span className="font-bold text-lg text-slate-900 dark:text-white pr-8">
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center transition-transform duration-300 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}>
                        <ChevronDownIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}>
                      <div className="px-8 pb-6">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional help */}
              <div className="mt-12 text-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  ¿No encuentras lo que buscas?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/documentacion"
                    className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 dark:hover:text-emerald-300"
                  >
                    <DocumentTextIcon className="h-5 w-5" />
                    Ver documentación
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 dark:hover:text-emerald-300"
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    Contactar soporte
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA - Premium Design */}
            <div className="relative py-20 px-8 lg:px-16 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-3xl overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium mb-8">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                    Garantía de devolución de 30 días
                  </span>
                </div>
                
                <h2 className="text-5xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6">
                  ¿Listo para transformar
                  <span className="block gradient-text-emerald">tu infraestructura?</span>
                </h2>
                
                <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-4xl mx-auto font-medium">
                  Únete a miles de equipos que ya confían en InfraUX para gestionar
                  su infraestructura cloud de forma visual
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
                  <Link
                    href="/register"
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-lg rounded-2xl shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10">Comenzar prueba gratis</span>
                    <ArrowRightIcon className="relative z-10 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    Hablar con ventas
                  </Link>
                </div>
                
                {/* Trust badges */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckIcon className="h-5 w-5 text-emerald-500" />
                    <span className="font-medium">Sin tarjeta de crédito</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckIcon className="h-5 w-5 text-emerald-500" />
                    <span className="font-medium">Cancela cuando quieras</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckIcon className="h-5 w-5 text-emerald-500" />
                    <span className="font-medium">Soporte 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterNew />
    </div>
  );
}