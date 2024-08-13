import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Stack } from "@mui/material";
import user4 from "../images/user4.png";

function Displayfive({ token }) {
  const navigate = useNavigate();
  const [exp, setExp] = useState(0);
  useEffect(() => {
    if (exp) {
      navigate("/upload-receipt", { state: { token } });
    }
  }, [exp]);
  return (
    <>
      <div
        style={{
          backgroundColor: "#D4E9DA",
          textAlign: "center",
          padding: "4% 10%",
          margin: "2% 10%",
        }}
      >
        <img src={user4} alt="userimage" height="35%" width="35%" />
        <p
          style={{
            border: "3px solid transparent ",
            width: "105%",
            marginTop: "5%",
            fontWeight: "600",
            fontSize: "1.5vw",
          }}
        >
          Thank you for completing Stage 05 of registration and for your
          payment. Please upload your transaction ID along with the Payment
          Proof (screenshot or PDF).
        </p>
      </div>
      <Stack direction="row" sx={{ margin: "auto" }}>
        <Button
          variant="outlined"
          onClick={() => setExp(1)}
          sx={{
            backgroundColor: "#1B7DA6",
            color: "white",
            width: "22vw",
            borderRadius: "10vw",
          }}
        >
          Upload Payment Receipt
        </Button>
      </Stack>
      <br />
    </>
  );
}

export default Displayfive;

Displayfive.propTypes = {
  token: PropTypes.func.isRequired,
};
