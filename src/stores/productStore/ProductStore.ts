import type { Product } from "@/services/productClient/product.type";
import { defineStore } from "pinia";
import { getAllProduct, getLowStock } from "./actions";
import type { LowStock } from "@/services/productClient/ProductClient";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[] | [],
    lowStocks: null as LowStock | null,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async getAllProduct() {
      await getAllProduct(this);
    },

    async getLowStock() {
      await getLowStock(this);
    },
  },
});
