
import { User, Flag, Book, Play } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProfileScreen = () => {
  const userStats = {
    name: "Sarah Johnson",
    level: 12,
    totalXP: 2450,
    streak: 7,
    lessonsCompleted: 34,
    quizzesCompleted: 28,
    wordsLearned: 156
  };

  const languages = [
    { name: "Spanish", progress: 65, flag: "🇪🇸", level: "Intermediate" },
    { name: "French", progress: 30, flag: "🇫🇷", level: "Beginner" },
    { name: "German", progress: 15, flag: "🇩🇪", level: "Beginner" }
  ];

  const badges = [
    { name: "Week Warrior", emoji: "🔥", description: "7-day streak" },
    { name: "Quiz Master", emoji: "🎯", description: "Perfect quiz score" },
    { name: "Vocabulary Star", emoji: "⭐", description: "100+ words learned" },
    { name: "Lesson Legend", emoji: "📚", description: "30+ lessons completed" },
    { name: "Speaking Pro", emoji: "🎤", description: "Speaking exercises" },
    { name: "Fast Learner", emoji: "⚡", description: "Quick completion" }
  ];

  return (
    <div className="p-6 pb-24 max-w-md mx-auto">
      {/* Profile Header */}
      <Card className="glass-card rounded-3xl p-6 mb-6 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lavender-200/30 to-coral-200/30 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-lavender-400 to-lavender-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{userStats.name}</h2>
              <p className="text-gray-600">Level {userStats.level}</p>
              <p className="text-sm text-gray-500">{userStats.totalXP} XP</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{userStats.streak}</div>
              <div className="text-xs text-gray-600">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{userStats.lessonsCompleted}</div>
              <div className="text-xs text-gray-600">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{userStats.wordsLearned}</div>
              <div className="text-xs text-gray-600">Words</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Language Progress */}
      <Card className="glass-card rounded-3xl p-6 mb-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Language Progress</h3>
        <div className="space-y-4">
          {languages.map((language, index) => (
            <div key={index} className="bg-white/60 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{language.flag}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{language.name}</h4>
                    <p className="text-sm text-gray-600">{language.level}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700">{language.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ${
                    index === 0 ? 'bg-gradient-to-r from-mint-400 to-mint-500' :
                    index === 1 ? 'bg-gradient-to-r from-sky-400 to-sky-500' :
                    'bg-gradient-to-r from-sunshine-400 to-sunshine-500'
                  }`}
                  style={{ width: `${language.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements/Badges */}
      <Card className="glass-card rounded-3xl p-6 mb-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="bg-white/60 rounded-2xl p-3 text-center hover:bg-white/80 transition-all duration-200 cursor-pointer group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {badge.emoji}
              </div>
              <h5 className="text-xs font-semibold text-gray-800 mb-1">{badge.name}</h5>
              <p className="text-xs text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Statistics */}
      <Card className="glass-card rounded-3xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Statistics</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white/60 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-mint-400 to-mint-500 rounded-xl p-2">
                <Book className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-gray-800">Lessons Completed</span>
            </div>
            <span className="font-bold text-gray-800">{userStats.lessonsCompleted}</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white/60 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-lavender-400 to-lavender-500 rounded-xl p-2">
                <Play className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-gray-800">Quizzes Completed</span>
            </div>
            <span className="font-bold text-gray-800">{userStats.quizzesCompleted}</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-white/60 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-coral-400 to-coral-500 rounded-xl p-2">
                <Flag className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-gray-800">Words Mastered</span>
            </div>
            <span className="font-bold text-gray-800">{userStats.wordsLearned}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileScreen;
