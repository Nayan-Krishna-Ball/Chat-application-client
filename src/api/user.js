//
import { apiInstance } from "./index";

export const getUserInfo = async () => {
  try {
    const response = await apiInstance.get("/api/user/get-user-info");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await apiInstance.get("/api/user/get-all-users");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const uploadProfilePic = async (image) => {
  try {
    const response = await apiInstance.post("/api/user/upload-profile-pic", {
      image,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
