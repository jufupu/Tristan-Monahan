import { StyleSheet, View } from 'react-native';
import { HomeScreen } from '@/screens/HomeScreen';
import { EventCard } from '@/components/EventCard';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <EventCard
        title="Sample Event"
        time="10:00 AM - 12:00 PM"
        duration="2 hours"
        location="Conference Room"
        date="2023-10-15"
        participants={['P', 'E']}
        variant="purple"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
