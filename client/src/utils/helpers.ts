export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export function getRandomResponseTime(): number {
  // Return a random time between 500ms and 1500ms
  return Math.floor(Math.random() * 1000) + 500;
}

export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);
}

export function extractKeywords(text: string): string[] {
  // A simple implementation to extract keywords from text
  const keywords = ['anxious', 'sad', 'happy', 'angry', 'calm', 'stressed', 'worried', 'depressed', 'joyful'];
  return keywords.filter(keyword => text.toLowerCase().includes(keyword));
}

export function getMessageType(keywords: string[]): string {
  // Map keywords to message types for response selection
  if (keywords.includes('anxious') || keywords.includes('worried') || keywords.includes('stressed')) {
    return 'anxious';
  } else if (keywords.includes('sad') || keywords.includes('depressed')) {
    return 'sad';
  } else if (keywords.includes('happy') || keywords.includes('joyful')) {
    return 'happy';
  } else if (keywords.includes('angry')) {
    return 'angry';
  } else if (keywords.includes('calm')) {
    return 'calm';
  }
  return 'default';
}