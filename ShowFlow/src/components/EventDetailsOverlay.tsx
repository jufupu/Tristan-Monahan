import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '80%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  closeButton: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    color: 'white',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    width: 1,
    height: '60%',
    backgroundColor: '#00C6AE',
  },
  infoText: {
    color: 'white',
    marginTop: 15,
    fontSize: 12,
    textAlign: 'center',
  },
  participationTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  participants: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  participant: {
    backgroundColor: '#00C6AE',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  participantText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  confirmButton: {
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}); 