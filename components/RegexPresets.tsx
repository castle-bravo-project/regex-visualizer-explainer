
import React from 'react';
import { RegexPreset } from '../types';

interface RegexPresetsProps {
  presets: RegexPreset[];
  onSelectPreset: (preset: RegexPreset) => void;
}

const RegexPresets: React.FC<RegexPresetsProps> = ({ presets, onSelectPreset }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-lg font-semibold text-gray-300 mb-4">
        Presets
      </h2>
      <div className="flex flex-wrap gap-3">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => onSelectPreset(preset)}
            className="px-4 py-2 bg-gray-700 text-gray-300 rounded-md text-sm font-medium hover:bg-sky-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-sky-500"
            aria-label={`Select ${preset.name} preset`}
          >
            {preset.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegexPresets;
