
import React from 'react';
import { CheatSheetItem } from '../types';

interface RegexExplanationProps {
  cheatsheet: CheatSheetItem[];
  onTokenClick: (token: string) => void;
}

const AddIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const RegexExplanation: React.FC<RegexExplanationProps> = ({ cheatsheet, onTokenClick }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg h-full">
      <div className="flex items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-300">Regex Builder &amp; Cheat Sheet</h2>
      </div>
      <p className="text-sm text-gray-400 mb-4">Click an item below to add it to your expression.</p>
      <div className="space-y-2 max-h-[calc(100vh-220px)] overflow-y-auto pr-2 -mr-2">
        {cheatsheet.map((item, index) => (
          <button
            key={index}
            onClick={() => onTokenClick(item.token)}
            className="w-full flex items-center p-3 rounded-md hover:bg-sky-600/30 group transition-colors text-left focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label={`Add token: ${item.description}`}
          >
            <code className="bg-gray-900 text-sky-400 font-mono rounded px-2 py-1 text-sm mr-4 w-28 text-center flex-shrink-0">
              {item.token}
            </code>
            <div className="flex-grow">
                <p className="text-gray-300 group-hover:text-white text-sm transition-colors">{item.description}</p>
                <p className="text-gray-500 group-hover:text-gray-300 text-xs italic transition-colors">{item.example}</p>
            </div>
            <div className="ml-auto pl-4">
                <AddIcon />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegexExplanation;
