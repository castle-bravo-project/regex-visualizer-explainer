
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-sky-400">
          Regex Visualizer & Explainer
        </h1>
        <p className="text-gray-400 mt-1">
          An interactive tool to learn, build, and test Regular Expressions.
        </p>
      </div>
    </header>
  );
};

export default Header;
