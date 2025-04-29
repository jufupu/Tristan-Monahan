import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EventDetailsOverlay } from './EventDetailsOverlay';
import { styles } from '@/css/EventCard.styles';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { deleteEvent } from '@/utils/firebase';

interface EventCardProps {
  id: string;
  title: string;
  time: string;
  duration: string;
  location: string;
  date: string;
  participants: string[];
  variant: 'purple' | 'teal';
  description: string;
}

export function EventCard({ 
  id,
  title, 
  time, 
  duration, 
  location, 
  date, 
  participants, 
  variant, 
  description 
}: EventCardProps) {
  const backgroundColor = variant === 'purple' ? '#ae81cd' : '#5dd9c1';
  const [overlayVisible, setOverlayVisible] = useState(false);

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity
        style={[localStyles.deleteButton]}
        onPress={async () => {
          try {
            await deleteEvent(id);
          } catch (error) {
            console.error('Error deleting event:', error);
          }
        }}
      >
        <Animated.View style={{ transform: [{ scale }] }}>
          <Feather name="trash-2" size={24} color="white" />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={renderRightActions}
        rightThreshold={40}
      >
        <TouchableOpacity 
          style={[styles.container, { backgroundColor }]} 
          onPress={() => setOverlayVisible(true)}
        >
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
        </TouchableOpacity>
      </Swipeable>
      <EventDetailsOverlay
        visible={overlayVisible}
        onClose={() => setOverlayVisible(false)}
        event={{ title, time, date, location, participants, description, variant }}
      />
    </GestureHandlerRootView>
  );
}

const localStyles = StyleSheet.create({
  deleteButton: {
    backgroundColor: '#ff4444',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
}); 