/* eslint-disable no-alert */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { postRequest } from "../../HTTP_POST/api";

function verifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showOtp, setShowOtp] = useState(false);
  const { REACT_APP_FAKE_API } = process.env;
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const handleClickShowOtp = () => setShowOtp((show) => !show);
  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema: Yup.object({
      otp: Yup.string()
        .length(6, "OTP must be exactly 6 digits")
        .required("OTP is required"),
    }),
    onSubmit: async (values) => {
      // console.log("OTP Verified:", values.otp);
      // After successfully verifying the OTP, move to the next step
      try {
        // eslint-disable-next-line no-unused-vars
        const result = await postRequest(
          `${REACT_APP_FAKE_API}/verifyOtp`,
          { email: location.state.mail, otp: values.otp, password: "string" },
          {
            Token: `${token}`,
          }
        );
        navigate("/auth/new-password", {
          state: { mail: location.state.mail },
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        alert("error.....");
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "500px",
        margin: "30px auto",
        padding: 3,
        borderRadius: 2,
        backgroundColor: "white",
        boxShadow: 2,
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: "ProximaBold" }}>
        Verify OTP
      </Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: "ProximaRegular" }}>
        Enter the 6 digit unique OTP sent on your Email ID
      </Typography>
      <TextField
        fullWidth
        id="otp"
        name="otp"
        label="Enter OTP"
        type={showOtp ? "text" : "password"}
        variant="outlined"
        margin="normal"
        value={formik.values.otp}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.otp && Boolean(formik.errors.otp)}
        helperText={formik.touched.otp && formik.errors.otp}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowOtp}
                edge="end"
                aria-label="toggle password visibility"
              >
                {showOtp ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ backgroundColor: "#199071" }}
      >
        Verify OTP
      </Button>
    </Box>
  );
}

export default verifyOtp;
