import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo-config';
import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';

export const metadata: Metadata = pageMetadata.legal.termsConditions();

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      <main className="flex-grow">
        <div className="py-24 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  By accessing and using InfraUX ("the Service"), you agree to be bound by these Terms of Service ("Terms"). 
                  If you do not agree to these terms, you must not use the Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. What is InfraUX?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  InfraUX is a visual platform for designing, deploying, and managing cloud infrastructure. 
                  Our service allows users to create infrastructure diagrams and automatically generate 
                  Infrastructure as Code (IaC) for multiple cloud providers.
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Visual infrastructure design</li>
                  <li>Automatic generation of Terraform, Pulumi, Ansible, and CloudFormation code</li>
                  <li>Support for AWS, Google Cloud Platform, and Microsoft Azure</li>
                  <li>Real-time collaboration between teams</li>
                  <li>Management of multiple environments and projects</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. Conditions of Use
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  By using InfraUX, you agree to:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Provide accurate and up-to-date information during registration</li>
                  <li>Maintain the security of your account and password</li>
                  <li>Not use the service for illegal or unauthorized activities</li>
                  <li>Not attempt to access restricted areas of the service</li>
                  <li>Not interfere with the normal operation of the service</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Payments and Billing
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  InfraUX payment plans are billed on a monthly or annual basis, depending on your choice:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Payments are processed automatically at the beginning of each billing period</li>
                  <li>Prices are subject to change with 30 days prior notice</li>
                  <li>No refunds are provided for partial periods</li>
                  <li>Annual plans include a 20% discount</li>
                  <li>We accept credit cards, PayPal, and bank transfers</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Cancellations
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  You can cancel your subscription at any time:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>The cancellation will be effective at the end of the current billing period</li>
                  <li>No additional charges will be made after cancellation</li>
                  <li>You will maintain access to the service until the end of the paid period</li>
                  <li>Data will be retained for 30 days after cancellation</li>
                  <li>You can reactivate your account at any time</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Intellectual Property
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  All content and technology of InfraUX are protected by copyright:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>You retain all rights to your content and infrastructure</li>
                  <li>InfraUX retains the rights to the platform and technology</li>
                  <li>You may not copy, modify, or distribute the InfraUX software</li>
                  <li>You grant InfraUX a license to use your content only to provide the service</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  InfraUX is provided "as is" without warranties of any kind. We will not be liable for:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Indirect, incidental, or consequential losses or damages</li>
                  <li>Loss of data or service interruptions</li>
                  <li>Errors or inaccuracies in the content</li>
                  <li>Actions of third parties using the service</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Modifications to the Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We reserve the right to modify these terms at any time:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Changes will be notified 30 days in advance</li>
                  <li>Continued use of the service constitutes acceptance of the new terms</li>
                  <li>If you do not accept the changes, you may cancel your account</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  9. Legal Contact
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  For any legal inquiries or questions about these terms, contact us at:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Email:</strong> legal@infraux.com<br />
                    <strong>Address:</strong> InfraUX Technologies<br />
                    Cartagena, Colombia
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  By using InfraUX, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterNew />
    </div>
  );
}