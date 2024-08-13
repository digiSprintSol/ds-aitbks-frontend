import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Stack } from "@mui/material";
import user3 from "../images/user3.png";

function Displayfour({ token }) {
  const navigate = useNavigate();
  const [exp, setExp] = useState(0);

  useEffect(() => {
    if (exp) {
      navigate("/auth/registration-three", { state: { token } });
    }
  }, [exp]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#D4E9DA",
          textAlign: "center",
          padding: "2% 10%",
          margin: "2% 10%",
        }}
      >
        <img src={user3} alt="userimage" height="40%" width="40%" />
        <p
          style={{
            border: "3px solid transparent ",
            width: "110%",
            margin: "auto",
            fontWeight: "600",
            fontSize: "1.5vw",
          }}
        >
          You have successfully completed Stage 03 of registration, and your
          application has been approved and verified by the Committee Members
          and the Committee President. Before proceeding to Stage 04, please
          fill in some additional details in the application.
        </p>
      </div>
      <Stack direction="row" sx={{ margin: "auto" }}>
        <Button
          variant="outlined"
          onClick={() => setExp(1)}
          sx={{
            backgroundColor: "#1B7DA6",
            color: "white",
            width: "10vw",
            borderRadius: "10vw",
          }}
        >
          Go to R3
        </Button>
      </Stack>
      <br />
    </>
  );
}

export default Displayfour;
Displayfour.propTypes = {
  token: PropTypes.func.isRequired,
};
