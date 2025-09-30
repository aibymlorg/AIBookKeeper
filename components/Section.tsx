
import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
      <div className="flex items-center mb-4">
        {icon && <span className="text-sky-400 mr-3">{icon}</span>}
        <h2 className="text-xl font-bold text-slate-100">{title}</h2>
      </div>
      <div className="text-slate-400">
        {children}
      </div>
    </section>
  );
};

export default Section;
