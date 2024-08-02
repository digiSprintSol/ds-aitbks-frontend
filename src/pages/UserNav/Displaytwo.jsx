import React from "react";
import user2 from "../images/user2.png";

function Displaytwo() {
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
          width: "70%",
          margin: "auto",
          fontWeight: "600",
          fontSize: "1.5vw",
        }}
      >
        You have successfully completed Stage 02 of registration, & Your
        Application has been approved by the Committee.
      </p>
    </div>
  );
}

export default Displaytwo;
