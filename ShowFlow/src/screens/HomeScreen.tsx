import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Calendar } from '@/components/Calendar';
import { EventCard } from '@/components/EventCard';
import { MonthSelector } from '@/components/MonthSelector';
import { useEvents } from '@/hooks/useEvents';

export function HomeScreen() {
  const { events, loading } = useEvents();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const sampleEvents = [
    {
      id: '1',
      title: "Sample Event 1",
      time: "10:00 AM - 12:00 PM",
      duration: "2 hours",
      location: "Conference Room",
      date: "2023-01-26",
      participants: ['P', 'E'],
      variant: "purple" as const,
      description: "This is a detailed description of Sample Event 1."
    },
    {
      id: '2',
      title: "Sample Event 2",
      time: "1:00 PM - 3:00 PM",
      duration: "2 hours",
      location: "Main Hall",
      date: "2025-01-26",
      participants: ['A', 'B'],
      variant: "teal" as const,
      description: "This is a detailed description of Sample Event 2."
    },
    {
      id: '3',
      title: "Sample Event 3",
      time: "4:00 PM - 5:00 PM",
      duration: "1 hour",
      location: "Lecture Hall",
      date: "2025-01-26",
      participants: ['C', 'D'],
      variant: "purple" as const,
      description: "This is a detailed description of Sample Event 3."
    }
  ];

  const filteredEvents = sampleEvents.filter(event => 
    new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });

  // Determine the current time of day
  const currentHour = new Date().getHours();
  let greeting = "Good Morning";

  if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else if (currentHour >= 18) {
    greeting = "Good Evening";
  }

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>{greeting}.</Text>
              <Text style={styles.subtitle}>GLOC</Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <Feather name="bell" size={20} color="#141558" />
            </TouchableOpacity>
          </View>

          <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
          <Calendar selectedMonth={selectedMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

          <View style={styles.scheduleHeader}>
            <View style={styles.scheduleTitleContainer}>
              <Feather name="calendar" size={20} color="#141558" style={styles.calendarIcon} />
              <Text style={styles.scheduleTitle}>{dayOfWeek}'s Schedule</Text>
            </View>
            <TouchableOpacity style={styles.reminderButton}>
              <Text style={styles.reminderButtonText}>Reminder</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.eventsContainer}>
            {filteredEvents.map(event => (
              <EventCard key={event.id} {...event} description={event.description} />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141558',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#141558',
  },
  notificationButton: {
    padding: 8,
    borderRadius: 20,
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  scheduleTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    marginRight: 8,
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#141558',
  },
  reminderButton: {
    backgroundColor: '#141558',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  reminderButtonText: {
    color: 'white',
    fontSize: 14,
  },
  eventsContainer: {
    padding: 16,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    zIndex: 1000,
    elevation: 5,
  },
}); 