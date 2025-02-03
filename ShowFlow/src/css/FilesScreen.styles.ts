import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#141558',
    marginBottom: 24,
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
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  fileOption: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height: '30%',
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#141558',
    marginTop: 16,
  },
  optionCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
}); 