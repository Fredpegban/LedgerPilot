
import React from 'react';
import Section from '../components/Section';
import Button from '../components/ui/Button';

const HowItWorks: React.FC = () => {
  return (
    <div className="py-12">
      <Section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">How LedgerPilot works</h1>
        <p className="text-xl text-slate-600">Three steps from messy inputs to clean monthly books.</p>
      </Section>

      <Section>
        <div className="space-y-32">
          {[
            {
              step: "Step 1",
              title: "Capture anything",
              body: "Upload receipts and invoices, forward email bills, import PDFs, or connect your bank. LedgerPilot turns scattered paperwork into structured data.",
              img: "https://picsum.photos/seed/capture/800/600"
            },
            {
              step: "Step 2",
              title: "Autopilot categorises and matches",
              body: "LedgerPilot suggests categories, detects duplicates, and proposes matches between documents and bank transactions—so reconciliation becomes quick and reliable.",
              img: "https://picsum.photos/seed/ai/800/600",
              reverse: true
            },
            {
              step: "Step 3",
              title: "Review exceptions, then get reports",
              body: "Approve low-confidence items, then receive monthly profit and cash summaries, plus exportable VAT/year-end packs.",
              img: "https://picsum.photos/seed/reports/800/600"
            }
          ].map((step, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${step.reverse ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">{step.step}</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{step.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{step.body}</p>
              </div>
              <div className="flex-1 w-full">
                <img src={step.img} alt={step.title} className="rounded-3xl shadow-xl border border-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">What you get each month</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Monthly revenue, costs, profit, and margin",
              "Cash-in/cash-out snapshot",
              "Growth vs last month/quarter",
              "Plain-English “what changed” summary",
              "Readiness checklist (what’s missing)"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button variant="primary" size="lg" href="/get-started">Start free</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HowItWorks;
