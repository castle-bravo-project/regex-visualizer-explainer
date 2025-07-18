
import React, { useState, useMemo, useEffect, useCallback } from 'react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  regexString: string;
  testString: string;
}

const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;
const CopyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;


const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, regexString, testString }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const { matches, reportText, error } = useMemo(() => {
    let foundMatches: string[] = [];
    let report = '';
    let errorMessage: string | null = null;
    
    try {
      if (regexString) {
        const regex = new RegExp(regexString, 'g');
        foundMatches = testString.match(regex) || [];
      }
    } catch (e: any) {
        errorMessage = e.message;
    }

    report = `
--- Regex Analysis Report ---

## Pattern
/${regexString}/g

## Test String
${testString}

## Analysis
Found ${foundMatches.length} match${foundMatches.length === 1 ? '' : 's'}.
${errorMessage ? `\n**Error:** ${errorMessage}` : ''}
---
${foundMatches.length > 0 ? '## Matches\n' + foundMatches.map((m, i) => `${i + 1}. ${m}`).join('\n') : ''}
    `.trim();

    return { matches: foundMatches, reportText: report, error: errorMessage };
  }, [regexString, testString]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(reportText).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => setCopyButtonText('Copy'), 2000);
    });
  }, [reportText]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([reportText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'regex-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [reportText]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="report-title"
    >
      <div
        className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 id="report-title" className="text-lg font-semibold text-white">Analysis Report</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </header>

        <main className="p-6 overflow-y-auto">
            <pre className="bg-gray-900/50 rounded-md p-4 font-mono text-sm text-gray-300 whitespace-pre-wrap break-words">
                {reportText}
            </pre>
        </main>

        <footer className="flex justify-end items-center p-4 border-t border-gray-700 gap-4">
            <button onClick={handleCopy} className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md text-sm font-medium hover:bg-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-sky-500">
                <CopyIcon /> {copyButtonText}
            </button>
            <button onClick={handleDownload} className="flex items-center px-4 py-2 bg-sky-600 text-white rounded-md text-sm font-medium hover:bg-sky-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-sky-500">
                <DownloadIcon /> Download .txt
            </button>
        </footer>
      </div>
    </div>
  );
};

export default ReportModal;
