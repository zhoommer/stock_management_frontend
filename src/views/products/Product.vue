<template>
  <v-card title="Ürünler" flat v-if="!productStore.loading">
    <template v-slot:text>
      <v-text-field
        v-model="data.search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
        clearable
        clear-icon="mdi-backspace"
      ></v-text-field>
    </template>

    <v-data-table
      :headers="data.headers"
      :items="productStore.products"
      :search="data.search"
      item-value="name"
      items-per-page="5"
      return-object
      show-select
    >
      <template v-slot:item.quantityInStock="{ item }">
        <v-chip
          :color="
            item.quantityInStock <= item.criticalStockLevel ? 'red' : 'green'
          "
          :text="item.quantityInStock.toString()"
          :append-icon="
            item.quantityInStock <= item.criticalStockLevel
              ? 'mdi-emoticon-sad-outline'
              : 'mdi-emoticon-happy-outline'
          "
          variant="elevated"
        >
        </v-chip>
      </template>
    </v-data-table>
  </v-card>

  <div v-else>
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useProductStore } from "../../stores/productStore/ProductStore";
import type { Product } from "@/services/productClient/product.type";

const productStore = useProductStore();

interface Data {
  selected: [] | Product[];
  search: string;
  headers: any;
}

const data = reactive<Data>({
  selected: [],
  search: "",
  headers: [
    {
      key: "name",
      sortable: false,
      title: "Ürünler",
    },
    { key: "category", title: "Kategori" },
    { key: "quantityInStock", title: "Stok Adedi" },
    { key: "criticalStockLevel", title: "Kritik Stok Adedi" },
    { key: "productionCost", title: "Üretim Maliyeti" },
    { key: "price", title: "Satış Fiyatı ($)" },
  ],
});

onMounted(() => {
  productStore.getAllProduct();
});
</script>
