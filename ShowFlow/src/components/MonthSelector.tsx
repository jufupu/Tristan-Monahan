import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];

export function MonthSelector() {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.container}
    >
      {months.map((month) => (
        <TouchableOpacity
          key={month}
          style={[
            styles.monthButton,
            month === "March" && styles.selectedMonth
          ]}
        >
          <Text style={[
            styles.monthText,
            month === "March" && styles.selectedMonthText
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