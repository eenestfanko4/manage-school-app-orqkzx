
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import { Student } from '../types';
import Icon from './Icon';

interface StudentCardProps {
  student: Student;
  onPress?: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onPress }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return colors.success;
      case 'inactive':
        return colors.warning;
      case 'graduated':
        return colors.primary;
      default:
        return colors.textSecondary;
    }
  };

  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent style={commonStyles.card} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{student.name.charAt(0)}</Text>
        </View>
        <View style={styles.studentInfo}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.details}>Grade {student.grade} • Class {student.class}</Text>
          <Text style={styles.email}>{student.email}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(student.status) }]}>
          <Text style={styles.statusText}>{student.status.toUpperCase()}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Icon name="call-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.footerText}>{student.phone}</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="calendar-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.footerText}>Enrolled: {new Date(student.enrollmentDate).toLocaleDateString()}</Text>
        </View>
      </View>
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.backgroundAlt,
  },
  studentInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
  },
  details: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  email: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.backgroundAlt,
  },
  footer: {
    gap: 8,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export default StudentCard;
