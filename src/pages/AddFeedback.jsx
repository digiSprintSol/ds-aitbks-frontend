import { Button, TextField, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { postRequest } from "../HTTP_POST/api";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function AddFeedback() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name should be at least 2 characters long"),
    profession: Yup.string()
      .required("Profession is required")
      .min(2, "Profession should be at least 2 characters long"),
    description: Yup.string()
      .required("Description is required")
      .min(2, "Description should be at least 2 characters long"),
  });
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const imageApi = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await postRequest(
          `${REACT_APP_FAKE_API}/upload?folderName=feedback`,
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

  const formik = useFormik({
    initialValues: {
      name: "",
      profession: "",
      description: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // eslint-disable-next-line no-unused-vars
        const res2 = await postRequest(
          `${REACT_APP_FAKE_API}/feedback/createFeedBack`,
          { url: result.url, ...values },
          {
            Token: `Bearer ${token}`,
          }
        );
        // console.log(result);
        resetForm();
      } catch (err) {
        // console.log(err);
      }
      // finally {
      //   setSubmitting(false);
      // }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={2}
        sx={{
          padding: "20px 50px",
          backgroundColor: "#D4E9DA",
          margin: "20px 0px",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{ fontFamily: "ProximaBold", textAlign: "center" }}
          >
            Add Feedback
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ backgroundColor: "#23A380" }}
          >
            Upload Image
            <VisuallyHiddenInput
              type="file"
              // eslint-disable-next-line no-console
              onChange={handleFileChange}
              multiple
            />
          </Button>
          {/* <UploadIcon
            sx={{
              border: "2px solid black",
              borderRadius: "50%",
              marginTop: "2vw",
              transform:"Translate(2vw,0.8vw)"
            }}
            onClick={imageApi}
          /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontFamily: "ProximaBold" }}>Name:</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            size="small"
            sx={{ backgroundColor: "#ffffff" }}
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontFamily: "ProximaBold" }}>
            Profession:
          </Typography>
          <TextField
            fullWidth
            size="small"
            sx={{ backgroundColor: "#ffffff" }}
            id="profession"
            name="profession"
            value={formik.values.profession}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.profession && Boolean(formik.errors.profession)
            }
            helperText={formik.touched.profession && formik.errors.profession}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontFamily: "ProximaBold" }}>
            Description:
          </Typography>
          <TextField
            fullWidth
            size="small"
            sx={{ backgroundColor: "#ffffff" }}
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "#23A380" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddFeedback;
