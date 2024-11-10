import { useUserStore } from "@/stores/user/userStore";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Login.vue"),
  },
  {
    path: "/",
    name: "Dashboard",
    component: () => import("@/views/dashboard/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products",
    component: import("@/views/products/Product.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/materials",
    component: import("@/views/raw-materials/RawMaterial.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
