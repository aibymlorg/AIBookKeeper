
import React from 'react';
import Header from './components/Header';
import FeatureCard from './components/FeatureCard';
import Section from './components/Section';
import TechPill from './components/TechPill';
import CodeBlock from './components/CodeBlock';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import { FEATURES, HOW_IT_WORKS, TECH_STACK, INSTALLATION_STEPS, AVAILABLE_SCRIPTS, PROJECT_STRUCTURE } from './constants';
import { BookOpenIcon, CodeBracketSquareIcon, CommandLineIcon, CpuChipIcon, CubeTransparentIcon, DocumentDuplicateIcon, FolderIcon, LightBulbIcon, LockClosedIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon, TableCellsIcon, Cog6ToothIcon } from './components/Icons';
import WhatsAppPreview from './components/WhatsAppPreview';
import DashboardPreview from './components/DashboardPreview';
import ControlsPreview from './components/ControlsPreview';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.2] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <main className="relative max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Left Column: Live Interaction */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <span className="text-sky-400 mr-3"><ChatBubbleLeftRightIcon /></span>
              <h2 className="text-xl font-bold text-slate-100">Live Interaction</h2>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <WhatsAppPreview />
            </div>
          </div>

          {/* Right Column: Dashboard and Controls */}
          <div className="lg:col-span-3 space-y-8">
            {/* Document Dashboard */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                    <span className="text-sky-400 mr-3"><TableCellsIcon /></span>
                    <h2 className="text-xl font-bold text-slate-100">Document Dashboard</h2>
                </div>
                <DashboardPreview />
            </div>
            
            {/* Automation Controls */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                    <span className="text-sky-400 mr-3"><Cog6ToothIcon /></span>
                    <h2 className="text-xl font-bold text-slate-100">Automation Controls</h2>
                </div>
                <ControlsPreview />
            </div>
          </div>
        </div>
        
        <Section title="Features" icon={<LightBulbIcon />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </div>
        </Section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-12">
            
            <Section title="How It Works" icon={<CpuChipIcon />}>
              <ol className="relative border-l border-slate-700 ml-4">
                {HOW_IT_WORKS.map((step, index) => (
                  <li key={index} className="mb-8 ml-8">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-900 rounded-full -left-4 ring-4 ring-slate-800 text-sky-400 font-bold">{index + 1}</span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-100">{step.title}</h3>
                    <p className="text-base font-normal text-slate-400">{step.description}</p>
                  </li>
                ))}
              </ol>
            </Section>

            <Section title="Getting Started" icon={<CommandLineIcon />}>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside text-slate-400 mb-6 space-y-1">
                    <li>Node.js 18+</li>
                    <li>A compatible Python backend service (FastAPI-based)</li>
                    <li>WhatsApp Desktop application</li>
                </ul>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Installation</h3>
                <CodeBlock language="bash" code={INSTALLATION_STEPS} />
            </Section>

            <Section title="Available Scripts" icon={<DocumentDuplicateIcon />}>
                 <CodeBlock language="bash" code={AVAILABLE_SCRIPTS} />
            </Section>

          </div>
          <div className="lg:col-span-1 space-y-12">
            <Section title="Technology Stack" icon={<CodeBracketSquareIcon />}>
                <div className="flex flex-wrap gap-2">
                    {TECH_STACK.map((tech, index) => <TechPill key={index}>{tech}</TechPill>)}
                </div>
            </Section>

            <Section title="Architecture" icon={<CubeTransparentIcon />}>
                <ArchitectureDiagram />
                 <p className="mt-4 text-sm text-slate-400">This frontend requires a Python backend to handle screen capture, computer vision, and automation. View the complete architecture by clicking "Show App Architecture" in the application.</p>
            </Section>

            <Section title="A Basic Project Structure" icon={<FolderIcon />}>
                <CodeBlock language="plaintext" code={PROJECT_STRUCTURE} />
            </Section>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Section title="Security & Ethics" icon={<LockClosedIcon />}>
                <p className="text-slate-400 text-sm">This application is designed for book-keeping automation of your own WhatsApp account. Ensure compliance with WhatsApp's Terms of Service and applicable laws when using automation features.</p>
            </Section>
            <Section title="Satisfying Accounting Practices" icon={<ShieldCheckIcon />}>
                <p className="text-slate-400 text-sm">This tool is engineered to support standard accounting workflows. It ensures data integrity by automating extraction, reducing manual entry errors. All automated entries require user confirmation, providing a clear audit trail and ensuring compliance with financial reporting standards.</p>
            </Section>
            <Section title="License" icon={<BookOpenIcon />}>
                <p className="text-slate-400 text-sm">This project is licensed under the MIT License.</p>
            </Section>
        </div>

      </main>
    </div>
  );
};

export default App;
