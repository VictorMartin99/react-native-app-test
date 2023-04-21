import React from 'react';
import { Surface } from '@react-native-material/core';
import { Image, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Product } from '../model/Product';

interface Props {
  product: Product;
  onPress: (product: Product) => void;
}

const ProductItem: React.FC<Props> = ({ product, onPress }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity testID="email-input" onPress={() => onPress(product)}>
      <Surface style={{ alignContent: 'center', margin: 5, backgroundColor: '#439A97', borderRadius: 10, borderColor: 'black', borderWidth: 1}}>
        <View style={{ flexDirection: 'row'}}>
          <Image resizeMode='contain' style={{ width: 200, height: 200, margin: 10, borderRadius: 20, alignSelf: 'center', backgroundColor: 'white' }} source={{ uri: product.thumbnail }} />
          <View style={{ justifyContent: 'center', alignItems: 'flex-start', maxWidth: width - 240 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 10, flexWrap: 'wrap' }}>{product.title}</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>${product.price}</Text>
          </View>
        </View>
      </Surface>
    </TouchableOpacity>
  );
};

export default ProductItem;