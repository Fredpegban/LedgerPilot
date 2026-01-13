
import React from 'react';
import Section from '../../components/Section';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import JsonLd from '../../components/seo/JsonLd';
import { getSoftwareAppSchema, getFaqSchema } from '../../lib/seo/jsonld';
import { Accordion } from '../../components/ui/Accordion';

export const metadata = {
  title: 'Bookkeeping Software UK | AI-Powered Automation for Small Business',
  description: 'The best bookkeeping software for UK small businesses and sole traders. Automate your records with AI extraction and stay HMRC compliant.',
  alternates: { canonical: '/bookkeeping-software-uk' }
};

const faqs = [
  { q: "What is the best bookkeeping software for UK sole traders?", a: "For UK sole traders, software that automates receipt capture and bank matching—like LedgerPilot—is ideal for saving time and ensuring tax readiness." },
  { q: "Is LedgerPilot HMRC compliant?", a: "Yes, LedgerPilot supports Making Tax Digital (MTD) record-keeping requirements for UK businesses." }
];

export default function BookkeepingSoftwareUK() {
  return (
    <>
      <JsonLd data={getSoftwareAppSchema('19.00')} />
      <JsonLd data={getFaqSchema(faqs)} />
      
      <Section className="pt-20 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Bookkeeping software UK owners actually use.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Stop wasting hours on manual data entry. LedgerPilot is the UK-first bookkeeping solution built to automate your financial records, from capture to reconciliation.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg" href="/get-started">Start free trial</Button>
            <Button variant="outline" size="lg" href="/pricing">View Plans</Button>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8">
            <h2 className="text-xl font-bold mb-4">MTD Compliant</h2>
            <p className="text-slate-600">Stay on the right side of HMRC with digital record-keeping and VAT-ready summaries.</p>
          </Card>
          <Card className="p-8">
            <h2 className="text-xl font-bold mb-4">AI Extraction</h2>
            <p className="text-slate-600">Our advanced AI scans receipts and invoices with 99% accuracy, saving you hours of manual typing.</p>
          </Card>
          <Card className="p-8">
            <h2 className="text-xl font-bold mb-4">Bank Sync</h2>
            <p className="text-slate-600">Connect to your UK bank account via Open Banking for real-time transaction matching.</p>
          </Card>
        </div>
      </Section>

      <Section className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">UK Bookkeeping FAQ</h2>
          <Accordion items={faqs.map(f => ({ title: f.q, content: f.a }))} />
        </div>
      </Section>

      <Section className="py-20 text-center">
        <div className="bg-slate-900 text-white p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to simplify your books?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Join thousands of UK businesses automating their bookkeeping with LedgerPilot.</p>
          <Button variant="secondary" size="lg" href="/get-started">Get Started for Free</Button>
        </div>
      </Section>
    </>
  );
}
