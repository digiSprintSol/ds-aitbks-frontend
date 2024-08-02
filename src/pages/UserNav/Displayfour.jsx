import React from "react";
import user3 from "../images/user3.png";

function Displayfour() {
  return (
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
        application has been approved and verified by the Committee Members and
        the Committee President. Before proceeding to Stage 04, please fill in
        some additional details in the application.
      </p>
    </div>
  );
}

export default Displayfour;
