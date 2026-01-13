
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import FormField from '../components/ui/FormField';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 group mb-8">
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold group-hover:bg-indigo-600 transition-colors">
              LP
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">LedgerPilot</span>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Sign in to your account</h1>
          <p className="text-slate-500 mt-2">Welcome back, let's handle those books.</p>
        </div>
        
        <Card className="p-8 shadow-xl border-slate-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <FormField label="Email address" type="email" placeholder="you@example.com" required />
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-500">Forgot?</a>
              </div>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 bg-slate-50"
                placeholder="••••••••"
                required
              />
            </div>
            <Button variant="primary" className="w-full" size="lg">Sign in</Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              New here? <Link to="/get-started" className="font-bold text-indigo-600 hover:text-indigo-500">Start free</Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
