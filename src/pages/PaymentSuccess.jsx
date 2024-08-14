import React from "react";
import success from "./images/success.png";
import "../App.css";

function PaymentSuccess() {
  return (
    <div className="paymentsuccess">
      <div className="paymentsuccessinside">
        <img src={success} alt="success" width="25" height="20" />
        <h1 style={{ fontFamily: "ProximaBold" }}>Payment Processing</h1>
      </div>
      <h5
        style={{
          color: "#FA0505",
          marginBottom: "50px",
          fontFamily: "ProximaBold",
        }}
      >
        Thank you for your timely payment. If you have any questions or need
        further assistance, feel free to reach out to our customer service team.
      </h5>
      {/* <button type="button" className="paymentsucessbutton">
        Upload Payment Receipt
      </button> */}
    </div>
  );
}

export default PaymentSuccess;
