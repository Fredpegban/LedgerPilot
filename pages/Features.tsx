
import React from 'react';
import Section from '../components/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Features: React.FC = () => {
  const featureGroups = [
    {
      title: "Capture",
      items: [
        "Mobile receipt and invoice scan",
        "PDF upload (invoices/statements)",
        "Email-forwarding inbox for bills",
        "Bank connection and statement import",
        "One-line manual entry (fast, owner-friendly)"
      ]
    },
    {
      title: "AI Engine",
      items: [
        "Auto-extraction (supplier/date/total/VAT)",
        "Category suggestions with confidence scoring",
        "Rules that learn your business (recurring merchants)",
        "Invoice ↔ bank matching suggestions",
        "Duplicate detection and anomaly flags"
      ]
    },
    {
      title: "Reconciliation & Evidence",
      items: [
        "Match and confirm workflow",
        "Attach receipts to transactions for evidence",
        "Audit trail of approvals and changes",
        "Exportable ledger and packs"
      ]
    },
    {
      title: "Insights",
      items: [
        "Monthly P&L and cash snapshot",
        "Top spend categories + trends",
        "Plain-English ‘what changed’ narrative",
        "Growth tracking month-over-month"
      ]
    }
  ];

  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Features built for busy owners</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Automation where it matters, control where it counts.</p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {featureGroups.map((group, i) => (
            <Card key={i} className="p-10 border-slate-100 hover:border-indigo-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
                {group.title}
              </h2>
              <ul className="space-y-4">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-indigo-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to automate your bookkeeping?</h2>
          <p className="text-lg text-slate-600 mb-10">Join hundreds of small businesses saving 10+ hours a month on admin.</p>
          <Button variant="primary" size="lg" href="/get-started">Create my workspace</Button>
        </div>
      </Section>
    </div>
  );
};

export default Features;
