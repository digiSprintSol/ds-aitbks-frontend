import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";

function PaymentLayout() {
  const name = -1;
  return (
    <div>
      <Header name={name} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PaymentLayout;
