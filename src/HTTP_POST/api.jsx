import axios from "axios";

export const postRequest = async (url, data, headers = {}) => {
  // eslint-disable-next-line no-console
  console.log(data, "data");

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    // Optionally log the error or handle it in a specific way
    // console.error("Error in POST request:", error);
    throw error;
  }
};
