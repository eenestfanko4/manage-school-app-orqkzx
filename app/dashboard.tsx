
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { commonStyles, colors } from '../styles/commonStyles';
import { useAuth } from '../hooks/useAuth';
import DashboardCard from '../components/DashboardCard';
import AnnouncementCard from '../components/AnnouncementCard';
import EventCard from '../components/EventCard';
import Icon from '../components/Icon';
import { mockAnnouncements, mockEvents, mockStudents, mockTeachers } from '../data/mockData';

export default function DashboardScreen() {
  const { user, logout } = useAuth();
  const [selectedTab, setSelectedTab] = useState('overview');

  const handleLogout = () => {
    console.log('Logging out user');
    logout();
    router.replace('/login');
  };

  const navigateToStudents = () => {
    router.push('/students');
  };

  const navigateToTeachers = () => {
    router.push('/teachers');
  };

  const recentAnnouncements = mockAnnouncements.slice(0, 3);
  const upcomingEvents = mockEvents.slice(0, 3);

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.schoolName}>Heighten Brain School</Text>
          <Text style={styles.greeting}>Welcome back, {user?.name || 'User'}</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="log-out-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Dashboard Cards */}
        <View style={styles.cardsContainer}>
          <DashboardCard
            title="Total Students"
            value={mockStudents.length}
            icon="people"
            color={colors.primary}
            onPress={navigateToStudents}
          />
          <DashboardCard
            title="Total Teachers"
            value={mockTeachers.length}
            icon="school"
            color={colors.accent}
            onPress={navigateToTeachers}
          />
        </View>

        <View style={styles.cardsContainer}>
          <DashboardCard
            title="Active Classes"
            value="12"
            icon="library"
            color={colors.success}
          />
          <DashboardCard
            title="Upcoming Events"
            value={upcomingEvents.length}
            icon="calendar"
            color={colors.warning}
          />
        </View>

        {/* Quick Actions */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.subtitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionButton} onPress={navigateToStudents}>
              <Icon name="person-add" size={24} color={colors.primary} />
              <Text style={styles.actionText}>Add Student</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="document-text" size={24} color={colors.primary} />
              <Text style={styles.actionText}>Generate Report</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="megaphone" size={24} color={colors.primary} />
              <Text style={styles.actionText}>New Announcement</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="calendar-outline" size={24} color={colors.primary} />
              <Text style={styles.actionText}>Schedule Event</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Announcements */}
        <View style={commonStyles.section}>
          <View style={styles.sectionHeader}>
            <Text style={commonStyles.subtitle}>Recent Announcements</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {recentAnnouncements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </View>

        {/* Upcoming Events */}
        <View style={commonStyles.section}>
          <View style={styles.sectionHeader}>
            <Text style={commonStyles.subtitle}>Upcoming Events</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerLeft: {
    flex: 1,
  },
  schoolName: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 2,
  },
  greeting: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  logoutButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 16,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionButton: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
    marginTop: 8,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
  },
});
