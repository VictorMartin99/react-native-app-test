import React from 'react';
import { ScrollView, View } from 'react-native';

// Import components
import Buttons from '../components/Buttons';
import ProductDetail from '../components/ProductDetail';

// Importing styles from DetailScreenStyle file
import { styles } from '../style/DetailScreenStyle';

// Declare the Props interface
interface Props {
  navigation: any;
  route: any;
}

// Declare the Details functional component with Props as its parameter
const Details: React.FC<Props> = (props: Props) => {
  // Destructure the title, description, price, and thumbnail from the route params object
  const { title, description, price, thumbnail } = props.route.params;

  // Render the ScrollView container with the ProductDetail component and a View container with the Buttons component
  return (
    <ScrollView style={styles.container}>
      <ProductDetail
        title={title}
        description={description}
        price={price}
        thumbnail={thumbnail}
      />
      <View style={styles.buttonContainer}>
        <Buttons />
      </View>
    </ScrollView>
  );
};

// Export the Details component as the default export
export default Details;