import React from "react";
import { Outlet } from "react-router-dom";

function PaymentLayout() {
  return (
    <div>
      PaymentLayout <Outlet />
    </div>
  );
}

export default PaymentLayout;
