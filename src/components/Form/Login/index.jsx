import React from "react";
import { useFormik } from "formik";
import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import loginSchema from "../../../validations/loginSchema";

function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    loginSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          marginTop: "100px",
        }}
      >
        <Box
          width="520px"
          height="350px"
          sx={{
            backgroundColor: "#D4E9DA",
            borderRadius: "30px",
            padding: "50px",
          }}
        >
          <Stack
            style={{
              textAlign: "center",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <Typography variant="h4">LOGIN</Typography>
            <Typography variant="body1">
              Enter your credentials to access your account
            </Typography>
          </Stack>
          <form onSubmit={formik.handleSubmit}>
            <Stack direction="column" spacing={2}>
              <TextField
                id="username"
                name="username"
                label="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80px",
                  margin: "0px 50px",
                }}
              >
                Log In
              </Button>
            </Stack>
          </form>
          <Stack
            direction="row"
            style={{
              textAlign: "center",
              marginBottom: "10px",
              marginTop: "50px",
            }}
          >
            <Typography variant="body2">Forgot your password?</Typography>
            <Typography
              variant="body2"
              style={{ fontWeight: "bold", marginLeft: "5px" }}
            >
              Reset Password
            </Typography>
          </Stack>
        </Box>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Typography variant="h4">Welcome To</Typography>
          <Divider
            sx={{
              width: "100%",
              height: "1.5px",
              backgroundColor: "#41965B",
            }}
          />
          <Typography variant="h5">
            All India Telega Balija Kapu Sangam
          </Typography>
          <img
            src="/login_img.png"
            alt=""
            style={{
              width: "400px",
              height: "350px",
              marginTop: "20px",
              marginBottom: "-22px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
