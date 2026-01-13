
import React from 'react';

interface LinkItem {
  title: string;
  href: string;
}

export default function InternalLinks({ title, links }: { title: string, links: LinkItem[] }) {
  return (
    <div className="mt-20 pt-10 border-t border-slate-200">
      <h3 className="text-lg font-bold text-slate-900 mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((link, i) => (
          <a 
            key={i} 
            href={link.href} 
            className="text-sm text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
