
import { Play, Book, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const LessonScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(45);
  
  const vocabularyWords = [
    { word: "Hola", translation: "Hello", pronunciation: "OH-lah" },
    { word: "Gracias", translation: "Thank you", pronunciation: "GRAH-see-ahs" },
    { word: "Adiós", translation: "Goodbye", pronunciation: "ah-dee-OHS" },
  ];

  return (
    <div className="p-6 pb-24 max-w-md mx-auto">
      {/* Lesson Header */}
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-gradient-to-r from-mint-400 to-mint-500 rounded-xl p-3">
            <Book className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Spanish Basics</h1>
            <p className="text-gray-600">Lesson 3: Greetings</p>
          </div>
        </div>
        
        {/* Overall Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Lesson Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-mint-400 to-mint-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Audio Player */}
      <Card className="glass-card rounded-3xl p-6 mb-6 shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Listen & Repeat</h3>
          <p className="text-gray-600">"Buenos días, ¿cómo está usted?"</p>
          <p className="text-sm text-gray-500 mt-1">Good morning, how are you?</p>
        </div>
        
        <div className="flex items-center justify-center mb-6">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
              isPlaying 
                ? 'bg-gradient-to-r from-coral-400 to-coral-500 scale-110' 
                : 'bg-gradient-to-r from-lavender-400 to-lavender-500 hover:scale-105'
            }`}
          >
            {isPlaying ? (
              <div className="w-6 h-6 bg-white rounded-sm"></div>
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </button>
        </div>
        
        {/* Audio Progress */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-lavender-400 to-lavender-500 h-2 rounded-full w-1/3 transition-all duration-300"></div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button className="flex items-center space-x-2 bg-white/80 rounded-2xl px-4 py-2 text-gray-600 hover:bg-white transition-all duration-200">
            <Headphones className="w-4 h-4" />
            <span className="text-sm">Slow</span>
          </button>
          <button className="flex items-center space-x-2 bg-white/80 rounded-2xl px-4 py-2 text-gray-600 hover:bg-white transition-all duration-200">
            <Headphones className="w-4 h-4" />
            <span className="text-sm">Normal</span>
          </button>
        </div>
      </Card>

      {/* Vocabulary Highlights */}
      <Card className="glass-card rounded-3xl p-6 mb-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Vocabulary</h3>
        <div className="space-y-3">
          {vocabularyWords.map((vocab, index) => (
            <div key={index} className="bg-white/60 rounded-2xl p-4 hover:bg-white/80 transition-all duration-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-coral-600">{vocab.word}</span>
                <button className="w-8 h-8 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </button>
              </div>
              <p className="text-gray-700 font-medium">{vocab.translation}</p>
              <p className="text-sm text-gray-500">{vocab.pronunciation}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="button-primary w-full">
          Practice Speaking
        </button>
        <button className="button-secondary w-full">
          Take Quiz
        </button>
      </div>
    </div>
  );
};

export default LessonScreen;
