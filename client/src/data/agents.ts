import { Brain, Leaf, Heart } from 'lucide-react';
import { Agent } from '../types';

export const agents: Agent[] = [
  {
    id: 'cbt_bot',
    name: 'CBT Bot',
    description: 'Cognitive Behavioral Therapy approach',
    color: 'bg-secondary-200 text-secondary-700',
    icon: 'Brain',
  },
  {
    id: 'zen_bot',
    name: 'ZenBot',
    description: 'Mindfulness and meditation approach',
    color: 'bg-accent-200 text-accent-700',
    icon: 'Leaf',
  },
  {
    id: 'affirm_bot',
    name: 'AffirmBot',
    description: 'Positive affirmations and encouragement',
    color: 'bg-primary-200 text-primary-700',
    icon: 'Heart',
  },
];

export const getAgentIcon = (iconName: string) => {
  switch (iconName) {
    case 'Brain':
      return Brain;
    case 'Leaf':
      return Leaf;
    case 'Heart':
      return Heart;
    default:
      return Brain;
  }
};