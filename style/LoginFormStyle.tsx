import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginTop: windowHeight * 0.05,
    paddingTop: 200
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: windowWidth * 0.03,
    paddingVertical: windowHeight * 0.015,
    paddingHorizontal: windowWidth * 0.05,
    marginBottom: windowHeight * 0.02,
    fontSize: windowWidth * 0.06,
    width: windowWidth * 0.8,
    backgroundColor: "white"
  },
  button: {
    backgroundColor: "#439A97",
    paddingVertical: windowHeight * 0.025,
    paddingHorizontal: windowWidth * 0.1,
    borderRadius: windowWidth * 0.03,
    alignItems: "center",
    marginTop: windowHeight * 0.03,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: windowWidth * 0.06,
  },
});
