<template>
  <v-responsive class="border rounded" style="height: 100dvh">
    <v-app>
      <v-main>
        <Navbar v-if="isAuth" />
        <Aside v-if="isAuth" />
        <v-container
          fluid
          class="bg-blue-grey-lighten-4"
          style="height: 100dvh"
        >
          <notifications position="top right" />
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
<script setup lang="ts">
import Navbar from "./views/navbar/Navbar.vue";
import Aside from "./views/aside/Aside.vue";
import { computed, onMounted } from "vue";
import { useUserStore } from "./stores/user/userStore";

const userStore = useUserStore();
const isAuth = computed(() => userStore.isAuthenticated);

onMounted(() => {
  userStore.checkAuth();
});
</script>
