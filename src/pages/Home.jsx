/* eslint-disable no-return-await */
import React from "react";
import useCustomFetch from "../Hooks/useCustomFetch";
// import { useRootContext } from "../Hooks/useRootContext";

function Home() {
  const { data, loading, error } = useCustomFetch(
    "https://jsonplaceholder.typicode.com/users",
    "get"
  );
  // const theme = useRootContext();
  // console.log("theme", { data, loading, error });
  if (error) return <h1>Error .....</h1>;
  if (loading) return <h1>loading .....</h1>;
  return <div>Home ,{JSON.stringify(data, null, 2)}</div>;
}

export default Home;
