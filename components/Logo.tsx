import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// Importing styles from LogoSyle file
import { styles } from "../style/LogoStyle"


//This component displays the logo of the app along with the name "MyApp" using Text and Image components from React Native1 
const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyApp</Text>
      <Image source={require("../assets/logo.png")} style={styles.image} />
    </View>
  );
};

export default Logo;