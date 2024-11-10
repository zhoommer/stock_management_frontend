import { MaterialClient } from "@/services/materialClient/materialClient";
import type { useMaterialStore } from "./materialStore";

const client = new MaterialClient();

export async function getAllMaterial(
  context: ReturnType<typeof useMaterialStore>,
) {
  context.loading = true;
  context.error = null;

  try {
    const response = await client.getAll();
    context.materials = response;
  } catch (error) {
    console.log(error);
  } finally {
    context.loading = false;
  }
}
