import axiosClient from "../axiosInstance";
import type { Material } from "../productClient/product.type";

export class MaterialClient {
  private client = axiosClient;

  async getAll(): Promise<Material[]> {
    const response = await this.client.get<Material[]>("/raw-material/get-all");
    return response.data;
  }
}
