import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Modal, 
  TouchableOpacity, 
  TextInput,
  ScrollView,
  StyleSheet,
  Platform 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addEvent } from '@/utils/firebase';
import { useEvents } from '@/hooks/useEvents';
import { RehearsalTypePicker } from './pickers/RehearsalTypePicker';
import { ParticipantsPicker } from './pickers/ParticipantsPicker';

interface AddEventOverlayProps {
  visible: boolean;
  onClose: () => void;
}

export function AddEventOverlay({ visible, onClose }: AddEventOverlayProps) {
  const { events } = useEvents();
  const [formData, setFormData] = useState({
    title: '',
    type: 'Sing',
    time: new Date(),
    date: new Date(),
    location: '',
    duration: '1',
    participants: 'Principals',
    description: '',
    variant: 'purple' as const
  });

  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSubmit = async () => {
    try {
      const lastEvent = events[events.length - 1];
      const nextVariant = lastEvent?.variant === 'purple' ? 'teal' : 'purple';

      // Format time and date
      const timeString = formData.time.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      const dateString = formData.date.toISOString().split('T')[0];

      // Map participants to initials
      const participantInitials = formData.participants === 'Principals' ? ['P'] : ['E'];

      await addEvent({
        ...formData,
        time: timeString,
        date: dateString,
        participants: participantInitials,
        variant: nextVariant
      });
      
      onClose();
      setFormData({
        title: '',
        type: 'Sing',
        time: new Date(),
        date: new Date(),
        location: '',
        duration: '1',
        participants: 'Principals',
        description: '',
        variant: 'purple'
      });
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Add New Rehearsal</Text>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={24} color="#141558" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.input}
                value={formData.title}
                onChangeText={(text) => setFormData({ ...formData, title: text })}
                placeholder="Enter rehearsal title"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Type</Text>
              <RehearsalTypePicker
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Time</Text>
              <TouchableOpacity 
                style={styles.input}
                onPress={() => setShowTimePicker(true)}
              >
                <Text>
                  {formData.time.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </Text>
              </TouchableOpacity>
              {showTimePicker && (
                <DateTimePicker
                  value={formData.time}
                  mode="time"
                  is24Hour={false}
                  onChange={(event, selectedTime) => {
                    setShowTimePicker(false);
                    if (selectedTime) {
                      setFormData({ ...formData, time: selectedTime });
                    }
                  }}
                />
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity 
                style={styles.input}
                onPress={() => setShowDatePicker(true)}
              >
                <Text>
                  {formData.date.toLocaleDateString()}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={formData.date}
                  mode="date"
                  onChange={(event, selectedDate) => {
                    setShowDatePicker(false);
                    if (selectedDate) {
                      setFormData({ ...formData, date: selectedDate });
                    }
                  }}
                />
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Location</Text>
              <TextInput
                style={styles.input}
                value={formData.location}
                onChangeText={(text) => setFormData({ ...formData, location: text })}
                placeholder="Enter location"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Duration (hours)</Text>
              <TextInput
                style={styles.input}
                value={formData.duration}
                onChangeText={(text) => setFormData({ ...formData, duration: text })}
                keyboardType="numeric"
                placeholder="Enter duration in hours"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Required Participants</Text>
              <ParticipantsPicker
                value={formData.participants}
                onValueChange={(value) => setFormData({ ...formData, participants: value })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.description}
                onChangeText={(text) => setFormData({ ...formData, description: text })}
                placeholder="Enter description"
                multiline
                numberOfLines={4}
              />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Add Rehearsal</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141558',
  },
  form: {
    flex: 1,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#141558',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#141558',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 