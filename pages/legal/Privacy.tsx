
import React from 'react';
import Section from '../../components/Section';

const Privacy: React.FC = () => {
  return (
    <Section className="py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="space-y-8 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. Overview</h2>
          <p>At LedgerPilot, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal and financial data when you use our service.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
          <p>We collect information you provide directly (name, email, business details) and information from integrated services like your bank (via Open Banking) and uploaded documents (receipts, invoices).</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">3. Data Usage</h2>
          <p>Your data is used solely to provide and improve our bookkeeping services. We use AI to process your documents and categorize your transactions.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">4. Cookies</h2>
          <p>We use essential cookies to keep you logged in and functional cookies to improve your user experience. See our Cookie Policy for more details.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">5. User Rights</h2>
          <p>You have the right to access, export, or delete your data at any time. We comply with GDPR requirements for UK and EU users.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">6. Contact</h2>
          <p>For privacy-related enquiries, please contact us at privacy@ledgerpilot.io.</p>
        </section>
      </div>
    </Section>
  );
};

export default Privacy;
