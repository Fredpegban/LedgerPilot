
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-none">
      <button 
        className="w-full flex justify-between items-center py-5 text-left font-medium text-slate-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <svg 
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5 text-slate-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion: React.FC<{ items: { title: string; content: string }[] }> = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
