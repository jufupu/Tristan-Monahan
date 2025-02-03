import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  duration: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },
  participants: {
    flexDirection: 'row',
    marginTop: 8,
  },
  participantCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  participantText: {
    color: 'white',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  footerText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 4,
  },
}); 