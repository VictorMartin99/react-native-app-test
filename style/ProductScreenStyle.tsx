import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  greeting: {
    padding: 10,
    marginTop: 10,
  },
  greetingText: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
  },
});

