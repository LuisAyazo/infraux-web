'use client';

import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import NewPricingTable from '@/components/landing/NewPricingTable';
import {
  SparklesIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  ServerIcon,
} from '@heroicons/react/24/solid';

const translations = {
  header: {
    title: 'Simple <span class="gradient-text-emerald">Pricing</span>',
    subtitle: 'Start free and scale as you grow. No hidden fees, no surprises.',
    badge: 'Trusted by 10,000+ teams',
  },
  plansMeta: {
    free: {
      name: 'Free',
      icon: SparklesIcon,
      price: '$0',
      period: 'Forever',
      description: 'Perfect to explore InfraUX and personal projects.',
      cta: 'Start Free',
      ctaLink: '/register',
      featured: false,
    },
    startup: {
      name: 'Startup',
      icon: RocketLaunchIcon,
      price: '$299',
      period: '/ user / month',
      description: 'For growing teams that need collaboration and more resources.',
      cta: 'Start Free Trial',
      ctaLink: '/register?plan=startup',
      featured: true,
    },
    business: {
      name: 'Business',
      icon: BuildingOfficeIcon,
      price: '$999',
      period: '/ user / month',
      description: 'Advanced features for professional teams and complex projects.',
      cta: 'Start Free Trial',
      ctaLink: '/register?plan=business',
      featured: false,
    },
    enterprise: {
      name: 'Enterprise',
      icon: ServerIcon,
      price: 'Custom',
      period: 'Contact sales',
      description: 'Dedicated infrastructure, custom integrations, and premium support.',
      cta: 'Contact Sales',
      ctaLink: '/contact',
      featured: false,
    },
  },
  pricingData: [
    {
      category: 'Core Platform',
      features: [
        { name: 'Visual Diagram Editor', tooltip: 'Intuitive drag-and-drop interface to design your infrastructure.', plans: { free: true, startup: true, business: true, enterprise: true } },
        { name: 'Active Projects', tooltip: 'A project is a container for your diagrams and configurations.', plans: { free: '1', startup: '5', business: '20', enterprise: 'Unlimited' } },
        { name: 'Diagrams per Project', plans: { free: '3', startup: '10', business: '50', enterprise: 'Unlimited' } },
        { name: 'Team Members', plans: { free: '1', startup: '5', business: '20', enterprise: 'Unlimited' } },
        { name: 'Resources per Diagram', tooltip: 'Maximum number of cloud resources you can add to each diagram.', plans: { free: '20', startup: '100', business: '500', enterprise: 'Unlimited' } },
      ],
    },
    {
      category: 'AI & Automation',
      features: [
        { name: 'Zenix AI Assistant', tooltip: 'AI-powered assistant to help you design and optimize infrastructure.', plans: { free: '5 trials', startup: '100/month', business: 'Unlimited', enterprise: 'Unlimited' } },
        { name: 'IaC Code Generation', tooltip: 'Automatically generate Infrastructure as Code from your diagrams.', plans: { free: 'Terraform', startup: 'Terraform, CloudFormation', business: 'All providers', enterprise: 'All + Custom' } },
        { name: 'Live Preview', tooltip: 'See code updates in real-time as you edit your diagrams.', plans: { free: true, startup: true, business: true, enterprise: true } },
        { name: 'Version History', tooltip: 'Track changes to your diagrams and revert to previous versions.', plans: { free: '30 days', startup: '90 days', business: '1 year', enterprise: 'Unlimited' } },
        { name: 'Templates', tooltip: 'Start with pre-built architectures for common use cases.', plans: { free: 'Basic', startup: 'All templates', business: 'All + Custom', enterprise: 'Custom Enterprise' } },
      ],
    },
    {
      category: 'Deployment & Execution',
      features: [
        { name: 'Deployments per Month', tooltip: 'Deploy your infrastructure directly from InfraUX.', plans: { free: '5', startup: '50', business: '200', enterprise: 'Unlimited' } },
        { name: 'Deployment Environments', tooltip: 'Manage different environments like dev, staging, and production.', plans: { free: '1', startup: '3', business: '10', enterprise: 'Unlimited' } },
        { name: 'Automatic Rollback', tooltip: 'Automatically revert changes in case of failure.', plans: { free: false, startup: true, business: true, enterprise: true } },
        { name: 'Supported Platforms', tooltip: 'Cloud providers you can deploy to.', plans: { free: 'AWS', startup: 'AWS, GCP, Azure', business: 'All providers', enterprise: 'All + On-premise' } },
        { name: 'CI/CD Integration', plans: { free: false, startup: 'Basic', business: 'Full', enterprise: 'Custom pipelines' } },
      ],
    },
    {
        category: 'Collaboration & Teams',
        features: [
            { name: 'Real-time Collaboration', tooltip: 'Work on the same diagram with your team simultaneously.', plans: { free: false, startup: true, business: true, enterprise: true } },
            { name: 'Comments & Reviews', tooltip: 'Comment and review changes before applying them.', plans: { free: 'Basic', startup: 'Full', business: 'Full', enterprise: 'Advanced workflows' } },
            { name: 'Access Control', tooltip: 'Define roles and permissions for your team.', plans: { free: false, startup: 'Basic', business: 'Advanced', enterprise: 'Custom RBAC' } },
            { name: 'Audit Logs', plans: { free: '30 days', startup: '1 year', business: 'Unlimited', enterprise: 'Unlimited + Export' } },
        ],
    },
    {
        category: 'Security & Compliance',
        features: [
            { name: 'SSO/SAML', tooltip: 'Single Sign-On integration.', plans: { free: false, startup: 'SSO', business: 'SSO + SAML', enterprise: 'Full Custom' } },
            { name: 'Security Analysis', tooltip: 'Automated security scanning of your infrastructure.', plans: { free: 'Basic', startup: 'Complete', business: 'Advanced', enterprise: 'Advanced + Custom' } },
            { name: 'Cost Estimation', tooltip: 'Estimate cloud costs before deployment.', plans: { free: 'Basic', startup: 'Detailed', business: 'Advanced', enterprise: 'Predictive' } },
            { name: 'API Access', tooltip: 'Programmatic access to InfraUX.', plans: { free: '1K/month', startup: '10K/month', business: 'Unlimited', enterprise: 'Unlimited' } },
        ]
    },
    {
      category: 'Support & SLA',
      features: [
        { name: 'Community Support', plans: { free: true, startup: true, business: true, enterprise: true } },
        { name: 'Priority Support', plans: { free: false, startup: 'Email 48h', business: 'Chat 8h', enterprise: '24/7 Dedicated' } },
        { name: 'Uptime SLA', plans: { free: '99%', startup: '99.5%', business: '99.9%', enterprise: '99.99%' } },
        { name: 'Onboarding', plans: { free: 'Docs', startup: 'Videos', business: 'Webinars', enterprise: 'Personal' } },
        { name: 'Dedicated Success Manager', plans: { free: false, startup: false, business: false, enterprise: true } },
      ],
    },
  ],
  faqs: {
    title: 'Questions? We Have Answers',
    subtitle: 'Everything you need to know about InfraUX pricing and features.',
    badge: 'Frequently Asked Questions',
    items: [
      { question: 'Can I try InfraUX for free?', answer: 'Yes! Our Free plan is perfect for exploring InfraUX with 1 project, 3 diagrams, and 1 Zenix AI trial. You can upgrade anytime as your needs grow.' },
      { question: 'What happens when I reach my plan limits?', answer: 'You\'ll receive notifications before reaching limits. You can upgrade your plan instantly to continue working without interruption. No data is lost when upgrading.' },
      { question: 'Can I change plans anytime?', answer: 'Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, changes take effect at the next billing cycle.' },
      { question: 'Do you offer annual billing discounts?', answer: 'Yes! Save 20% with annual billing on all paid plans. That\'s 2 months free when you pay annually. Enterprise customers can negotiate custom terms.' },
      { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, ACH transfers for annual plans, and wire transfers for Enterprise customers. All payments are processed securely through Stripe.' },
    ],
  },
  finalCta: {
    title: 'Ready to Transform Your <span class="block gradient-text-emerald">Infrastructure Management?</span>',
    subtitle: 'Join thousands of teams building better infrastructure with InfraUX.',
    badge: 'No credit card required • Start in 2 minutes',
    cta_main: 'Start Free',
    cta_secondary: 'Book a Demo',
  },
};

export default function PricingClient() {
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
