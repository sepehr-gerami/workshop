import type { Product } from "../store/cartStore";

export const getFakeProducts = async (): Promise<Product[]> => {
  return [
    { id: 1, title: "Product 1", price: 10 },
    { id: 2, title: "Product 2", price: 20 },
    { id: 3, title: "Product 3", price: 30 },
  ];
};