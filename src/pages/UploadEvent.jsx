// import React, { useCallback, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useDropzone } from "react-dropzone";
// import { Grid, TextField } from "@mui/material";
// import { Formik, useFormik } from "formik";
// import Button from "../components/Button";
// import upload from "./images/upload.png";
// import upload2 from "./images/upload2.png";
// import "../App.css";
// // import postSchema from "../validations/postValidationSchema";
// import { postRequest } from "../HTTP_POST/api";

// function UploadGallery() {
//   const [filePreview, setFilePreview] = useState(null);
//   const location = useLocation();
//   const token = `${location.state.token}`;
//   const { REACT_APP_FAKE_API } = process.env;
//   const onDrop = useCallback(
//     (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       Formik.setFieldValue("image", file);
//       setFilePreview(URL.createObjectURL(file));
//     },
//     [Formik]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const formik = useFormik({
//     initialValues: {
//       title: "",
//       description: "",
//       image: null,
//     },
//     onSubmit: async (values, { setSubmitting, resetForm }) => {
//       try {
//         const formData = new FormData();
//         formData.append("title", values.title);
//         formData.append("description", values.description);
//         formData.append("image", values.image);

//         // eslint-disable-next-line no-unused-vars
//         const result = await postRequest(
//           `${REACT_APP_FAKE_API}/uploadEventsImages`,
//           formData,
//           {
//             Token: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           }
//         );
//         // console.log(result);
//         resetForm();
//         setFilePreview(null);
//       } catch (err) {
//         // console.log(err);
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className="uploadeventhead">
//         <h1 style={{ fontFamily: "ProximaBold" }}>Upload Event</h1>
//         <div {...getRootProps()}>
//           <img src={upload} alt="uploadbutton" />
//           <input {...getInputProps()} />
//           {isDragActive ? (
//             <p className="uploadeventptag">Drop the files here ...</p>
//           ) : (
//             <p className="uploadeventptag">Drag & drop the file here</p>
//           )}
//           <span className="uploadeventspanclass">or</span>
//           <br />
//           <br />
//           <button
//             type="button"
//             className="uploadimagebutton"
//             onClick={() => document.querySelector("input[type='file']").click()}
//           >
//             Browse your system
//           </button>
//           <br />
//           <span
//             style={{ fontFamily: "ProximaRegular" }}
//             className="uploadeventspanclass"
//           >
//             Please upload your image in JPEG or PNG format only.
//           </span>
//           <br />
//           {filePreview && (
//             <img
//               src={filePreview}
//               height="200px"
//               width="200px"
//               alt="uploaded_image"
//             />
//           )}
//           {formik.errors.image && formik.touched.image && (
//             <p className="error-text">{formik.errors.image}</p>
//           )}
//         </div>

//         <h1 style={{ fontFamily: "ProximaSemiBold" }}>Image Details</h1>
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               type="text"
//               placeholder="Title"
//               name="title"
//               value={formik.values.title}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="uploadeventinput1"
//               sx={{ backgroundColor: "white" }}
//               error={formik.touched.title && Boolean(formik.errors.title)}
//               helperText={formik.touched.title && formik.errors.title}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               type="text"
//               placeholder="Description"
//               name="description"
//               value={formik.values.description}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="uploadeventinput2"
//               sx={{ backgroundColor: "white" }}
//               error={
//                 formik.touched.description && Boolean(formik.errors.description)
//               }
//               helperText={
//                 formik.touched.description && formik.errors.description
//               }
//             />
//           </Grid>
//           <Grid item xs={12} sx={{ marginLeft: "500px", marginTop: "20px" }}>
//             <Button type="submit" className="uploadeventbuttonclass">
//               <div>
//                 <span>Upload </span>
//                 <img
//                   src={upload2}
//                   alt="smallupload"
//                   height="15vw"
//                   width="15vw"
//                 />
//               </div>
//             </Button>
//           </Grid>
//         </Grid>
//       </div>
//     </form>
//   );
// }

// export default UploadGallery;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { useFormik } from "formik";
import UploadIcon from "@mui/icons-material/Upload";
import { Box, Grid, TextField, Typography, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Button from "../components/Button";
import { postRequest } from "../HTTP_POST/api";

function UploadEvent() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [result, setResult] = useState(null);
  const location = useLocation();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const filePreview = URL.createObjectURL(selectedFile);
    setPreview(filePreview);
  };

  const imageApi = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await postRequest(
          `${REACT_APP_FAKE_API}/upload?folderName=events`,
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

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      const filePreview = URL.createObjectURL(droppedFile);
      setPreview(filePreview);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      events: null,
    },
    // validationSchema: postValidationSchema,
    onSubmit: async (values) => {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await postRequest(
          `${REACT_APP_FAKE_API}/uploadEventsAnnouncementsGalleryAwardsQRCodeImages`,
          {
            title: values.title,
            description: values.description,
            imageUrl: result.url,
          },
          {
            Token: `Bearer ${token}`,
          }
        );
        // console.log(response.data, "response");
      } catch (err) {
        // console.log(err.message, "error");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          backgroundColor: "#D4E9DA",
          padding: 5,
          margin: "10px auto",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ fontFamily: "ProximaBold", mb: 1, mt: "-10px" }}
                variant="h4"
              >
                Upload Event
              </Typography>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "30px",
                  margin: "5px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  overflow: "hidden",
                  height: "180px",
                  width: "35%",
                  border: isDragOver ? "2px dashed #1976d2" : "2px dashed #ccc",
                  textAlign: "center",
                  flexDirection: "column",
                }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "ProximaSemiBold",
                    // fontWeight: "bold",
                    // fontSize: "10px",
                    color: isDragOver ? "#1976d2" : "#666",
                    mb: 2,
                  }}
                >
                  Drag & Drop your image here
                </Typography>
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="fileInput">
                  <IconButton
                    component="span"
                    sx={{
                      backgroundColor: "#1976d2",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: isDragOver ? "#1976d2" : "#666",
                    mt: 2,
                  }}
                >
                  or click to select
                </Typography>
                {preview && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${preview})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "30px",
                      opacity: 0.5,
                    }}
                  />
                )}
              </Box>
              <UploadIcon
                sx={{
                  border: "2px solid black",
                  borderRadius: "50%",
                  marginTop: "2vw",
                }}
                onClick={imageApi}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "ProximaBold" }} variant="h6">
              Image Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              label="Title"
              id="title"
              name="title"
              type="string"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size="small"
              id="description"
              name="description"
              label="Description"
              type="string"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Button variant="contained" type="submit">
                Upload
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

export default UploadEvent;
