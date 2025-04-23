// import axios from "axios";

// const token = localStorage.getItem('token') ?? '';

// const axiosInstance = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
//     headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     }
// })


// export default axiosInstance;


import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_URL.replace("/api", "")

const axiosInstance = axios.create({
  baseURL:`${BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Intercept requests to dynamically set the token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercept responses to handle errors globally
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.error("Unauthorized! Redirecting...");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
