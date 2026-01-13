
import React from 'react';
import Section from '../components/Section';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="py-12">
      <Section className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm font-bold text-indigo-600 mb-8 inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
          Back to blog
        </Link>
        <div className="mb-10">
          <span className="text-xs text-indigo-600 font-bold uppercase tracking-widest mb-2 block">Resource</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Understanding Bookkeeping for Modern UK Small Businesses
          </h1>
          <p className="text-slate-500 mt-4 font-medium">Published on Oct 12, 2024 • 8 min read</p>
        </div>
        
        <img src={`https://picsum.photos/seed/${slug}/1200/600`} alt="Article header" className="w-full rounded-3xl mb-12 shadow-lg" />

        <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The evolution of bookkeeping</h2>
          <p>
            Bookkeeping used to mean physical ledgers, endless shoe boxes of receipts, and late nights spent with a calculator. For modern owners, that is no longer acceptable. Time is the most valuable asset, and admin is a drain on growth.
          </p>
          <p>
            In the UK, the introduction of <strong>Making Tax Digital (MTD)</strong> has accelerated the shift toward digital records. But simply going digital isn't enough—automation is the true unlock.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Key steps to staying return-ready:</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Capture immediately:</strong> Don't let receipts pile up. Snap them as they happen.</li>
            <li><strong>Match transactions:</strong> Ensure every bank movement has a corresponding piece of evidence.</li>
            <li><strong>Categorise correctly:</strong> Consistent tagging makes your monthly reports meaningful.</li>
            <li><strong>Review frequently:</strong> Spending 5 minutes a week saves 5 hours at month-end.</li>
          </ul>
          <p className="mt-8">
            Leveraging AI tools like LedgerPilot allows you to handle these steps on autopilot. Our engine learns your business habits, meaning it gets smarter and faster the more you use it.
          </p>
        </div>

        <div className="mt-16 p-8 md:p-12 bg-indigo-600 rounded-3xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to automate your books?</h3>
          <p className="text-indigo-100 mb-8">Set up in 2 minutes and let LedgerPilot handle the heavy lifting.</p>
          <Button variant="secondary" className="bg-white text-indigo-700 hover:bg-indigo-50 border-none" href="/get-started">Start your free trial</Button>
        </div>
      </Section>
    </div>
  );
};

export default BlogPost;
