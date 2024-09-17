/* eslint-disable no-debugger */
import React from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Box,
  Button,
} from "@mui/material";
import LoadingOverlay from "react-loading-overlay";
import { toEmail } from "../../Lib/constants";
import { postRequest } from "../../HTTP_POST/api";

function EmailComponent() {
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;

  const formik = useFormik({
    initialValues: {
      toEmail: "",
      subject: "",
      body: "",
    },
    onSubmit: async (values, resetForm) => {
      // console.log(values, "zzzzz");
      setLoading(true);
      try {
        // eslint-disable-next-line no-unused-vars
        const result = await postRequest(
          `${REACT_APP_FAKE_API}/user/bulkEmailUpload`,
          values,
          {
            Token: `Bearer ${token}`,
          }
        );
        if (!result) {
          setLoading(true);
        }
        setLoading(false);
        // eslint-disable-next-line no-alert
        alert("Email Sent");
        resetForm();
      } catch (err) {
        setLoading(false);
        // console.log(err);
      } finally {
        // setSubmitting(false);
      }
    },
  });

  return (
    <LoadingOverlay
      active={loading}
      spinner
      text="Sending Email..."
      styles={{
        overlay: (base) => ({
          ...base,
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 2000,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }),
        spinner: (base) => ({
          ...base,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -30%)",
          color: "green",
        }),
        content: (base) => ({
          ...base,
          color: "green",
        }),
      }}
    >
      <div style={{ filter: loading ? "blur(5px)" : "none" }}>
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "1000px",
              margin: "auto",
              padding: 3,
              borderRadius: 2,
              backgroundColor: "white",
              boxShadow: 2,
            }}
          >
            <FormControl
              fullWidth
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
            >
              <InputLabel id="toEmail-label">Select Member Type</InputLabel>
              <Select
                labelId="toEmail-label"
                id="toEmail-select"
                name="toEmail"
                label="Select Member Type"
                value={formik.values.toEmail}
                onChange={formik.handleChange}
              >
                {toEmail.map((ema) => (
                  <MenuItem key={ema.label} value={ema.label}>
                    {ema.label.toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              variant="outlined"
              name="subject"
              label="Subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
            />

            <TextField
              fullWidth
              variant="outlined"
              name="body"
              label="Body"
              multiline
              rows={6}
              value={formik.values.body}
              onChange={formik.handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Send
            </Button>
          </Box>
        </form>
      </div>
    </LoadingOverlay>
  );
}

export default EmailComponent;
