import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  surface: {
    alignContent: 'center',
    margin: windowWidth * 0.05,
    backgroundColor: '#439A97',
    borderRadius: windowWidth * 0.1,
    borderColor: 'black',
    borderWidth: 1,
  },
  image: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    margin: windowWidth * 0.05,
    borderRadius: windowWidth * 0.1,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: windowWidth * 0.02,
    flexWrap: 'wrap',
  },
  price: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: 'white',
  },
});