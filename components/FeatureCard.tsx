
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-sky-500 transition-colors duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-3">
        <span className="text-sky-400 mr-3">{icon}</span>
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      </div>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
