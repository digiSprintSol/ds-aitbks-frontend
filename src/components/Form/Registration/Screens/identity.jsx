import React from "react";
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
import { useFormik } from "formik";
import idValidationSchema from "../../../../validations/idValidationSchema";
import { useRootContext } from "../../../../Hooks/useRootContext";
import { category } from "../../../../Lib/constants";
import useCustomFetch from "../../../../Hooks/useCustomFetch";

function identity({ setActiveStep }) {
  const { data, setData } = useRootContext();

  const formik = useFormik({
    initialValues: {
      aadharCard: data.aadharCard || "",
      voterIdCard: data.voterIdCard || "",
      brieflyTellAboutYourself: data.brieflyTellAboutYourself || "",
      reasonToJoinAITBKS: data.reasonToJoinAITBKS || "",
      category: data.category || "",
      occupation: data.occupation || "",
      reference1: data.reference1 || "",
      // reference2: data.reference2 || "",
    },
    validationSchema: idValidationSchema,
    onSubmit: (values) => {
      setData((prevData) => ({
        ...prevData,
        aadharCard: values.aadharCard,
        voterIdCard: values.voterIdCard,
        brieflyTellAboutYourself: values.brieflyTellAboutYourself,
        reasonToJoinAITBKS: values.reasonToJoinAITBKS,
        category: values.category,
        occupation: values.occupation,
        reference1: values.reference1,
        // reference2: values.reference2,
      }));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // // eslint-disable-next-line no-alert
      // alert(JSON.stringify(data, null, 2));
    },
  });

  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  // eslint-disable-next-line no-unused-vars
  const info = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/membersForDropDown`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
            Identity
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            size="small"
            label="Aadhar Number"
            id="aadharCard"
            name="aadharCard"
            type="number"
            inputProps={{ min: 0 }}
            value={formik.values.aadharCard}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.aadharCard && Boolean(formik.errors.aadharCard)
            }
            helperText={formik.touched.aadharCard && formik.errors.aadharCard}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            size="small"
            label="Voter ID"
            id="voterIdCard"
            name="voterIdCard"
            type="string"
            value={formik.values.voterIdCard}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.voterIdCard && Boolean(formik.errors.voterIdCard)
            }
            helperText={formik.touched.voterIdCard && formik.errors.voterIdCard}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl
            fullWidth
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <InputLabel id="category">Category</InputLabel>
            <Select
              labelId="category"
              id="category"
              value={formik.values.category}
              name="category"
              label="category"
              onChange={formik.handleChange}
            >
              {category.map((cat) => (
                <MenuItem key={cat.label} value={cat.label}>
                  {cat.label}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.category && formik.errors.category && (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.category}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            size="small"
            id="occupation"
            name="occupation"
            label="Role"
            type="string"
            value={formik.values.occupation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.occupation && Boolean(formik.errors.occupation)
            }
            helperText={formik.touched.occupation && formik.errors.occupation}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            id="brieflyTellAboutYourself"
            name="brieflyTellAboutYourself"
            label="Tell us about yourself"
            type="string"
            value={formik.values.brieflyTellAboutYourself}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.brieflyTellAboutYourself &&
              Boolean(formik.errors.brieflyTellAboutYourself)
            }
            helperText={
              formik.touched.brieflyTellAboutYourself &&
              formik.errors.brieflyTellAboutYourself
            }
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            id="reasonToJoinAITBKS"
            name="reasonToJoinAITBKS"
            label="Why do you want to join AITBKS"
            type="string"
            value={formik.values.reasonToJoinAITBKS}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.reasonToJoinAITBKS &&
              Boolean(formik.errors.reasonToJoinAITBKS)
            }
            helperText={
              formik.touched.reasonToJoinAITBKS &&
              formik.errors.reasonToJoinAITBKS
            }
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid>
        {/* <Grid item xs={6}>
          <TextField
            fullWidth
            id="reference1"
            name="reference1"
            label="Reference 1 (Existing Members)"
            type="string"
            value={formik.values.reference1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.reference1 && Boolean(formik.errors.reference1)
            }
            helperText={formik.touched.reference1 && formik.errors.reference1}
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormControl
            fullWidth
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          >
            <InputLabel id="reference1">
              Reference 1 (Existing Members)
            </InputLabel>
            <Select
              labelId="reference1"
              id="reference1"
              value={formik.values.reference1}
              name="reference1"
              label="Reference 1 (Existing Members)"
              onChange={formik.handleChange}
            >
              {info.data &&
                info.data.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
            </Select>
            {formik.touched.reference1 && formik.errors.reference1 && (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.reference1}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* <Grid item xs={6}>
          <TextField
            fullWidth
            size="small"
            id="reference2"
            name="reference2"
            label="Reference 2"
            type="string"
            value={formik.values.reference2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.reference2 && Boolean(formik.errors.reference2)
            }
            helperText={formik.touched.reference2 && formik.errors.reference2}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
          />
        </Grid> */}
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

export default identity;
