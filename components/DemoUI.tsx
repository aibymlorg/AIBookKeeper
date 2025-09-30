
import React from 'react';
import { ArrowPathIcon, DocumentTextIcon, MagnifyingGlassIcon, WifiIcon, SignalIcon, BatteryIcon, PhoneIcon, VideoCameraIcon, EllipsisVerticalIcon, PaperClipIcon, CameraIcon, MicrophoneIcon } from './Icons';

const PhotoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const WhatsAppPreview: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-full py-8 lg:py-0">
            <div className="relative mx-auto border-slate-900 bg-slate-900 border-[10px] rounded-[2.5rem] h-[550px] w-[270px] shadow-xl">
                <div className="w-[130px] h-[18px] bg-slate-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
                <div className="h-full w-full bg-slate-800 overflow-hidden rounded-[2rem]">
                    <div 
                        className="h-full w-full flex flex-col"
                        style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
                    >
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-4 pt-3 text-xs text-slate-400 font-sans font-bold">
                            <span>9:41</span>
                            <div className="flex items-center gap-1">
                                <SignalIcon /> <WifiIcon /> <BatteryIcon />
                            </div>
                        </div>

                        {/* WhatsApp Header */}
                        <div className="flex items-center p-2 bg-slate-800/80 backdrop-blur-sm shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            <div className="w-9 h-9 rounded-full bg-green-500 flex-shrink-0 ml-2 mr-3"></div>
                            <div>
                                <p className="text-slate-100 font-semibold text-sm">Finance Dept</p>
                                <p className="text-xs text-slate-400">online</p>
                            </div>
                            <div className="ml-auto flex items-center gap-4 text-slate-300">
                                <VideoCameraIcon /> <PhoneIcon /> <EllipsisVerticalIcon />
                            </div>
                        </div>
                        
                        {/* Chat Messages Area */}
                        <div className="flex-grow p-3 overflow-y-auto flex flex-col justify-end">
                            {/* Sales Invoice */}
                            <div className="flex justify-start mb-2">
                                <div className="bg-slate-700 rounded-lg rounded-bl-none p-2 max-w-[85%] text-sm">
                                    <p className="text-xs font-bold text-sky-400 mb-1">Sales Dept</p>
                                    <div className="bg-slate-800 rounded-md p-1 flex items-center gap-2 mb-1">
                                        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-sky-900 rounded-md">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        </div>
                                       <p className="text-xs text-slate-300">invoice_2033.pdf</p>
                                    </div>
                                    <p className="text-slate-200 text-xs">Invoice sent to customer.</p>
                                    <p className="text-right text-[10px] text-slate-400 mt-1">4:25 PM</p>
                                </div>
                            </div>
                             {/* Procurement Request */}
                             <div className="flex justify-start mb-2">
                                <div className="bg-slate-700 rounded-lg rounded-bl-none p-2 max-w-[85%] text-sm">
                                    <p className="text-xs font-bold text-sky-400 mb-1">Procurement</p>
                                    <p className="text-slate-200 text-xs">Seeking payment for PO-789.</p>
                                    <p className="text-right text-[10px] text-slate-400 mt-1">4:28 PM</p>
                                </div>
                            </div>
                             {/* CEO Receipt */}
                            <div className="flex justify-end mb-2">
                                <div className="bg-emerald-900 rounded-lg rounded-br-none p-2 max-w-[85%] text-sm">
                                     <div className="bg-slate-700 rounded-md p-2 flex flex-col items-center justify-center">
                                        <PhotoIcon />
                                        <p className="text-xs text-slate-300 mt-1">client_dinner.jpg</p>
                                    </div>
                                    <p className="text-slate-200 text-xs mt-1">Entertainment receipt.</p>
                                    <p className="text-right text-[10px] text-slate-400 mt-1">4:30 PM ✓✓</p>
                                </div>
                            </div>
                        </div>

                        {/* Input Bar */}
                        <div className="p-2 flex items-center gap-2 bg-slate-800/80">
                            <div className="flex-grow bg-slate-700 rounded-full flex items-center px-3 py-2">
                                <span className="text-slate-400 cursor-pointer">😊</span>
                                <input type="text" placeholder="Message" className="bg-transparent text-sm text-slate-300 ml-2 w-full focus:outline-none" />
                                <div className="flex items-center gap-3 text-slate-400">
                                   <PaperClipIcon />
                                   <CameraIcon />
                                </div>
                            </div>
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer">
                                <MicrophoneIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatusPill: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => {
    const colors: { [key: string]: string } = {
        green: "bg-green-500/20 text-green-400",
        yellow: "bg-yellow-500/20 text-yellow-400",
        red: "bg-red-500/20 text-red-400",
    };
    return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${colors[color]}`}>{children}</span>
    );
};


const DashboardPreview: React.FC = () => {
    const items = [
        { doc: "Invoice_001.pdf", status: "Processed", color: "green", amount: "$150.00" },
        { doc: "Receipt_Mar24.jpg", status: "Pending", color: "yellow", amount: "$45.50" },
        { doc: "Supplier_Inv.png", status: "Error", color: "red", amount: "$210.10" },
        { doc: "Uber_Ride.pdf", status: "Processed", color: "green", amount: "$22.80" },
    ];
    return (
        <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-4 h-full min-h-[400px]">
            <h3 className="text-slate-100 font-semibold mb-4">Document Dashboard</h3>
            <div className="space-y-2">
                <div className="grid grid-cols-3 gap-2 text-xs text-slate-400 font-bold px-2">
                    <span>DOCUMENT</span>
                    <span className="text-center">STATUS</span>
                    <span className="text-right">AMOUNT</span>
                </div>
                {items.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 items-center bg-slate-800/60 p-2 rounded-md text-sm">
                        <span className="text-slate-200 truncate">{item.doc}</span>
                        <div className="text-center"><StatusPill color={item.color}>{item.status}</StatusPill></div>
                        <span className="text-slate-300 text-right font-mono">{item.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ControlsPreview: React.FC = () => {
    const ControlButton = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
        <button className="flex items-center w-full p-3 bg-slate-800/60 rounded-lg text-left text-slate-200 hover:bg-slate-700/80 transition-colors group">
            <span className="text-sky-400 group-hover:text-sky-300 transition-colors">{icon}</span>
            <span className="ml-4 font-medium">{children}</span>
        </button>
    );

    return (
        <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-4 h-full min-h-[400px]">
            <h3 className="text-slate-100 font-semibold mb-4">Automation Controls</h3>
            <div className="space-y-3">
                <ControlButton icon={<MagnifyingGlassIcon />}>WhatsApp Bookkeeping Entries Process Checking</ControlButton>
                <ControlButton icon={<ArrowPathIcon />}>Process Pending Receipts</ControlButton>
                <ControlButton icon={<DocumentTextIcon />}>Generate Ledger Entries</ControlButton>
            </div>
        </div>
    );
};


const DemoUI: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <WhatsAppPreview />
      <DashboardPreview />
      <ControlsPreview />
    </div>
  );
};

export default DemoUI;
