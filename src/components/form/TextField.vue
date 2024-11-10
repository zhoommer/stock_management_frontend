<template>
  <v-text-field
    variant="outlined"
    density="compact"
    :placeholder="props.placeholder"
    :prepend-inner-icon="props.icon"
  >
  </v-text-field>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  icon: string;
  placeholder: string;
}

const props = defineProps<Props>();
</script>
