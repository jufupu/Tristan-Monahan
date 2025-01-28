import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const files = [
  { id: '1', name: 'Document 1', type: 'pdf', count: 18 },
  { id: '2', name: 'Audio 1', type: 'audio', count: 20 },
  { id: '3', name: 'Document 2', type: 'pdf', count: 42 },
  { id: '4', name: 'Audio 2', type: 'audio', count: 28 },
  { id: '5', name: 'Document 3', type: 'pdf', count: 30 },
  { id: '6', name: 'Audio 3', type: 'audio', count: 68 },
];

export function FilesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Files</Text>
      <FlatList
        data={files}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.fileItem}>
            <Feather name={item.type === 'pdf' ? 'file-text' : 'music'} size={40} color="#141558" />
            <Text style={styles.fileName}>{item.name} ({item.count})</Text>
          </TouchableOpacity>
        )}
      />
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
    marginBottom: 16,
  },
  fileItem: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  fileName: {
    marginTop: 8,
    fontSize: 14,
    color: '#141558',
    textAlign: 'center',
  },
}); 