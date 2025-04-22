import { AgentResponse } from '../types';

// These are mock responses to simulate different agent personalities
const mockResponses: Record<string, AgentResponse[]> = {
  greeting: [
    {
      agentId: 'cbt_bot',
      message: "I notice you're reaching out. How are your thoughts affecting your mood today?",
    },
    {
      agentId: 'zen_bot',
      message: "Welcome. Take a deep breath and center yourself in this present moment.",
    },
    {
      agentId: 'affirm_bot',
      message: "You're taking an important step by being here. I believe in you.",
    },
  ],
  anxious: [
    {
      agentId: 'cbt_bot',
      message: "Let's identify what specific thoughts are contributing to your anxiety and examine the evidence.",
    },
    {
      agentId: 'zen_bot',
      message: "Notice your anxious feelings without judgment. They're like clouds passing in the sky.",
    },
    {
      agentId: 'affirm_bot',
      message: "You've handled anxious moments before, and you have the strength to move through this one too.",
    },
  ],
  sad: [
    {
      agentId: 'cbt_bot',
      message: "Sadness often comes from our interpretations of events. Can we explore what thoughts are behind these feelings?",
    },
    {
      agentId: 'zen_bot',
      message: "Acknowledge your sadness with compassion. It's a natural part of the human experience.",
    },
    {
      agentId: 'affirm_bot',
      message: "It's okay to feel sad. These feelings remind us of what matters, and they won't last forever.",
    },
  ],
  happy: [
    {
      agentId: 'cbt_bot',
      message: "It's great that you're feeling good! What thoughts or activities contributed to this positive state?",
    },
    {
      agentId: 'zen_bot',
      message: "Enjoy this pleasant moment fully. Be present with your happiness without clinging to it.",
    },
    {
      agentId: 'affirm_bot',
      message: "You deserve these good feelings! Your positive energy creates more opportunities for joy.",
    },
  ],
  angry: [
    {
      agentId: 'cbt_bot',
      message: "Anger often masks other emotions. What expectations weren't met, and are they realistic?",
    },
    {
      agentId: 'zen_bot',
      message: "Notice the physical sensations of anger in your body without acting on them. Give them space.",
    },
    {
      agentId: 'affirm_bot',
      message: "Your feelings are valid. You have the wisdom to address this situation constructively.",
    },
  ],
  calm: [
    {
      agentId: 'cbt_bot',
      message: "This calm state is an excellent opportunity to reflect on your thought patterns clearly.",
    },
    {
      agentId: 'zen_bot',
      message: "Calmness reveals our natural state. Notice how thoughts arise and pass without disturbing your center.",
    },
    {
      agentId: 'affirm_bot',
      message: "You've created this peaceful moment. Your mind and heart are aligned right now.",
    },
  ],
  neutral: [
    {
      agentId: 'cbt_bot',
      message: "A neutral state is a good time to check in with your thinking patterns. What's on your mind today?",
    },
    {
      agentId: 'zen_bot',
      message: "In this balanced state, you can observe your mind with clarity. What do you notice?",
    },
    {
      agentId: 'affirm_bot',
      message: "You're present and aware. This receptive state opens you to new possibilities.",
    },
  ],
  default: [
    {
      agentId: 'cbt_bot',
      message: "I'm here to help you explore your thoughts and how they influence your feelings.",
    },
    {
      agentId: 'zen_bot',
      message: "Let's take a moment to be present with whatever you're experiencing right now.",
    },
    {
      agentId: 'affirm_bot',
      message: "I appreciate you sharing. Your experiences matter, and you're doing great by expressing them.",
    },
  ],
};

export default mockResponses;