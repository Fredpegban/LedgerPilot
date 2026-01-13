
import React from 'react';
import Section from '../../components/Section';
import { guides } from '../../lib/content/guides';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

export const metadata = {
  title: 'Small Business Bookkeeping Guides | LedgerPilot',
  description: 'Expert advice and how-to guides for UK small business owners managing their bookkeeping and taxes.'
};

export default function GuidesIndex() {
  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Bookkeeping Guides</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Master your business finance with our UK-specific expert guides.</p>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, i) => (
            <a key={i} href={`/guides/${guide.slug}`}>
              <Card className="h-full flex flex-col p-8 hover:border-indigo-500 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="default">{guide.category}</Badge>
                  <span className="text-xs text-slate-400 font-medium">{guide.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{guide.title}</h2>
                <p className="text-slate-600 text-sm flex-grow leading-relaxed">{guide.excerpt}</p>
                <span className="text-indigo-600 text-sm font-bold mt-6">Read guide &rarr;</span>
              </Card>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
