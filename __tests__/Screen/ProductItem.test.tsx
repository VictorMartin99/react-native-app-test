import React from 'react';
import { render } from '@testing-library/react-native';
import ProductItem from '../../components/ProductItem';

describe('ProductItem', () => {
    it('renders correctly with props', () => {
      const product = {
        id: 1,
        title: 'Test Product',
        description: "Test",
        price: 10.99,
        thumbnail: 'https://example.com/test.jpg',
      };
      const onPress = jest.fn();
      const { getByTestId } = render(<ProductItem product={product} onPress={onPress} />);
  
      expect(getByTestId('email-input')).toBeDefined();
    });
  });
