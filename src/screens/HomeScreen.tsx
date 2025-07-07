
import React from 'react';
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

const HomeScreen = () => {
  const streakDays = 7;
  const currentLesson = "Spanish Basics - Lesson 3";
  const progress = 65;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Welcome Banner */}
        <LinearGradient
          colors={['#8B5CF6', '#F59E0B', '#EF4444']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.welcomeBanner}
        >
          <Text style={styles.welcomeTitle}>¡Hola, Sarah! 👋</Text>
          <Text style={styles.welcomeSubtitle}>Ready for your daily lesson?</Text>
        </LinearGradient>

        {/* Streak Tracker */}
        <View style={styles.card}>
          <View style={styles.streakContainer}>
            <View>
              <Text style={styles.cardTitle}>Daily Streak</Text>
              <Text style={styles.cardSubtitle}>Keep it going!</Text>
            </View>
            <View style={styles.streakRight}>
              <LinearGradient
                colors={['#F59E0B', '#EAB308']}
                style={styles.streakBadge}
              >
                <Text style={styles.streakNumber}>{streakDays}</Text>
              </LinearGradient>
              <View style={styles.streakInfo}>
                <Text style={styles.streakEmoji}>🔥</Text>
                <Text style={styles.streakDays}>days</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Continue Lesson Card */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.lessonHeader}>
            <View style={styles.lessonLeft}>
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={styles.lessonIcon}
              >
                <Ionicons name="book" size={24} color="white" />
              </LinearGradient>
              <View>
                <Text style={styles.cardTitle}>Continue Learning</Text>
                <Text style={styles.cardSubtitle}>{currentLesson}</Text>
              </View>
            </View>
            <Ionicons name="flag" size={32} color="#F59E0B" />
          </View>
          
          <View style={styles.progressSection}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressText}>Progress</Text>
              <Text style={styles.progressText}>{progress}%</Text>
            </View>
            <View style={styles.progressBar}>
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={[styles.progressFill, { width: `${progress}%` }]}
              />
            </View>
          </View>
          
          <LinearGradient
            colors={['#10B981', '#059669']}
            style={styles.continueButton}
          >
            <Text style={styles.buttonText}>Continue Lesson</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={[styles.card, styles.quickActionCard]}>
            <LinearGradient
              colors={['#8B5CF6', '#7C3AED']}
              style={styles.quickActionIcon}
            >
              <Ionicons name="play-circle" size={24} color="white" />
            </LinearGradient>
            <Text style={styles.quickActionTitle}>Quick Quiz</Text>
            <Text style={styles.quickActionSubtitle}>Test your skills</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.card, styles.quickActionCard]}>
            <LinearGradient
              colors={['#EF4444', '#DC2626']}
              style={styles.quickActionIcon}
            >
              <Ionicons name="layers" size={24} color="white" />
            </LinearGradient>
            <Text style={styles.quickActionTitle}>Flashcards</Text>
            <Text style={styles.quickActionSubtitle}>Review vocab</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Challenge */}
        <View style={styles.card}>
          <View style={styles.challengeHeader}>
            <View>
              <Text style={styles.cardTitle}>Today's Challenge</Text>
              <Text style={styles.cardSubtitle}>Complete 3 lessons to earn a badge!</Text>
            </View>
            <Text style={styles.challengeEmoji}>🏆</Text>
          </View>
          <View style={styles.challengeProgress}>
            <LinearGradient
              colors={['#10B981', '#059669']}
              style={styles.challengeStep}
            >
              <Ionicons name="checkmark" size={16} color="white" />
            </LinearGradient>
            <LinearGradient
              colors={['#F59E0B', '#EAB308']}
              style={styles.challengeStep}
            >
              <Ionicons name="checkmark" size={16} color="white" />
            </LinearGradient>
            <View style={styles.challengeStepInactive}>
              <Text style={styles.challengeStepText}>3</Text>
            </View>
          </View>
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
  welcomeBanner: {
    borderRadius: 24,
    padding: 24,
    marginVertical: 16,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 24,
    padding: 20,
    marginVertical: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  streakContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  streakRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  streakNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  streakInfo: {
    alignItems: 'center',
  },
  streakEmoji: {
    fontSize: 24,
  },
  streakDays: {
    fontSize: 12,
    color: '#6B7280',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  lessonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
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
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  continueButton: {
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  quickActionCard: {
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  quickActionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  challengeEmoji: {
    fontSize: 32,
  },
  challengeProgress: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  challengeStep: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  challengeStepInactive: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  challengeStepText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9CA3AF',
  },
});

export default HomeScreen;
