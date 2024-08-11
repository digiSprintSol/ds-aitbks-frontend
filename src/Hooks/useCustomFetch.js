// // useCustomFetch.js

// import { useEffect, useState } from "react";
// import { instance } from "../https";

// const useCustomFetch = (url, method, payload = {},headers={}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const config = {
//           headers: {
//             ...headers,
//           },
//         };
//         const response = await instance[method](url, payload,config);
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useCustomFetch;

import { useState, useEffect } from "react";
import axios from "axios";

const useCustomFetch = ({ url, method = "GET", headers = {} }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url,
          method,
          headers,
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
};

export default useCustomFetch;
