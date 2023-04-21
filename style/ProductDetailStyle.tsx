import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  surface: {
    width: "90%",
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "white",
    elevation: 3,
    alignSelf: "center",
    maxHeight: "80%",
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 10,
    borderRadius: 10,
  },
  titleAndPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    width: "70%",
    color: "#2e2e2e",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e2e2e",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
    color: "#555",
  },
});

