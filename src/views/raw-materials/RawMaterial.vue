<template>
  <v-card title="Hammaddeler" flat v-if="!materialStore.loading">
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
      :items="materialStore.materials"
      :search="data.search"
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
        ></v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useMaterialStore } from "@/stores/materialStore/materialStore";
import type { Material } from "@/services/materialClient/material.type";

const materialStore = useMaterialStore();

interface Data {
  selected?: Material[] | [];
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
      title: "Hammaddeler",
    },
    { key: "materialType", title: "Hammadde Tipi" },
    { key: "unit", title: "Birimi" },
    { key: "quantityInStock", title: "Stok Adedi" },
    { key: "pricePerUnit", title: "Birim Maliyeti ($)" },
    { key: "supplier", title: "Tedarikci" },
    { key: "criticalStockLevel", title: "Minimum Stok Adedi" },
  ],
});

onMounted(() => {
  materialStore.getAllMaterial();
});
</script>
