
import React, { useRef } from 'react';

interface RegexInputProps {
  regexString: string;
  setRegexString: (value: string) => void;
  testString: string;
  setTestString: (value: string) => void;
}

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
    </svg>
);


const RegexInput: React.FC<RegexInputProps> = ({ regexString, setRegexString, testString, setTestString }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        if (typeof text === 'string') {
          setTestString(text);
        }
      };
      reader.readAsText(file);
    }
     // Reset the input value to allow uploading the same file again
    if(event.target) {
        event.target.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };


  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="mb-6">
        <label htmlFor="regex-pattern" className="block text-sm font-medium text-gray-400 mb-2">
          Regular Expression
        </label>
        <div className="flex items-center bg-gray-900 rounded-md border border-gray-700 focus-within:ring-2 focus-within:ring-sky-500 focus-within:border-sky-500">
          <span className="text-gray-500 pl-3">/</span>
          <input
            id="regex-pattern"
            type="text"
            value={regexString}
            onChange={(e) => setRegexString(e.target.value)}
            className="w-full bg-transparent p-2 font-mono text-sky-400 focus:outline-none"
            placeholder="Enter your pattern here"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="text-gray-500 pr-3">/g</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
            <label htmlFor="test-string" className="block text-sm font-medium text-gray-400">
              Test String
            </label>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".txt,text/plain"
                className="hidden"
                aria-hidden="true"
             />
             <button 
                onClick={handleUploadClick}
                className="flex items-center px-3 py-1.5 bg-gray-700 text-gray-300 rounded-md text-xs font-medium hover:bg-sky-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-sky-500"
                aria-label="Upload a text file"
             >
                <UploadIcon />
                Upload .txt
             </button>
        </div>
        <textarea
          id="test-string"
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          className="w-full h-48 bg-gray-900 rounded-md border border-gray-700 p-3 font-mono text-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
          placeholder="Enter the string to test against or upload a .txt file..."
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default RegexInput;
