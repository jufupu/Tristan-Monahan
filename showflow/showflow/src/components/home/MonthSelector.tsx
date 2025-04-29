import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

const MonthSelector = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June'];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
      {months.map((month, index) => (
        <TouchableOpacity 
          key={month}
          className={`px-4 py-2 rounded-full mr-2 ${
            month === 'March' ? 'bg-[#1a1b4b]' : 'border border-gray-300'
          }`}
        >
          <Text className={month === 'March' ? 'text-white' : 'text-gray-600'}>
            {month}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default MonthSelector;