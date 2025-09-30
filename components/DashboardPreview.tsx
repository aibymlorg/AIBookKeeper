
import React from 'react';

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
    );
};

export default DashboardPreview;
