/* This code defines an interface called "Product" with five properties: "id", "title", "description"
"price", and "thumbnail". These properties describe the details of a product and their data types.
*/

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}