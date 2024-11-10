<template>
  <v-card height="100%" hover>
    <template v-slot:prepend>
      <h3>
        {{ props.title }}
      </h3>
    </template>
    <v-list lines="two">
      <v-list-item
        v-for="(item, index) in props.items"
        :key="index"
        :prepend-icon="checkQuantity(item).icon"
        :base-color="checkQuantity(item).color"
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-list-item-subtitle>{{
          checkQuantity(item).stockMessage
        }}</v-list-item-subtitle>
        <template v-slot:append>
          <v-btn
            @click="toggleShow"
            color="primary"
            :text="props.type === 'product' ? 'Urun Plani Yap' : 'Tedarik Et'"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>

  <ProductPlanningDialog :show="show" />
</template>

<script setup lang="ts">
import type { Material } from "@/services/materialClient/material.type";
import type { Product } from "@/services/productClient/product.type";
import { defineProps } from "vue";
import ProductPlanningDialog from "../dialogs/ProductPlanningDialog.vue";
import { ref } from "vue";
import type { Ref } from "vue";

interface Props {
  type: "product" | "material";
  items?: Product[] | Material[];
  title: string;
}

const props = defineProps<Props>();
const show: Ref<boolean> = ref(false);

const toggleShow = () => {
  show.value = !show.value;
};

const checkQuantity = (item: Material | Product) => {
  if (item.quantityInStock < item.criticalStockLevel) {
    return {
      icon: "mdi-menu-down",
      color: "red",
      stockMessage: `${item.criticalStockLevel - item.quantityInStock} adet eksiğiniz var.`,
    };
  } else {
    return {
      icon: "mdi-equal",
      color: "orange",
      stockMessage: "Bu ürünün stoğu minimum olması gereken stoğa eşit.",
    };
  }
};
</script>
