import axios from "axios";

const { REACT_APP_API, REACT_APP_TOKEN } = process.env;

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: REACT_APP_API,
});
// Alter defaults after instance has been created
instance.defaults.headers.common.Token = `Bearer ${REACT_APP_TOKEN}`;

// Add a request interceptor
instance.interceptors.request.use(
  (config) =>
    // Do something before request is sent
    config,
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error) =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error)
);

export { instance };
