import axios from "axios";

// ✅ CREATE INSTANCE
const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ REQUEST INTERCEPTOR (ADD TOKEN)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ RESPONSE INTERCEPTOR (HANDLE 401)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 🔥 IMPORTANT FIX
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = "/login"; // redirect
    }

    return Promise.reject(error);
  }
);

export default api;