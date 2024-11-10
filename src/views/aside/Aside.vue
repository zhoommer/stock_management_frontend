<template>
  <v-navigation-drawer
    :rail="drawer.status"
    permanent
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
  >
    <v-list nav density="compact">
      <v-list-item
        v-for="(menu, index) in menus"
        :key="index"
        :value="menu"
        :to="menu.url"
        color="primary"
      >
        <v-list-item-title>{{ menu.name }}</v-list-item-title>
        <template v-slot:prepend>
          <v-icon>{{ menu.icon }}</v-icon>
          <v-tooltip activator="parent" location="end" v-if="drawer.status">
            {{ menu.name }}
          </v-tooltip>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useDrawerStore } from "../../stores/drawerStore/drawerStore";
import { reactive } from "vue";

interface Menu {
  name: string;
  url: string;
  icon: string;
}

const drawer = useDrawerStore();
const menus: Menu[] = reactive([
  { name: "Dashboard", url: "/", icon: "mdi-view-dashboard" },
  { name: "Ürün Listesi", url: "/products", icon: "mdi-list-box" },
  { name: "Hammadde Listesi", url: "/materials", icon: "mdi-raw" },
]);
</script>
