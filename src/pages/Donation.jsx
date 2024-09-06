import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import next from "./images/next.png";
import phonepe from "./images/phonepe.png";
import arrow from "./images/arrow.png";
import "../App.css";
import useCustomFetch from "../Hooks/useCustomFetch";

function Donation() {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/upload-donation-receipt");
  };

  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getQRCode/3`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

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
      <img src={data.pathOfDocumnet} alt="qrcode" height="13%" width="13%" />
      <Typography sx={{ fontFamily: "ProximaRegular" }}>
        Scan and pay with any BHIM UPI app
      </Typography>
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
            <Typography
              variant="subtitle1"
              className="paymentbuttonclassinside"
            >
              Upload Receipt
            </Typography>
            <img src={arrow} alt="smallupload" height="15vw" width="auto" />
          </div>
        </button>
      </form>
    </div>
  );
}

export default Donation;
