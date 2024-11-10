import { useUserStore } from "@/stores/user/userStore";
import axios from "axios";
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const router = useRouter();
const getToken = (): string | null => {
  return localStorage.getItem("token");
};

const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userStore = useUserStore();
    if (userStore.token && config.headers) {
      config.headers.Authorization = `Bearer ${userStore.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token"); // Çıkış işlemi
      toast.info(
        "Your session has expired. You are being directed to the login screen.",
      );
      router.push({ path: "/login" });
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
