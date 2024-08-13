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

function identity({ setActiveStep }) {
  const { data, setData } = useRootContext();

  const formik = useFormik({
    initialValues: {
      aadharNumber: data.aadharNumber || "",
      voterId: data.voterId || "",
      brieflyTellAboutYourself: data.brieflyTellAboutYourself || "",
      reasonToJoinAITBKS: data.reasonToJoinAITBKS || "",
      category: data.category || "",
      occupation: data.occupation || "",
      reference1: data.reference1 || "",
      reference2: data.reference2 || "",
    },
    validationSchema: idValidationSchema,
    onSubmit: (values) => {
      setData((prevData) => ({
        ...prevData,
        aadharNumber: values.aadharNumber,
        voterId: values.voterId,
        brieflyTellAboutYourself: values.brieflyTellAboutYourself,
        reasonToJoinAITBKS: values.reasonToJoinAITBKS,
        category: values.category,
        occupation: values.occupation,
        reference1: values.reference1,
        reference2: values.reference2,
      }));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(data, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Identity</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Aadhar Number"
            id="aadharNumber"
            name="aadharNumber"
            type="number"
            value={formik.values.aadharNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.aadharNumber && Boolean(formik.errors.aadharNumber)
            }
            helperText={
              formik.touched.aadharNumber && formik.errors.aadharNumber
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Voter ID"
            id="voterId"
            name="voterId"
            type="string"
            value={formik.values.voterId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.voterId && Boolean(formik.errors.voterId)}
            helperText={formik.touched.voterId && formik.errors.voterId}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
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
            id="occupation"
            name="occupation"
            label="Present Occupation"
            type="string"
            value={formik.values.occupation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.occupation && Boolean(formik.errors.occupation)
            }
            helperText={formik.touched.occupation && formik.errors.occupation}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
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
          />
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
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
          />
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

export default identity;
