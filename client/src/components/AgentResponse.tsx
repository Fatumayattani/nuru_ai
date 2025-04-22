import React from 'react';
import { AgentResponse as AgentResponseType } from '../types';
import AgentAvatar from './AgentAvatar';

interface AgentResponseProps {
  response: AgentResponseType;
  isLast: boolean;
}

const AgentResponse: React.FC<AgentResponseProps> = ({ response, isLast }) => {
  return (
    <div className={`flex mb-3 animate-fade-in ${isLast ? '' : 'opacity-60'}`}>
      <div className="mr-2 mt-0.5">
        <AgentAvatar agentId={response.agentId} size="sm" />
      </div>
      <div className={`text-sm p-2 rounded-lg ${isLast ? 'font-medium' : 'text-neutral-600'}`}>
        {response.message}
      </div>
    </div>
  );
};

export default AgentResponse;