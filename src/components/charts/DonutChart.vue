<template>
  <v-card hover>
    <template v-slot:prepend>
      <h3>{{ props.title }}</h3>
    </template>
    <v-card-text class="d-flex justify-center">
      <apexcharts
        width="380"
        type="donut"
        :options="data.chartOptions"
        :series="props.items?.map((item) => item.quantityInStock)"
      ></apexcharts>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import type { Material, Product } from "@/services/productClient/product.type";
import { defineProps, reactive } from "vue";

interface Props {
  items?: Product[] | Material[];
  title: string;
}

const props = defineProps<Props>();

const data = reactive({
  chartOptions: {
    chart: {
      type: "donut",
    },
    labels: props.items?.map((item) => item.name), // Etiketler
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
});
</script>
