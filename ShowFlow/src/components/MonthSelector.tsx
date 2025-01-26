import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];

interface MonthSelectorProps {
  selectedMonth: number;
  setSelectedMonth: (month: number) => void;
}

export function MonthSelector({ selectedMonth, setSelectedMonth }: MonthSelectorProps) {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.container}
    >
      {months.map((month, index) => (
        <TouchableOpacity
          key={month}
          style={[
            styles.monthButton,
            index === selectedMonth && styles.selectedMonth
          ]}
          onPress={() => setSelectedMonth(index)}
        >
          <Text style={[
            styles.monthText,
            index === selectedMonth && styles.selectedMonthText
          ]}>
            {month}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  monthButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#141558',
  },
  monthText: {
    color: '#141558',
    fontSize: 14,
  },
  selectedMonth: {
    backgroundColor: '#141558',
  },
  selectedMonthText: {
    color: 'white',
  },
}); 