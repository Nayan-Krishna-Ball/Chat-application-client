//

import { apiInstance } from "./index";

export const singupUser = async (user) => {
  try {
    const response = await apiInstance.post("/api/auth/signup", user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const loginUser = async (user) => {
  try {
    const response = await apiInstance.post("/api/auth/login", user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
