import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { memberCategory } from "../Lib/constants";
import { postRequest } from "../HTTP_POST/api";

function AddMembers() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name should be at least 2 characters long"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number should be 10 digits")
      .required("Phone number is required"),
  });

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({});
  const location = useLocation();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;

  const post = async (info) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await postRequest(`${REACT_APP_FAKE_API}/save`, info, {
        Token: `Bearer ${token}`,
      });
      // console.log(result);
    } catch (err) {
      // console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      membership: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // console.log(values, "*******");

      if (values.membership === "President") {
        setData({
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          president: true,
        });
        post({
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          president: true,
        });
      }
      if (values.membership === "Committee") {
        setData({
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          commitee: true,
        });
        post({
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          commitee: true,
        });
      }
      if (values.membership === "Accountant") {
        setData({
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          accountant: true,
        });
        post({
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          accountant: true,
        });
      }
      // console.log(data, "oooooo");
      // Handle form submission here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        //   component="form"
        //   onSubmit={formik.handleSubmit}
        sx={{
          flexGrow: 1,
          maxWidth: 900,
          margin: "20px auto",
          backgroundColor: "#D4E9DA",
          padding: "70px 80px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ fontFamily: "ProximaBold" }}>
              Add Member
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="email"
              name="email"
              label="Email ID"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="phoneNumber"
              name="phoneNumber"
              label="Mobile No"
              type="number"
              inputProps={{ min: 0 }}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl
              fullWidth
              size="small"
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
            >
              <InputLabel id="membership-select-label">Category</InputLabel>
              <Select
                labelId="membership-select-label"
                id="membership-select"
                value={formik.values.membership}
                name="membership"
                label="Category"
                onChange={formik.handleChange}
              >
                {memberCategory.map((cat) => (
                  <MenuItem key={cat.label} value={cat.label}>
                    {cat.label}
                  </MenuItem>
                ))}
              </Select>
              {formik.touched.membership && formik.errors.membership && (
                <FormHelperText sx={{ color: "red" }}>
                  {formik.errors.membership}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Add Member
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

export default AddMembers;
