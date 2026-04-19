//

import { apiInstance } from "./index";

export const getAllChats = async () => {
  try {
    const response = await apiInstance.get("api/chat/get-all-chats");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createNewChat = async (members) => {
  try {
    const response = await apiInstance.post("api/chat/create-chat", {
      members,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const clearUnreadMessageCount = async (chatId) => {
  try {
    const response = await apiInstance.post("api/chat/clear-unread-messages", {
      chatId: chatId,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
