import React from 'react';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50">
      <Header />
      <main className="flex-1 overflow-hidden">
        <ChatInterface />
      </main>
      <footer className="text-center py-3 text-xs text-neutral-500">
        <p>© 2025 Nuru AI - Mental Wellness dApp</p>
      </footer>
    </div>
  );
}

export default App;