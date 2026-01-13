
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string;
  error?: string;
  type?: string;
  textarea?: boolean;
  select?: boolean;
  options?: { value: string; label: string }[];
}

const FormField: React.FC<InputProps> = ({ 
  label, 
  error, 
  textarea = false, 
  select = false, 
  options = [], 
  ...props 
}) => {
  const baseClasses = "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 bg-slate-50";

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      
      {textarea ? (
        <textarea 
          className={`${baseClasses} min-h-[120px] resize-none`} 
          {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>} 
        />
      ) : select ? (
        <select 
          className={baseClasses} 
          {...props as React.SelectHTMLAttributes<HTMLSelectElement>}
        >
          {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      ) : (
        <input 
          className={baseClasses} 
          {...props as React.InputHTMLAttributes<HTMLInputElement>} 
        />
      )}
      
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default FormField;
