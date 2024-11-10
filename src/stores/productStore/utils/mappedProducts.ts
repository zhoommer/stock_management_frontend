import type { Product } from "@/services/productClient/product.type";

export const mappedProducts = (products: Product[]) => {
  return products.map((product) => {
    return {
      name: product.name,
      description: product.description,
      stock_quantity: product.stock_quantity,
      minimum_stock: product.minimum_stock,
    };
  });
};
