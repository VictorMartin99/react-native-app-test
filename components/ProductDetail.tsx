import React from "react";
import { Surface } from "@react-native-material/core";
import { Image, Text, View } from "react-native";

// Importing styles from ProductDetailStyle file
import { styles } from "../style/ProductDetailStyle"

// Define the props for the component
interface Props {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

// Define the ProductDetail component as a functional component that takes in the Props defined above
const ProductDetail: React.FC<Props> = ({
  title,
  description,
  price,
  thumbnail,
}: Props) => {
  // Render the component UI
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

// Export the ProductDetail component as the default export
export default ProductDetail;