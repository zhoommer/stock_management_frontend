<template>
  <v-app-bar title="Ürün Yönetimi">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        v-if="!$vuetify.display.mobile"
        @click="drawer.toggleDrawer"
      ></v-app-bar-nav-icon>
    </template>

    <template v-slot:append>
      <v-row justify="center" style="margin-right: 10px">
        <v-menu min-width="200px" rounded>
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
              <v-avatar color="brown" size="large">
                <span class="text-h5">{{ user.user?.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <div class="mx-auto text-center">
                <!-- <v-avatar color="brown">
                  <span class="text-h5">{{ user.user?.initials }}</span>
                </v-avatar>
                <h3>{{ user.user?.firstname }} {{ user.user?.lastname }}</h3>
                <p class="text-caption mt-1">
                  {{ user.user?.gender }}
                </p>
                <v-divider class="my-3"></v-divider> -->
                <v-btn variant="text" rounded prepend-icon="mdi-account">
                  Profil
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn
                  variant="text"
                  rounded
                  prepend-icon="mdi-logout"
                  @click="user.logout()"
                >
                  Cikis Yap
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-row>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user/userStore";
import { useDrawerStore } from "../../stores/drawerStore/drawerStore";

const drawer = useDrawerStore();
const user = useUserStore();
</script>
