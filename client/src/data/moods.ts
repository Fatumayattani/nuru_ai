import { Smile, Frown, Zap, Meh, Angry, Cloud } from 'lucide-react';
import { Mood } from '../types';

export const moods: Mood[] = [
  {
    id: 'happy',
    label: 'Happy',
    icon: 'Smile',
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'sad',
    label: 'Sad',
    icon: 'Frown',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'anxious',
    label: 'Anxious',
    icon: 'Zap',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 'neutral',
    label: 'Neutral',
    icon: 'Meh',
    color: 'bg-gray-100 text-gray-600',
  },
  {
    id: 'angry',
    label: 'Angry',
    icon: 'Angry',
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 'calm',
    label: 'Calm',
    icon: 'Cloud',
    color: 'bg-purple-100 text-purple-600',
  },
];

export const getMoodIcon = (iconName: string) => {
  switch (iconName) {
    case 'Smile':
      return Smile;
    case 'Frown':
      return Frown;
    case 'Zap':
      return Zap;
    case 'Meh':
      return Meh;
    case 'Angry':
      return Angry;
    case 'Cloud':
      return Cloud;
    default:
      return Meh;
  }
};