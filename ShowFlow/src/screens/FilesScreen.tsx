import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '@/css/FilesScreen.styles';

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

