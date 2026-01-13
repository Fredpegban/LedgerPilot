
import React from 'react';
import Section from '../components/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Accountants: React.FC = () => {
  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Cleaner books. Easier year-end. Happier clients.</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">LedgerPilot helps clients capture evidence and keep reconciled records—so your team spends less time chasing paperwork.</p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              "Fewer missing receipts and gaps",
              "Consistent categorisation and clearer audit trail",
              "Exportable year-end packs",
              "Optional read-only access (plan-dependent)"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-lg font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div>
            <Card className="bg-slate-900 text-white p-10 border-none">
              <h3 className="text-2xl font-bold mb-8">How it works for your firm</h3>
              <div className="space-y-8 relative">
                <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-700"></div>
                {[
                  "Client captures receipts and connects bank",
                  "LedgerPilot organises evidence and suggests reconciliation",
                  "Accountant receives a tidy export pack (or portal access)"
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-lg text-slate-300 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="primary" size="lg" href="/contact">Partner with LedgerPilot</Button>
          <Button variant="outline" size="lg" href="/book-demo">Request a demo</Button>
        </div>
      </Section>
    </div>
  );
};

export default Accountants;
