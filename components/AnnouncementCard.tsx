
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { Announcement } from '../types';

interface AnnouncementCardProps {
  announcement: Announcement;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({ announcement }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return colors.error;
      case 'medium':
        return colors.warning;
      case 'low':
        return colors.success;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <View style={commonStyles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{announcement.title}</Text>
        <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(announcement.priority) }]}>
          <Text style={styles.priorityText}>{announcement.priority.toUpperCase()}</Text>
        </View>
      </View>
      <Text style={styles.content}>{announcement.content}</Text>
      <View style={styles.footer}>
        <Text style={styles.author}>By {announcement.author}</Text>
        <Text style={styles.date}>{new Date(announcement.date).toLocaleDateString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
    marginRight: 12,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.backgroundAlt,
  },
  content: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  author: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.primary,
  },
  date: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export default AnnouncementCard;
