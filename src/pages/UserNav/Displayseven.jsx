import React from "react";
import user6 from "../images/user6.png";

function Displayseven() {
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
    </div>
  );
}

export default Displayseven;
