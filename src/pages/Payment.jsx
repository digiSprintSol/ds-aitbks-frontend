import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import next from "./images/next.png";
import qrcode from "./images/qrcode.png";
import phonepe from "./images/phonepe.png";
import arrow from "./images/arrow.png";
import "../App.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = `${location.state.token}`;
  const submitHandler = () => {
    navigate("/user-nav", { state: { token } });
  };
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
      <form onSubmit={submitHandler}>
        <button type="submit" className="paymentbuttonclass">
          <div>
            <div className="paymentbuttonclassinside">Go to Progress bar</div>
            <img src={arrow} alt="smallupload" height="15vw" width="15vw" />
          </div>
        </button>
      </form>
    </div>
  );
}

export default Payment;
