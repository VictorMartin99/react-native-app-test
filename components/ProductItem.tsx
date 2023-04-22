import React from 'react';
import { Surface } from '@react-native-material/core';
import { Image, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Product } from '../model/Product';

// Importing styles from ProductItemStyle file
import { styles } from '../style/ProductItemStyle';

// Define props interface
interface Props {
  product: Product;
  onPress: (product: Product) => void;
}

const ProductItem: React.FC<Props> = ({ product, onPress }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity testID="email-input" onPress={() => onPress(product)}>
      <Surface style={styles.surface}>
        <View style={{ flexDirection: 'row'}}>
          <Image resizeMode='contain' style={styles.image} source={{ uri: product.thumbnail }} />
          <View style={{ justifyContent: 'center', alignItems: 'flex-start', maxWidth: width - 240 }}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}€</Text>
          </View>
        </View>
      </Surface>
    </TouchableOpacity>
  );
};

export default ProductItem;
