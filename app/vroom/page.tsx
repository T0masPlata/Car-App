'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaRoute, FaCar, FaRobot } from 'react-icons/fa';

// Import the map component dynamically to avoid SSR issues
const Map = dynamic(() => import('@/components/vroom/Map'), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-gray-100 animate-pulse" />
});

export default function VroomPage() {
  const [activeTab, setActiveTab] = useState('navigation');

  return (
    <div className="h-screen w-full relative bg-gray-50">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-md p-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          VroomGPT
        </h1>
        <button 
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => console.log('Settings clicked')}
        >
          <IoSettingsOutline size={24} className="text-gray-700" />
        </button>
      </div>

      {/* Main Map Area */}
      <div className="h-full w-full">
        <Map />
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 rounded-t-3xl shadow-lg">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('navigation')}
            className={`flex flex-col items-center space-y-1 p-3 rounded-full transition-all ${
              activeTab === 'navigation' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
            }`}
          >
            <FaRoute size={24} />
            <span className="text-xs font-medium">Navigate</span>
          </button>
          
          <button
            onClick={() => setActiveTab('vehicle')}
            className={`flex flex-col items-center space-y-1 p-3 rounded-full transition-all ${
              activeTab === 'vehicle' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
            }`}
          >
            <FaCar size={24} />
            <span className="text-xs font-medium">Vehicle</span>
          </button>
          
          <button
            onClick={() => setActiveTab('assistant')}
            className={`flex flex-col items-center space-y-1 p-3 rounded-full transition-all ${
              activeTab === 'assistant' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
            }`}
          >
            <FaRobot size={24} />
            <span className="text-xs font-medium">Assistant</span>
          </button>
        </div>
      </div>
    </div>
  );
} 