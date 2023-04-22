import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  surface: {
    alignContent: 'center',
    margin: 5,
    backgroundColor: '#439A97',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});