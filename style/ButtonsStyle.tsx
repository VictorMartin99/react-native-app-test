import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  button: {
    width: "70%",
    alignSelf: "center",
    backgroundColor: "#439A97",
    marginVertical: 10,
    borderRadius: 5,
    elevation: 3,
  },
  buttonTitle: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.04,
  },
});
