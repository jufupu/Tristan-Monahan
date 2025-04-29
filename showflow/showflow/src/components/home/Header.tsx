import React from 'react';
import { View, Text } from 'react-native';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <View className="flex-row justify-between items-center p-4">
      <View>
        <Text className="text-3xl font-bold text-[#1a1b4b]">Good Morning.</Text>
        <Text className="text-3xl font-bold text-[#1a1b4b]">ROA</Text>
      </View>
      <Bell className="text-[#1a1b4b]" size={24} />
    </View>
  );
};

export default Header;