/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import {
  Box,
  Grid,
  TextField,
  Typography,
  IconButton,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import Button from "../components/Button";
import { postRequest } from "../HTTP_POST/api";
import useCustomFetch from "../Hooks/useCustomFetch";
import LoadingComponent from "../components/Loading/loadingComponent";

function UploadEvent() {
  const [file, setFile] = useState([]);
  const [radioData, setRadioData] = useState("");
  const [folderNames, setFolderNames] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [pathData, setPathData] = useState(null);
  // const [preview, setPreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [result, setResult] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [loadingTwo, setLoadingTwo] = useState(false);
  const location = useLocation();
  const token = `${location.state.token}`;
  const { REACT_APP_FAKE_API } = process.env;

  const radioHandleChange = (e) => {
    setRadioData(e.target.value);
  };

  const pathDataChangeHandler = (e) => {
    const exp = e.target.value.replace(" ", "_");
    setPathData(exp);
  };

  const handleFileChange = (e) => {
    let selectedFile = e.target.files;
    selectedFile = Object.values(selectedFile);
    setFile([...file, ...selectedFile]);
  };

  const imageApi = async () => {
    if (file) {
      setLoadingTwo(true);
      const formData = new FormData();
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < file.length; i++) {
        formData.append("files", file[i]);
      }
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await postRequest(
          `${REACT_APP_FAKE_API}/uploadMultipleImages?folderName=events&folderPath=events/${pathData}`,
          formData,
          {
            Token: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        );

        const exp = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < res.uploadedImages.length; i++) {
          exp.push(res.uploadedImages[i].url);
        }
        setResult(exp);
      } catch (err) {
        // eslint-disable-next-line no-console
        // console.log(err);
        // eslint-disable-next-line no-alert
        // alert("Maximum upload size crossed...");
        setFile(null);
        // setPreview(null);
      } finally {
        setLoadingTwo(false);
        setPageCount(2);
      }
    }
  };

  // useEffect(() => {
  //   if (file) {
  //     // eslint-disable-next-line no-restricted-globals, no-alert
  //     if (confirm("Do you want to upload...")) {
  //       imageApi();
  //     }
  //   }
  // }, [file]);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      // const filePreview = URL.createObjectURL(droppedFile);
      // setPreview(filePreview);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getAllFolderName`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    if (data) {
      const arr = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; i++) {
        if (data[i]) {
          const exp = data[i].split("/");
          if (exp[0] === "events") {
            arr.push(exp[1]);
          }
        }
      }
      setFolderNames(arr);
    }
  }, [data]);

  const capitalChange = (item) => item.toUpperCase();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      sponsoredBy: "",
      eventDate: "",
      place: "",
    },
    // validationSchema: postValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // console.log(values.eventDate, "32398723894723");
        // eslint-disable-next-line no-unused-vars
        const response = await postRequest(
          `${REACT_APP_FAKE_API}/uploadEventsAnnouncementsGalleryAwardsQRCodeImages`,
          {
            title: values.title,
            description: values.description,
            eventType: "events",
            eventDate: new Date(values.eventDate).toISOString(),
            sponsoredBy: values.sponsoredBy,
            place: values.place,
            imageURLs: result,
          },
          {
            Token: `Bearer ${token}`,
          }
        );
        // eslint-disable-next-line no-alert
        alert("Uploaded...");
        resetForm();
        setFile(null);
        // setPreview(null);
      } catch (err) {
        // console.log(err.message, "error");
      }
    },
  });

  if (loading) return <LoadingComponent />;
  if (error) return <h1>error</h1>;

  return (
    <form onSubmit={formik.handleSubmit}>
      {loadingTwo && <LoadingComponent />}
      <Box
        sx={{
          backgroundColor: "#D4E9DA",
          padding: 5,
          margin: "10px auto",
        }}
      >
        <Grid container spacing={1}>
          {pageCount === 1 && (
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
                    border: isDragOver
                      ? "2px dashed #1976d2"
                      : "2px dashed #ccc",
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
                    multiple
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
                  {/* {preview && (
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
                )} */}
                </Box>
                <Grid
                  container
                  spacing={2}
                  sx={{ width: "40vw", margin: "auto" }}
                >
                  <Grid item xs={12} sx={{ margin: "auto" }}>
                    <Typography sx={{ marginTop: "2vw", marginLeft: "2vw" }}>
                      Do you want to uplaod the above images in the existing
                      folder
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ marginLeft: "11vw" }}>
                    <RadioGroup
                      row
                      name="value"
                      onChange={radioHandleChange}
                      sx={{
                        margin: "1.5vw",
                      }}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                        sx={{
                          marginLeft: "20px",
                        }}
                      />
                    </RadioGroup>
                  </Grid>
                  <Grid item xs={6} sx={{ margin: "auto" }}>
                    {radioData === "yes" && (
                      <FormControl fullWidth>
                        <InputLabel>Select folder</InputLabel>
                        <Select
                          label="Select folder"
                          onChange={pathDataChangeHandler}
                        >
                          {folderNames &&
                            folderNames.map((item) =>
                              item ? (
                                <MenuItem key={item} value={item}>
                                  {capitalChange(item)}
                                </MenuItem>
                              ) : null
                            )}
                        </Select>
                      </FormControl>
                    )}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      textAlign: "center",
                      transform: "translate(0.2vw ,-1.5vw)",
                    }}
                  >
                    {radioData === "no" && (
                      <div>
                        <TextField
                          label="Enter FolderName"
                          onChange={pathDataChangeHandler}
                          sx={{ width: "20vw" }}
                          fullWidth
                        />
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={3} sx={{ marginLeft: "16vw" }}>
                    <Button
                      onClick={() => {
                        imageApi();
                      }}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          )}

          {pageCount === 2 && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ fontFamily: "ProximaBold" }} variant="h6">
                  Event Details
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
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
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Event Date</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="eventDate"
                  name="eventDate"
                  // label="DD/MM/YYYY"
                  type="date"
                  value={formik.values.eventDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.eventDate && Boolean(formik.errors.eventDate)
                  }
                  helperText={
                    formik.touched.eventDate && formik.errors.eventDate
                  }
                  // sx={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  id="eventDate"
                  name="place"
                  label="Place"
                  type="string"
                  value={formik.values.place}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.place && Boolean(formik.errors.place)}
                  helperText={formik.touched.place && formik.errors.place}
                  // sx={{ backgroundColor: "white", borderRadius: "5px" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="sponsoredBy"
                  name="sponsoredBy"
                  label="SponsoredBy"
                  type="string"
                  rows={4}
                  value={formik.values.sponsoredBy}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.sponsoredBy &&
                    Boolean(formik.errors.sponsoredBy)
                  }
                  helperText={
                    formik.touched.sponsoredBy && formik.errors.sponsoredBy
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
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
    </form>
  );
}

export default UploadEvent;
