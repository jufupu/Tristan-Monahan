import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function Navigation() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Feather name="home" size={24} color="#141558" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Feather name="calendar" size={24} color="#141558" />
        <Text style={styles.navText}>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Feather name="user" size={24} color="#141558" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#141558',
    marginTop: 4,
  },
}); 