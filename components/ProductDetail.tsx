import React from "react";
import { Surface } from "@react-native-material/core";
import { Image, StyleSheet, Text, View } from "react-native";

import { styles } from "../style/ProductDetailStyle"

interface Props {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const ProductDetail: React.FC<Props> = ({
  title,
  description,
  price,
  thumbnail,
}: Props) => {
  return (
    <Surface style={styles.surface}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: thumbnail }}
      />
      <View style={styles.titleAndPriceContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </Surface>
  );
};

export default ProductDetail;