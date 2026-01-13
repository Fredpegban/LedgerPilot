
import React from 'react';
import Section from '../components/Section';
import { Accordion } from '../components/ui/Accordion';

const Faq: React.FC = () => {
  const faqs = [
    { 
      title: "What does LedgerPilot do?", 
      content: "LedgerPilot is an AI-powered bookkeeping tool that automates receipt capture, bank reconciliation, and financial reporting. It helps you stay organized for VAT and year-end taxes with minimal manual entry." 
    },
    { 
      title: "Do I need accounting knowledge?", 
      content: "No. LedgerPilot is designed for business owners, not accountants. We use plain English and automate the complex parts of categorization and reconciliation." 
    },
    { 
      title: "How does receipt scanning work?", 
      content: "Simply snap a photo using our mobile app, upload a PDF, or forward an email invoice to your dedicated LedgerPilot inbox. Our AI extracts the vendor, date, total, and VAT details automatically." 
    },
    { 
      title: "Can I import PDFs and bank statements?", 
      content: "Yes, you can upload PDF invoices or CSV bank statements. We also support direct bank connections via Open Banking for real-time automation." 
    },
    { 
      title: "Can my accountant use this?", 
      content: "Absolutely. LedgerPilot generates 'accountant-ready' packs that contain all the evidence and reconciled data they need. You can also grant them read-only access to your dashboard." 
    },
    { 
      title: "Is my data secure?", 
      content: "Yes. We use bank-grade encryption (AES-256) for data at rest and TLS for data in transit. Your financial data is handled with the highest security standards." 
    },
    { 
      title: "Does LedgerPilot submit VAT returns?", 
      content: "LedgerPilot supports record-keeping and VAT-ready reporting (VAT summaries). Direct submission to HMRC depends on your integrated software or your accountant's tools." 
    },
    { 
      title: "Can I cancel anytime?", 
      content: "Yes. We offer monthly subscriptions with no long-term contracts. You can cancel or change your plan at any time through your settings." 
    }
  ];

  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Everything you need to know about LedgerPilot.</p>
      </Section>

      <Section className="max-w-3xl mx-auto">
        <Accordion items={faqs} />
      </Section>
    </div>
  );
};

export default Faq;
