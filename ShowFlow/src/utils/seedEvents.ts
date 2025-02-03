import { addEvent } from './firebase';

const sampleEvents = [
  {
    title: "Team Meeting",
    time: "10:00 AM - 11:00 AM",
    duration: "1 hour",
    location: "Conference Room A",
    date: "2024-01-26",
    participants: ['P', 'E'],
    variant: "purple" as const,
    description: "Weekly team sync to discuss project progress and upcoming milestones."
  },
  {
    title: "Client Presentation",
    time: "2:00 PM - 3:30 PM",
    duration: "1.5 hours",
    location: "Main Hall",
    date: "2024-01-26",
    participants: ['A', 'B'],
    variant: "teal" as const,
    description: "Presenting Q4 results to key stakeholders."
  },
  {
    title: "Workshop",
    time: "4:00 PM - 6:00 PM",
    duration: "2 hours",
    location: "Training Room",
    date: "2024-01-27",
    participants: ['C', 'D'],
    variant: "purple" as const,
    description: "Design thinking workshop for the new product launch."
  }
];

export async function seedEvents() {
  try {
    for (const event of sampleEvents) {
      await addEvent(event);
    }
    console.log('Sample events added successfully');
  } catch (error) {
    console.error('Error seeding events: ', error);
  }
} 