import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Button, CircularProgress } from "@mui/material";
import user6 from "../images/user6.png";
import useCustomFetch from "../../Hooks/useCustomFetch";

// eslint-disable-next-line no-unused-vars
function Displayseven({ token }) {
  const navigate = useNavigate();
  const { data, loading, error } = useCustomFetch({
    url: `http://localhost:8082/user/getIDOfUser`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Alert severity="error">
        Failed to load member data: {error.message}
      </Alert>
    );
  }
  return (
    <div
      style={{
        backgroundColor: "#D4E9DA",
        textAlign: "center",
        padding: "2% 10%",
        margin: "2% 10%",
      }}
    >
      <img src={user6} alt="userimage" height="50%" width="50%" />
      <p
        style={{
          border: "3px solid transparent ",
          width: "110%",
          margin: "auto",
          fontWeight: "600",
          fontSize: "1.5vw",
        }}
      >
        You have completed all stages of registration and are now officially a
        member of <b>AITBKS.</b>
      </p>
      <b style={{ fontSize: "1.5vw" }}>Welcome aboard!</b>
      <br />
      <br />
      <Button
        variant="outlined"
        onClick={() => navigate("/user-idcard", { state: { data } })}
        sx={{
          backgroundColor: "#1B7DA6",
          color: "white",
          width: "22vw",
          borderRadius: "10vw",
        }}
      >
        Download ID Card
      </Button>
    </div>
  );
}

export default Displayseven;

Displayseven.propTypes = {
  token: PropTypes.func.isRequired,
};
