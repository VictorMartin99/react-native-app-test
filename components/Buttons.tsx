import React from "react";
import { Button } from "@react-native-material/core";
import { StyleSheet, View } from "react-native";

//import styles
import {styles} from "../style/ButtonsStyle"


const Buttons = () => {
  return (
    <View>
      <Button
        style={styles.button}
        title="Buy now"
        titleStyle={styles.buttonTitle}
      />
      <Button
        style={styles.button}
        title="Add to cart"
        titleStyle={styles.buttonTitle}
      />
    </View>
  );
};

export default Buttons;
