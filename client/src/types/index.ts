export type MessageType = 'user' | 'ai';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
}

export interface AgentResponse {
  agentId: AgentId;
  message: string;
}

export type AgentId = 'cbt_bot' | 'zen_bot' | 'affirm_bot';

export interface Agent {
  id: AgentId;
  name: string;
  description: string;
  color: string;
  icon: string;
}

export type MoodType = 'happy' | 'sad' | 'anxious' | 'neutral' | 'angry' | 'calm';

export interface Mood {
  id: MoodType;
  label: string;
  icon: string;
  color: string;
}