import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography, CircularProgress } from "@mui/material";
import { postRequest } from "../../HTTP_POST/api";

function ForgotPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { REACT_APP_FAKE_API } = process.env;
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      setLoading(true);
      // console.log("Form values:", values);
      try {
        // eslint-disable-next-line no-unused-vars
        const result = await postRequest(
          `${REACT_APP_FAKE_API}/verifyEmail`,
          { ...values, otp: "string", password: "string" },
          {
            Token: `${token}`,
          }
        );

        if (result) {
          setLoading(false);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }

      const mail = values.email;
      // console.log(mail,"moni")
      navigate("/auth/otp-verify", { state: { mail } });
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
        Forgot Password
      </Typography>
      <Typography variant="subtitle1" sx={{ fontFamily: "ProximaRegular" }}>
        Enter the email address you used to create the account, and we will
        email you the OTP to reset the password
      </Typography>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        margin="normal"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ marginTop: "30px" }}
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ backgroundColor: "#199071" }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Send Email"}
      </Button>
    </Box>
  );
}

export default ForgotPassword;
