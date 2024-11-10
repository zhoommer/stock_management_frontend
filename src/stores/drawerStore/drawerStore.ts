import { defineStore } from "pinia";

export const useDrawerStore = defineStore("drawer", {
  state: () => ({
    status: true,
  }),

  actions: {
    toggleDrawer() {
      this.status = !this.status;
    },
  },
});
