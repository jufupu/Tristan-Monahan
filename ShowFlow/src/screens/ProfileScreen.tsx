import React from 'react';
import { View, Text, TouchableOpacity, Switch, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '@/css/ProfileScreen.styles';

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