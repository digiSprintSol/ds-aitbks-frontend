import React from "react";
import { Outlet } from "react-router-dom";

function PresidentLayout() {
  return (
    <div>
      PresidentLayout <Outlet />
    </div>
  );
}

export default PresidentLayout;
