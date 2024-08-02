import React from "react";
import user2 from "../images/user2.png";

function Displaythree() {
  return (
    <div
      style={{
        backgroundColor: "#D4E9DA",
        textAlign: "center",
        padding: "2% 10%",
        margin: "2% 10%",
      }}
    >
      <img src={user2} alt="userimage" height="40%" width="40%" />
      <p
        style={{
          border: "3px solid transparent ",
          width: "100%",
          margin: "auto",
          fontWeight: "600",
          fontSize: "1.5vw",
        }}
      >
        You have successfully completed Stage 03 of registration, & your
        application has been approved and verified by the Committee Members &
        the Committee President.
      </p>
    </div>
  );
}

export default Displaythree;
