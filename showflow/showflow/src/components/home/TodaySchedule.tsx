import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EventCard from './EventCard';

const TodaySchedule = () => {
  return (
    <View className="p-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-lg font-semibold text-[#1a1b4b]">Today Schedule</Text>
        <TouchableOpacity className="bg-[#1a1b4b] px-4 py-2 rounded-full">
          <Text className="text-white">Reminder</Text>
        </TouchableOpacity>
      </View>
      
      <View className="mt-4">
        <EventCard
          title="Dance Rehearsal With Steven"
          time="19:00-10:00"
          date="4th Apr 2025"
          type="Dance"
          color="blue"
        />
        <EventCard
          title="Sing Rehearsal with Cameron"
          time="11:00-12:00"
          date="4th Apr 2025"
          type="Sing"
          color="turquoise"
        />
      </View>
    </View>
  );
};

export default TodaySchedule;