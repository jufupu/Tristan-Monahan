import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface CalendarProps {
  selectedMonth: number;
}

export function Calendar({ selectedMonth }: CalendarProps) {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.monthText}>{`${months[selectedMonth]}, ${currentYear}`}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Feather name="plus" size={24} color="#141558" />
        </TouchableOpacity>
      </View>

      <View style={styles.daysGrid}>
        {days.map((day) => (
          <View key={day} style={styles.dayCell}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.datesGrid}>
        {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
          <TouchableOpacity
            key={date}
            style={[
              styles.dateCell,
              selectedMonth === currentMonthIndex && date === currentDate.getDate() && styles.selectedDate
            ]}
          >
            <Text style={[
              styles.dateText,
              selectedMonth === currentMonthIndex && date === currentDate.getDate() && styles.selectedDateText
            ]}>
              {date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  monthText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#141558',
  },
  addButton: {
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: '#141558',
  },
  daysGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dayCell: {
    flex: 1,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#141558',
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dateCell: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  dateText: {
    fontSize: 12,
    color: '#141558',
  },
  selectedDate: {
    backgroundColor: '#141558',
  },
  selectedDateText: {
    color: 'white',
  },
});

