/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Box, Grid, TextField, Typography, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Button from "../components/Button";
import { postRequest } from "../HTTP_POST/api";

function UploadGallery() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const filePreview = URL.createObjectURL(selectedFile);
    setPreview(filePreview);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      const filePreview = URL.createObjectURL(droppedFile);
      setPreview(filePreview);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const location = useLocation();
  const navigate = useNavigate();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      imagesForHomePage: null,
    },
    // validationSchema: postValidationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("transcationRecepit", file);
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await postRequest(
          `${REACT_APP_FAKE_API}/user/uploadTranscationReceipt?transcationId=${values.transactionId}`,
          formData,
          {
            Token: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        );
        // console.log(response.data, "response");
      } catch (err) {
        // console.log(err.message, "error");
      }
      navigate("/payment-success");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          backgroundColor: "#D4E9DA",
          padding: 5,
          margin: "10px auto",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ fontFamily: "ProximaBold", mb: 2 }}
                variant="h4"
              >
                Upload Receipt
              </Typography>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "30px",
                  margin: "10px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                  height: "450px",
                  width: "100%",
                  border: isDragOver ? "2px dashed #1976d2" : "2px dashed #ccc",
                  textAlign: "center",
                  flexDirection: "column",
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: isDragOver ? "#1976d2" : "#666",
                    mb: 2,
                  }}
                >
                  Drag & Drop your image here
                </Typography>
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="fileInput">
                  <IconButton
                    component="span"
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: isDragOver ? "#1976d2" : "#666",
                    mt: 2,
                  }}
                >
                  or click to select
                </Typography>
                {preview && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${preview})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "30px",
                      opacity: 0.5,
                    }}
                  />
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "ProximaBold" }} variant="h5">
              Please Fill the Details Below
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ fontFamily: "ProximaBold" }} variant="subtitle1">
              Full Name
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{ fontFamily: "ProximaBold" }} variant="subtitle1">
              Date Of Payment
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ fontFamily: "ProximaBold" }} variant="subtitle1">
              Phone Number
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ fontFamily: "ProximaBold" }} variant="subtitle1">
              Email ID
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="fullName"
              name="fullName"
              type="string"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              id="  "
              name="dateOfPayment"
              // label="dateOfPayment"
              type="date"
              value={formik.values.dateOfPayment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.dateOfPayment &&
                Boolean(formik.errors.dateOfPayment)
              }
              helperText={
                formik.touched.dateOfPayment && formik.errors.dateOfPayment
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              id="emailAddress"
              name="emailAddress"
              type="email"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.emailAddress &&
                Boolean(formik.errors.emailAddress)
              }
              helperText={
                formik.touched.emailAddress && formik.errors.emailAddress
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "ProximaBold" }} variant="subtitle1">
              Transaction ID
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              fullWidth
              id="transactionId"
              name="transactionId"
              type="string"
              value={formik.values.transactionId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.transactionId &&
                Boolean(formik.errors.transactionId)
              }
              helperText={
                formik.touched.transactionId && formik.errors.transactionId
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontWeight: "ProximaRegular",
              }}
              variant="body1"
            >
              Please Note: Enter the 12 digit number - Transaction ID or UTR
              Number
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Button variant="contained" type="submit">
                Upload
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

export default UploadGallery;
