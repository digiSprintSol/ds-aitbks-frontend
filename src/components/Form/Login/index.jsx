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
import { Circles } from "react-loader-spinner";
import { postRequest } from "../../../HTTP_POST/api";

function Login() {
  const [data, setData] = useState({});
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { REACT_APP_FAKE_API } = process.env;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleResetPasswordClick = () => {
    navigate("/auth/resetpsw");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
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
        setId(res?.accessId);
        setData(res);
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert("Enter Valid Login Credentials....");
      } finally {
        setLoading(false);
      }
    },
  });

  const display = 0;
  const display2 = 2;

  useEffect(() => {
    if (data.admin) {
      navigate("/admin-nav", { state: { token, display2 } });
    }
    if (data.president) {
      navigate("/president-view", { state: { token, display } });
    }
    if (data.commitee) {
      navigate("/committee-view", { state: { token, id } });
    }
    if (data.accountant) {
      navigate("/accountant-nav", { state: { token } });
    }
    if (data.user) {
      navigate("/user-nav", { state: { token } });
    }
  }, [data]);

  return (
    <Box sx={{ position: "relative" }}>
      {loading && (
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
      )}

      <Box
        display="flex"
        flexDirection="row"
        padding="20px"
        sx={{ filter: loading ? "blur(5px)" : "none" }}
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
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
            spacing={1}
          >
            <Typography variant="body2" sx={{ fontFamily: "ProximaRegular" }}>
              Forgot your password?
            </Typography>
            <Button
              sx={{ marginLeft: "10px" }}
              onClick={handleResetPasswordClick}
            >
              Reset Password
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
