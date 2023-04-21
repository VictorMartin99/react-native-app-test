import axios from 'axios';
import { Product } from '../model/Product';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await axios.get('https://dummyjson.com/products');
    return res.data.products;
  } catch (e) {
    console.log(e);
    return [];
  }
};