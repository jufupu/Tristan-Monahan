import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface EventCardProps {
  title: string;
  time: string;
  duration: string;
  location: string;
  date: string;
  participants: string[];
  variant: 'purple' | 'teal';
}

export function EventCard({ 
  title, 
  time, 
  duration, 
  location, 
  date, 
  participants, 
  variant 
}: EventCardProps) {
  const backgroundColor = variant === 'purple' ? '#ae81cd' : '#5dd9c1';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.duration}>{duration}</Text>
      <View style={styles.participants}>
        {participants.map((participant, i) => (
          <View
            key={i}
            style={[
              styles.participantCircle,
              { backgroundColor: participant === 'P' ? '#f68ca0' : '#f7ba8c' }
            ]}
          >
            <Text style={styles.participantText}>{participant}</Text>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Feather name="clock" size={16} color="white" />
          <Text style={styles.footerText}>{time}</Text>
        </View>
        <View style={styles.footerItem}>
          <Feather name="map-pin" size={16} color="white" />
          <Text style={styles.footerText}>{location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  duration: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },
  participants: {
    flexDirection: 'row',
    marginTop: 8,
  },
  participantCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  participantText: {
    color: 'white',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  footerText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 4,
  },
});

 