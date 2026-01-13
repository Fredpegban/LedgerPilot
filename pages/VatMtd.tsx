
import React from 'react';
import Section from '../components/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const VatMtd: React.FC = () => {
  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">VAT and MTD—without the stress</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">Keep digital records, stay organised, and generate VAT-ready summaries with minimal admin.</p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Keep VAT evidence organised",
              body: "LedgerPilot links receipts and invoices to transactions so you can trace totals back to evidence."
            },
            {
              title: "Reduce common VAT errors",
              body: "Flag anomalies such as duplicates, unusual totals, or missing evidence—then fix issues before month-end."
            },
            {
              title: "Generate VAT-ready summaries",
              body: "Create exportable VAT summaries and reports to support your filing workflow."
            }
          ].map((item, i) => (
            <Card key={i} className="p-8">
              <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white border border-slate-200 rounded-2xl">
            <h4 className="font-bold text-slate-900 mb-4">A quick note on filing</h4>
            <p className="text-slate-600">LedgerPilot supports VAT record-keeping and VAT-ready reporting. Filing submission options depend on your chosen workflow and integrations.</p>
          </div>
          <div className="text-center mt-12">
            <Button variant="primary" size="lg" href="/get-started">Start free</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default VatMtd;
