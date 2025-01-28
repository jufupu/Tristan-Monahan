import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { HomeScreen } from '@/screens/HomeScreen';
import { FilesScreen } from '@/screens/FilesScreen';
import { ProfileScreen } from '@/screens/ProfileScreen';

type TabParamList = {
  Home: undefined;
  Files: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Feather.glyphMap = 'home';
          if (route.name === 'Files') iconName = 'folder';
          else if (route.name === 'Profile') iconName = 'user';
          const iconSize = route.name === 'Files' ? size - 2 : size;
          return <Feather name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: '#141558',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#e5e5e5',
          backgroundColor: 'white',
          height: 90,
          paddingVertical: 12,
        },
        tabBarItemStyle: {
          height: 70,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 8,
          position: 'relative',
          top: -4,
        }
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen 
        name="Files" 
        component={FilesScreen}
        options={{ tabBarLabel: 'Files' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
} 