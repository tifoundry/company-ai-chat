import React from 'react';
import { ChatInterface } from './components/Chat/ChatInterface';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">
              AI Chat Assistant
            </h1>
            <button
              onClick={() => window.location.href = '/.auth/logout'}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="h-[calc(100vh-140px)]">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
}

export default App;
