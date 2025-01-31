import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Coffeestories</Text>
        <Text style={styles.profileEmail}>mark.brock@icloud.com</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inventories</Text>
        <TouchableOpacity style={styles.option}>
          <Feather name="home" size={20} color="#141558" />
          <Text style={styles.optionText}>My stores</Text>
          <View style={styles.optionBadge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Feather name="help-circle" size={20} color="#141558" />
          <Text style={styles.optionText}>Support</Text>
          <Feather name="chevron-right" size={20} color="#141558" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.option}>
          <Feather name="bell" size={20} color="#141558" />
          <Text style={styles.optionText}>Push notifications</Text>
          <Switch value={true} />
        </View>
        <View style={styles.option}>
          <Feather name="lock" size={20} color="#141558" />
          <Text style={styles.optionText}>Face ID</Text>
          <Switch value={true} />
        </View>
        <TouchableOpacity style={styles.option}>
          <Feather name="key" size={20} color="#141558" />
          <Text style={styles.optionText}>PIN Code</Text>
          <Feather name="chevron-right" size={20} color="#141558" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Feather name="log-out" size={20} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141558',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  editProfileButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  editProfileText: {
    color: 'white',
    fontSize: 16,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#141558',
    marginBottom: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#141558',
    flex: 1,
    marginLeft: 8,
  },
  optionBadge: {
    backgroundColor: 'green',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
    marginLeft: 8,
  },
}); 