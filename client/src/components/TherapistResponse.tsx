import React from 'react';
import { AgentResponse as AgentResponseType } from '../types';
import AgentResponse from './AgentResponse';

interface TherapistResponseProps {
  responses: AgentResponseType[];
  isTyping: boolean;
}

const TherapistResponse: React.FC<TherapistResponseProps> = ({ responses, isTyping }) => {
  if (responses.length === 0 && !isTyping) return null;

  // Filter out any undefined or null responses
  const validResponses = responses.filter(response => response != null);

  return (
    <div className="bg-neutral-50 rounded-lg p-3 my-4 shadow-sm border border-neutral-200 animate-fade-in">
      <h3 className="text-xs font-medium uppercase text-neutral-500 mb-2">Therapist Collective</h3>
      
      {validResponses.map((response, index) => (
        <AgentResponse 
          key={`${response.agentId}-${index}`}
          response={response} 
          isLast={index === validResponses.length - 1} 
        />
      ))}
      
      {isTyping && (
        <div className="flex items-center space-x-2 text-neutral-400 text-sm mt-2">
          <span>Thinking</span>
          <span className="flex space-x-1">
            <span className="w-2 h-2 rounded-full bg-neutral-300 animate-pulse" style={{ animationDelay: '0ms' }}></span>
            <span className="w-2 h-2 rounded-full bg-neutral-300 animate-pulse" style={{ animationDelay: '300ms' }}></span>
            <span className="w-2 h-2 rounded-full bg-neutral-300 animate-pulse" style={{ animationDelay: '600ms' }}></span>
          </span>
        </div>
      )}
    </div>
  );
};

export default TherapistResponse;