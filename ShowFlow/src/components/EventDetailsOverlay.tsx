import React from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '@/css/EventDetailsOverlay.styles';

interface EventDetailsOverlayProps {
  visible: boolean;
  onClose: () => void;
  event: {
    title: string;
    description: string;
    time: string;
    date: string;
    location: string;
    participants: string[];
    variant: 'purple' | 'teal';
  };
}

export function EventDetailsOverlay({ visible, onClose, event }: EventDetailsOverlayProps) {
  const backgroundColor = event.variant === 'purple' ? '#ae81cd' : '#5dd9c1';

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose} activeOpacity={1}>
        <View style={[styles.content, { backgroundColor }]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Feather name="chevron-down" size={24} color="white" />
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

            </Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Feather name="clock" size={44} color="#00C6AE" />
                <Text style={styles.infoText}>{event.time}</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.infoRow}>
                <Feather name="calendar" size={44} color="#00C6AE" />
                <Text style={styles.infoText}>{event.date}</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.infoRow}>
                <Feather name="map-pin" size={44} color="#00C6AE" />
                <Text style={styles.infoText}>{event.location}</Text>
              </View>
            </View>
            <Text style={styles.participationTitle}>Participation:</Text>
            <View style={styles.participants}>
              {event.participants.map((participant, index) => (
                <View key={index} style={styles.participant}>
                  <Text style={styles.participantText}>{participant}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirm Attendance</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
} 