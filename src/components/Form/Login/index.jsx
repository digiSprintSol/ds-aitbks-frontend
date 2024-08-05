import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="20px"
      minHeight="100vh"
    >
      <Box
        width="520px"
        sx={{
          backgroundColor: "#D4E9DA",
          borderRadius: "30px",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <Stack spacing={2} marginBottom="20px" marginTop="20px">
          <Typography variant="h4" sx={{ fontFamily: "ProximaBold" }}>
            LOGIN
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "ProximaRegular" }}>
            Enter your credentials to access your account
          </Typography>
        </Stack>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
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
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  marginTop: "20px",
                  fontFamily: "ProximaBold",
                }}
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </form>
        <Stack direction="row" justifyContent="center" marginTop="20px">
          <Typography variant="body2" sx={{ fontFamily: "ProximaRegular" }}>
            Forgot your password?
          </Typography>
          <Typography
            variant="body2"
            style={{ fontFamily: "ProximaBold", marginLeft: "5px" }}
          >
            Reset Password
          </Typography>
        </Stack>
      </Box>
      <Box textAlign="center" marginTop="40px">
        <Typography variant="h4" sx={{ fontFamily: "ProximaBold" }}>
          Welcome To
        </Typography>
        <Divider
          sx={{
            width: "100%",
            height: "1.5px",
            backgroundColor: "#41965B",
          }}
        />
        <Typography variant="h5" sx={{ fontFamily: "ProximaRegular" }}>
          All India Telega Balija Kapu Sangham
        </Typography>
        <img
          src="/assets/images/login_img.png"
          alt="Login"
          style={{
            width: "400px",
            height: "350px",
            marginTop: "20px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Login;
