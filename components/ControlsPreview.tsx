
import React from 'react';
import { ArrowPathIcon, DocumentTextIcon, MagnifyingGlassIcon } from './Icons';

const ControlButton = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
    <button className="flex items-center w-full p-3 bg-slate-800/60 rounded-lg text-left text-slate-200 hover:bg-slate-700/80 transition-colors group">
        <span className="text-sky-400 group-hover:text-sky-300 transition-colors">{icon}</span>
        <span className="ml-4 font-medium">{children}</span>
    </button>
);

const ControlsPreview: React.FC = () => {
    return (
        <div className="space-y-3">
            <ControlButton icon={<MagnifyingGlassIcon />}>WhatsApp Bookkeeping Entries Process Checking</ControlButton>
            <ControlButton icon={<ArrowPathIcon />}>Process Pending Receipts</ControlButton>
            <ControlButton icon={<DocumentTextIcon />}>Generate Ledger Entries</ControlButton>
        </div>
    );
};

export default ControlsPreview;
