import { defineStore } from "pinia";
import type { User } from "./types";
import { AuthenticationClient } from "@/services/authenticationClient/AuthenticationClient";
import axiosClient from "@/services/axiosInstance";
import router from "@/router";

const client = new AuthenticationClient();

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null as string | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(credentials: { username: string; password: string }) {
      try {
        const response = await client.login(credentials);
        this.token = response.access_token;
        localStorage.setItem("token", this.token);
        axiosClient.defaults.headers.common["Authorization"] =
          `Bearer ${this.token}`;
        if (!!response) {
          const init = await client.intialize();
          this.user = init;
        }
      } catch (error) {
        this.error = "Login failed";
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      axiosClient.defaults.headers.common["Authorization"] = "";
      router.push("/login");
    },

    async checkAuth() {
      if (this.token) {
        try {
          axiosClient.defaults.headers.common["Authorization"] =
            `Bearer ${this.token}`;
          const response = await client.intialize();
          this.user = response;
        } catch (error) {
          console.log("Error fetching user", error);
          this.logout();
        }
      }
    },
  },
});
