/* eslint-disable no-alert */
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { postRequest } from "../../HTTP_POST/api";

function NewPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { REACT_APP_FAKE_API } = process.env;
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.log("New Password Set:", values.password);
      try {
        // eslint-disable-next-line no-unused-vars
        const result = await postRequest(
          `${REACT_APP_FAKE_API}/resetPassword`,
          {
            email: location.state.mail,
            otp: "string",
            password: values.confirmPassword,
          },
          {
            Token: `${token}`,
          }
        );
        navigate("/auth/login");
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
        gap: 1,
        width: "500px",
        margin: "30px auto",
        padding: 3,
        borderRadius: 2,
        backgroundColor: "white",
        boxShadow: 2,
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: "ProximaBold" }}>
        Set New Password
      </Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: "ProximaRegular" }}>
        Create new password
      </Typography>
      <TextField
        fullWidth
        id="password"
        name="password"
        label="New Password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        margin="normal"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                edge="end"
                aria-label="toggle password visibility"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        fullWidth
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type={showConfirmPassword ? "text" : "password"}
        variant="outlined"
        margin="normal"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowConfirmPassword}
                edge="end"
                aria-label="toggle confirm password visibility"
              >
                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
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
        Set Password
      </Button>
    </Box>
  );
}

// Define propTypes for the component

export default NewPassword;
