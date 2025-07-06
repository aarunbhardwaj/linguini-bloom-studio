
import { Flag, Book, Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const HomeScreen = () => {
  const streakDays = 7;
  const currentLesson = "Spanish Basics - Lesson 3";
  const progress = 65;

  return (
    <div className="p-6 pb-24 max-w-md mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-lavender-500 via-coral-400 to-sunshine-400 rounded-3xl p-6 mb-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2">¡Hola, Sarah! 👋</h1>
          <p className="text-white/90">Ready for your daily lesson?</p>
        </div>
      </div>

      {/* Streak Tracker */}
      <Card className="glass-card rounded-3xl p-6 mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Daily Streak</h3>
            <p className="text-gray-600">Keep it going!</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-sunshine-400 to-sunshine-500 rounded-full p-3">
              <span className="text-white font-bold text-xl">{streakDays}</span>
            </div>
            <div className="text-right">
              <div className="text-2xl">🔥</div>
              <p className="text-xs text-gray-500">days</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Continue Lesson Card */}
      <Card className="glass-card rounded-3xl p-6 mb-6 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-mint-400 to-mint-500 rounded-xl p-3 group-hover:scale-110 transition-transform duration-200">
              <Book className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Continue Learning</h3>
              <p className="text-gray-600 text-sm">{currentLesson}</p>
            </div>
          </div>
          <Flag className="w-8 h-8 text-coral-400" />
        </div>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-mint-400 to-mint-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <button className="button-secondary w-full">
          Continue Lesson
        </button>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="glass-card rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
          <div className="text-center">
            <div className="bg-gradient-to-r from-lavender-400 to-lavender-500 rounded-xl p-4 mb-3 mx-auto w-fit group-hover:scale-110 transition-transform duration-200">
              <Play className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-1">Quick Quiz</h4>
            <p className="text-gray-600 text-sm">Test your skills</p>
          </div>
        </Card>
        
        <Card className="glass-card rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group">
          <div className="text-center">
            <div className="bg-gradient-to-r from-coral-400 to-coral-500 rounded-xl p-4 mb-3 mx-auto w-fit group-hover:scale-110 transition-transform duration-200">
              <Book className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-1">Flashcards</h4>
            <p className="text-gray-600 text-sm">Review vocab</p>
          </div>
        </Card>
      </div>

      {/* Today's Challenge */}
      <Card className="glass-card rounded-3xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Today's Challenge</h3>
            <p className="text-gray-600 text-sm">Complete 3 lessons to earn a badge!</p>
          </div>
          <div className="text-4xl animate-bounce-gentle">🏆</div>
        </div>
        <div className="mt-4">
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-mint-400 to-mint-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-sunshine-400 to-sunshine-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">✓</span>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-sm font-bold">3</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomeScreen;
