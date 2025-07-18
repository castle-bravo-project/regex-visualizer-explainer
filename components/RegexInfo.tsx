
import React from 'react';

const RegexInfo: React.FC = () => {
  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-700/50">
      <h2 className="text-xl font-semibold text-gray-200 mb-3">
        What is a Regular Expression?
      </h2>
      <p className="text-gray-400 leading-relaxed">
        A Regular Expression (or "regex") is a special sequence of characters that defines a search pattern. It's a powerful tool used in programming and text editing to find, match, and manage text. Think of it as a super-charged "find and replace" feature. You can use it for anything from simple input validation (like checking if an email address is valid) to complex data scraping from websites. This tool helps you see your regex patterns in action instantly.
      </p>
    </div>
  );
};

export default RegexInfo;
