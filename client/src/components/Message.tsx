import React from 'react';
import { UserCircle } from 'lucide-react';
import { Message as MessageType } from '../types';
import { formatTimestamp } from '../utils/helpers';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.type === 'user';
  
  return (
    <div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-slide-up`}
    >
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} max-w-[80%]`}>
        <div className="flex-shrink-0">
          {isUser ? (
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700">
              <UserCircle size={24} />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-700">
              <span className="text-lg font-semibold">N</span>
            </div>
          )}
        </div>
        
        <div className={`mx-2 ${isUser ? 'text-right' : 'text-left'}`}>
          <div 
            className={`px-4 py-3 rounded-2xl ${
              isUser 
                ? 'bg-primary-500 text-white rounded-tr-none' 
                : 'bg-neutral-100 text-neutral-800 rounded-tl-none'
            }`}
          >
            <p className="text-sm">{message.content}</p>
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            {formatTimestamp(message.timestamp)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;