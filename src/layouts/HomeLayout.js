import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

function HomeLayout() {
  const name = 1;
  return (
    <>
      <Header name={name} />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default HomeLayout;
