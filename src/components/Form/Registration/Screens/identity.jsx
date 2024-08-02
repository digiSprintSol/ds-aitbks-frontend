import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import idValidationSchema from "../../../../validations/idValidationSchema";
import { useRootContext } from "../../../../Hooks/useRootContext";

function identity({ setActiveStep }) {
  const { data, setData } = useRootContext();

  const formik = useFormik({
    initialValues: {
      aadharNumber: data.aadharNumber || "",
      voterId: data.voterId || "",
      introduction: data.introduction || "",
      description: data.description || "",
      presentOccupation: data.presentOccupation || "",
      referenceOne: data.referenceOne || "",
      referenceTwo: data.referenceTwo || "",
    },
    validationSchema: idValidationSchema,
    onSubmit: (values) => {
      setData((prevData) => ({
        ...prevData,
        aadharNumber: values.aadharNumber,
        voterId: values.voterId,
        introduction: values.introduction,
        description: values.description,
        presentOccupation: values.presentOccupation,
        referenceOne: values.referenceOne,
        referenceTwo: values.referenceTwo,
      }));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
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
            label="aadharNumber"
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
            label="voterId"
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
        <Grid item xs={7}>
          <TextField
            fullWidth
            id="presentOccupation"
            name="presentOccupation"
            label="presentOccupation"
            type="string"
            value={formik.values.presentOccupation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.presentOccupation &&
              Boolean(formik.errors.presentOccupation)
            }
            helperText={
              formik.touched.presentOccupation &&
              formik.errors.presentOccupation
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="introduction"
            name="introduction"
            label="Tell us about yourself"
            type="string"
            value={formik.values.introduction}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.introduction && Boolean(formik.errors.introduction)
            }
            helperText={
              formik.touched.introduction && formik.errors.introduction
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Why do you want to join AITBKS"
            type="string"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reference 01 (Existing Members)"
            type="select"
            fullWidth
            options={[
              { label: "Member 1" },
              { label: "Member 2" },
              { label: "Member 3" },
              { label: "Member 4" },
              { label: "Member 5" },
              { label: "Member 6" },
            ]}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Reference 02 (Referred By)"
            type="select"
            fullWidth
            options={[
              { label: "Member 1" },
              { label: "Member 2" },
              { label: "Member 3" },
              { label: "Member 4" },
              { label: "Member 5" },
              { label: "Member 6" },
            ]}
          />
        </Grid>
      </Grid>
      <Button variant="contained" type="submit">
        Next
      </Button>
    </form>
  );
}

export default identity;
