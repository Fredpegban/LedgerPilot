
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`bg-white rounded-2xl border border-slate-200 p-6 shadow-sm transition-all duration-200 ${hoverEffect ? 'hover:shadow-md hover:translate-y-[-2px]' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
