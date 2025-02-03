import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PARTICIPANT_TYPES = ['Principals', 'Ensemble'];

interface ParticipantsPickerProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function ParticipantsPicker({ value, onValueChange }: ParticipantsPickerProps) {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={value}
        onValueChange={onValueChange}
        style={styles.picker}
      >
        {PARTICIPANT_TYPES.map((type) => (
          <Picker.Item 
            key={type} 
            label={type} 
            value={type}
            color="#141558"
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 8,
    backgroundColor: 'white',
    height: 50,
    justifyContent: 'center',
  },
  picker: {
    marginLeft: -10,
    height: 50,
    width: '100%',
  }
}); 