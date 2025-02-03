import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { styles } from '@/css/MonthSelector.styles';

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