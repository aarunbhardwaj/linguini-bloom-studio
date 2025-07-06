
import { Card } from "@/components/ui/card";
import { useState } from "react";

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  
  const questions = [
    {
      question: "What does 'Hola' mean in English?",
      options: ["Goodbye", "Hello", "Thank you", "Please"],
      correct: 1,
      explanation: "'Hola' is the most common way to say hello in Spanish!"
    },
    {
      question: "How do you say 'Thank you' in Spanish?",
      options: ["Por favor", "De nada", "Gracias", "Lo siento"],
      correct: 2,
      explanation: "'Gracias' means thank you and is used in many Spanish-speaking countries."
    },
    {
      question: "What is the Spanish word for 'Goodbye'?",
      options: ["Hola", "Adiós", "Buenos días", "Buenas noches"],
      correct: 1,
      explanation: "'Adiós' is the most common way to say goodbye in Spanish."
    }
  ];

  const totalQuestions = questions.length;
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const getOptionColor = (index: number) => {
    if (selectedAnswer === null) {
      return "from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300";
    }
    
    if (index === questions[currentQuestion].correct) {
      return "from-mint-400 to-mint-500 text-white";
    }
    
    if (index === selectedAnswer && selectedAnswer !== questions[currentQuestion].correct) {
      return "from-coral-400 to-coral-500 text-white";
    }
    
    return "from-gray-100 to-gray-200 text-gray-500";
  };

  if (currentQuestion >= totalQuestions) {
    return (
      <div className="p-6 pb-24 max-w-md mx-auto">
        <Card className="glass-card rounded-3xl p-8 text-center shadow-lg">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
          <p className="text-gray-600 mb-6">You scored {score} out of {totalQuestions}</p>
          
          <div className="mb-6">
            <div className="text-4xl font-bold gradient-text mb-2">
              {Math.round((score / totalQuestions) * 100)}%
            </div>
            <p className="text-gray-600">Great job! Keep practicing!</p>
          </div>
          
          <div className="space-y-3">
            <button className="button-primary w-full">
              Try Another Quiz
            </button>
            <button className="button-secondary w-full">
              Review Answers
            </button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 pb-24 max-w-md mx-auto">
      {/* Quiz Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Spanish Quiz</h1>
          <div className="text-right">
            <div className="text-lg font-semibold text-gray-800">{currentQuestion + 1}/{totalQuestions}</div>
            <div className="text-sm text-gray-600">Questions</div>
          </div>
        </div>
        
        {/* Progress Bar with Colorful Segments */}
        <div className="mb-4">
          <div className="flex space-x-1">
            {Array.from({ length: totalQuestions }).map((_, index) => (
              <div 
                key={index}
                className={`h-3 flex-1 rounded-full transition-all duration-300 ${
                  index <= currentQuestion 
                    ? 'bg-gradient-to-r from-sunshine-400 to-sunshine-500' 
                    : 'bg-gray-200'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Question Card */}
      <Card className="glass-card rounded-3xl p-6 mb-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
          {questions[currentQuestion].question}
        </h2>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 text-left rounded-2xl font-medium transition-all duration-200 transform hover:scale-[1.02] bg-gradient-to-r ${getOptionColor(index)} ${
                selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center font-bold text-sm">
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* Explanation and Next Button */}
      {selectedAnswer !== null && (
        <Card className="glass-card rounded-3xl p-6 shadow-lg animate-slide-in">
          <div className="text-center mb-4">
            {selectedAnswer === questions[currentQuestion].correct ? (
              <div className="text-4xl mb-2">✅</div>
            ) : (
              <div className="text-4xl mb-2">❌</div>
            )}
            <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
          </div>
          
          <button 
            onClick={handleNextQuestion}
            className="button-primary w-full"
          >
            {currentQuestion === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </Card>
      )}
    </div>
  );
};

export default QuizScreen;
