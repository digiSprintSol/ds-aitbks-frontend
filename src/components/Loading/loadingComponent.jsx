import { Box } from "@mui/material";
import React from "react";
import { Circles } from "react-loader-spinner";

const loadingComponent = () => (
  <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      backdropFilter: "blur(5px)",
    }}
  >
    <Circles
      height="90"
      width="90"
      color="#4fa94d"
      ariaLabel="circles-loading"
      visible
    />
  </Box>
);

export default loadingComponent;
