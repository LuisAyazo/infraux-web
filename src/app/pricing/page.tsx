'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import NewPricingTable from '@/components/landing/NewPricingTable';
import {
  SparklesIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/solid';

const translations = {
  header: {
    title: 'Transparent Plans & <span class="gradient-text-emerald">Pricing</span>',
    subtitle: 'Choose the perfect plan for your team. No hidden costs, cancel anytime.',
    badge: 'Detailed Plan Comparison',
  },
  plansMeta: {
    free: {
      name: 'Free',
      icon: SparklesIcon,
      price: '$0',
      period: 'Forever',
      description: 'Perfect for exploring InfraUX and personal projects.',
      cta: 'Start Free',
      ctaLink: '/register',
      featured: false,
    },
    pro: {
      name: 'Startup',
      icon: RocketLaunchIcon,
      price: '$29',
      period: '/ user / month',
      description: 'Ideal for startups and agile teams growing fast.',
      cta: 'Start 14-day Trial',
      ctaLink: '/register?plan=startup',
      featured: false,
    },
    business: {
      name: 'Business',
      icon: BuildingOfficeIcon,
      price: '$99',
      period: '/ user / month',
      description: 'For growing teams with advanced collaboration needs.',
      cta: 'Start 14-day Trial',
      ctaLink: '/register?plan=business',
      featured: true,
    },
    enterprise: {
      name: 'Enterprise',
      icon: BuildingOffice2Icon,
      price: 'Custom',
      period: 'Contact sales',
      description: 'Tailored solutions for large organizations.',
      cta: 'Contact Sales',
      ctaLink: '/contact',
      featured: false,
    },
  },
  pricingData: [
    {
      category: 'Core Platform',
      features: [
        { name: 'Visual Diagram Editor', tooltip: 'Intuitive drag-and-drop interface to design your infrastructure.', plans: { free: true, pro: true, business: true, enterprise: true } },
        { name: 'Active Projects', tooltip: 'A project is a container for your diagrams and configurations.', plans: { free: '1', pro: '5', business: '20', enterprise: 'Unlimited' } },
        { name: 'Diagrams per Project', plans: { free: '3', pro: '10', business: '50', enterprise: 'Unlimited' } },
        { name: 'Users per Organization', plans: { free: '1', pro: 'Up to 5', business: 'Up to 20', enterprise: 'Unlimited' } },
        { name: 'Resources per Diagram', tooltip: 'Maximum number of cloud resources you can add to each diagram.', plans: { free: '20', pro: '100', business: '500', enterprise: 'Unlimited' } },
      ],
    },
    {
      category: 'Code & Automation',
      features: [
        { name: 'IaC Code Generation', tooltip: 'Automatically generate Infrastructure as Code from your diagrams.', plans: { free: 'Terraform', pro: 'Terraform, CloudFormation', business: 'Terraform, CloudFormation, Pulumi', enterprise: 'All + Ansible & Custom' } },
        { name: 'Live Preview', tooltip: 'See code updates in real-time as you edit your diagrams.', plans: { free: true, pro: true, business: true, enterprise: true } },
        { name: 'Version History', tooltip: 'Track changes to your diagrams and revert to previous versions.', plans: { free: '7 days', pro: '30 days', business: '1 year', enterprise: 'Unlimited' } },
        { name: 'Templates', tooltip: 'Start with pre-built architectures for common use cases.', plans: { free: 'Basic (10)', pro: 'Premium (50+)', business: 'Premium + Custom', enterprise: 'Custom Enterprise Templates' } },
        { name: 'Import Existing Infrastructure', tooltip: 'Import your current infrastructure from your cloud provider.', plans: { free: false, pro: 'Up to 50 resources', business: 'Up to 500 resources', enterprise: 'Unlimited' } },
      ],
    },
    {
      category: 'Deployment & CI/CD',
      features: [
        { name: 'Visual Pipeline Builder', tooltip: 'Create CI/CD pipelines with nodes for building, testing, and deploying.', plans: { free: false, pro: 'Basic', business: 'Advanced', enterprise: 'Full + Custom' } },
        { name: 'Automated Deployments', tooltip: 'Deploy your infrastructure directly from InfraUX to your cloud account.', plans: { free: '2 per month', pro: '20 per month', business: '100 per month', enterprise: 'Unlimited' } },
        { name: 'Deployment Environments', tooltip: 'Manage different environments like development, staging, and production.', plans: { free: '2', pro: '4', business: '10', enterprise: 'Unlimited' } },
        { name: 'Automatic Rollback', tooltip: 'Automatically revert changes in case of failure.', plans: { free: false, pro: true, business: true, enterprise: true } },
        { name: 'Supported Platforms', tooltip: 'Cloud providers you can deploy to.', plans: { free: 'AWS', pro: 'AWS, GCP', business: 'AWS, GCP, Azure', enterprise: 'Multi-cloud + On-premise' } },
      ],
    },
    {
        category: 'Collaboration & Teams',
        features: [
            { name: 'Real-time Collaboration', tooltip: 'Work on the same diagram with your team simultaneously.', plans: { free: false, pro: true, business: true, enterprise: true } },
            { name: 'Comments & Reviews', tooltip: 'Comment and review changes before applying them.', plans: { free: false, pro: 'Basic', business: 'Advanced', enterprise: 'Full with workflows' } },
            { name: 'Access Control', tooltip: 'Define roles and permissions for your team.', plans: { free: false, pro: 'Basic', business: 'Granular', enterprise: 'Full RBAC' } },
            { name: 'Workspaces', tooltip: 'Organize projects in separate workspaces.', plans: { free: '1', pro: '3', business: '10', enterprise: 'Unlimited' } },
        ],
    },
    {
        category: 'Analytics & Optimization',
        features: [
            { name: 'Cost Estimation', tooltip: 'Estimate your infrastructure costs before deploying.', plans: { free: 'Basic', pro: 'Detailed', business: 'Advanced with alerts', enterprise: 'Predictive with ML' } },
            { name: 'Security Analysis', tooltip: 'Detect security issues in your infrastructure.', plans: { free: false, pro: 'Basic', business: 'Full', enterprise: 'Advanced + Compliance' } },
            { name: 'Resource Optimization', tooltip: 'Suggestions to optimize costs and performance.', plans: { free: false, pro: false, business: true, enterprise: true } },
            { name: 'Custom Dashboards', tooltip: 'Create dashboards with key metrics.', plans: { free: false, pro: '1', business: '5', enterprise: 'Unlimited' } },
        ]
    },
    {
      category: 'Integrations',
      features: [
        { name: 'Git Integration', tooltip: 'Sync your diagrams with Git repositories.', plans: { free: 'GitHub public', pro: 'GitHub, GitLab', business: 'All + Bitbucket', enterprise: 'Custom + Enterprise Git' } },
        { name: 'Webhooks', tooltip: 'Receive notifications of events in your infrastructure.', plans: { free: false, pro: '5', business: '20', enterprise: 'Unlimited' } },
        { name: 'REST API', tooltip: 'Access InfraUX programmatically.', plans: { free: false, pro: '1K req/month', business: '10K req/month', enterprise: 'Unlimited' } },
        { name: 'Enterprise Integrations', tooltip: 'Slack, Teams, Jira, ServiceNow, etc.', plans: { free: false, pro: false, business: 'Basic', enterprise: 'All + Custom' } },
      ],
    },
    {
      category: 'Security & Support',
      features: [
        { name: 'SSO/SAML Authentication', tooltip: 'Integrate with your corporate identity provider.', plans: { free: false, pro: false, business: 'SSO', enterprise: 'SSO + SAML + LDAP' } },
        { name: 'Data Encryption', plans: { free: 'In transit', pro: 'In transit', business: 'In transit & at rest', enterprise: 'Full + HSM' } },
        { name: 'Audit Logs', plans: { free: false, pro: '30 days', business: '1 year', enterprise: 'Unlimited + SIEM' } },
        { name: 'Uptime SLA', plans: { free: false, pro: '99%', business: '99.5%', enterprise: '99.9%' } },
        { name: 'Support', plans: { free: 'Community', pro: 'Email (48h)', business: 'Email + Chat (8h)', enterprise: 'Dedicated 24/7 + Phone' } },
        { name: 'Onboarding & Training', plans: { free: 'Docs', pro: 'Videos', business: 'Webinars', enterprise: 'Custom 1-on-1' } },
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