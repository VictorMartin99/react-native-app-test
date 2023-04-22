import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from '@react-native-material/core';
import { View, Text } from 'react-native';
import { getProducts } from '../utils/api';
import { Product } from '../model/Product';
import ProductsList from '../components/ProductList';

// Importing styles from ProductScreenStyle file
import { styles } from '../style/ProductScreenStyle';

// Declare the Props interface
interface Props {
  navigation: any;
  route: any;
}

// Declare the Products functional component with Props as its parameter
const Products: React.FC<Props> = (props: Props) => {
  // Destructure the email parameter from the route parameter
  const { email } = props.route.params;
  // Declare the productData state with an empty array as its initial value
  const [productData, setProductData] = useState<Product[]>([]);
  // Declare the loading state with a boolean value of false as its initial value
  const [loading, setLoading] = useState<boolean>(false);

  // Declare the fetchData asynchronous function to retrieve product data from the API
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

  // Declare the handleProductPress function to navigate to the detail screen when a product is pressed
  const handleProductPress = (product: Product) => {
    props.navigation.navigate('Detail', product);
  };

  // Use the useEffect hook to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Render either an ActivityIndicator or the ProductsList component based on the loading state
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

// Export the Products component as the default export
export default Products;