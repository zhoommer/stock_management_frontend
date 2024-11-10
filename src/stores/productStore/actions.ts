import { useProductStore } from "./ProductStore";
import { ProductClient } from "@/services/productClient/ProductClient";

const client = new ProductClient();

export async function getAllProduct(
  context: ReturnType<typeof useProductStore>,
) {
  context.loading = true;
  context.error = null;

  try {
    const response = await client.getAll();
    context.products = response;
  } catch (error) {
    context.error = "Failed to get products";
  } finally {
    context.loading = false;
  }
}

export async function getLowStock(context: ReturnType<typeof useProductStore>) {
  context.loading = true;
  context.error = null;

  try {
    const response = await client.getLowStockProducts();
    context.lowStocks = response;
  } catch (error) {
    context.error = "Failed to get low stock product";
  } finally {
    context.loading = false;
  }
}
