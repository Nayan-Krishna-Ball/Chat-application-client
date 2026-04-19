//

import axios from "axios";

export const URL = "http://localhost:3000";

export const apiInstance = axios.create({
  baseURL: URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
