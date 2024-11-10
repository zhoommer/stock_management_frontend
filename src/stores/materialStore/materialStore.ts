import type { Material } from "@/services/materialClient/material.type";
import { defineStore } from "pinia";
import { getAllMaterial } from "./actions";

export const useMaterialStore = defineStore("material", {
  state: () => ({
    materials: [] as Material[] | [],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async getAllMaterial() {
      await getAllMaterial(this);
    },
  },
});
