
"use client";
import React, { useState, useEffect } from 'react';
import Section from '../../../components/Section';
import Card from '../../../components/ui/Card';
import FormField from '../../../components/ui/FormField';
import Button from '../../../components/ui/Button';

export default function VatCalculator() {
  const [amount, setAmount] = useState<number>(0);
  const [rate, setRate] = useState<number>(20);
  const [isInclusive, setIsInclusive] = useState<boolean>(false);

  const [results, setResults] = useState({
    net: 0,
    vat: 0,
    gross: 0
  });

  useEffect(() => {
    let net = 0;
    let vat = 0;
    let gross = 0;

    if (isInclusive) {
      gross = amount;
      net = amount / (1 + rate / 100);
      vat = gross - net;
    } else {
      net = amount;
      vat = amount * (rate / 100);
      gross = net + vat;
    }

    setResults({ net, vat, gross });
  }, [amount, rate, isInclusive]);

  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">UK VAT Calculator</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Calculate your VAT payable on business turnover or purchases. Supports standard, reduced, and zero-rated UK categories.
        </p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <Card className="p-8">
            <h2 className="text-xl font-bold mb-6">Calculate VAT Payable</h2>
            <div className="space-y-6">
              <FormField 
                label="VAT-Eligible Turnover (£)" 
                type="number" 
                value={amount || ''} 
                onChange={(e) => setAmount(Number(e.target.value))} 
                placeholder="e.g. 50000"
              />
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">VAT Rate (%)</label>
                <div className="grid grid-cols-3 gap-2">
                  {[20, 5, 0].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setRate(v)}
                      className={`py-2 px-4 rounded-xl border font-medium transition-all ${rate === v ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                    >
                      {v}%
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Amount Status</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setIsInclusive(false)}
                    className={`py-2 px-4 rounded-xl border font-medium transition-all ${!isInclusive ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                  >
                    Excl. VAT
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsInclusive(true)}
                    className={`py-2 px-4 rounded-xl border font-medium transition-all ${isInclusive ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                  >
                    Incl. VAT
                  </button>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-indigo-600 text-white border-none shadow-xl">
              <p className="text-indigo-100 text-sm font-bold uppercase tracking-wider mb-2">Estimated VAT Payable</p>
              <h3 className="text-5xl font-extrabold">£{results.vat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
              <p className="text-indigo-200 text-xs mt-4">Based on a {rate}% VAT rate.</p>
            </Card>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Net (Turnover)</p>
                <h3 className="text-2xl font-bold text-slate-900">£{results.net.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
              </Card>
              <Card className="p-6">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Gross (Total)</p>
                <h3 className="text-2xl font-bold text-slate-900">£{results.gross.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
              </Card>
            </div>

            <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">What is VAT Payable?</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                VAT payable is the amount of tax you collect from customers (output VAT) minus the tax you paid on business-related purchases (input VAT). This tool estimates the output VAT portion based on your turnover.
              </p>
            </div>

            <div className="pt-4">
              <Button variant="primary" size="lg" className="w-full" href="/get-started">
                Automate your VAT returns with LedgerPilot
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="max-w-3xl mx-auto">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Making Tax Digital for VAT</h2>
          <p className="text-slate-600 mb-6">
            Under HMRC's Making Tax Digital (MTD) rules, most UK businesses must maintain digital records and submit their VAT returns using compatible software. Calculating VAT manually increases the risk of errors and potential penalties.
          </p>
          <p className="text-slate-600 mb-6">
            LedgerPilot removes the stress by automatically extracting VAT from your invoices and syncing with your bank account to ensure every penny is accounted for.
          </p>
          <div className="mt-10 p-8 bg-slate-900 rounded-3xl text-white">
            <h3 className="text-xl font-bold mb-4">Stop guessing your tax bill.</h3>
            <p className="text-slate-400 mb-6">Get real-time insights into your profit and tax liabilities with our owner-friendly dashboard.</p>
            <Button variant="secondary" href="/get-started">Start free trial</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
