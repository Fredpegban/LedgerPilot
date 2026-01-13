
"use client";
import React, { useState } from 'react';
import Section from '../../../components/Section';
import Card from '../../../components/ui/Card';
import FormField from '../../../components/ui/FormField';
import Button from '../../../components/ui/Button';

export default function ProfitMarginCalculator() {
  const [cost, setCost] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);

  const profit = revenue - cost;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
  const markup = cost > 0 ? (profit / cost) * 100 : 0;

  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Free Profit Margin Calculator</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Calculate your gross profit, margin, and markup percentages instantly to price your services correctly.</p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <Card className="p-8">
            <h2 className="text-xl font-bold mb-6">Input Figures</h2>
            <div className="space-y-6">
              <FormField 
                label="Total Costs (£)" 
                type="number" 
                value={cost || ''} 
                onChange={(e) => setCost(Number(e.target.value))} 
                placeholder="0.00"
              />
              <FormField 
                label="Total Revenue / Sales (£)" 
                type="number" 
                value={revenue || ''} 
                onChange={(e) => setRevenue(Number(e.target.value))} 
                placeholder="0.00"
              />
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100">
               <p className="text-sm text-slate-500 italic">This tool helps UK small businesses understand their profitability. For automated P&L reporting, try LedgerPilot.</p>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-indigo-600 text-white border-none shadow-xl">
              <p className="text-indigo-100 text-sm font-bold uppercase tracking-wider mb-2">Gross Profit</p>
              <h3 className="text-5xl font-extrabold">£{profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
            </Card>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Profit Margin</p>
                <h3 className="text-2xl font-bold text-slate-900">{margin.toFixed(2)}%</h3>
              </Card>
              <Card className="p-6">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Markup</p>
                <h3 className="text-2xl font-bold text-slate-900">{markup.toFixed(2)}%</h3>
              </Card>
            </div>
            <div className="pt-6">
              <Button variant="primary" size="lg" className="w-full" href="/get-started">
                Automate your P&L reports
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
