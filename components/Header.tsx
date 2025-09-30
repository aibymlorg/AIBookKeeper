
import React from 'react';
import { LogoIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="text-center py-12 sm:py-16">
      <div className="flex justify-center items-center gap-4 mb-4">
        <LogoIcon />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          AI Book-Keeper
        </h1>
      </div>
      <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
        A desktop application that provides a web-based interface for automating WhatsApp interactions through screen capture and computer vision. This frontend application communicates with a Python backend to enable automated media downloads, read receipts via OCR with an LLM engine, and other bookkeeping tasks.
      </p>
    </header>
  );
};

export default Header;
