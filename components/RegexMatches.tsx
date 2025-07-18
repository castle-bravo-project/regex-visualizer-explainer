
import React, { useMemo } from 'react';

interface RegexMatchesProps {
  regexString: string;
  testString: string;
  onGenerateReport: () => void;
}

const ReportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);


const RegexMatches: React.FC<RegexMatchesProps> = ({ regexString, testString, onGenerateReport }) => {

  const { highlightedOutput, matchesCount, error } = useMemo(() => {
    if (!regexString) {
      return { highlightedOutput: <>{testString}</>, matchesCount: 0, error: null };
    }

    try {
      const regex = new RegExp(regexString, 'g');
      const matches = Array.from(testString.matchAll(regex));
      
      if (matches.length === 0) {
        return { highlightedOutput: <>{testString}</>, matchesCount: 0, error: null };
      }

      let lastIndex = 0;
      const parts: React.ReactNode[] = [];

      matches.forEach((match, index) => {
        if (match.index === undefined) return;
        
        // Add the text before the match
        parts.push(testString.substring(lastIndex, match.index));
        
        // Add the highlighted match
        parts.push(
          <mark key={index} className="bg-sky-500/30 text-sky-300 rounded px-1">
            {match[0]}
          </mark>
        );
        lastIndex = match.index + match[0].length;
      });

      // Add the remaining text after the last match
      parts.push(testString.substring(lastIndex));

      return { highlightedOutput: <>{parts}</>, matchesCount: matches.length, error: null };

    } catch (e: any) {
      return { highlightedOutput: <>{testString}</>, matchesCount: 0, error: e.message };
    }
  }, [regexString, testString]);

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-300">Matches</h2>
        <div className="flex items-center gap-4">
            <button 
                onClick={onGenerateReport} 
                className="flex items-center px-4 py-2 bg-sky-600/50 text-sky-300 rounded-md text-sm font-medium hover:bg-sky-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-sky-500"
                aria-label="Generate analysis report"
            >
                <ReportIcon />
                Report
            </button>
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${matchesCount > 0 ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-400'}`}>
                {matchesCount} {matchesCount === 1 ? 'match' : 'matches'}
            </span>
        </div>
      </div>
      <div className="bg-gray-900 rounded-md p-4 font-mono text-gray-300 whitespace-pre-wrap break-words min-h-[10rem] text-sm leading-relaxed">
        {highlightedOutput}
      </div>
      {error && (
        <div className="mt-4 bg-red-900/50 border border-red-700/50 text-red-400 text-sm p-3 rounded-md">
          <strong>Regex Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default RegexMatches;
