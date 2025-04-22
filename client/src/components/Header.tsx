import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md">
      <div className="flex items-center space-x-2">
        <BrainCircuit size={28} className="text-white" />
        <div>
          <h1 className="text-xl font-semibold">Nuru AI</h1>
          <p className="text-xs opacity-80">Guided by collective wisdom. Powered by compassion.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;