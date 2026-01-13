
import React, { useState } from 'react';
import Section from '../components/Section';
import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section className="py-32 flex items-center justify-center">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Thanks—your message has been received.</h2>
          <p className="text-slate-600 mb-8">We’ll respond by email as soon as possible, usually within 24 hours.</p>
          <Button variant="outline" href="/">Back to Home</Button>
        </div>
      </Section>
    );
  }

  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contact LedgerPilot</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Tell us what you need and we’ll route you to the right team.</p>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Name" placeholder="Your name" required />
                <FormField label="Email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Business type" select options={[
                  { value: 'sole-trader', label: 'Sole Trader' },
                  { value: 'limited', label: 'Limited Company' },
                  { value: 'accountant', label: 'Accountant / Firm' },
                  { value: 'other', label: 'Other' }
                ]} />
                <FormField label="VAT registered?" select options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' }
                ]} />
              </div>
              <FormField label="Topic" select options={[
                { value: 'general', label: 'General Enquiry' },
                { value: 'pricing', label: 'Pricing' },
                { value: 'vat', label: 'VAT & MTD' },
                { value: 'accountant-partner', label: 'Accountant Partnership' },
                { value: 'support', label: 'Support' }
              ]} />
              <FormField label="Message" textarea placeholder="How can we help?" required />
              <Button variant="primary" size="lg" className="w-full">Send message</Button>
            </form>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
