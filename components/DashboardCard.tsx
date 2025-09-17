
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonStyles, colors } from '../styles/commonStyles';
import Icon from './Icon';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: string;
  onPress?: () => void;
  color?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  onPress,
  color = colors.primary,
}) => {
  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent style={[commonStyles.card, styles.card]} onPress={onPress}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          <Icon name={icon as any} size={24} color={colors.backgroundAlt} />
        </View>
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 120,
    marginHorizontal: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
  },
});

export default DashboardCard;
