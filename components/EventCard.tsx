
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { Event } from '../types';
import Icon from './Icon';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return 'book';
      case 'sports':
        return 'basketball';
      case 'cultural':
        return 'musical-notes';
      case 'meeting':
        return 'people';
      default:
        return 'calendar';
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'academic':
        return colors.primary;
      case 'sports':
        return colors.success;
      case 'cultural':
        return colors.accent;
      case 'meeting':
        return colors.warning;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <View style={commonStyles.card}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: getEventColor(event.type) }]}>
          <Icon name={getEventIcon(event.type) as any} size={20} color={colors.backgroundAlt} />
        </View>
        <View style={styles.eventInfo}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.description}>{event.description}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Icon name="calendar-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.detailText}>{new Date(event.date).toLocaleDateString()}</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="time-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.detailText}>{event.time}</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="location-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.detailText}>{event.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  eventInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  details: {
    gap: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default EventCard;
