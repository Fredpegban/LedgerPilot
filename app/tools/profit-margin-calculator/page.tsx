
"use client";
import React, { useState, useEffect } from 'react';
import Section from '../../../components/Section';
import Card from '../../../components/ui/Card';
import FormField from '../../../components/ui/FormField';
import Button from '../../../components/ui/Button';

export default function ProfitMarginCalculator() {
  const [cost, setCost] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);

  const [results, setResults] = useState({
    profit: 0,
    margin: 0,
    markup: 0
  });

  useEffect(() => {
    const profit = revenue - cost;
    const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
    const markup = cost > 0 ? (profit / cost) * 100 : 0;

    setResults({ profit, margin, markup });
  }, [cost, revenue]);

  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Profit Margin Calculator</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Understand your profitability in seconds. Calculate your gross profit, margin, and markup percentages to price your business for growth.
        </p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Inputs */}
          <Card className="p-8">
            <h2 className="text-xl font-bold mb-6 text-slate-900">Step 1: Enter your figures</h2>
            <div className="space-y-6">
              <FormField 
                label="Total Costs (£)" 
                type="number" 
                value={cost || ''} 
                onChange={(e) => setCost(Number(e.target.value))} 
                placeholder="e.g. 1500.00"
              />
              <FormField 
                label="Total Revenue (£)" 
                type="number" 
                value={revenue || ''} 
                onChange={(e) => setRevenue(Number(e.target.value))} 
                placeholder="e.g. 2500.00"
              />
            </div>
            
            <div className="mt-10 p-5 bg-indigo-50 rounded-2xl border border-indigo-100">
               <h4 className="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 Quick Tip
               </h4>
               <p className="text-xs text-indigo-700 leading-relaxed">
                 Include both variable costs (materials, direct labor) and fixed costs (rent, insurance) to get a true picture of your net profitability.
               </p>
            </div>
          </Card>

          {/* Results Display */}
          <div className="space-y-6">
            <Card className="p-8 bg-slate-900 text-white border-none shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full -mr-10 -mt-10"></div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Gross Profit</p>
              <h3 className="text-5xl font-extrabold mb-1">
                £{results.profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </h3>
              <p className="text-slate-500 text-xs italic">Revenue minus costs.</p>
            </Card>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 border-indigo-100 bg-indigo-50/30">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Profit Margin</p>
                <h3 className="text-3xl font-bold text-indigo-600">{results.margin.toFixed(2)}%</h3>
                <p className="text-[10px] text-slate-400 mt-2 font-medium">Profit as a % of sales.</p>
              </Card>
              <Card className="p-6 border-slate-200">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Markup</p>
                <h3 className="text-3xl font-bold text-slate-900">{results.markup.toFixed(2)}%</h3>
                <p className="text-[10px] text-slate-400 mt-2 font-medium">Amount added to cost.</p>
              </Card>
            </div>

            <div className="pt-4">
              <Button variant="primary" size="lg" className="w-full shadow-lg shadow-indigo-200" href="/get-started">
                Automate your profitability reports
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Explanations Section */}
      <Section className="max-w-4xl mx-auto pt-0">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-3 text-lg">Gross Profit</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              The simplest measure of financial success. It represents the money left over after paying for the goods or services you sold, but before taxes and other non-direct overheads.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-3 text-lg">Profit Margin</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Expressed as a percentage, this tells you how much of every £1 your business makes is actual profit. It's a key indicator of your business's efficiency and pricing power.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-3 text-lg">Markup</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Markup shows how much you increase the cost price of a product to reach its final selling price. While related to margin, it is calculated based on the cost, not the revenue.
            </p>
          </div>
        </div>

        <div className="mt-20 p-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2.5rem] text-white text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mb-32 -mr-32"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Never chase a spreadsheet again.</h3>
          <p className="text-indigo-100 mb-10 max-w-xl mx-auto">
            LedgerPilot automatically generates monthly P&L snapshots so you always know your real margins—without the manual math.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-indigo-700 hover:bg-slate-50 border-none" href="/get-started">
              Start free trial
            </Button>
            <Button variant="outline" size="lg" className="border-indigo-400 text-white hover:bg-indigo-700" href="/features">
              Explore features
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
