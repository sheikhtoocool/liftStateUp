import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: 'green',
    flex: 1,
    padding: 5,
    margin: 10,
    alignItems: 'center',
  },
});
