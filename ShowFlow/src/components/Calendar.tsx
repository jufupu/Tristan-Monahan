import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@/css/Calendar.styles';

interface CalendarProps {
  selectedMonth: number;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export function Calendar({ selectedMonth, selectedDate, setSelectedDate }: CalendarProps) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];

  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentYear, selectedMonth, 1).getDay();
  const numberOfDays = daysInMonth(selectedMonth, currentYear);
  const prevMonthDays = daysInMonth(selectedMonth - 1, currentYear);

  const dates = [];
  for (let i = firstDayOfMonth; i > 0; i--) {
    dates.push({ date: prevMonthDays - i + 1, inCurrentMonth: false });
  }
  for (let i = 1; i <= numberOfDays; i++) {
    dates.push({ date: i, inCurrentMonth: true });
  }

  return (
    <View style={styles.container}>
      <View style={styles.daysGrid}>
        {days.map((day) => (
          <View key={day} style={styles.dayCell}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.datesGrid}>
        {dates.map(({ date, inCurrentMonth }, index) => {
          const isToday = inCurrentMonth && selectedMonth === currentMonthIndex && date === currentDate.getDate();
          const isSelected = inCurrentMonth && date === selectedDate.getDate() && selectedMonth === selectedDate.getMonth();

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateCell,
                isToday && styles.todayOutline,
                isSelected && styles.selectedDate
              ]}
              onPress={() => setSelectedDate(new Date(currentYear, selectedMonth, date))}
            >
              <Text style={[
                styles.dateText,
                !inCurrentMonth && styles.greyedOutText,
                isSelected && styles.selectedDateText
              ]}>
                {date}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

