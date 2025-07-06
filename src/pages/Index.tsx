
import { useState } from "react";
import BottomNavigation from "@/components/BottomNavigation";
import HomeScreen from "@/components/HomeScreen";
import LessonScreen from "@/components/LessonScreen";
import QuizScreen from "@/components/QuizScreen";
import FlashcardScreen from "@/components/FlashcardScreen";
import ProfileScreen from "@/components/ProfileScreen";

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'lessons':
        return <LessonScreen />;
      case 'quizzes':
        return <QuizScreen />;
      case 'flashcards':
        return <FlashcardScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-mint-50 to-lavender-50">
      {renderScreen()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
