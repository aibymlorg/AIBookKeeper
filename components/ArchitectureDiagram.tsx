
import React from 'react';
import { ArrowDownIcon } from './Icons';

const ArchBox: React.FC<{children: React.ReactNode; className?: string}> = ({ children, className }) => (
    <div className={`w-full text-center bg-slate-900 border-2 border-slate-600 rounded-lg py-3 px-4 shadow-lg ${className}`}>
        <p className="font-semibold text-slate-200 text-sm">{children}</p>
    </div>
);

const ArchConnector: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="text-center my-2">
        <ArrowDownIcon />
        <p className="text-xs text-sky-400 font-mono">{children}</p>
    </div>
);

const ArchitectureDiagram: React.FC = () => {
    return (
        <div className="flex flex-col items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
            <ArchBox className="border-sky-500">
                Frontend (This App)<br/><span className="text-xs text-slate-400">Next.js 15, React 19</span>
            </ArchBox>
            
            <ArchConnector>HTTP REST API / WebSocket</ArchConnector>

            <ArchBox className="border-green-500">
                Backend Service<br/><span className="text-xs text-slate-400">Python / FastAPI</span>
            </ArchBox>

            <div className="w-full pl-8 mt-2">
                <div className="relative border-l-2 border-dashed border-slate-600 pl-6 py-2">
                     <div className="absolute -left-[11px] top-1/2 -translate-y-1/2 w-5 h-[2px] bg-slate-600"></div>
                     <p className="text-xs text-slate-400 font-medium">Handles:</p>
                     <ul className="text-xs text-slate-500 mt-1 space-y-1 list-disc list-inside">
                        <li>Screen Capture</li>
                        <li>Computer Vision (CV)</li>
                        <li>LLM Multi-modal OCR</li>
                        <li>Book-keeping Logic</li>
                        <li>Automation Control</li>
                     </ul>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureDiagram;
