//

import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "http://localhost:3000",
});

apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});
