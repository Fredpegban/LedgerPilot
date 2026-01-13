
import React from 'react';
import Section from '../../components/Section';
import Card from '../../components/ui/Card';
import { Link } from 'react-router-dom';

const tools = [
  {
    title: "Profit Margin Calculator",
    description: "Calculate gross profit, margin, and markup percentages for your products or services.",
    href: "/tools/profit-margin-calculator",
    icon: "📈"
  },
  {
    title: "VAT Calculator",
    description: "Easily calculate VAT amounts for standard, reduced, and zero-rated UK goods.",
    href: "/tools/vat-calculator",
    icon: "📊"
  }
];

export default function ToolsPage() {
  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Business Tools & Calculators</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Free interactive tools designed to help UK small business owners make better financial decisions.</p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <Link key={i} to={tool.href} className="group">
              <Card className="p-8 h-full hover:border-indigo-500 transition-all">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600">{tool.title}</h2>
                <p className="text-slate-600 mb-6">{tool.description}</p>
                <span className="text-indigo-600 font-bold inline-flex items-center gap-2">
                  Use tool
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
