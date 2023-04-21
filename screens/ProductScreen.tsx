import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from '@react-native-material/core';
import { View, Text } from 'react-native';
import { getProducts } from '../utils/api';
import { Product } from '../model/Product';
import ProductsList from '../components/ProductList';

//import style
import {styles} from '../style/ProductScreenStyle';

interface Props {
  navigation: any;
  route: any;
}

const Products: React.FC<Props> = (props: Props) => {
  const { email } = props.route.params;
  const [productData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const products = await getProducts();
      setLoading(false);
      setProductData(products);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const handleProductPress = (product: Product) => {
    props.navigation.navigate('Detail', product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator color='#439A97' size={'large'} />
      ) : (
        <View style={styles.container}>
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Hola {email}!</Text>
          </View>
          <ProductsList products={productData} onProductPress={handleProductPress} />
        </View>
      )}
    </>
  );
};

export default Products;