
import React from 'react';
import Section from '../components/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-12 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-50/50 to-transparent -z-10 blur-3xl opacity-60"></div>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge variant="default">Beta now available in UK</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mt-6 tracking-tight leading-[1.1]">
            AI bookkeeping that keeps you <span className="text-indigo-600">return-ready.</span>
          </h1>
          <p className="text-xl text-slate-600 mt-8 max-w-2xl leading-relaxed">
            Scan receipts, connect your bank, and LedgerPilot matches, categorises, and reconciles transactions—so you get clear monthly profit, cash insights, and year-end packs in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button variant="primary" size="lg" href="/get-started">Start free</Button>
            <Button variant="outline" size="lg" href="/how-it-works">See how it works</Button>
          </div>
          <p className="mt-8 text-slate-500 text-sm font-medium">
            Built for small UK businesses. Owner-friendly. Accountant-ready exports.
          </p>
        </div>
      </Section>

      {/* Problem Section */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Stop guessing. Start knowing.</h2>
            <div className="mt-8 space-y-4">
              {[
                "Know your profit every month",
                "See where money goes (top categories + trends)",
                "Stay organised for VAT and year-end",
                "Reduce admin time with autopilot matching"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-lg text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-inner flex items-center justify-center">
              {/* Mock Dashboard Representation */}
              <div className="w-full h-full p-8 flex flex-col gap-4">
                <div className="h-8 bg-white rounded w-1/3"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-white rounded-xl border border-slate-200 shadow-sm"></div>
                  <div className="h-24 bg-indigo-50 rounded-xl border border-indigo-100 shadow-sm"></div>
                  <div className="h-24 bg-white rounded-xl border border-slate-200 shadow-sm"></div>
                </div>
                <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
                   <span className="text-slate-300 font-bold italic">Dashboard Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Simple 3-step workflow</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: 1, title: "Capture", body: "Snap receipts, upload invoices, forward emails, connect your bank." },
            { step: 2, title: "Autopilot", body: "We extract data, suggest categories, and match documents to bank transactions." },
            { step: 3, title: "Reports", body: "Monthly profit and cash snapshots, plus an accountant-ready year-end pack." }
          ].map((item, i) => (
            <Card key={i} className="flex flex-col items-center text-center p-8">
              <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Use Cases Grid */}
      <Section className="bg-slate-900 text-white py-24 rounded-[3rem] mx-4 md:mx-6 my-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Solutions for every owner</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Sole traders & freelancers", text: "stay organised without bookkeeping stress" },
            { title: "Micro limited companies", text: "tidy books and cleaner year-end packs" },
            { title: "VAT-registered businesses", text: "digital records and VAT-ready summaries" },
            { title: "E-commerce & agencies", text: "clearer margins and spend tracking" }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-xl mb-3 text-indigo-400">{item.title}</h4>
              <p className="text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Block */}
      <Section>
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get your books under control—without becoming an accountant.</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Set up in minutes. Autopilot handles the routine. You approve exceptions only.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-indigo-700 hover:bg-slate-50 border-none" href="/get-started">
            Create my LedgerPilot workspace
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home;
