import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Calendar } from '@/components/Calendar';
import { EventCard } from '@/components/EventCard';
import { MonthSelector } from '@/components/MonthSelector';
import { useEvents } from '@/hooks/useEvents';
import { styles } from '@/css/styles';
import { AddEventOverlay } from '@/components/AddEventOverlay';

export function HomeScreen() {
  const { events, loading } = useEvents();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddEvent, setShowAddEvent] = useState(false);

  const filteredEvents = events.filter(event => 
    new Date(event.date).toDateString() === selectedDate.toDateString()
  );

  const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });

  // Determine if the selected date is today
  const today = new Date();
  const isToday = selectedDate.toDateString() === today.toDateString();

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
          <Calendar 
            selectedMonth={selectedMonth} 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate} 
          />

          <View style={styles.scheduleHeader}>
            <View style={styles.scheduleTitleContainer}>
              <Feather name="calendar" size={20} color="#141558" style={styles.calendarIcon} />
              <Text style={styles.scheduleTitle}>
                {isToday ? "Today's Schedule" : `${dayOfWeek}'s Schedule`}
              </Text>
            </View>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => setShowAddEvent(true)}
            >
              <Feather name="plus" size={20} color="#141558" />
            </TouchableOpacity>
          </View>

          <View style={styles.eventsContainer}>
            {filteredEvents.map(event => (
              <EventCard key={event.id} {...event} description={event.description} />
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>

      <AddEventOverlay 
        visible={showAddEvent}
        onClose={() => setShowAddEvent(false)}
      />
    </View>
  );
} 