<template>
  <v-card>
    <template v-slot:prepend>Products</template>
    <template v-slot:append>
      <v-btn
        :icon="`mdi-numeric-${props.amount}`"
        disabled
        color="primary"
      ></v-btn>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  amount?: number;
}

const props = defineProps<Props>();
</script>
