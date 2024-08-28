import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { postRequest } from "../../../HTTP_POST/api";

function Login() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({});
  const [token, setToken] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { REACT_APP_FAKE_API } = process.env;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      // eslint-disable-next-line no-alert
      // alert(JSON.stringify(values, null, 2));
      try {
        const response = await postRequest(
          `${REACT_APP_FAKE_API}/login`,
          values
        );
        const res = await postRequest(
          `${REACT_APP_FAKE_API}/loginWithToken`,
          {},
          {
            Token: `Bearer ${response?.token}`,
          }
        );
        setToken(response?.token);
        setData(res);
      } catch (err) {
        // console.log(err.message, "okayyy");
        // eslint-disable-next-line no-alert
        alert("Enter Valid Login Credentials....");
      }
    },
  });

  // const siva=async()=>{
  //   try {
  //       const response = await postRequest(
  //         "http://localhost:1369/login",
  //         token.token);
  //       console.log(response, "sathwik");

  //     } catch (err) {
  //       console.log(err.message, "okay");
  //     }
  // }

  // useEffect(async() => {
  //   siva()
  // },[token])

  useEffect(() => {
    if (data.president) {
      navigate("/president-view", { state: { token } });
    }
    if (data.commitee) {
      navigate("/committee-view", { state: { token } });
    }
    if (data.accountant) {
      navigate("/accountant-nav", { state: { token } });
    }
    if (data.user) {
      navigate("/user-nav", { state: { token } });
    }
  }, [data]);
  return (
    <Box
      display="flex"
      flexDirection="row"
      // justifyContent="center"
      // alignItems="center"
      padding="20px"
    >
      <Box textAlign="center" marginLeft="7vw" marginRight="7vw">
        <Typography
          variant="h4"
          sx={{ fontFamily: "ProximaBold", fontSize: "1.8vw" }}
        >
          Welcome To
        </Typography>
        <Divider
          sx={{
            width: "100%",
            height: "1.5px",
            backgroundColor: "#41965B",
          }}
        />
        <Typography
          variant="h5"
          sx={{ fontFamily: "ProximaRegular", fontSize: "1.8vw" }}
        >
          All India Telega Balija Kapu Sangham
        </Typography>
        <img
          src="/assets/images/login_img.png"
          alt="Login"
          style={{
            width: "400px",
            height: "350px",
            marginTop: "2px",
          }}
        />
      </Box>
      <Box
        width="520px"
        sx={{
          backgroundColor: "#D4E9DA",
          borderRadius: "30px",
          padding: "15px 50px",
          textAlign: "center",
          height: "30vw",
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
                // type="string"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                sx={{ backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ backgroundColor: "white" }}
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
    </Box>
  );
}

export default Login;
