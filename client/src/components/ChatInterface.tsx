import React, { useState, useRef, useEffect } from 'react';
import MessageInput from './MessageInput';
import Message from './Message';
import TherapistResponse from './TherapistResponse';
import MoodSelector from './MoodSelector';
import { Message as MessageType, AgentResponse, MoodType } from '../types';
import { generateId, getRandomResponseTime, extractKeywords, getMessageType } from '../utils/helpers';
import mockResponses from '../data/mockResponses';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [currentResponses, setCurrentResponses] = useState<AgentResponse[]>([]);
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      handleAIResponse('greeting');
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, currentResponses]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (content: string) => {
    const newMessage: MessageType = {
      id: generateId(),
      type: 'user',
      content,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsTyping(true);
    setCurrentResponses([]);
    
    // Extract keywords and get response type
    const keywords = extractKeywords(content);
    const messageType = getMessageType(keywords);
    
    // Simulate typing delay
    setTimeout(() => {
      handleAIResponse(messageType);
    }, getRandomResponseTime());
  };

  const handleAIResponse = (messageType: string) => {
    const responses = mockResponses[messageType] || mockResponses.default;
    
    // Show agent responses one by one with delays
    let currentIndex = 0;
    const showNextResponse = () => {
      if (currentIndex < responses.length) {
        // Only add valid responses
        if (responses[currentIndex]) {
          setCurrentResponses(prev => [...prev, responses[currentIndex]]);
        }
        currentIndex++;
        
        if (currentIndex < responses.length) {
          setTimeout(showNextResponse, getRandomResponseTime() / 2);
        } else {
          // Once all agents have responded, add the final combined response
          setTimeout(() => {
            const finalResponse: MessageType = {
              id: generateId(),
              type: 'ai',
              content: getFinalResponse(responses),
              timestamp: new Date(),
            };
            
            setMessages(prev => [...prev, finalResponse]);
            setIsTyping(false);
          }, getRandomResponseTime());
        }
      }
    };
    
    // Start showing agent responses
    showNextResponse();
  };

  const getFinalResponse = (responses: AgentResponse[]): string => {
    // Filter out undefined responses before selecting one
    const validResponses = responses.filter(response => response != null);
    if (validResponses.length === 0) return "I'm thinking about how to respond.";
    
    const randomIndex = Math.floor(Math.random() * validResponses.length);
    return validResponses[randomIndex].message;
  };

  const handleSelectMood = (mood: MoodType) => {
    setSelectedMood(mood);
    handleAIResponse(mood);
  };

  return (
    <div className="max-w-2xl mx-auto h-[calc(100vh-80px)] flex flex-col p-4">
      {messages.length === 0 && (
        <div className="text-center mb-6 mt-4 animate-fade-in">
          <h2 className="text-2xl font-semibold text-primary-700 mb-2">Welcome to Nuru AI</h2>
          <p className="text-neutral-600 mb-4">
            I'm here to support your mental well-being through the collective wisdom of multiple therapeutic approaches.
          </p>
          <MoodSelector 
            selectedMood={selectedMood} 
            onSelectMood={handleSelectMood} 
          />
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto mb-4 pr-1 scroll-smooth">
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        
        {(isTyping || currentResponses.length > 0) && (
          <TherapistResponse 
            responses={currentResponses.filter(response => response != null)}
            isTyping={isTyping && currentResponses.length === 0} 
          />
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <MessageInput 
        onSendMessage={handleSendMessage} 
        isWaitingForResponse={isTyping} 
      />
    </div>
  );
};

export default ChatInterface;