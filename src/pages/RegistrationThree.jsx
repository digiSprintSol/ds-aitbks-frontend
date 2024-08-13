import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Radio,
  FormControlLabel,
  Divider,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import { useFormik } from "formik";
import useCustomFetch from "../Hooks/useCustomFetch";
import { postRequest } from "../HTTP_POST/api";

function RegistrationThree() {
  const [isPartOfCommunity, setIsPartOfCommunity] = useState(false);
  const [errors, setErrors] = useState({});
  const [checked, setChecked] = useState(false);

  // eslint-disable-next-line no-unused-vars
  // const { data, loading, error } = useCustomFetch(
  //   "http://localhost:1369/user/getAllUsers",
  //   "get"
  // );
  const location = useLocation();
  const navigate = useNavigate();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/getSpecificUserDetails`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  const formik = useFormik({
    initialValues: {
      fullName: data?.fullName || "",
      dateOfBirth: data?.dateOfBirth || "",
      phoneNumber: data?.phoneNumber || "",
      emailAddress: data?.emailAddress || "",
      gender: data?.gender || "",
      education: data?.education || "",
      profession: data?.profession || "",
      fatherName: data?.fatherName || "",
      motherName: data?.motherName || "",
      spouseName: data?.spouseName || "",
      // addressType: data?.addressType || "",
      addressLine1: data?.addressLine1 || "",
      addressLine2: data?.addressLine2 || "",
      postalCode: data?.postalCode || "",
      city: data?.city || "",
      state: data?.state || "",
      country: data?.country || "",
      numberOfchildren: data?.numberOfchildren || "",
      children: data?.children || "",
      aadharCard: data?.aadharCard || "",
      voterIdCard: data?.voterIdCard || "",
      occupation: data?.occupation || "",
      reference1: data?.reference1 || "",
      reference2: data?.reference2 || "",
      brieflyTellAboutYourself: data?.brieflyTellAboutYourself || "",
      reasonToJoinAITBKS: data?.reasonToJoinAITBKS || "",
      nativePlace: "",
      communityName: "",
    },
    // validationSchema: postValidationSchema,
    onSubmit: async (values) => {
      const payload = {
        nativePlace: values.nativePlace,
        communityName: values.communityName,
        memberOfOtherCommunity: isPartOfCommunity,
        applicationForMembershipDeclaration: checked,
      };
      // console.log(payload);
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await postRequest(
          `${REACT_APP_FAKE_API}/user/registrationThreeForm`,
          payload,
          {
            Token: `Bearer ${token}`,
          }
        );
      } catch (e) {
        // console.log(e);
      }
      navigate("/payment");
    },
  });

  // const validateForm = () => {
  //   const validationErrors = {};
  //   if (!isPartOfCommunity) {
  //     validationErrors.isPartOfCommunity = "This field is required";
  //   }
  //   if (isPartOfCommunity === "yes" && !communityName) {
  //     validationErrors.communityName = "Please mention the community name";
  //   }
  //   return validationErrors;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length === 0) {
  //     // Submit the form
  //     // eslint-disable-next-line no-alert
  //     alert("Form submitted");
  //   } else {
  //     setErrors(validationErrors);
  //   }
  // };

  useEffect(() => {
    // Clear the community name error if "no" is selected
    if (isPartOfCommunity === "no") {
      setErrors((prevErrors) => {
        const { ...rest } = prevErrors;
        return rest;
      });
    }
  }, [isPartOfCommunity]);

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        style={{
          maxWidth: "1000px",
          margin: "20px auto",
          backgroundColor: "#D4E9DA",
          padding: "50px 80px",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h5"
          style={{
            color: "#1B7DA6",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Preview Application
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Full Name</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled
              value={data.fullName}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography>DOB</Typography>
            <TextField
              disabled
              value={data.dateOfBirth
                .split("T")[0]
                .split("-")
                .reverse()
                .join("-")
                .replaceAll("-", "/")}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Mobile No.</Typography>
            <TextField
              disabled
              value={data.phoneNumber}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Email ID</Typography>
            <TextField
              disabled
              value={data.emailAddress}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography>Gender</Typography>
            <TextField
              disabled
              value={data.gender}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Profession</Typography>
            <TextField
              disabled
              value={data.profession}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Education</Typography>
            <TextField
              disabled
              value={data.education}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Father Name</Typography>
            <TextField
              disabled
              value={data.familyDetails.fatherName}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Mother Name</Typography>
            <TextField
              disabled
              value={data.familyDetails.motherName}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Spouse Name</Typography>
            <TextField
              disabled
              value={data.familyDetails.spouseName}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Present Address</Typography>
            <TextField
              disabled
              value={data.address[0].addressLine1.concat(
                ", ",
                data.address[0].addressLine2
              )}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography>Pincode</Typography>
            <TextField
              disabled
              value={data.address[0].postalCode}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>State</Typography>
            <TextField
              disabled
              value={data.address[0].state}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Country</Typography>
            <TextField
              disabled
              value={data.address[0].country}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>No. of Children</Typography>
            <TextField
              disabled
              value={data.familyDetails.numberOfchildren}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography>Name</Typography>
            <TextField
              disabled
              value={data.familyDetails.children}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography>Age</Typography>
            <TextField disabled fullWidth sx={{ backgroundColor: "#ffffff" }} />
          </Grid>
          <Grid item xs={3}>
            <Typography>Gender</Typography>
            <TextField disabled fullWidth sx={{ backgroundColor: "#ffffff" }} />
          </Grid>
          <Grid item xs={6}>
            <Typography>Aadhar Card</Typography>
            <TextField
              disabled
              value={data.aadharCard}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Voter ID</Typography>
            <TextField
              disabled
              value={data.voterIdCard}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography>Present Occupation</Typography>
            <TextField
              disabled
              value={data.occupation}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Reference 01 (existing members)</Typography>
            <TextField
              disabled
              value={data.reference1}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography>Reference 02 (referred by)</Typography>
            <TextField
              disabled
              value={data.reference2}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Tell us about yourself</Typography>
            <TextField
              disabled
              value={data.brieflyTellAboutYourself}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Why do you want join All India Telega Balija Kapu Sangam?
            </Typography>
            <TextField
              disabled
              value={data.reasonToJoinAITBKS}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "grey.900", marginTop: "40px" }} />
        <Grid container spacing={2} sx={{ marginTop: "10px" }}>
          <Grid item xs={12}>
            <Typography>Native Address</Typography>
            <TextField
              name="nativePlace"
              value={formik.values.nativePlace}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-readonly
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              sx={{
                color: "#1B7DA6",
                fontWeight: "bold",
              }}
            >
              Part of any community?
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <RadioGroup
              row
              value={isPartOfCommunity}
              onChange={() => setIsPartOfCommunity(!isPartOfCommunity)}
              sx={{
                marginLeft: "20px",
              }}
            >
              <FormControlLabel value control={<Radio />} label="Yes" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </Grid>
          {errors.isPartOfCommunity && (
            <Typography color="error">{errors.isPartOfCommunity}</Typography>
          )}
        </Grid>
        {isPartOfCommunity === true && (
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
              }}
            >
              If yes, mention the name
            </Typography>
            <TextField
              fullWidth
              id="communityName"
              name="communityName"
              value={formik.values.communityName}
              sx={{ backgroundColor: "#ffffff" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.communityName &&
                Boolean(formik.errors.communityName)
              }
              helperText={
                formik.touched.communityName && formik.errors.communityName
              }
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            style={{ color: "red", fontWeight: "bold" }}
          >
            Declaration
          </Typography>
          <Typography variant="body1">
            I hereby declare that once the membership is granted, I will abide
            by the laws and the other regulation of All India Telega Balija Kapu
            Sangam
          </Typography>
          <FormControlLabel
            required
            control={
              <Checkbox
                onChange={(event) => setChecked(event.target.checked)}
              />
            }
            label="The information provided above is true and correct to the best of my knowledge and belief"
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: "30px", backgroundColor: "#199369" }}
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </form>
  );
}

export default RegistrationThree;
