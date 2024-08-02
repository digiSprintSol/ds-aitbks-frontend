import React from "react";
import user4 from "../images/user4.png";

function Displayfive() {
  return (
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
        Thank you for completing Stage 05 of registration and for your payment.
        Please upload your transaction ID along with the Payment Proof
        (screenshot or PDF).
      </p>
    </div>
  );
}

export default Displayfive;
