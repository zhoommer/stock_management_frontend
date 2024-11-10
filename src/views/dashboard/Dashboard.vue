<template>
  <v-row
    class="ga-3"
    justify="center"
    v-if="!product.loading && !material.loading"
  >
    <v-col cols="12" lg="5">
      <CriticalStockList
        type="product"
        :items="product.lowStocks?.products"
        title="Eksik Ürünler"
      />
    </v-col>

    <v-col cols="12" lg="5">
      <DonutChart :items="product.products" title="Ürünler" />
    </v-col>

    <v-col cols="12" lg="5">
      <CriticalStockList
        type="material"
        :items="product.lowStocks?.materials"
        title="Eksik Malzemeler"
      />
    </v-col>

    <v-col cols="12" lg="5">
      <DonutChart :items="material.materials" title="Malzemeler" />
    </v-col>
  </v-row>

  <div class="loading" v-else>
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../../stores/productStore/ProductStore";
import { useMaterialStore } from "@/stores/materialStore/materialStore";
import { onMounted } from "vue";
import DonutChart from "@/components/charts/DonutChart.vue";
import CriticalStockList from "@/components/list/CriticalStockList.vue";

const product = useProductStore();
const material = useMaterialStore();

onMounted(() => {
  product.getAllProduct();
  product.getLowStock();
  material.getAllMaterial();
});
</script>
