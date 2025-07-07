
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileCard}>
          <LinearGradient
            colors={['#8B5CF6', '#7C3AED']}
            style={styles.profileGradient}
          >
            <View style={styles.profileContent}>
              <View style={styles.profileTop}>
                <LinearGradient
                  colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.3)']}
                  style={styles.avatar}
                >
                  <Ionicons name="person" size={32} color="white" />
                </LinearGradient>
                <View style={styles.profileInfo}>
                  <Text style={styles.profileName}>{userStats.name}</Text>
                  <Text style={styles.profileLevel}>Level {userStats.level}</Text>
                  <Text style={styles.profileXP}>{userStats.totalXP} XP</Text>
                </View>
              </View>
              
              <View style={styles.quickStats}>
                <View style={styles.statItem}>
                  <LinearGradient
                    colors={['#F59E0B', '#EAB308']}
                    style={styles.statNumber}
                  >
                    <Text style={styles.statNumberText}>{userStats.streak}</Text>
                  </LinearGradient>
                  <Text style={styles.statLabel}>Day Streak</Text>
                </View>
                <View style={styles.statItem}>
                  <LinearGradient
                    colors={['#10B981', '#059669']}
                    style={styles.statNumber}
                  >
                    <Text style={styles.statNumberText}>{userStats.lessonsCompleted}</Text>
                  </LinearGradient>
                  <Text style={styles.statLabel}>Lessons</Text>
                </View>
                <View style={styles.statItem}>
                  <LinearGradient
                    colors={['#EF4444', '#DC2626']}
                    style={styles.statNumber}
                  >
                    <Text style={styles.statNumberText}>{userStats.wordsLearned}</Text>
                  </LinearGradient>
                  <Text style={styles.statLabel}>Words</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Language Progress */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Language Progress</Text>
          {languages.map((language, index) => (
            <View key={index} style={styles.languageItem}>
              <View style={styles.languageHeader}>
                <View style={styles.languageInfo}>
                  <Text style={styles.languageFlag}>{language.flag}</Text>
                  <View>
                    <Text style={styles.languageName}>{language.name}</Text>
                    <Text style={styles.languageLevel}>{language.level}</Text>
                  </View>
                </View>
                <Text style={styles.languageProgress}>{language.progress}%</Text>
              </View>
              <View style={styles.progressBar}>
                <LinearGradient
                  colors={index === 0 ? ['#10B981', '#059669'] : 
                         index === 1 ? ['#0EA5E9', '#0284C7'] : 
                         ['#F59E0B', '#EAB308']}
                  style={[styles.progressFill, { width: `${language.progress}%` }]}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Achievements/Badges */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.badgesGrid}>
            {badges.map((badge, index) => (
              <TouchableOpacity 
                key={index}
                style={styles.badgeItem}
                activeOpacity={0.7}
              >
                <Text style={styles.badgeEmoji}>{badge.emoji}</Text>
                <Text style={styles.badgeName}>{badge.name}</Text>
                <Text style={styles.badgeDescription}>{badge.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Statistics */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Statistics</Text>
          <View style={styles.statsList}>
            <View style={styles.statsItem}>
              <View style={styles.statsLeft}>
                <LinearGradient
                  colors={['#10B981', '#059669']}
                  style={styles.statsIcon}
                >
                  <Ionicons name="book" size={20} color="white" />
                </LinearGradient>
                <Text style={styles.statsLabel}>Lessons Completed</Text>
              </View>
              <Text style={styles.statsValue}>{userStats.lessonsCompleted}</Text>
            </View>
            
            <View style={styles.statsItem}>
              <View style={styles.statsLeft}>
                <LinearGradient
                  colors={['#8B5CF6', '#7C3AED']}
                  style={styles.statsIcon}
                >
                  <Ionicons name="play-circle" size={20} color="white" />
                </LinearGradient>
                <Text style={styles.statsLabel}>Quizzes Completed</Text>
              </View>
              <Text style={styles.statsValue}>{userStats.quizzesCompleted}</Text>
            </View>
            
            <View style={styles.statsItem}>
              <View style={styles.statsLeft}>
                <LinearGradient
                  colors={['#EF4444', '#DC2626']}
                  style={styles.statsIcon}
                >
                  <Ionicons name="flag" size={20} color="white" />
                </LinearGradient>
                <Text style={styles.statsLabel}>Words Mastered</Text>
              </View>
              <Text style={styles.statsValue}>{userStats.wordsLearned}</Text>
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
  profileCard: {
    marginVertical: 16,
    borderRadius: 24,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  profileGradient: {
    borderRadius: 24,
  },
  profileContent: {
    padding: 24,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  profileLevel: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 2,
  },
  profileXP: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  quickStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  languageItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  languageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  languageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageFlag: {
    fontSize: 24,
    marginRight: 12,
  },
  languageName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  languageLevel: {
    fontSize: 14,
    color: '#6B7280',
  },
  languageProgress: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
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
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  badgeItem: {
    width: '30%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  badgeEmoji: {
    fontSize: 24,
    marginBottom: 8,
  },
  badgeName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 4,
  },
  badgeDescription: {
    fontSize: 10,
    color: '#6B7280',
    textAlign: 'center',
  },
  statsList: {
    // Container for stats list
  },
  statsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  statsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  statsLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
  statsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
});

export default ProfileScreen;
