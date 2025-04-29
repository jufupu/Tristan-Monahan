import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141558',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#141558',
  },
  notificationButton: {
    padding: 8,
    borderRadius: 20,
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  scheduleTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarIcon: {
    marginRight: 8,
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#141558',
  },
  addButton: {
    backgroundColor: '#f5f6f8',
    borderWidth: 1,
    borderColor: '#141558',
    padding: 8,
    borderRadius: 20,
  },
  eventsContainer: {
    padding: 16,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    zIndex: 1000,
    elevation: 5,
  },
}); 