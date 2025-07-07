
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
import { Ionicons } from '@expo/vector-icons';

const LessonScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(45);
  
  const vocabularyWords = [
    { word: "Hola", translation: "Hello", pronunciation: "OH-lah" },
    { word: "Gracias", translation: "Thank you", pronunciation: "GRAH-see-ahs" },
    { word: "Adiós", translation: "Goodbye", pronunciation: "ah-dee-OHS" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Lesson Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <LinearGradient
              colors={['#10B981', '#059669']}
              style={styles.headerIcon}
            >
              <Ionicons name="book" size={24} color="white" />
            </LinearGradient>
            <View>
              <Text style={styles.headerTitle}>Spanish Basics</Text>
              <Text style={styles.headerSubtitle}>Lesson 3: Greetings</Text>
            </View>
          </View>
          
          <View style={styles.progressSection}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressText}>Lesson Progress</Text>
              <Text style={styles.progressText}>{progress}%</Text>
            </View>
            <View style={styles.progressBar}>
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={[styles.progressFill, { width: `${progress}%` }]}
              />
            </View>
          </View>
        </View>

        {/* Audio Player */}
        <View style={styles.card}>
          <Text style={styles.audioTitle}>Listen & Repeat</Text>
          <Text style={styles.audioPhrase}>"Buenos días, ¿cómo está usted?"</Text>
          <Text style={styles.audioTranslation}>Good morning, how are you?</Text>
          
          <TouchableOpacity 
            onPress={() => setIsPlaying(!isPlaying)}
            style={styles.playButtonContainer}
          >
            <LinearGradient
              colors={isPlaying ? ['#EF4444', '#DC2626'] : ['#8B5CF6', '#7C3AED']}
              style={styles.playButton}
            >
              {isPlaying ? (
                <View style={styles.pauseIcon} />
              ) : (
                <Ionicons name="play" size={32} color="white" />
              )}
            </LinearGradient>
          </TouchableOpacity>
          
          <View style={styles.audioProgressBar}>
            <LinearGradient
              colors={['#8B5CF6', '#7C3AED']}
              style={[styles.audioProgressFill, { width: '33%' }]}
            />
          </View>
          
          <View style={styles.speedControls}>
            <TouchableOpacity style={styles.speedButton}>
              <Ionicons name="headset" size={16} color="#6B7280" />
              <Text style={styles.speedText}>Slow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.speedButton}>
              <Ionicons name="headset" size={16} color="#6B7280" />
              <Text style={styles.speedText}>Normal</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Vocabulary Highlights */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Key Vocabulary</Text>
          {vocabularyWords.map((vocab, index) => (
            <View key={index} style={styles.vocabItem}>
              <View style={styles.vocabContent}>
                <Text style={styles.vocabWord}>{vocab.word}</Text>
                <TouchableOpacity style={styles.vocabPlayButton}>
                  <LinearGradient
                    colors={['#0EA5E9', '#0284C7']}
                    style={styles.smallPlayButton}
                  >
                    <Ionicons name="play" size={16} color="white" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <Text style={styles.vocabTranslation}>{vocab.translation}</Text>
              <Text style={styles.vocabPronunciation}>{vocab.pronunciation}</Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <LinearGradient
            colors={['#8B5CF6', '#7C3AED']}
            style={styles.primaryButton}
          >
            <TouchableOpacity style={styles.buttonContent}>
              <Text style={styles.buttonText}>Practice Speaking</Text>
            </TouchableOpacity>
          </LinearGradient>
          
          <LinearGradient
            colors={['#10B981', '#059669']}
            style={styles.secondaryButton}
          >
            <TouchableOpacity style={styles.buttonContent}>
              <Text style={styles.buttonText}>Take Quiz</Text>
            </TouchableOpacity>
          </LinearGradient>
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
    alignItems: 'center',
    marginBottom: 16,
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  progressSection: {
    marginBottom: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressText: {
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
  audioTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  audioPhrase: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 4,
  },
  audioTranslation: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 24,
  },
  playButtonContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pauseIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  audioProgressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginBottom: 16,
  },
  audioProgressFill: {
    height: '100%',
    borderRadius: 4,
  },
  speedControls: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  speedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginHorizontal: 8,
  },
  speedText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  vocabItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  vocabContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  vocabWord: {
    fontSize: 18,
    fontWeight: '600',
    color: '#EF4444',
  },
  vocabPlayButton: {
    // Container for play button
  },
  smallPlayButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vocabTranslation: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 4,
  },
  vocabPronunciation: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  actionButtons: {
    marginVertical: 16,
    marginBottom: 32,
  },
  primaryButton: {
    borderRadius: 16,
    marginBottom: 12,
  },
  secondaryButton: {
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
});

export default LessonScreen;
