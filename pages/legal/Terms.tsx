
import React from 'react';
import Section from '../../components/Section';

const Terms: React.FC = () => {
  return (
    <Section className="py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
      <div className="space-y-8 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">1. Use of Service</h2>
          <p>LedgerPilot provides software tools for bookkeeping and record management. We do not provide professional accounting or legal advice.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">2. Subscriptions</h2>
          <p>Monthly subscriptions are billed in advance. You can cancel at any time, but we do not provide partial-month refunds.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">3. Accuracy of Data</h2>
          <p>While our AI is highly accurate, you are responsible for reviewing and confirming all categorization and reconciliation actions before using data for tax filing.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">4. Liability</h2>
          <p>LedgerPilot is not liable for errors in tax submissions or financial decisions made based on the software output.</p>
        </section>
      </div>
    </Section>
  );
};

export default Terms;
