// api.jsx
import axios from "axios";

export const updateData = async (url, data, headers = {}) => {
  try {
    const response = await axios.put(url, data, {
      headers: { ...headers },
    });
    return response.data; // return the response data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error updating data:", error);
    throw error; // rethrow the error for handling in the calling function
  }
};
