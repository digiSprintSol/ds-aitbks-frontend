// deleteRequest.js
import api from "./api";

const deleteRequest = async (url, headers = {}) => {
  try {
    const response = await api.delete(url, {
      headers: { ...headers },
    });
    return response.data; // or return response if you need more details
  } catch (error) {
    // handle error appropriately
    // eslint-disable-next-line no-console
    console.error("Delete request failed", error);
    throw error; // rethrow if you want to handle it in the calling function
  }
};

export default deleteRequest;
