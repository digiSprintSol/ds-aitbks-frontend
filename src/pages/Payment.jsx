import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { Circles } from "react-loader-spinner";
import next from "./images/next.png";
import phonepe from "./images/phonepe.png";
import arrow from "./images/arrow.png";

import "../App.css";

import useCustomFetch from "../Hooks/useCustomFetch";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = `${location.state.token}`;
  // const data = location.state.data;
  // console.log(location.state.data,"uuuuuuuuuuu")
  const submitHandler = () => {
    navigate("/user-nav", { state: { token } });
  };

  const token1 = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getQRCode/2`,
    method: "GET",
    headers: {
      Token: token1,
    },
  });

  if (error) return <h1>Error..</h1>;
  if (loading)
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          backdropFilter: "blur(5px)",
        }}
      >
        <Circles
          height="90"
          width="90"
          color="#4fa94d"
          ariaLabel="circles-loading"
          visible
        />
      </Box>
    );

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
        <img
          src={data.pathOfDocumnet}
          alt="qrcode"
          height="30%"
          width="30%"
          style={{ marginRight: "1vw" }}
        />
        {location.state.data.presidentChoosenMembershipForApplicant ===
        "patron" ? (
          <h2 style={{ width: "20vw", marginTop: "7vw" }}>
            Amount need to be paid: 10,000/-
          </h2>
        ) : (
          <p>{null}</p>
        )}
        {location.state.data.presidentChoosenMembershipForApplicant ===
        "lifemember" ? (
          <h2 style={{ width: "20vw", marginTop: "7vw" }}>
            Amount need to be paid: 2,000/-
          </h2>
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
