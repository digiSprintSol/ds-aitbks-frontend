import React from "react";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  gender as genders,
  profession as professions,
  education as educations,
  states,
  country as countries,
} from "../../../../Lib/constants";
import validationSchema from "../../../../validations/validationSchema";
import { useRootContext } from "../../../../Hooks/useRootContext";

function personalDetails({ setActiveStep }) {
  const { data, setData } = useRootContext();

  const formik = useFormik({
    initialValues: {
      firstName: data.firstName || "",
      middleName: data.middleName || "",
      lastName: data.lastName || "",
      dob: data.dob || "",
      mobileNumber: data.mobileNumber || "",
      email: data.email || "",
      gender: data.gender || "",
      profession: data.profession || "",
      education: data.education || "",
      address: data.address || "",
      address2: data.address2 || "",
      pincode: data.pincode || "",
      state: data.state || "",
      country: data.country || "",
    },
    validationSchema,
    onSubmit: (values) => {
      setData({
        firstName: values.firstName,
        middleName: values.middleName,
        lastName: values.lastName,
        dob: values.dob,
        mobileNumber: values.mobileNumber,
        email: values.email,
        gender: values.gender,
        education: values.education,
        profession: values.profession,
        address: values.address,
        address2: values.address2,
        pincode: values.pincode,
        state: values.state,
        country: values.country,
      });
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Full Name</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="First Name"
            id="firstName"
            name="firstName"
            type="string"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="middleName"
            name="middleName"
            label="Middle Name"
            type="string"
            value={formik.values.middleName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.middleName && Boolean(formik.errors.middleName)
            }
            helperText={formik.touched.middleName && formik.errors.middleName}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            type="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            id="dob"
            name="dob"
            label="DD/MM/YYYY"
            type="dob"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.dob && Boolean(formik.errors.dob)}
            helperText={formik.touched.dob && formik.errors.dob}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile No"
            type="mobileNumber"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)
            }
            helperText={
              formik.touched.mobileNumber && formik.errors.mobileNumber
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email ID"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl fullWidth>
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={formik.values.gender}
              name="gender"
              label="Gender"
              onChange={formik.handleChange}
            >
              {genders.map((gen) => (
                <MenuItem key={gen.label} value={gen.label}>
                  {gen.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.gender && formik.errors.gender && (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.gender}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={5}>
          <FormControl fullWidth>
            <InputLabel id="profession-select-label">Profession</InputLabel>
            <Select
              labelId="profession-select-label"
              id="profession-select"
              value={formik.values.profession}
              name="profession"
              label="profession"
              onChange={formik.handleChange}
            >
              {professions.map((pro) => (
                <MenuItem key={pro.label} value={pro.label}>
                  {pro.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.profession && formik.errors.profession && (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.profession}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={5}>
          <FormControl fullWidth>
            <InputLabel id="education-select-label">Education</InputLabel>
            <Select
              labelId="education-select-label"
              id="education-select"
              value={formik.values.education}
              name="education"
              label="Education"
              onChange={formik.handleChange}
            >
              {educations.map((edu) => (
                <MenuItem key={edu.label} value={edu.label}>
                  {edu.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.education && formik.errors.education && (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.education}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Permanent Address</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="address"
            name="address"
            label="House No./ Apartment Name"
            type="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="address2"
            name="address2"
            label="Street Name / Sector / Colony / Block"
            type="address2"
            value={formik.values.address2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address2 && Boolean(formik.errors.address2)}
            helperText={formik.touched.address2 && formik.errors.address2}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            id="pincode"
            name="pincode"
            label="Pin Code"
            type="string"
            value={formik.values.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.pincode && Boolean(formik.errors.pincode)}
            helperText={formik.touched.pincode && formik.errors.pincode}
          />
        </Grid>
        <Grid item xs={5}>
          <FormControl fullWidth>
            <InputLabel id="state-select-label">State</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              value={formik.values.state}
              name="state"
              label="State"
              onChange={formik.handleChange}
            >
              {states.map((sta) => (
                <MenuItem key={sta.label} value={sta.label}>
                  {sta.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.state && formik.errors.state && (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.state}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="country-select-label">Country</InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              value={formik.values.country}
              name="country"
              label="Country"
              onChange={formik.handleChange}
            >
              {countries.map((coun) => (
                <MenuItem key={coun.label} value={coun.label}>
                  {coun.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.country && formik.errors.country && (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.country}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" type="submit">
          Next
        </Button>
      </Grid>
    </form>
  );
}

export default personalDetails;
