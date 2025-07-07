
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
    handleNextCard();
  };

  const handleDontKnowCard = () => {
    handleNextCard();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.headerTitle}>Flashcards</Text>
            <View style={styles.cardCounter}>
              <Text style={styles.cardNumber}>{currentCard + 1}/{totalCards}</Text>
              <Text style={styles.cardLabel}>Cards</Text>
            </View>
          </View>
          
          <View style={styles.progressBar}>
            <LinearGradient
              colors={['#8B5CF6', '#7C3AED']}
              style={[styles.progressFill, { width: `${progressPercentage}%` }]}
            />
          </View>
        </View>

        {/* Flashcard */}
        <TouchableOpacity 
          onPress={handleCardFlip}
          style={styles.cardContainer}
          activeOpacity={0.9}
        >
          <View style={styles.card}>
            {!isFlipped ? (
              <View style={styles.cardFront}>
                <LinearGradient
                  colors={['#8B5CF6', '#7C3AED']}
                  style={styles.cardGradient}
                >
                  <Text style={styles.cardWord}>{flashcards[currentCard].front}</Text>
                  <Text style={styles.cardPrompt}>Tap to reveal translation</Text>
                  <Text style={styles.cardEmoji}>🤔</Text>
                </LinearGradient>
              </View>
            ) : (
              <View style={styles.cardBack}>
                <LinearGradient
                  colors={['#10B981', '#059669']}
                  style={styles.cardGradient}
                >
                  <Text style={styles.cardTranslation}>{flashcards[currentCard].back}</Text>
                  <Text style={styles.cardPronunciation}>
                    /{flashcards[currentCard].pronunciation}/
                  </Text>
                  <Text style={styles.cardOriginal}>{flashcards[currentCard].front}</Text>
                  <Text style={styles.cardEmoji}>✨</Text>
                </LinearGradient>
              </View>
            )}
          </View>
        </TouchableOpacity>

        {/* Action Buttons */}
        {isFlipped && (
          <View style={styles.actionButtons}>
            <View style={styles.buttonRow}>
              <LinearGradient
                colors={['#EF4444', '#DC2626']}
                style={[styles.actionButton, styles.leftButton]}
              >
                <TouchableOpacity 
                  onPress={handleDontKnowCard}
                  style={styles.buttonContent}
                >
                  <Text style={styles.buttonText}>Need Practice</Text>
                </TouchableOpacity>
              </LinearGradient>
              
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={[styles.actionButton, styles.rightButton]}
              >
                <TouchableOpacity 
                  onPress={handleKnowCard}
                  style={styles.buttonContent}
                >
                  <Text style={styles.buttonText}>I Know This</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        )}

        {/* Navigation */}
        <View style={styles.navigation}>
          <TouchableOpacity 
            onPress={handlePrevCard}
            disabled={currentCard === 0}
            style={[
              styles.navButton, 
              currentCard === 0 && styles.navButtonDisabled
            ]}
          >
            <Text style={[
              styles.navButtonText,
              currentCard === 0 && styles.navButtonTextDisabled
            ]}>
              Previous
            </Text>
          </TouchableOpacity>
          
          <View style={styles.dots}>
            {Array.from({ length: Math.min(totalCards, 5) }).map((_, index) => {
              const cardIndex = currentCard - 2 + index;
              if (cardIndex < 0 || cardIndex >= totalCards) return null;
              
              return (
                <View 
                  key={cardIndex}
                  style={[
                    styles.dot,
                    cardIndex === currentCard && styles.dotActive
                  ]}
                />
              );
            })}
          </View>
          
          <TouchableOpacity 
            onPress={handleNextCard}
            disabled={currentCard === totalCards - 1}
            style={[
              styles.navButton, 
              currentCard === totalCards - 1 && styles.navButtonDisabled
            ]}
          >
            <Text style={[
              styles.navButtonText,
              currentCard === totalCards - 1 && styles.navButtonTextDisabled
            ]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
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
  cardCounter: {
    alignItems: 'flex-end',
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  cardLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressBar: {
    height: 12,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
  },
  progressFill: {
    height: '100%',
    borderRadius: 6,
  },
  cardContainer: {
    marginVertical: 32,
  },
  card: {
    height: 300,
    borderRadius: 24,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  cardFront: {
    flex: 1,
  },
  cardBack: {
    flex: 1,
  },
  cardGradient: {
    flex: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  cardWord: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  cardPrompt: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 24,
    textAlign: 'center',
  },
  cardEmoji: {
    fontSize: 48,
  },
  cardTranslation: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardPronunciation: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
    textAlign: 'center',
  },
  cardOriginal: {
    fontSize: 24,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 24,
    textAlign: 'center',
  },
  actionButtons: {
    marginVertical: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    borderRadius: 16,
  },
  leftButton: {
    marginRight: 8,
  },
  rightButton: {
    marginLeft: 8,
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
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  navButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  navButtonDisabled: {
    backgroundColor: '#E5E7EB',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  navButtonTextDisabled: {
    color: '#9CA3AF',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#8B5CF6',
    transform: [{ scale: 1.25 }],
  },
});

export default FlashcardScreen;
