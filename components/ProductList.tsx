import React from 'react';
import { FlatList } from 'react-native';
import { Product } from '../model/Product';
import ProductItem from './ProductItem';

interface Props {
  products: Product[];
  onProductPress: (product: Product) => void;
}

const ProductsList: React.FC<Props> = ({ products, onProductPress }: Props) => {
  const renderProduct = ({ item }: { item: Product }) => {
    return <ProductItem product={item} onPress={onProductPress} />;
  };

  return <FlatList data={products} renderItem={renderProduct} />;
};

export default ProductsList;