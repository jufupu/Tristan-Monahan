import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Calendar } from '@/components/Calendar';
import { EventCard } from '@/components/EventCard';
import { Navigation } from '@/components/Navigation';
import { MonthSelector } from '@/components/MonthSelector';
import { useEvents } from '@/hooks/useEvents';

export function HomeScreen() {
  const { events, loading } = useEvents();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const sampleEvents = [
    {
      id: '1',
      title: "Sample Event 1",
      time: "10:00 AM - 12:00 PM",
      duration: "2 hours",
      location: "Conference Room",
      date: "2023-10-15",
      participants: ['P', 'E'],
      variant: "purple" as const
    },
    {
      id: '2',
      title: "Sample Event 2",
      time: "1:00 PM - 3:00 PM",
      duration: "2 hours",
      location: "Main Hall",
      date: "2023-10-15",
      participants: ['A', 'B'],
      variant: "teal" as const
    }
  ];

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
              <Text style={styles.title}>Good Morning.</Text>
              <Text style={styles.subtitle}>GLOC</Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <Feather name="bell" size={20} color="#141558" />
            </TouchableOpacity>
          </View>

          <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
          <Calendar selectedMonth={selectedMonth} />

          <View style={styles.eventsContainer}>
            {sampleEvents.map(event => (
              <EventCard key={event.id} {...event} />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>

      <View style={styles.navigationContainer}>
        <Navigation />
      </View>
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
    paddingBottom: 100, // Increased padding to ensure content doesn't hide behind navigation
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