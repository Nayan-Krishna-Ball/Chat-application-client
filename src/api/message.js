//

import { apiInstance } from "./index";

export const createNewMessage = async (newMessage) => {
  try {
    const response = await apiInstance.post("api/message/send-message", {
      chatId: newMessage.chatId,
      sender: newMessage.sender,
      text: newMessage.text,
      image: newMessage.image,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllMessages = async (chatId) => {
  try {
    const response = await apiInstance.get(
      `api/message/get-messages/${chatId}`,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
