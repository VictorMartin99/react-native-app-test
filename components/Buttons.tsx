import React from "react";
import { Button } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";

// Importing styles from ButtonsStyle file
import { styles } from "../style/ButtonsStyle"

// Defining the Buttons component
const Buttons = () => {
  return (
    <View>
      {/* Creating a Button component with "Buy now" text and applying a custom style to it */}
      <Button
        style={styles.button}
        title="Buy now"
        titleStyle={styles.buttonTitle}
      />
      {/* Creating a Button component with "Add to cart" text and applying a custom style to it */}
      <Button
        style={styles.button}
        title="Add to cart"
        titleStyle={styles.buttonTitle}
      />
    </View>
  );
};

// Exporting the Buttons component
export default Buttons;