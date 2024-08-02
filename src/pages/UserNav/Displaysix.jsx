import React from "react";
import user5 from "../images/user5.png";

function Displaysix() {
  return (
    <div
      style={{
        backgroundColor: "#D4E9DA",
        textAlign: "center",
        padding: "2% 10%",
        margin: "2% 10%",
      }}
    >
      <img src={user5} alt="userimage" height="35%" width="35%" />
      <p
        style={{
          border: "3px solid transparent ",
          width: "110%",
          margin: "auto",
          fontWeight: "600",
          fontSize: "1.5vw",
        }}
      >
        You have successfully completed Stage 06 of registration. Your
        transaction ID and payment proof have been verified by our Committee
        Accountant.
      </p>
    </div>
  );
}

export default Displaysix;
