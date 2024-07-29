import React from "react";
import Box from "@mui/material/Box";
import styles from "./style.module.css";

function index({ children }) {
  return (
    <div className={styles.box}>
      <Box>{children}</Box>
    </div>
  );
}

export default index;
