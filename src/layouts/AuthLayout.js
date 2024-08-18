import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

function AuthLayout() {
  const name = 1;
  return (
    <div>
      <Header name={name} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AuthLayout;
