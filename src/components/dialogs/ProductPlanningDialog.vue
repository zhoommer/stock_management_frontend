<template>
  <v-dialog v-model="props.show" max-width="600">
    <v-card title="Urun Planlamasi"> </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  show: boolean;
}

const props = defineProps<Props>();
</script>
