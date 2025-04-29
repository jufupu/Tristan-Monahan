import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

// Placeholder screens - create these later
const ScheduleScreen = () => <View><Text>Schedule</Text></View>;
const ProfileScreen = () => <View><Text>Profile</Text></View>;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#e2e8f0',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <View className={`w-6 h-6 ${focused ? 'bg-[#1a1b4b]' : 'border border-gray-300'} rounded-sm`} />
            ),
          }}
        />
        <Tab.Screen 
          name="Schedule" 
          component={ScheduleScreen}
          options={{
            tabBarLabel: 'Schedule',
            tabBarIcon: ({ focused }) => (
              <View className={`w-6 h-6 ${focused ? 'bg-[#1a1b4b]' : 'border border-gray-300'} rounded-sm`} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (
              <View className={`w-6 h-6 ${focused ? 'bg-[#1a1b4b]' : 'border border-gray-300'} rounded-sm`} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}