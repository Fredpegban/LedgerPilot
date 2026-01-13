
import React from 'react';
import Section from '../components/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { Accordion } from '../components/ui/Accordion';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "£0",
      desc: "Perfect for starting out",
      features: [
        "Limited uploads and imports",
        "Basic monthly snapshot",
        "CSV/PDF exports"
      ],
      cta: "Start free",
      href: "/get-started",
      variant: "outline"
    },
    {
      name: "Pro",
      price: "£19",
      period: "/mo",
      desc: "Our most popular plan",
      badge: "Recommended",
      features: [
        "Unlimited capture (scan/upload/email)",
        "Bank feed automation",
        "Categorisation + reconciliation suggestions",
        "VAT-ready summaries and exports",
        "Year-end pack export"
      ],
      cta: "Start Pro",
      href: "/get-started",
      variant: "primary"
    },
    {
      name: "Premium",
      price: "Custom",
      desc: "For growing teams",
      features: [
        "Multi-entity support",
        "Team roles and permissions",
        "Accountant access (read-only + notes)",
        "Advanced insights and priority support"
      ],
      cta: "Talk to sales",
      href: "/contact",
      variant: "outline"
    }
  ];

  const faqs = [
    { title: "Can I cancel anytime?", content: "Yes. No long contracts. You can switch plans or cancel from your workspace settings at any time." },
    { title: "Can my accountant access my data?", content: "Yes—via exports or dedicated accountant access available on our Pro and Premium plans." },
    { title: "Is VAT filing included?", content: "We provide VAT-ready summaries and digital records compliant with MTD requirements. Direct filing submission options depend on your chosen software integrations." }
  ];

  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Simple pricing that fits small businesses</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Start small. Upgrade when you want deeper automation and packs.</p>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card key={i} className={`relative flex flex-col p-8 ${plan.variant === 'primary' ? 'border-indigo-600 shadow-xl scale-105' : 'border-slate-200'}`}>
              {plan.badge && (
                <div className="absolute top-0 right-0 -mt-3 mr-6">
                  <Badge variant="success">{plan.badge}</Badge>
                </div>
              )}
              <h2 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h2>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                {plan.period && <span className="text-slate-500 font-medium">{plan.period}</span>}
              </div>
              <p className="text-slate-600 text-sm mb-8">{plan.desc}</p>
              
              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.variant as any} 
                href={plan.href} 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
        <Accordion items={faqs} />
      </Section>
    </div>
  );
};

export default Pricing;
