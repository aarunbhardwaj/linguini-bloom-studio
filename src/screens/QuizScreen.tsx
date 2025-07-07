
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

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

  const getOptionStyle = (index: number) => {
    if (selectedAnswer === null) {
      return styles.optionDefault;
    }
    
    if (index === questions[currentQuestion].correct) {
      return styles.optionCorrect;
    }
    
    if (index === selectedAnswer && selectedAnswer !== questions[currentQuestion].correct) {
      return styles.optionIncorrect;
    }
    
    return styles.optionDisabled;
  };

  if (currentQuestion >= totalQuestions) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.completionContainer}>
          <View style={styles.card}>
            <Text style={styles.completionEmoji}>🎉</Text>
            <Text style={styles.completionTitle}>Quiz Complete!</Text>
            <Text style={styles.completionScore}>You scored {score} out of {totalQuestions}</Text>
            
            <LinearGradient
              colors={['#8B5CF6', '#7C3AED']}
              style={styles.scoreCircle}
            >
              <Text style={styles.scorePercentage}>
                {Math.round((score / totalQuestions) * 100)}%
              </Text>
            </LinearGradient>
            
            <Text style={styles.encouragement}>Great job! Keep practicing!</Text>
            
            <View style={styles.completionButtons}>
              <LinearGradient
                colors={['#8B5CF6', '#7C3AED']}
                style={styles.primaryButton}
              >
                <TouchableOpacity style={styles.buttonContent}>
                  <Text style={styles.buttonText}>Try Another Quiz</Text>
                </TouchableOpacity>
              </LinearGradient>
              
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={styles.secondaryButton}
              >
                <TouchableOpacity style={styles.buttonContent}>
                  <Text style={styles.buttonText}>Review Answers</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Quiz Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>Spanish Quiz</Text>
            <View style={styles.questionCounter}>
              <Text style={styles.questionNumber}>{currentQuestion + 1}/{totalQuestions}</Text>
              <Text style={styles.questionLabel}>Questions</Text>
            </View>
          </View>
          
          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            {Array.from({ length: totalQuestions }).map((_, index) => (
              <View 
                key={index}
                style={[
                  styles.progressSegment,
                  index <= currentQuestion ? styles.progressSegmentActive : styles.progressSegmentInactive
                ]}
              />
            ))}
          </View>
        </View>

        {/* Question Card */}
        <View style={styles.card}>
          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>
          
          <View style={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                style={[styles.option, getOptionStyle(index)]}
              >
                <View style={styles.optionContent}>
                  <View style={styles.optionLetter}>
                    <Text style={styles.optionLetterText}>
                      {String.fromCharCode(65 + index)}
                    </Text>
                  </View>
                  <Text style={styles.optionText}>{option}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Explanation and Next Button */}
        {selectedAnswer !== null && (
          <View style={styles.card}>
            <View style={styles.explanationContainer}>
              <Text style={styles.explanationEmoji}>
                {selectedAnswer === questions[currentQuestion].correct ? '✅' : '❌'}
              </Text>
              <Text style={styles.explanationText}>
                {questions[currentQuestion].explanation}
              </Text>
            </View>
            
            <LinearGradient
              colors={['#8B5CF6', '#7C3AED']}
              style={styles.nextButton}
            >
              <TouchableOpacity 
                onPress={handleNextQuestion}
                style={styles.buttonContent}
              >
                <Text style={styles.buttonText}>
                  {currentQuestion === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  completionContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginVertical: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  questionCounter: {
    alignItems: 'flex-end',
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  questionLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  progressSegment: {
    flex: 1,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 2,
  },
  progressSegmentActive: {
    backgroundColor: '#F59E0B',
  },
  progressSegmentInactive: {
    backgroundColor: '#E5E7EB',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 24,
    padding: 24,
    marginVertical: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 24,
    lineHeight: 28,
  },
  optionsContainer: {
    // Container for options
  },
  option: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  optionDefault: {
    backgroundColor: '#F3F4F6',
  },
  optionCorrect: {
    backgroundColor: '#10B981',
  },
  optionIncorrect: {
    backgroundColor: '#EF4444',
  },
  optionDisabled: {
    backgroundColor: '#E5E7EB',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLetter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionLetterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    flex: 1,
  },
  explanationContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  explanationEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 16,
    color: '#1F2937',
    textAlign: 'center',
    lineHeight: 24,
  },
  nextButton: {
    borderRadius: 16,
  },
  buttonContent: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  completionEmoji: {
    fontSize: 64,
    textAlign: 'center',
    marginBottom: 16,
  },
  completionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  completionScore: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  scoreCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  scorePercentage: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  encouragement: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  completionButtons: {
    // Container for completion buttons
  },
  primaryButton: {
    borderRadius: 16,
    marginBottom: 12,
  },
  secondaryButton: {
    borderRadius: 16,
  },
});

export default QuizScreen;
