import React from 'react';
import { agents, getAgentIcon } from '../data/agents';
import { AgentId } from '../types';

interface AgentAvatarProps {
  agentId: AgentId;
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
}

const AgentAvatar: React.FC<AgentAvatarProps> = ({ 
  agentId, 
  size = 'md', 
  showName = false 
}) => {
  const agent = agents.find(a => a.id === agentId);
  
  if (!agent) return null;
  
  const Icon = getAgentIcon(agent.icon);
  
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };
  
  return (
    <div className={`flex items-center ${showName ? 'gap-2' : ''}`}>
      <div className={`${sizeClasses[size]} rounded-full ${agent.color} flex items-center justify-center`}>
        <Icon size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
      </div>
      {showName && (
        <span className="font-medium text-sm">{agent.name}</span>
      )}
    </div>
  );
};

export default AgentAvatar;