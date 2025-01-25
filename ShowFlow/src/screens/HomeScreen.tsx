import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Calendar } from '@/components/Calendar';
import { EventCard } from '@/components/EventCard';
import { Navigation } from '@/components/Navigation';
import { MonthSelector } from '@/components/MonthSelector';
import { useEvents } from '@/hooks/useEvents';

export function HomeScreen() {
  const { events, loading } = useEvents();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Good Morning.</Text>
          <Text style={styles.subtitle}>GLOC</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Feather name="bell" size={20} color="#141558" />
        </TouchableOpacity>
      </View>

      <MonthSelector />
      <Calendar />

      <View style={styles.eventsContainer}>
        {loading ? (
          <Text>Loading events...</Text>
        ) : (
          events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              time={event.time}
              duration={event.duration}
              location={event.location}
              date={event.date}
              participants={event.participants}
              variant={event.variant}
            />
          ))
        )}
      </View>

      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
    paddingBottom: 80,
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
    marginBottom: 80,
  },
}); 