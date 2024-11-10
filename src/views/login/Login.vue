<template>
  <v-container style="height: 100dvh" class="bg-white rounded">
    <v-row align="center">
      <v-col
        cols="12"
        lg="6"
        style="height: 100dvh"
        v-if="!$vuetify.display.mobile"
        class="login-background"
      >
      </v-col>
      <v-col
        cols="11"
        lg="6"
        class="border rounded pa-10"
        style="height: 100dvh"
      >
        <h3 class="text-center text-h4 mb-5">GİRİŞ YAP</h3>
        <v-text-field
          v-model="form.username"
          variant="outlined"
          density="compact"
          placeholder="Kullanıcı adınızı giriniz"
          prepend-inner-icon="mdi-account"
        >
        </v-text-field>

        <v-text-field
          v-model="form.password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Parolanızı giriniz"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn
          @click="handleLogin()"
          variant="tonal"
          color="blue"
          size="large"
          block
        >
          Giriş Yap
          <v-progress-circular
            v-if="loading"
            color="primary"
            indeterminate
            size="small"
          ></v-progress-circular>
        </v-btn>
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-end pt-3"
        >
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Şifremi unuttum</a
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user/userStore";

import { ref, reactive } from "vue";
import type { Ref } from "vue";
import { toast } from "vue3-toastify";

const visible: Ref<boolean> = ref(false);
const router = useRouter();
const userStore = useUserStore();

interface FormState {
  username: string;
  password: string;
}

const loading: Ref<boolean> = ref(false);

const form: FormState = reactive({
  username: "",
  password: "",
});

const handleLogin = async () => {
  loading.value = true;
  try {
    await userStore.login(form);
    router.push("/");
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success("Giriş işlemi başarılı.");
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
};
</script>
