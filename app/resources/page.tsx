
import React from 'react';
import Section from '../../components/Section';
import Card from '../../components/ui/Card';
import { Link } from 'react-router-dom'; // Note: In App Router use next/link

export const metadata = {
  title: 'UK Small Business Resources | LedgerPilot',
  description: 'Free guides, templates, and tools to help UK business owners manage their finances and stay return-ready.'
};

export default function ResourcesHub() {
  const resources = [
    { title: "Financial Guides", desc: "Expert advice on VAT, MTD, and UK tax laws.", href: "/guides", icon: "📚" },
    { title: "Free Templates", desc: "Downloadable P&L, Invoice, and Expense trackers.", href: "/templates", icon: "📄" },
    { title: "Business Tools", desc: "Interactive margin and VAT calculators.", href: "/tools", icon: "🧮" }
  ];

  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Resources for UK Owners</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Everything you need to manage your business finance, from first invoice to year-end packs.</p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <Card key={i} className="p-8 hover:border-indigo-500 transition-colors">
              <div className="text-4xl mb-6">{res.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">{res.title}</h2>
              <p className="text-slate-600 mb-8">{res.desc}</p>
              <a href={res.href} className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-2">
                Browse {res.title}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
