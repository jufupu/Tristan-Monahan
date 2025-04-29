import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '80%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  closeButton: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    color: 'white',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    width: 1,
    height: '60%',
    backgroundColor: '#00C6AE',
  },
  infoText: {
    color: 'white',
    marginTop: 15,
    fontSize: 12,
    textAlign: 'center',
  },
  participationTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  participants: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  participant: {
    backgroundColor: '#00C6AE',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  participantText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  confirmButton: {
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}); 