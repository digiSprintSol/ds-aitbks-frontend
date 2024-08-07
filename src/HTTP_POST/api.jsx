export const postRequest = async (url, data, headers = {}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    return await response.json();
  } catch (error) {
    // console.error("Error in POST request:", error);
    throw error;
  }
};
