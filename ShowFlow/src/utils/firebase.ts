import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/config/firebase';

interface NewEvent {
  title: string;
  time: string;
  duration: string;
  location: string;
  date: string;
  participants: string[];
  variant: 'purple' | 'teal';
  description: string;
}

export async function addEvent(eventData: NewEvent) {
  try {
    const docRef = await addDoc(collection(db, 'events'), eventData);
    console.log('Event added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding event: ', error);
    throw error;
  }
}

// Test function to add a document
export async function testFirebase() {
  try {
    const docRef = await addDoc(collection(db, 'test'), {
      message: 'Firebase is working!'
    });
    console.log('Document written with ID: ', docRef.id);
    return true;
  } catch (e) {
    console.error('Error adding document: ', e);
    return false;
  }
}

export function handleFirebaseError(error: any) {
  console.error('Firebase Error:', error);
  
  // Basic error messages for common issues
  if (error.code === 'permission-denied') {
    return 'You don\'t have permission to perform this action';
  }
  if (error.code === 'not-found') {
    return 'The requested resource was not found';
  }
  
  return 'An error occurred. Please try again later.';
}

export async function deleteEvent(eventId: string) {
  try {
    await deleteDoc(doc(db, 'events', eventId));
    console.log('Event deleted successfully');
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
} 