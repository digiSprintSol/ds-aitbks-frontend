import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Grid, InputAdornment, TextField, Typography } from "@mui/material";

import useCustomFetch from "../../Hooks/useCustomFetch";

function Display() {
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;

  const { state } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getMarketPlaceImage/${state.some.id}`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  const [imgPath, setImgPath] = useState("");

  useEffect(() => {
    if (data) {
      const fileName = data.pathOfDocumnet.split("\\").pop();
      const exp = "/documents/market-place/".concat(fileName);
      setImgPath(exp);
    }
  }, [data]);

  return (
    <div style={{ backgroundColor: "#D4E9DA", paddingBottom: "40px" }}>
      <div
        style={{
          padding: "20px 20px",
          margin: "20px 0px",
          display: "flex",
        }}
      >
        <img
          src={imgPath}
          loading="lazy"
          alt="receipt"
          height="300vw"
          width="500vw"
          // style={{ marginLeft: "30vw" }}
        />
        <Grid container spacing={2} marginLeft="5%">
          <Grid item xs={6} sx={{ width: "50vw" }}>
            <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
              Name of the shop
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={state.some.nameOfShop}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
              Contact Person
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={state.some.contactPerson}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
              Mobile Number
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              // error={
              // formik.touched.phoneNumber &&
              // Boolean(formik.errors.phoneNumber)
              // }
              // helperText={
              // formik.touched.phoneNumber && formik.errors.phoneNumber
              // }
              value={state.some.mobileNumber}
            />
          </Grid>
          <Grid item xs={6} sx={{ width: "50vw" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: "ProximaBold", overflow: "hidden" }}
            >
              Location
            </Typography>
            {/* <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} value={url('state.some.location')}  /> */}
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <a href={state.some.location}>Google Maps</a>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
              Category
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={state.some.category}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
              City
            </Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={state.some.city}
            />
          </Grid>
        </Grid>
      </div>
      <Link
        to="/market-places"
        style={{
          backgroundColor: "#23A380",
          marginLeft: "46.8vw",
          width: "10px",
          padding: "8px 25px",
          borderRadius: "10px",
          // marginBottom: "5%",
          color: "white",
          textDecoration: "none",
          fontSize: "1.5vw",
          fontFamily: "ProximaRegular",
        }}
      >
        {" "}
        Back
      </Link>
    </div>
  );
}

export default Display;
