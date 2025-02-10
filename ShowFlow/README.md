# ShowFlow - Event Management App

A React Native mobile application designed for my theatre club with the plan to use it for this years production. Managing rehearsals and events, with a focus on theater/performance scheduling. Built with TypeScript and Firebase, ShowFlow provides an intuitive interface for creating, managing, and tracking rehearsal schedules.

## Features

### Calendar & Scheduling
- Interactive calendar view with month selection
- Daily schedule overview
- Color-coded event cards
- Responsive design for mobile devices

### Event Management
- Create new rehearsal events
- Detailed event information including:
  - Title and description
  - Rehearsal type (Sing, etc.)
  - Time and date selection
  - Location
  - Duration
  - Participant groups (Principals/Ensemble)
- 🔄 Real-time updates using Firebase

### File Management
- Organized file categories:
  - Scripts
  - Music
  - Videos
- File count tracking
- Easy access to rehearsal materials

### User Profile
-  User profile management
-  Push notification preferences
-  Security features (Face ID, PIN Code)
-  Multiple store management

## Tech Stack

- React Native
- TypeScript
- Firebase (Firestore)
- Expo
- React Navigation
- React Native Picker
- React Native DateTimePicker
- Expo Vector Icons (Feather)


## Getting Started

1. Clone the repository

```bash
npm install
```

3. Set up Firebase
- Create a Firebase project
- Update the Firebase configuration in `src/config/firebase.ts`
- Enable Firestore database

4. Start the development server

```bash 
npm start
```

## Firebase Configuration

The app uses Firebase for:
- Real-time database (Firestore)
- Authentication
- File storage

Update the Firebase configuration in `src/config/firebase.ts` with your credentials.

## Navigation

The app uses React Navigation's bottom tab navigator with three main screens:
- Home (Calendar & Events)
- Files (Resource Management)
- Profile (User Settings)