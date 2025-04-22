import React, { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isWaitingForResponse: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isWaitingForResponse }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (message.trim() && !isWaitingForResponse) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-white rounded-lg shadow-md p-2 flex">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={isWaitingForResponse ? "Waiting for response..." : "Type your message here..."}
        disabled={isWaitingForResponse}
        className="flex-1 p-2 border-none focus:ring-0 focus:outline-none rounded text-neutral-800 bg-transparent"
      />
      <button
        type="submit"
        disabled={!message.trim() || isWaitingForResponse}
        className={`p-2 rounded-full ${
          !message.trim() || isWaitingForResponse
            ? 'bg-neutral-200 text-neutral-400'
            : 'bg-primary-500 text-white hover:bg-primary-600'
        } transition-colors`}
      >
        <Send size={18} />
      </button>
    </form>
  );
};

export default MessageInput;