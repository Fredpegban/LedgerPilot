
import React, { useState } from 'react';
import Section from '../components/Section';
import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const BookDemo: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Section className="py-32 text-center max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4">Request Sent!</h2>
        <p className="text-slate-600 mb-8">One of our specialists will reach out to schedule a time that works for you.</p>
        <Button variant="primary" href="/">Return Home</Button>
      </Section>
    );
  }

  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">See LedgerPilot in action</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Get a personalized walkthrough of how we can automate your bookkeeping workflow.</p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">What to expect:</h2>
            <ul className="space-y-6">
              {[
                { title: "Personalized Workflow", text: "We'll show you how LedgerPilot fits your specific business type." },
                { title: "AI Deep Dive", text: "See how our extraction engine handles complex multi-page invoices." },
                { title: "Partner Program", text: "Learn about accountant-specific tools and firm-wide pricing." },
                { title: "Q&A", text: "Get answers to your technical and compliance questions." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Card className="p-8">
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <FormField label="Full Name" placeholder="John Doe" required />
              <FormField label="Work Email" type="email" placeholder="john@company.com" required />
              <FormField label="Company Name" placeholder="Your Business Ltd" required />
              <FormField label="Your Role" placeholder="e.g. Founder, Partner" required />
              <FormField label="Notes / Questions" textarea placeholder="Anything specific you'd like to see?" />
              <Button variant="primary" className="w-full" size="lg">Request my demo</Button>
            </form>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default BookDemo;
