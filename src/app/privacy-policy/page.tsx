import HeaderNew from '@/components/landing/HeaderNew';
import FooterNew from '@/components/landing/FooterNew';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - InfraUX',
  description: 'InfraUX privacy policy. Learn how we protect and manage your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <HeaderNew />
      <main className="flex-grow">
        <div className="py-24 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Introduction
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  At InfraUX, we take the privacy of our users very seriously. This Privacy Policy 
                  describes how we collect, use, store, and protect your personal information when you use 
                  our cloud infrastructure management platform.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  By using InfraUX, you agree to the practices described in this policy. If you do not agree, 
                  please do not use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We collect different types of information to provide and improve our services:
                </p>
                
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  2.1 Personal Information
                </h3>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Registration data:</strong> Name, email address, company</li>
                  <li><strong>Payment information:</strong> Processed securely through Paddle (we do not store card data)</li>
                  <li><strong>Profile information:</strong> Profile picture, user preferences, settings</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  2.2 Usage Data
                </h3>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>In-app activity:</strong> Diagrams created, projects, collaborations</li>
                  <li><strong>Access logs:</strong> IP addresses, browser type, pages visited</li>
                  <li><strong>Performance metrics:</strong> Load times, errors, feature usage</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  2.3 Cookies and Similar Technologies
                </h3>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Essential cookies:</strong> To maintain your session and preferences</li>
                  <li><strong>Analytics cookies:</strong> To understand how you use the platform (Mixpanel, PostHog)</li>
                  <li><strong>Marketing cookies:</strong> Only with your explicit consent</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Send important notifications about your account</li>
                  <li>Improve and personalize your experience</li>
                  <li>Develop new features</li>
                  <li>Prevent fraud and malicious activities</li>
                  <li>Comply with legal obligations</li>
                  <li>Send marketing communications (only with your consent)</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Sharing Information with Third Parties
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We do not sell your personal information. We only share data with third parties in the following cases:
                </p>
                
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  4.1 Service Providers
                </h3>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Paddle:</strong> Payment processing and billing</li>
                  <li><strong>Mixpanel/PostHog:</strong> Usage analysis and product improvement</li>
                  <li><strong>AWS/GCP:</strong> Infrastructure hosting</li>
                  <li><strong>SendGrid:</strong> Sending transactional emails</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  4.2 Legal Requirements
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We may disclose information if required by law, court order, or to protect our rights.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3">
                  4.3 Business Transfers
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred with prior notice.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Data Security
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We implement technical and organizational security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Data encryption in transit (TLS/SSL) and at rest</li>
                  <li>Two-factor authentication (2FA) available</li>
                  <li>Restricted access to personal data</li>
                  <li>Regular security audits</li>
                  <li>Compliance with industry standards</li>
                  <li>Automatic backups and disaster recovery</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Your Rights
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  You have the following rights over your personal information:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request the deletion of your account and data</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to the processing of your data</li>
                  <li><strong>Restriction:</strong> Limit the processing of your data</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  7. How to Delete Your Account
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  To delete your account and all associated data:
                </p>
                <ol className="list-decimal pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Log in to your InfraUX account</li>
                  <li>Go to Settings → Account</li>
                  <li>Click on "Delete account"</li>
                  <li>Confirm the deletion by entering your password</li>
                </ol>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  You can also request deletion by contacting support@infraux.com. 
                  We will process your request within 30 days.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  8. Data Retention
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We retain your personal information only for as long as necessary:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li><strong>Active account data:</strong> As long as you maintain your account</li>
                  <li><strong>Data after cancellation:</strong> 30 days to allow reactivation</li>
                  <li><strong>Billing records:</strong> 7 years for legal requirements</li>
                  <li><strong>Security logs:</strong> 90 days</li>
                  <li><strong>Backups:</strong> Maximum 90 days after deletion</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  9. Minors
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  InfraUX is not intended for children under 18. We do not knowingly collect 
                  information from minors. If we discover that we have collected data from a minor, 
                  we will delete it immediately.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  10. International Transfers
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Your data may be transferred to and processed in countries other than your own. 
                  We ensure that these transfers comply with applicable regulations 
                  through:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>EU Standard Contractual Clauses</li>
                  <li>Privacy certifications</li>
                  <li>Privacy impact assessments</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  11. Changes to this Policy
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We may update this policy from time to time. Significant changes will be 
                  notified by email or through a prominent notice on the platform 
                  at least 30 days in advance.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  12. Contact
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  If you have questions about this policy or how we handle your data, contact us:
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Privacy Email:</strong> privacy@infraux.com<br />
                    <strong>Support Email:</strong> support@infraux.com<br />
                    <strong>Address:</strong> InfraUX Technologies<br />
                    Cartagena, Colombia
                  </p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  This privacy policy is effective as of the date indicated above and 
                  applies to all users of InfraUX.
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