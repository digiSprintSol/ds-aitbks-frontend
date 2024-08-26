import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import next from "./images/next.png";
import qrcode from "./images/qrcode.png";
import phonepe from "./images/phonepe.png";
import arrow from "./images/arrow.png";
import "../App.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = `${location.state.token}`;
  // const data = location.state.data;
  // console.log(location.state.data,"uuuuuuuuuuu")
  const submitHandler = () => {
    navigate("/user-nav", { state: { token } });
  };
  return (
    <div className="paymenthead">
      <Typography variant="h4" sx={{ fontFamily: "ProximaBold" }}>
        Payment Form
      </Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: "ProximaSemiBold" }}>
        You can also make online Payment using mobile apps like Google Pay,
        Paytm, BHIM or PhonePe
      </Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
        Steps to Pay for Membership
      </Typography>
      <div style={{ margin: "0px 0px 10px 180px" }}>
        <Typography
          variant="body2"
          sx={{ fontFamily: "ProximaRegular" }}
          className="paymentsteps"
        >
          Open your UPI Enabled APP
        </Typography>
        <img
          src={next}
          alt="nextbutton"
          height="30px"
          width="30px"
          className="paymentsteps"
        />
        <Typography
          variant="body2"
          sx={{ fontFamily: "ProximaRegular" }}
          className="paymentsteps"
        >
          Select Scan & Pay
        </Typography>
        <img
          src={next}
          alt="nextbutton"
          height="30px"
          width="30px"
          className="paymentsteps"
        />
        <Typography
          variant="body2"
          sx={{ fontFamily: "ProximaRegular" }}
          className="paymentsteps"
        >
          Enter Amount
        </Typography>
        <img
          src={next}
          alt="nextbutton"
          height="30px"
          width="30px"
          className="paymentsteps"
        />
        <Typography
          variant="body2"
          sx={{ fontFamily: "ProximaRegular" }}
          className="paymentsteps"
        >
          Enter your PIN & Pay
        </Typography>
        <img
          src={next}
          alt="nextbutton"
          height="30px"
          width="30px"
          className="paymentsteps"
        />
        <Typography variant="body2" sx={{ fontFamily: "ProximaRegular" }}>
          Upload Transaction Details
        </Typography>
      </div>
      <br />
      <div style={{ display: "flex", marginLeft: "40vw" }}>
        <img src={qrcode} alt="qrcode" height="30%" width="30%" />
        {location.state.data.presidentChoosenMembershipForApplicant ===
        "patron" ? (
          <h2>Amount need to be paid: 10,000/-</h2>
        ) : (
          <p>{null}</p>
        )}
        {location.state.data.presidentChoosenMembershipForApplicant ===
        "Life Member" ? (
          <h2>Amount need to be paid: 2,000/-</h2>
        ) : (
          <p>{null}</p>
        )}
        {location.state.data.presidentChoosenMembershipForApplicant ===
        "trustee" ? (
          <h3 style={{ width: "20vw", marginTop: "7vw" }}>
            Amount need to be paid: 1,00,000/-
          </h3>
        ) : (
          <p>{null}</p>
        )}
      </div>
      <p style={{ fontFamily: "ProximaRegular" }}>
        Scan and pay with any BHIM UPI app
      </p>
      <img src={phonepe} alt="qrcode" style={{ maxWidth: "20%" }} />
      <form onSubmit={submitHandler}>
        <button type="submit" className="paymentbuttonclass">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxHeight: "10px",
            }}
          >
            <div className="paymentbuttonclassinside">Go to Progress bar</div>
            <img src={arrow} alt="smallupload" height="15vw" width="auto" />
          </div>
        </button>
      </form>
    </div>
  );
}

export default Payment;
