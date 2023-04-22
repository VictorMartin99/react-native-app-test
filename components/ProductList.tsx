import React from 'react';
import { FlatList } from 'react-native';
import { Product } from '../model/Product'; 
import ProductItem from './ProductItem'; 

// Defining the props type for the ProductsList component
interface Props {
  products: Product[]; 
  onProductPress: (product: Product) => void;
}

const ProductsList: React.FC<Props> = ({ products, onProductPress }: Props) => {
  // Rendering each product in the list using the ProductItem component
  const renderProduct = ({ item }: { item: Product }) => {
    return <ProductItem product={item} onPress={onProductPress} />;
  };

  // Rendering a FlatList component with the data and render functions defined above
  return <FlatList data={products} renderItem={renderProduct} />;
};

export default ProductsList;