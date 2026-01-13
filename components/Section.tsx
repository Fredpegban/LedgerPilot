
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', containerClassName = '', id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 md:px-6 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
