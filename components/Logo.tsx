import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { styles } from "../style/LogoStyle"

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyApp</Text>
      <Image source={require("../assets/logo.png")} style={styles.image} />
    </View>
  );
};

export default Logo;