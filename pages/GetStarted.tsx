
import React, { useState } from 'react';
import Section from '../components/Section';
import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const GetStarted: React.FC = () => {
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  if (complete) {
    return (
      <Section className="py-32">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-6">Welcome to LedgerPilot!</h2>
          <p className="text-slate-600 mb-8">Your workspace is being prepared. You'll receive a confirmation email with your login details shortly.</p>
          <Button variant="primary" size="lg" href="/signin">Go to Dashboard</Button>
        </div>
      </Section>
    );
  }

  return (
    <div className="py-12">
      <Section className="text-center pb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Get set up in minutes</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">You’ll connect your bank or upload a statement, then add a few receipts. LedgerPilot will generate your first monthly snapshot.</p>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          <div className="flex justify-between items-center mb-12 px-4">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= num ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'}`}>
                  {num}
                </div>
                <span className={`text-xs font-semibold ${step >= num ? 'text-slate-900' : 'text-slate-400'}`}>
                  {num === 1 ? 'Business' : num === 2 ? 'Data' : num === 3 ? 'Receipts' : 'Review'}
                </span>
              </div>
            ))}
          </div>

          <Card className="p-8 md:p-12">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Tell us about your business</h2>
                <FormField label="Business Name" placeholder="e.g. Acme Studio Ltd" />
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField label="Business Type" select options={[
                    { value: 'sole', label: 'Sole Trader' },
                    { value: 'ltd', label: 'Limited Company' },
                    { value: 'llp', label: 'Partnership' }
                  ]} />
                  <FormField label="Industry" placeholder="e.g. Consulting" />
                </div>
                <FormField label="VAT Registered?" select options={[{value:'no', label:'No'}, {value:'yes', label:'Yes'}]} />
                <Button variant="primary" className="w-full" onClick={nextStep}>Continue</Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-2">Add your transaction data</h2>
                <p className="text-slate-500 mb-6">Connect your bank securely via Open Banking or upload a CSV statement.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <button className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    </div>
                    <span className="font-bold">Connect Bank</span>
                    <span className="text-xs text-slate-400 mt-1">Instant sync via Open Banking</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    </div>
                    <span className="font-bold">Upload Statement</span>
                    <span className="text-xs text-slate-400 mt-1">Upload CSV or PDF</span>
                  </button>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1" onClick={prevStep}>Back</Button>
                  <Button variant="primary" className="flex-1" onClick={nextStep}>I'll do this later</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-2">Upload your first receipts</h2>
                <p className="text-slate-500 mb-6">Let's see the AI in action. Drop a few photos or PDFs here.</p>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center bg-slate-50">
                   <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   </div>
                   <p className="font-medium text-slate-700">Drag & drop files or <span className="text-indigo-600 underline cursor-pointer">browse</span></p>
                   <p className="text-xs text-slate-400 mt-2">Supports JPG, PNG, PDF up to 10MB</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <p className="text-sm text-indigo-700"><strong>Pro tip:</strong> You can also forward email invoices to your unique inbox: <code className="bg-white px-1 rounded">acme-studio@ledgerpilot.io</code></p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1" onClick={prevStep}>Back</Button>
                  <Button variant="primary" className="flex-1" onClick={nextStep}>Continue</Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Final Review</h2>
                <div className="space-y-4">
                  <p className="text-slate-600">Great! We've found 3 potential matches that need your approval.</p>
                  {[
                    { vendor: "Adobe Systems", amount: "£52.79", type: "Subscription" },
                    { vendor: "Sainsbury's", amount: "£14.20", type: "Office Supplies" },
                    { vendor: "TFL", amount: "£8.50", type: "Travel" }
                  ].map((mock, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                       <div>
                         <p className="font-bold text-slate-900">{mock.vendor}</p>
                         <p className="text-xs text-slate-500">{mock.type}</p>
                       </div>
                       <div className="text-right">
                         <p className="font-bold text-indigo-600">{mock.amount}</p>
                         <span className="text-[10px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded font-bold uppercase">Confirm</span>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-100">
                   <Button variant="primary" className="w-full" size="lg" onClick={() => setComplete(true)}>
                     Create my LedgerPilot workspace
                   </Button>
                   <p className="text-center text-xs text-slate-400 mt-4 italic">You control approvals. Exports are available for your accountant.</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default GetStarted;
