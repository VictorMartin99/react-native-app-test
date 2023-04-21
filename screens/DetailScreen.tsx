import React from 'react';
import { ScrollView, View } from 'react-native';

//import components
import Buttons from '../components/Buttons';
import ProductDetail from '../components/ProductDetail';

//import style
import {styles} from '../style/DetailScreenStyle';

interface Props {
  navigation: any;
  route: any;
}

const Details: React.FC<Props> = (props: Props) => {
  const { title, description, price, thumbnail } = props.route.params;

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

export default Details;