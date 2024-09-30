import { Button, Grid, TextField, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { postRequest } from "../HTTP_POST/api";
import LoadingComponent from "../components/Loading/loadingComponent";

function PostScholar() {
  const { REACT_APP_FAKE_API } = process.env;
  const location = useLocation();
  const token = `${location.state.token}`;
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    surName: "",
    scholarShipName: "",
    sponser: "",
  });

  const imageApi = async () => {
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await postRequest(
          `${REACT_APP_FAKE_API}/upload?folderName=scholarship`,
          formData,
          {
            Token: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        );

        setResult(res);
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert("Maximum upload size crossed..");
        // console.log(err);
      } finally {
        setLoading(false);
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

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await postRequest(
        `${REACT_APP_FAKE_API}/saveScholarShip`,
        { ...data, profilePicUrl: result.url },
        {
          Token: `Bearer ${token}`,
        }
      );
      // eslint-disable-next-line no-alert
      alert("Data added");
      setData({
        firstName: "",
        surName: "",
        scholarShipName: "",
        sponser: "",
      });
      setFile(null);
      // console.log(result);
    } catch (err) {
      // console.log(err);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    //  console.log(selectedFile, "llllll");
  };

  return (
    <>
      {loading && <LoadingComponent />}
      <form onSubmit={submitHandler}>
        <Grid
          container
          spacing={2}
          sx={{
            padding: "20px 50px",
            backgroundColor: "#D4E9DA",
            margin: "-55px 0px 20px 0px",
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "ProximaBold",
                textAlign: "center",
                marginBottom: "3vw",
              }}
            >
              Add Scholarship
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
              First Name
            </Typography>
            <TextField
              name="firstName"
              type="text"
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              onChange={changeHandler}
              value={data.firstName}
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
              Surname
            </Typography>
            <TextField
              name="surName"
              type="text"
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              onChange={changeHandler}
              value={data.surName}
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
              Scholarship Name
            </Typography>
            <TextField
              name="scholarShipName"
              type="text"
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              onChange={changeHandler}
              value={data.scholarShipName}
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
              Sponser
            </Typography>
            <TextField
              name="sponser"
              type="text"
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={data.sponser}
              // error={
              // formik.touched.phoneNumber &&
              // Boolean(formik.errors.phoneNumber)
              // }
              // helperText={
              // formik.touched.phoneNumber && formik.errors.phoneNumber
              // }
              onChange={changeHandler}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="fileInput" style={{ fontFamily: "ProximaBold" }}>
              Upload Photo:
              <input type="file" id="fileInput" onChange={handleFileChange} />
            </label>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default PostScholar;
