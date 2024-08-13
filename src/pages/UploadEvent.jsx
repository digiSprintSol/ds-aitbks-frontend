import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { Grid, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";
import Button from "../components/Button";
import upload from "./images/upload.png";
import upload2 from "./images/upload2.png";
import "../App.css";
// import postSchema from "../validations/postValidationSchema";
import { postRequest } from "../HTTP_POST/api";

function UploadGallery() {
  const [filePreview, setFilePreview] = useState(null);
  const location = useLocation();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      Formik.setFieldValue("image", file);
      setFilePreview(URL.createObjectURL(file));
    },
    [Formik]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: null,
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("image", values.image);

        // eslint-disable-next-line no-unused-vars
        const result = await postRequest(
          `${REACT_APP_FAKE_API}/uploadEventsImages`,
          formData,
          {
            Token: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        );
        // console.log(result);
        resetForm();
        setFilePreview(null);
      } catch (err) {
        // console.log(err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="uploadeventhead">
        <h1 style={{ fontFamily: "ProximaBold" }}>Upload Event</h1>
        <div {...getRootProps()}>
          <img src={upload} alt="uploadbutton" />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="uploadeventptag">Drop the files here ...</p>
          ) : (
            <p className="uploadeventptag">Drag & drop the file here</p>
          )}
          <span className="uploadeventspanclass">or</span>
          <br />
          <br />
          <button
            type="button"
            className="uploadimagebutton"
            onClick={() => document.querySelector("input[type='file']").click()}
          >
            Browse your system
          </button>
          <br />
          <span
            style={{ fontFamily: "ProximaRegular" }}
            className="uploadeventspanclass"
          >
            Please upload your image in JPEG or PNG format only.
          </span>
          <br />
          {filePreview && (
            <img
              src={filePreview}
              height="200px"
              width="200px"
              alt="uploaded_image"
            />
          )}
          {formik.errors.image && formik.touched.image && (
            <p className="error-text">{formik.errors.image}</p>
          )}
        </div>

        <h1 style={{ fontFamily: "ProximaSemiBold" }}>Image Details</h1>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="text"
              placeholder="Title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="uploadeventinput1"
              sx={{ backgroundColor: "white" }}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              placeholder="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="uploadeventinput2"
              sx={{ backgroundColor: "white" }}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>
          <Grid item xs={12} sx={{ marginLeft: "500px", marginTop: "20px" }}>
            <Button type="submit" className="uploadeventbuttonclass">
              <div>
                <span>Upload </span>
                <img
                  src={upload2}
                  alt="smallupload"
                  height="15vw"
                  width="15vw"
                />
              </div>
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}

export default UploadGallery;
