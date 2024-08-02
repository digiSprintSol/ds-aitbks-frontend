import React from "react";
import user1 from "../images/user1.png";

function Displayone() {
  return (
    <div
      style={{
        backgroundColor: "#D4E9DA",
        textAlign: "center",
        padding: "2% 10%",
        margin: "2% 10%",
      }}
    >
      <img src={user1} alt="userimage" height="40%" width="40%" />
      <p
        style={{
          border: "3px solid transparent ",
          width: "70%",
          margin: "auto",
          fontWeight: "600",
          fontSize: "1.5vw",
        }}
      >
        You have successfully completed Stage 01 of Registration, & Your
        Application for Membership has been verified.
      </p>
    </div>
  );
}

export default Displayone;
