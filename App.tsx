
import React, { useState } from 'react';
import Header from './components/Header';
import RegexInput from './components/RegexInput';
import RegexMatches from './components/RegexMatches';
import RegexExplanation from './components/RegexExplanation';
import RegexPresets from './components/RegexPresets';
import { regexCheatsheet, regexPresets } from './constants';
import { RegexPreset } from './types';
import RegexInfo from './components/RegexInfo';
import ReportModal from './components/ReportModal';

const App: React.FC = () => {
  const [regexString, setRegexString] = useState<string>('\\d{3}-\\d{3}-\\d{4}');
  const [testString, setTestString] = useState<string>(`Call me at 415-555-1234 or 212-987-6543. My old number was 123-456-7890.`);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  
  const handleSelectPreset = (preset: RegexPreset) => {
    setRegexString(preset.regex);
    setTestString(preset.testString);
  };

  const handleTokenClick = (token: string) => {
    setRegexString(prev => prev + token);
  };

  return (
    <div className="min-h-screen font-sans">
      <Header />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8">
        <RegexInfo />
      </div>
      <main className="container mx-auto p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <RegexPresets presets={regexPresets} onSelectPreset={handleSelectPreset} />
          <RegexInput 
            regexString={regexString} 
            setRegexString={setRegexString} 
            testString={testString} 
            setTestString={setTestString}
          />
          <RegexMatches 
            regexString={regexString} 
            testString={testString} 
            onGenerateReport={() => setIsReportModalOpen(true)}
          />
        </div>
        <div className="lg:col-span-1">
          <RegexExplanation cheatsheet={regexCheatsheet} onTokenClick={handleTokenClick} />
        </div>
      </main>
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        regexString={regexString}
        testString={testString}
      />
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>Built with ❤️ by Castle Bravo Project</p>
      </footer>
    </div>
  );
};

export default App;
