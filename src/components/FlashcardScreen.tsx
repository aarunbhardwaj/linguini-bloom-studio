
import { Card } from "@/components/ui/card";
import { useState } from "react";

const FlashcardScreen = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const flashcards = [
    { front: "Hola", back: "Hello", pronunciation: "OH-lah" },
    { front: "Gracias", back: "Thank you", pronunciation: "GRAH-see-ahs" },
    { front: "Adiós", back: "Goodbye", pronunciation: "ah-dee-OHS" },
    { front: "Por favor", back: "Please", pronunciation: "por fah-VOR" },
    { front: "Lo siento", back: "I'm sorry", pronunciation: "loh see-EN-toh" },
    { front: "De nada", back: "You're welcome", pronunciation: "deh NAH-dah" },
  ];

  const totalCards = flashcards.length;
  const progressPercentage = ((currentCard + 1) / totalCards) * 100;

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    if (currentCard < totalCards - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  const handleKnowCard = () => {
    // Handle "I know this" action
    handleNextCard();
  };

  const handleDontKnowCard = () => {
    // Handle "I don't know this" action
    handleNextCard();
  };

  return (
    <div className="p-6 pb-24 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Flashcards</h1>
          <div className="text-right">
            <div className="text-lg font-semibold text-gray-800">{currentCard + 1}/{totalCards}</div>
            <div className="text-sm text-gray-600">Cards</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-lavender-400 to-lavender-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Flashcard */}
      <div className="mb-8 perspective-1000">
        <Card 
          className={`glass-card rounded-3xl shadow-lg cursor-pointer transition-all duration-500 transform-gpu ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          style={{ 
            height: '300px',
            transformStyle: 'preserve-3d'
          }}
          onClick={handleCardFlip}
        >
          {/* Front of card */}
          <div 
            className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center backface-hidden ${
              isFlipped ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="text-4xl font-bold gradient-text mb-4">
              {flashcards[currentCard].front}
            </div>
            <p className="text-gray-600 mb-6">Tap to reveal translation</p>
            <div className="text-6xl animate-bounce-gentle">🤔</div>
          </div>
          
          {/* Back of card */}
          <div 
            className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center backface-hidden rotate-y-180 ${
              isFlipped ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {flashcards[currentCard].back}
            </div>
            <div className="text-lg text-gray-600 mb-4">
              /{flashcards[currentCard].pronunciation}/
            </div>
            <div className="text-2xl text-coral-500 font-semibold mb-6">
              {flashcards[currentCard].front}
            </div>
            <div className="text-4xl">✨</div>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      {isFlipped && (
        <div className="space-y-4 animate-slide-in">
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={handleDontKnowCard}
              className="bg-gradient-to-r from-coral-400 to-coral-500 hover:from-coral-500 hover:to-coral-600 text-white font-medium rounded-2xl px-6 py-4 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Need Practice
            </button>
            <button 
              onClick={handleKnowCard}
              className="bg-gradient-to-r from-mint-400 to-mint-500 hover:from-mint-500 hover:to-mint-600 text-white font-medium rounded-2xl px-6 py-4 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              I Know This
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <button 
          onClick={handlePrevCard}
          disabled={currentCard === 0}
          className={`px-6 py-3 rounded-2xl font-medium transition-all duration-200 ${
            currentCard === 0 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white/80 text-gray-700 hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-105'
          }`}
        >
          Previous
        </button>
        
        <div className="flex space-x-2">
          {Array.from({ length: Math.min(totalCards, 5) }).map((_, index) => {
            const cardIndex = currentCard - 2 + index;
            if (cardIndex < 0 || cardIndex >= totalCards) return null;
            
            return (
              <div 
                key={cardIndex}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  cardIndex === currentCard 
                    ? 'bg-gradient-to-r from-lavender-400 to-lavender-500 scale-125' 
                    : 'bg-gray-300'
                }`}
              ></div>
            );
          })}
        </div>
        
        <button 
          onClick={handleNextCard}
          disabled={currentCard === totalCards - 1}
          className={`px-6 py-3 rounded-2xl font-medium transition-all duration-200 ${
            currentCard === totalCards - 1 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-white/80 text-gray-700 hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-105'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardScreen;
