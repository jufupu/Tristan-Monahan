import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  daysGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  dayCell: {
    flex: 1,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#141558',
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dateCell: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  dateText: {
    fontSize: 12,
    color: '#141558',
  },
  greyedOutText: {
    color: '#d3d3d3',
  },
  todayOutline: {
    borderWidth: 1,
    borderColor: '#141558',
    borderRadius: 20,
  },
  selectedDate: {
    backgroundColor: '#141558',
    borderRadius: 20,
  },
  selectedDateText: {
    color: 'white',
  },
}); 