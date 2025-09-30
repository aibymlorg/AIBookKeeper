
import React from 'react';

interface TechPillProps {
  children: React.ReactNode;
}

const TechPill: React.FC<TechPillProps> = ({ children }) => {
  return (
    <span className="inline-block bg-sky-900/50 text-sky-300 text-xs font-medium px-3 py-1 rounded-full border border-sky-800">
      {children}
    </span>
  );
};

export default TechPill;
