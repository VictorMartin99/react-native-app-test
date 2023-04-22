import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  surface: {
    width: windowWidth * 0.9,
    marginVertical: windowHeight * 0.01,
    paddingVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.02,
    borderRadius: windowWidth * 0.02,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "white",
    elevation: 3,
    alignSelf: "center",
    maxHeight: windowHeight * 0.8,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginBottom: windowHeight * 0.02,
    borderRadius: windowWidth * 0.02,
  },
  titleAndPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: windowWidth * 0.02,
    marginBottom: windowHeight * 0.02,
  },
  title: {
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
    width: "60%",
    color: "#2e2e2e",
  },
  price: {
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
    color: "#2e2e2e",
    width: "40%",
    textAlign: "right",
  },
  description: {
    fontSize: windowWidth * 0.04,
    fontWeight: "400",
    width: "100%",
    alignSelf: "center",
    marginBottom: windowHeight * 0.02,
    color: "#555",
  },
});
