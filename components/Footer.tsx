
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Reset after a few seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Newsletter */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-[10px]">
                LP
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">LedgerPilot</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-8">
              AI bookkeeping that keeps you return-ready. Built for small UK businesses, sole traders, and accountants.
            </p>
            
            <div className="max-w-sm">
              <h4 className="text-slate-900 font-semibold mb-2 text-sm">Stay return-ready</h4>
              <p className="text-slate-500 text-xs mb-4">Get bookkeeping tips and product updates delivered to your inbox.</p>
              
              {isSubscribed ? (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thanks for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address" 
                    required
                    className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all"
                  />
                  <button 
                    type="submit" 
                    className="bg-slate-900 text-white rounded-xl px-6 py-2 text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Product */}
          <div className="md:ml-auto lg:ml-0">
            <h4 className="text-slate-900 font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-slate-500 text-sm hover:text-indigo-600">Features</Link></li>
              <li><Link to="/pricing" className="text-slate-500 text-sm hover:text-indigo-600">Pricing</Link></li>
              <li><Link to="/how-it-works" className="text-slate-500 text-sm hover:text-indigo-600">How it works</Link></li>
              <li><Link to="/security" className="text-slate-500 text-sm hover:text-indigo-600">Security</Link></li>
              <li><Link to="/tools" className="text-slate-500 text-sm hover:text-indigo-600">Free Tools</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:ml-auto lg:ml-0">
            <h4 className="text-slate-900 font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-slate-500 text-sm hover:text-indigo-600">Blog</Link></li>
              <li><Link to="/faq" className="text-slate-500 text-sm hover:text-indigo-600">FAQ</Link></li>
              <li><Link to="/about" className="text-slate-500 text-sm hover:text-indigo-600">About</Link></li>
              <li><Link to="/contact" className="text-slate-500 text-sm hover:text-indigo-600">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="md:ml-auto lg:ml-0">
            <h4 className="text-slate-900 font-semibold mb-4 text-sm">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/accountants" className="text-slate-500 text-sm hover:text-indigo-600">For Accountants</Link></li>
              <li><Link to="/vat-mtd" className="text-slate-500 text-sm hover:text-indigo-600">VAT & MTD</Link></li>
              <li><Link to="/get-started" className="text-slate-500 text-sm hover:text-indigo-600">Get Started</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} LedgerPilot. All rights reserved. LedgerPilot is a software tool for bookkeeping records.
          </p>
          <div className="flex gap-6">
            <Link to="/legal/privacy" className="text-slate-400 text-xs hover:text-indigo-600">Privacy</Link>
            <Link to="/legal/terms" className="text-slate-400 text-xs hover:text-indigo-600">Terms</Link>
            <Link to="/legal/cookies" className="text-slate-400 text-xs hover:text-indigo-600">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
