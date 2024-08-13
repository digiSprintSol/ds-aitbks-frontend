// import React, { useState } from "react";
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
  addressType,
} from "../../../../Lib/constants";
import validationSchema from "../../../../validations/validationSchema";
import { useRootContext } from "../../../../Hooks/useRootContext";

function personalDetails({ setActiveStep }) {
  const { data, setData } = useRootContext();
  // const [storeAddress, setStoreAddress] = useState([]);

  const formik = useFormik({
    initialValues: {
      // profilePic: data.profilePic || "",
      firstName: data.firstName || "",
      middleName: data.middleName || "",
      lastName: data.lastName || "",
      dateOfBirth: data.dateOfBirth || "",
      phoneNumber: data.phoneNumber || "",
      emailAddress: data.emailAddress || "",
      gender: data.gender || "",
      profession: data.profession || "",
      education: data.education || "",
      addressType: data.addressType || "",
      addressLine1: data.addressLine1 || "",
      addressLine2: data.addressLine2 || "",
      postalCode: data.postalCode || "",
      city: data.city || "",
      state: data.state || "",
      country: data.country || "",
    },
    validationSchema,
    onSubmit: (values) => {
      const payload = {
        // firstName: values.firstName,
        // middleName: values.middleName,
        // lastName: values.lastName,
        // profilePic: values.profilePic,
        fullName: `${values.firstName} ${values.middleName} ${values.lastName}`,
        dateOfBirth: new Date(values.dateOfBirth).toISOString(),
        phoneNumber: values.phoneNumber,
        emailAddress: values.emailAddress,
        gender: values.gender,
        education: values.education,
        profession: values.profession,
        address: [
          {
            addressType: values.addressType,
            addressLine1: values.addressLine1,
            addressLine2: values.addressLine2,
            postalCode: values.postalCode,
            city: values.city,
            state: values.state,
            country: values.country,
          },
        ],
      };
      setData(payload);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    },
  });
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(data, null, 2), "input");

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        {/* <Grid item xs={3}>
          <Typography variant="h6" sx={{ marginTop: "30px" }}>
            Upload Passport Photo:
          </Typography>
        </Grid> */}
        {/* <Grid item xs={12} sx={{ marginTop: "30px" }}>
          <input
            type="file"
            id="profilePic"
            value={formik.values.profilePic}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(event) => {
              formik.setFieldValue("profilePic", event.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
          />
          <label
            htmlFor="profilePic"
            style={{
              fontFamily: "ProximaBold",
              border: "1px solid",
              borderRadius: "5px",
              padding: "10px 20px",
              backgroundColor: "#1B7DA6",
              color: "white",
            }}
          >
            {formik.values.profilePic
              ? formik.values.profilePic.name
              : "Upload Profile Picture"}
          </label>
          {formik.errors.profilePic && formik.touched.profilePic && (
            <div className="error">{formik.errors.profilePic}</div>
          )}
        </Grid> */}
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
            id="dateOfBirth"
            name="dateOfBirth"
            // label="DD/MM/YYYY"
            type="date"
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
            }
            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Mobile No"
            type="number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="emailAddress"
            name="emailAddress"
            label="Email ID"
            type="email"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.emailAddress && Boolean(formik.errors.emailAddress)
            }
            helperText={
              formik.touched.emailAddress && formik.errors.emailAddress
            }
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
          <Typography variant="subtitle1">Address</Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="gender-select-label">Type of Address</InputLabel>
            <Select
              labelId="addressType"
              id="addressType"
              value={formik.values.addressType}
              name="addressType"
              onChange={formik.handleChange}
            >
              {addressType.map((add) => (
                <MenuItem key={add.label} value={add.label}>
                  {add.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.addressType && formik.errors.genaddressTypeder && (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.addressType}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="addressLine1"
            name="addressLine1"
            label="Address Line 1"
            type="string"
            value={formik.values.addressLine1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)
            }
            helperText={
              formik.touched.addressLine1 && formik.errors.addressLine1
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="addressLine2"
            name="addressLine2"
            label="Address Line 2"
            type="string"
            value={formik.values.addressLine2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.addressLine2 && Boolean(formik.errors.addressLine2)
            }
            helperText={
              formik.touched.addressLine2 && formik.errors.addressLine2
            }
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            id="postalCode"
            name="postalCode"
            label="Pin Code"
            type="string"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.postalCode && Boolean(formik.errors.postalCode)
            }
            helperText={formik.touched.postalCode && formik.errors.postalCode}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            id="city"
            name="city"
            label="City"
            type="string"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>
        <Grid item xs={3}>
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
