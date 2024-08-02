import React from "react";
import { Outlet } from "react-router-dom";

function PresidentLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PresidentLayout;
