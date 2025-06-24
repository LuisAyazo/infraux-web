'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import NewPricingTable from '@/components/landing/NewPricingTable';
import {
  FireIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/solid';

const translations = {
  header: {
    title: 'The Right Plan for <span class="gradient-text-emerald">Every Team</span>',
    subtitle: 'From solo developers to large enterprises, InfraUX offers a plan that fits your needs.',
    badge: 'Detailed Feature Comparison',
  },
  plansMeta: {
    free: {
      name: 'Free',
      icon: FireIcon,
      price: '$0',
      period: 'Forever',
      description: 'For individuals and small projects. Get started with the core features.',
      cta: 'Start for Free',
      ctaLink: '/register',
      featured: false,
    },
    pro: {
      name: 'Pro',
      icon: UserGroupIcon,
      price: '$24',
      period: '/ user / month',
      description: 'For professionals and teams who need to collaborate and scale.',
      cta: 'Start 14-day Trial',
      ctaLink: '/register?plan=pro',
      featured: true,
    },
    enterprise: {
      name: 'Enterprise',
      icon: BuildingOffice2Icon,
      price: 'Custom',
      period: 'Billed Annually',
      description: 'For organizations with advanced security, deployment, and support needs.',
      cta: 'Contact Sales',
      ctaLink: '/contact',
      featured: false,
    },
  },
  pricingData: [
    {
      category: 'Core Platform',
      features: [
        { name: 'Visual Diagram Editor', tooltip: 'Intuitive drag-and-drop interface to design your infrastructure.', plans: { free: true, pro: true, enterprise: true } },
        { name: 'Active Projects', tooltip: 'A project is a container for your diagrams and configurations.', plans: { free: '3', pro: 'Unlimited', enterprise: 'Unlimited' } },
        { name: 'Diagrams per Project', plans: { free: '5', pro: 'Unlimited', enterprise: 'Unlimited' } },
        { name: 'Users', plans: { free: '1', pro: 'Up to 10', enterprise: 'Unlimited' } },
      ],
    },
    {
      category: 'Code & Automation',
      features: [
        { name: 'IaC Code Generation', tooltip: 'Automatically generate Infrastructure as Code from your diagrams.', plans: { free: 'Terraform', pro: 'Terraform, Pulumi, CloudFormation', enterprise: 'All + Ansible & Custom' } },
        { name: 'Live Preview', tooltip: 'See code updates in real-time as you edit your diagrams.', plans: { free: true, pro: true, enterprise: true } },
        { name: 'Version History', tooltip: 'Track changes to your diagrams and revert to previous versions.', plans: { free: '7 days', pro: '365 days', enterprise: 'Unlimited' } },
        { name: 'Templates', tooltip: 'Start with pre-built architectures for common use cases.', plans: { free: 'Basic Templates', pro: 'Premium Template Library', enterprise: 'Custom Company Templates' } },
      ],
    },
    {
      category: 'Deployment & CI/CD',
      features: [
        { name: 'Visual Pipeline Builder', tooltip: 'Create CI/CD pipelines with nodes for building, testing, and deploying.', plans: { free: 'Beta Access', pro: true, enterprise: true } },
        { name: 'Automated Deployments', tooltip: 'Deploy your infrastructure directly from InfraUX to your cloud account.', plans: { free: '1 per month', pro: '50 per month', enterprise: 'Unlimited' } },
        { name: 'Deployment History & Logs', tooltip: 'Track all your deployment activities and view detailed logs.', plans: { free: 'Last 5 runs', pro: 'Full History', enterprise: 'Full History' } },
        { name: 'Real-time Deployment Updates', tooltip: 'See deployment progress live via WebSockets.', plans: { free: false, pro: true, enterprise: true } },
        { name: 'Supported Platforms', tooltip: 'Cloud providers you can deploy to.', plans: { free: 'N/A', pro: 'AWS, GCP', enterprise: 'AWS, GCP, Azure, Kubernetes' } },
      ],
    },
    {
        category: 'Environments & Promotions',
        features: [
            { name: 'Multiple Environments', tooltip: 'Manage separate environments like development, staging, and production.', plans: { free: '2 (dev, prod)', pro: '5', enterprise: 'Unlimited' } },
            { name: 'Promote to Environment', tooltip: 'Promote diagram changes from one environment to another (e.g., staging to production).', plans: { free: '5 per month', pro: 'Unlimited', enterprise: 'Unlimited' } },
            { name: 'Environment-specific Credentials', tooltip: 'Use different cloud credentials for each environment.', plans: { free: false, pro: true, enterprise: true } },
            { name: 'Environment Caching', tooltip: 'Faster load times by caching environment configurations.', plans: { free: false, pro: true, enterprise: true } },
        ]
    },
    {
        category: 'Analytics & Observability',
        features: [
            { name: 'Feature Flags', tooltip: 'Manage feature releases with PostHog integration.', plans: { free: 'Beta Access', pro: true, enterprise: true } },
            { name: 'User Behavior Analytics', tooltip: 'Understand how your team uses InfraUX with detailed analytics.', plans: { free: false, pro: 'Basic Dashboard', enterprise: 'Advanced Analytics & Reports' } },
            { name: 'Deployment Event Tracking', tooltip: 'Track deployment events (start, success, failure) in your analytics tools.', plans: { free: false, pro: true, enterprise: true } },
        ]
    },
    {
      category: 'Collaboration & Integrations',
      features: [
        { name: 'Real-time Collaboration', tooltip: 'Work on the same diagram with your team simultaneously.', plans: { free: false, pro: true, enterprise: true } },
        { name: 'Git Integration (GitHub, GitLab)', tooltip: 'Sync your diagrams with your Git repositories.', plans: { free: 'Basic (Public Repos)', pro: 'Full (Private Repos)', enterprise: 'Full + CI/CD Integration' } },
        { name: 'API Access', tooltip: 'Programmatically interact with your InfraUX projects.', plans: { free: false, pro: '1,000 calls/month', enterprise: 'Unlimited + High Priority' } },
      ],
    },
    {
      category: 'Security & Support',
      features: [
        { name: 'SSO/SAML Authentication', tooltip: 'Integrate with your corporate identity provider (Okta, Azure AD).', plans: { free: false, pro: false, enterprise: true } },
        { name: 'Advanced Audit Logs', plans: { free: false, pro: 'Basic Logs', enterprise: 'Full Audit Trail' } },
        { name: 'Uptime SLA', plans: { free: false, pro: false, enterprise: '99.9%' } },
        { name: 'Support', plans: { free: 'Community Discord', pro: 'Email Support (24h)', enterprise: 'Dedicated Manager & 24/7 Priority' } },
      ],
    },
  ],
  faqs: {
    title: 'Got Questions? We Have Answers',
    subtitle: 'Find answers to common questions about plans, billing, and features.',
    badge: 'Frequently Asked Questions',
    items: [
      { question: 'Can I change plans at any time?', answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will apply on your next billing cycle and we\'ll automatically adjust the proration.' },
      { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. Enterprise plans can use purchase orders.' },
      { question: 'Are there discounts for annual payment?', answer: 'Yes, we offer a 20% discount on all plans paid annually. This means you only pay for 10 months instead of 12.' },
      { question: 'What is SSO/SAML?', answer: 'Single Sign-On (SSO) with SAML allows your team to log in using existing corporate credentials (Google Workspace, Microsoft AD, Okta, etc.), improving security and simplifying access.' },
    ],
  },
  finalCta: {
    title: 'Ready to Transform <span class="block gradient-text-emerald">Your Infrastructure?</span>',
    subtitle: 'Join thousands of teams who already trust InfraUX to manage their cloud infrastructure visually.',
    badge: '30-Day Money-Back Guarantee',
    cta_main: 'Start Free Trial',
    cta_secondary: 'Talk to Sales',
  },
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      <main className="flex-grow">
        <NewPricingTable translations={translations} />
      </main>
      <FooterNew />
    </div>
  );
}