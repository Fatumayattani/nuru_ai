import React from 'react';
import { moods, getMoodIcon } from '../data/moods';
import { MoodType } from '../types';

interface MoodSelectorProps {
  selectedMood: MoodType | null;
  onSelectMood: (mood: MoodType) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onSelectMood }) => {
  return (
    <div className="mb-6 animate-fade-in">
      <h3 className="text-sm font-medium text-neutral-500 mb-2 px-1">How are you feeling today?</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {moods.map((mood) => {
          const Icon = getMoodIcon(mood.icon);
          const isSelected = selectedMood === mood.id;
          
          return (
            <button
              key={mood.id}
              onClick={() => onSelectMood(mood.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                mood.color
              } ${
                isSelected ? 'ring-2 ring-offset-2 ring-primary-300 scale-110' : 'hover:scale-105'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{mood.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MoodSelector;