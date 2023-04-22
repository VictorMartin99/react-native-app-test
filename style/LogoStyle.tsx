import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: windowHeight * 0.03,
  },
  text: {
    fontWeight: "bold",
    fontSize: windowWidth * 0.1,
    color: "#439A97",
    marginBottom: windowHeight * 0.05,
  },
  image: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
    borderRadius: windowWidth * 0.25,
    borderColor: "#439A97",
    borderWidth: windowWidth * 0.03,
  },
});