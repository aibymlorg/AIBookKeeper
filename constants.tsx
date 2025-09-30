import React from 'react';
import { EyeIcon, DownloadIcon, ClipboardListIcon, CogIcon, CubeTransparentIcon, CodeBracketSquareIcon, DocumentScanIcon, CalculatorIcon, TableIcon } from './components/Icons';

export const FEATURES = [
  {
    title: "Real-time Screen Mirroring",
    description: "Live view of the target WhatsApp window capture, streamed directly to the interface.",
    icon: <EyeIcon />,
  },
  {
    title: "Automated Media Detection",
    description: "Uses computer vision on the backend to identify images and documents in conversations.",
    icon: <CodeBracketSquareIcon />,
  },
  {
    title: "One-click Downloads",
    description: "Provides bulk download capabilities for all detected media with a single command.",
    icon: <DownloadIcon />,
  },
  {
    title: "OCR & Document Parsing",
    description: "Reads receipts, invoices, and other documents using OCR and LLM for data extraction.",
    icon: <DocumentScanIcon />,
  },
  {
    title: "Automated Accounting Interpretation",
    description: "The AI interprets extracted data to identify and categorize accounting items automatically.",
    icon: <CalculatorIcon />,
  },
  {
    title: "Ledger Entry Automation",
    description: "Generates and logs bookkeeping entries into a structured ledger for review and export.",
    icon: <TableIcon />,
  },
  {
    title: "Activity Logging",
    description: "Real-time logging of all frontend operations and backend communications for transparency.",
    icon: <ClipboardListIcon />,
  },
  {
    title: "Interactive Controls",
    description: "A simple and intuitive button-based interface for sending automation commands.",
    icon: <CogIcon />,
  },
  {
    title: "Architecture Visualization",
    description: "Built-in documentation of the application architecture for easy understanding.",
    icon: <CubeTransparentIcon />,
  },
];

export const HOW_IT_WORKS = [
  {
    title: "Screen Capture",
    description: "The backend service continuously captures the WhatsApp window.",
  },
  {
    title: "Live Feed",
    description: "Captured frames are efficiently streamed to the frontend interface.",
  },
  {
    title: "User Actions",
    description: "Users click automation buttons to trigger specific backend operations.",
  },
  {
    title: "Computer Vision",
    description: "The backend analyzes frames to locate UI elements like download buttons.",
  },
  {
    title: "Automation",
    description: "Simulated mouse clicks are performed by the backend to execute actions.",
  },
  {
    title: "Feedback",
    description: "Real-time status updates and logs are sent back to the frontend.",
  },
  {
    title: "OCR & Interpretation",
    description: "Backend uses OCR and a multi-modal LLM to read receipts, extract data, and interpret accounting items.",
  },
  {
    title: "Ledger Automation",
    description: "The system automatically generates and suggests bookkeeping entries based on the interpreted data."
  }
];


export const TECH_STACK = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Python (Backend)",
  "FastAPI (Backend)",
  "REST API",
  "React Hooks"
];

export const INSTALLATION_STEPS = `git clone <repository-url>
cd aisecretary
npm install
npm run dev`;

export const AVAILABLE_SCRIPTS = `npm run dev   # Start development server with Turbopack
npm run build # Build for production with Turbopack
npm start   # Start production server
npm run lint  # Run ESLint`;

export const PROJECT_STRUCTURE = `src/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main application page
├── components/
│   ├── ArchitectureInfo.tsx # Architecture docs
│   ├── ControlPanel.tsx     # Action buttons
│   ├── LogViewer.tsx        # Activity log display
│   ├── ScreenCaptureView.tsx # Live screen feed
│   └── LedgerView.tsx       # Ledger for accounting entries
└── types.ts                # TypeScript definitions`;