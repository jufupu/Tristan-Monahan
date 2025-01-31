import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function FilesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
            <Text style={styles.title}>Files</Text>
            <Text style={styles.subtitle}>Go listen, study, learn!!</Text>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.fileOption}>
          <Feather name="file-text" size={50} color="#141558" />
          <Text style={styles.optionTitle}>Scripts</Text>
          <Text style={styles.optionCount}>12 files</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.fileOption}>
          <Feather name="music" size={50} color="#141558" />
          <Text style={styles.optionTitle}>Music</Text>
          <Text style={styles.optionCount}>8 files</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fileOption}>
          <Feather name="video" size={50} color="#141558" />
          <Text style={styles.optionTitle}>Videos</Text>
          <Text style={styles.optionCount}>5 files</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141558',
    marginBottom: 24,
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
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  fileOption: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height: '30%',
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#141558',
    marginTop: 16,
  },
  optionCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
}); 