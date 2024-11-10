<template>
  <v-btn variant="tonal" color="blue" size="large" block>
    {{ props.name }}
  </v-btn>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  name: string;
}

const props = defineProps<Props>();
</script>
