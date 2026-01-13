
import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const Blog: React.FC = () => {
  const posts = [
    { 
      slug: "ai-bookkeeping-benefits", 
      title: "5 ways AI is changing small business bookkeeping", 
      excerpt: "Discover how artificial intelligence is helping owners save hours every week on admin tasks...", 
      date: "Oct 12, 2024", 
      category: "Automation" 
    },
    { 
      slug: "vat-mtd-guide-2024", 
      title: "The 2024 Guide to VAT and Making Tax Digital", 
      excerpt: "Staying compliant doesn't have to be a headache. Here is what you need to know about digital records...", 
      date: "Oct 05, 2024", 
      category: "Compliance" 
    },
    { 
      slug: "cash-flow-management", 
      title: "Mastering your cash flow as a freelancer", 
      excerpt: "Tips for managing irregular income and tracking your expenses without the stress...", 
      date: "Sep 28, 2024", 
      category: "Finance" 
    },
    { 
      slug: "receipt-organisation-tips", 
      title: "How to never lose a receipt again", 
      excerpt: "A simple workflow for capturing expenses on the go so you're always ready for year-end...", 
      date: "Sep 21, 2024", 
      category: "Tips" 
    },
    { 
      slug: "accountant-collaboration", 
      title: "How to make your accountant's life easier", 
      excerpt: "A tidy year-end pack is the best gift you can give your accountant. Here is how to build one...", 
      date: "Sep 14, 2024", 
      category: "Business" 
    },
    { 
      slug: "ledgerpilot-product-update", 
      title: "LedgerPilot Update: New Bank Connections", 
      excerpt: "We've added support for 15+ new UK banks and improved our AI extraction engine...", 
      date: "Sep 07, 2024", 
      category: "Product" 
    }
  ];

  return (
    <div className="py-12">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">The LedgerPilot Blog</h1>
        <p className="text-xl text-slate-600">Insights, guides, and updates for small business owners.</p>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link key={i} to={`/blog/${post.slug}`} className="block h-full group">
              <Card className="flex flex-col h-full overflow-hidden">
                <div className="aspect-video bg-slate-100 mb-6 rounded-xl overflow-hidden">
                  <img src={`https://picsum.photos/seed/${post.slug}/600/400`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                   <Badge variant="default">{post.category}</Badge>
                   <span className="text-xs text-slate-400 font-medium">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{post.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                <span className="text-indigo-600 text-sm font-bold mt-6 inline-flex items-center gap-1">
                  Read article 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blog;
