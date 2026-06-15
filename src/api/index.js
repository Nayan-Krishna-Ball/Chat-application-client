//

import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://chat-application-server-render.onrender.com/",
});

apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});
