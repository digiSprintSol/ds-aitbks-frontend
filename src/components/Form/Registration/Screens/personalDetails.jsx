/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
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
import UploadIcon from "@mui/icons-material/Upload";
import {
  gender as genders,
  profession as professions,
  education as educations,
  states,
  country as countries,
  addressType,
  district,
} from "../../../../Lib/constants";
import validationSchema from "../../../../validations/validationSchema";
import { useRootContext } from "../../../../Hooks/useRootContext";
import { postRequest } from "../../../../HTTP_POST/api";

function personalDetails({ setActiveStep }) {
  const { data, setData } = useRootContext();
  // const [file, setFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState({});
  const [result, setResult] = useState(null);
  const maxDate = new Date();
  maxDate.setFullYear(2024 - 18);

  const districtStateMapping = {
    Adilabad: "Telangana",
    "Alluri Sitharama Raju": "Andhra Pradesh",
    Anakapalli: "Andhra Pradesh",
    Ananthapuram: "Andhra Pradesh",
    Annamayya: "Andhra Pradesh",
    Bapatla: "Andhra Pradesh",
    "Bhadadri Kothagudem": "Telangana",
    Chitoor: "Telangana",
    "Dr. B.R. Ambedkar Konaseema": "Andhra Pradesh",
    "East Godavari": "Andhra Pradesh",
    Eluru: "Andhra Pradesh",
    Guntur: "Andhra Pradesh",
    Hanumakonda: "Telangana",
    Hyderabad: "Telangana",
    Jagtial: "Telangana",
    Jangaon: "Telangana",
    "Jayashankar Bhoopalpally": "Telangana",
    "Jogulamba Gadwal": "Telangana",
    Kakinada: "Andhra Pradesh",
    Kamareddy: "Telangana",
    Karimnagar: "Telangana",
    Khammam: "Telangana",
    "Kona Seema": "Telangana",
    // Add more district-state mappings here
  };

  const { REACT_APP_FAKE_API } = process.env;
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8";
  const imageApi = async () => {
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await postRequest(
          `${REACT_APP_FAKE_API}/upload?folderName=user-passport-photo`,
          formData,
          {
            Token: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        );

        setResult(res);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: data.firstName || "",
      // middleName: data.middleName || "",
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
      district: data.district || "",
      state: data.state || "",
      country: data.country || "",
    },
    validationSchema,
    onSubmit: (values) => {
      const payload = {
        // firstName: values.firstName,
        // middleName: values.middleName,
        // lastName: values.lastName,
        profilePic: result.url,
        fullName: `${values.firstName} ${values.lastName}`,
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
            district: values.district,
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

  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   setFile(selectedFile);
  //   // console.log(selectedFile,"llllll")
  // };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImageFile(file);
    }
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    formik.setFieldValue("district", selectedDistrict);
    // Automatically update the state based on the district
    if (districtStateMapping[selectedDistrict]) {
      formik.setFieldValue("state", districtStateMapping[selectedDistrict]);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                display: "block",
                width: "150px",
                height: "150px",
                objectFit: "cover",
                margin: "10px auto",
                borderRadius: "50%",
              }}
            />
          )}
          <label
            htmlFor="fileInput"
            style={{
              fontFamily: "ProximaBold",
              cursor: "pointer",
              display: "block",
              width: "100px",
              background: "#1B7DA6",
              color: "white",
              margin: "10px auto",
              padding: "10px 20px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            Upload Photo
          </label>
          <input
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <UploadIcon
            sx={{
              border: "2px solid black",
              borderRadius: "50%",
              transform: "translate(40vw,0)",
            }}
            onClick={imageApi}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            style={{ fontFamily: "ProximaRegular" }}
          >
            Full Name
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            size="small"
            label="First Name"
            id="firstName"
            name="firstName"
            type="string"
            disabled={!selectedImage}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        {/* <Grid item xs={4}>
          <TextField
            fullWidth
            size="small"
            id="middleName"
            name="middleName"
            label="Middle Name"
            type="string"
            disabled={!selectedImage}
            value={formik.values.middleName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.middleName && Boolean(formik.errors.middleName)
            }
            helperText={formik.touched.middleName && formik.errors.middleName}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid> */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            size="small"
            id="lastName"
            name="lastName"
            label="Surname Name"
            type="lastName"
            disabled={!selectedImage}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">Date of Birth</Typography>
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            size="small"
            id="dateOfBirth"
            name="dateOfBirth"
            // label="DD/MM/YYYY"
            type="date"
            disabled={!selectedImage}
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
            }
            helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
            inputProps={{
              max: maxDate.toISOString().split("T")[0], // Set the max date attribute
            }}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            size="small"
            id="phoneNumber"
            name="phoneNumber"
            label="Mobile No"
            type="number"
            disabled={!selectedImage}
            inputProps={{ min: 0 }}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            size="small"
            id="emailAddress"
            name="emailAddress"
            label="Email ID"
            type="email"
            disabled={!selectedImage}
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.emailAddress && Boolean(formik.errors.emailAddress)
            }
            helperText={
              formik.touched.emailAddress && formik.errors.emailAddress
            }
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl
            fullWidth
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={formik.values.gender}
              name="gender"
              label="Gender"
              disabled={!selectedImage}
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
          <FormControl
            fullWidth
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <InputLabel id="profession-select-label">Profession</InputLabel>
            <Select
              labelId="profession-select-label"
              id="profession-select"
              value={formik.values.profession}
              name="profession"
              label="profession"
              disabled={!selectedImage}
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
          <FormControl
            fullWidth
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <InputLabel id="education-select-label">Education</InputLabel>
            <Select
              labelId="education-select-label"
              id="education-select"
              value={formik.values.education}
              name="education"
              label="Education"
              disabled={!selectedImage}
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
          <Typography variant="subtitle1" style={{ fontFamily: "ProximaBold" }}>
            Address
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <InputLabel id="gender-select-label">Address Type</InputLabel>
          <FormControl
            fullWidth
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <Select
              labelId="addressType-select-label"
              id="addressType"
              value={formik.values.addressType}
              name="addressType"
              // label="AddressType"
              disabled={!selectedImage}
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
            size="small"
            id="addressLine1"
            name="addressLine1"
            label="Address Line 1"
            type="string"
            disabled={!selectedImage}
            value={formik.values.addressLine1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)
            }
            helperText={
              formik.touched.addressLine1 && formik.errors.addressLine1
            }
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            id="addressLine2"
            name="addressLine2"
            label="Address Line 2"
            type="string"
            disabled={!selectedImage}
            value={formik.values.addressLine2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.addressLine2 && Boolean(formik.errors.addressLine2)
            }
            helperText={
              formik.touched.addressLine2 && formik.errors.addressLine2
            }
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            size="small"
            id="postalCode"
            name="postalCode"
            label="Pin Code"
            type="string"
            disabled={!selectedImage}
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.postalCode && Boolean(formik.errors.postalCode)
            }
            helperText={formik.touched.postalCode && formik.errors.postalCode}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        {/* <Grid item xs={3}>
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
        </Grid> */}
        <Grid item xs={3}>
          <FormControl
            fullWidth
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <InputLabel id="district-select-label">District</InputLabel>
            <Select
              labelId="district-select-label"
              id="district"
              value={formik.values.district}
              name="district"
              label="District"
              disabled={!selectedImage}
              onChange={handleDistrictChange} // Use custom handler
            >
              {district.map((dis) => (
                <MenuItem key={dis.label} value={dis.label}>
                  {dis.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.district && formik.errors.district && (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.district}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl
            fullWidth
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <InputLabel id="state-select-label">State</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              value={formik.values.state}
              name="state"
              label="State"
              disabled={!selectedImage}
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
          <FormControl
            fullWidth
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <InputLabel id="country-select-label">Country</InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              value={formik.values.country}
              name="country"
              label="Country"
              disabled={!selectedImage}
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
