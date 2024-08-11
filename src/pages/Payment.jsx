import React from "react";
import next from "./images/next.png";
import qrcode from "./images/qrcode.png";
import phonepe from "./images/phonepe.png";
import arrow from "./images/arrow.png";
import "../App.css";

function Payment() {
  return (
    <div className="paymenthead">
      <h1 style={{ fontFamily: "ProximaBold" }}>Payment Form</h1>
      <p style={{ fontFamily: "ProximaSemibold" }}>
        You can also make online Payment using mobile apps like Google Pay,
        Paytm. BHIM or PhonePe
      </p>
      <h1 style={{ fontFamily: "ProximaBold" }}>Steps to Pay for Membership</h1>
      <div>
        <h3 className="paymentsteps">Open your UPI Enabled APP</h3>
        <img
          src={next}
          alt="nextbutton"
          height="40px"
          width="40px"
          className="paymentsteps"
        />
        <h3 className="paymentsteps">Select Scan & Pay</h3>
        <img
          src={next}
          alt="nextbutton"
          height="40px"
          width="40px"
          className="paymentsteps"
        />
        <h3 className="paymentsteps">Enter Amount</h3>
        <img
          src={next}
          alt="nextbutton"
          height="40px"
          width="40px"
          className="paymentsteps"
        />
        <h3 className="paymentsteps">Enter your PIN & Pay</h3>
        <img
          src={next}
          alt="nextbutton"
          height="40px"
          width="40px"
          className="paymentsteps"
        />
        <h3 style={{ fontFamily: "ProximaBold" }}>
          Upload Transaction Details
        </h3>
      </div>
      <br />
      <img src={qrcode} alt="qrcode" height="30%" width="30%" />
      <p style={{ fontFamily: "ProximaRegular" }}>
        Scan and pay with any BHIM UPI app
      </p>
      <img
        src={phonepe}
        alt="qrcode"
        height="30%"
        width="30%"
        style={{ marginBottom: "10%" }}
      />
      <br />
      <button type="button" className="paymentbuttonclass">
        <div>
          <span>Next </span>
          <img src={arrow} alt="smallupload" height="15vw" width="15vw" />
        </div>
      </button>
    </div>
  );
}

export default Payment;
