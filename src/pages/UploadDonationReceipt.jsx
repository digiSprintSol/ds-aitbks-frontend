/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Box, Grid, TextField, Typography, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import UploadDonationValidation from "../validations/uploadDonationValidation";
import Button from "../components/Button";
import { postRequest } from "../HTTP_POST/api";

function UploadDonationReceipt() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const { REACT_APP_FAKE_API } = process.env;
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;

  const imageApi = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await postRequest(
          `${REACT_APP_FAKE_API}/upload?folderName=donation`,
          formData,
          {
            Token: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        );

        setResult(res);
      } catch (err) {
        // eslint-disable-next-line no-console
        // console.log(err);
        // eslint-disable-next-line no-alert
        alert("Maximum upload size reached...");
      }
    }
  };

  useEffect(() => {
    if (file) {
      // eslint-disable-next-line no-restricted-globals, no-alert
      if (confirm("Do you want to upload...")) {
        imageApi();
      }
    }
  }, [file]);

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

  const formik = useFormik({
    initialValues: {
      fullName: "",
      transactionDate: "",
      phoneNumber: "",
      transactionId: "",
      emailId: "",
      amountPaid: "",
      dob: "",
    },
    validationSchema: UploadDonationValidation,
    onSubmit: async (values) => {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await postRequest(
          `${REACT_APP_FAKE_API}/donations/createDonation`,
          {
            fullName: values.fullName,
            transactionDate: values.transactionDate,
            phoneNumber: values.phoneNumber,
            transactionId: values.transactionId,
            emailId: values.emailId,
            amountPaid: values.amountPaid,
            dob: new Date(values.dob).toISOString(),
            transactionReceiptUploadUrl: result.url,
          },
          {
            Token: `Bearer ${token}`,
          }
        );
        if (response) {
          navigate("/payment-donation-success");
        }
        // console.log(response.data, "response");
      } catch (err) {
        // console.log(err.message, "error");
      }
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
                  padding: "10px",
                  borderRadius: "30px",
                  margin: "10px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                  height: "180px",
                  width: "35%",
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
              {/* <UploadIcon
                sx={{
                  border: "2px solid black",
                  borderRadius: "50%",
                  marginTop: "2vw",
                }}
                onClick={imageApi}
              /> */}
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
              Date Of Birth
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
              id="dob"
              name="dob"
              // label="dateOfPayment"
              type="date"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.dob && Boolean(formik.errors.dob)}
              helperText={formik.touched.dob && formik.errors.dob}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              type="string"
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
              name="emailId"
              type="email"
              value={formik.values.emailId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.emailId && Boolean(formik.errors.emailId)}
              helperText={formik.touched.emailId && formik.errors.emailId}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{ fontFamily: "ProximaBold" }} variant="subtitle1">
              Transaction ID
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{ fontFamily: "ProximaBold" }} variant="subtitle1">
              Date of Payment
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontFamily: "ProximaBold" }} variant="subtitle1">
              Amount Paid
            </Typography>
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
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
          <Grid item xs={2}>
            <TextField
              fullWidth
              id="transactionDate"
              name="transactionDate"
              // label="dateOfPayment"
              type="date"
              value={formik.values.transactionDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.transactionDate &&
                Boolean(formik.errors.transactionDate)
              }
              helperText={
                formik.touched.transactionDate && formik.errors.transactionDate
              }
            />
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              fullWidth
              id="amountPaid"
              name="amountPaid"
              type="string"
              value={formik.values.amountPaid}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.amountPaid && Boolean(formik.errors.amountPaid)
              }
              helperText={formik.touched.amountPaid && formik.errors.amountPaid}
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

export default UploadDonationReceipt;
