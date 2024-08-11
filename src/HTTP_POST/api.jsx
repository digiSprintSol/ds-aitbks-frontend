import axios from "axios";

export const postRequest = async (url, data, headers = {}) => {
  // eslint-disable-next-line no-console
  console.log(data, "data");
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8";

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Token: `Bearer ${token}`,
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
