
import { Home, Book, Play, User } from "lucide-react";
import { useState } from "react";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home, color: 'from-sky-400 to-sky-500' },
    { id: 'lessons', label: 'Lessons', icon: Book, color: 'from-mint-400 to-mint-500' },
    { id: 'quizzes', label: 'Quizzes', icon: Play, color: 'from-sunshine-400 to-sunshine-500' },
    { id: 'profile', label: 'Profile', icon: User, color: 'from-coral-400 to-coral-500' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-white/20 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-2xl transition-all duration-200 ${
                isActive ? 'transform scale-110' : 'hover:scale-105'
              }`}
            >
              <div className={`p-2 rounded-xl ${isActive ? `bg-gradient-to-r ${tab.color}` : 'bg-gray-100'} transition-all duration-200`}>
                <Icon 
                  className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`} 
                />
              </div>
              <span className={`text-xs mt-1 font-medium ${isActive ? 'text-gray-800' : 'text-gray-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
