import axiosClient from "../axiosInstance";
import type { Material, Product } from "./product.type";

export interface LowStock {
  products: Product[];
  materials: Material[];
}

export class ProductClient {
  private client = axiosClient;

  async getAll(): Promise<Product[]> {
    const response = await this.client.get<Product[]>("/product/get-all");
    return response.data;
  }

  async getLowStockProducts(): Promise<LowStock> {
    const response = await this.client.get<LowStock>(
      "/product/get-critical-stock",
    );
    return response.data;
  }
}
