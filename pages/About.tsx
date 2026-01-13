
import React from 'react';
import Section from '../components/Section';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <div className="py-12">
      <Section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Built for small business reality</h1>
        <div className="text-xl text-slate-600 leading-relaxed space-y-6">
          <p>
            LedgerPilot exists to remove the admin barrier that stops owners from understanding profit, cash, and readiness. We believe bookkeeping shouldn't require a degree or hours of your weekend.
          </p>
          <p>
            We focus on automation, clarity, and evidence-driven reporting. Our goal is to make your business financials as easy to understand as a weather forecast.
          </p>
        </div>
        <div className="mt-12">
          <Button variant="primary" size="lg" href="/get-started">Start free</Button>
        </div>
      </Section>

      <Section className="bg-slate-50 border-y border-slate-200">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-2">10k+</h3>
            <p className="text-slate-500 font-medium">Receipts processed daily</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-2">99%</h3>
            <p className="text-slate-500 font-medium">AI Extraction accuracy</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-2">5.0</h3>
            <p className="text-slate-500 font-medium">Average user rating</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
