import { Button, Grid, TextField, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { postRequest } from "../HTTP_POST/api";

function MarketPlaces() {
  const { REACT_APP_FAKE_API } = process.env;
  const location = useLocation();
  const token = `${location.state.token}`;
  const [file, setFile] = useState(null);

  const [data, setData] = useState({
    nameOfShop: "",
    contactPerson: "",
    mobileNumber: "",
    location: "",
    category: "",
    city: "",
    image: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    // console.log(file,"llllllllll")
    // console.log(file.name,"ppppppp")
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await postRequest(
        `${REACT_APP_FAKE_API}/postMarketPlace?nameOfShop=${data.nameOfShop}&contactPerson=${data.contactPerson}&mobileNumber=${data.mobileNumber}&location=${data.location}&category=${data.category}&city=${data.city}`,
        formData,
        {
          Token: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        }
      );
      // eslint-disable-next-line no-alert
      alert("Data added");
      setData({
        nameOfShop: "",
        contactPerson: "",
        mobileNumber: "",
        location: "",
        category: "",
        city: "",
        image: "",
      });
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
    <form onSubmit={submitHandler}>
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
            Add Market Place
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
            Name of the shop
          </Typography>
          <TextField
            name="nameOfShop"
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            onChange={changeHandler}
            value={data.nameOfShop}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
            Contact Person
          </Typography>
          <TextField
            name="contactPerson"
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            onChange={changeHandler}
            value={data.contactPerson}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
            Mobile Number
          </Typography>
          <TextField
            name="mobileNumber"
            type="number"
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            value={data.mobileNumber}
            // error={
            // formik.touched.phoneNumber &&
            // Boolean(formik.errors.phoneNumber)
            // }
            // helperText={
            // formik.touched.phoneNumber && formik.errors.phoneNumber
            // }
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
            Location
          </Typography>
          <TextField
            name="location"
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            onChange={changeHandler}
            value={data.location}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
            Category
          </Typography>

          {/* <FormControl fullWidth sx={{ backgroundColor: "#ffffff" }}>
            <Select
              labelId="category-select-label"
              id="category-select"
              name="category"
              value={data.category}
              onChange={changeHandler}
            >
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Hotel">Hotel</MenuItem>
            </Select>
          </FormControl> */}
          <TextField
            name="category"
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            onChange={changeHandler}
            value={data.category}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
            City
          </Typography>
          <TextField
            name="city"
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
            onChange={changeHandler}
            value={data.city}
          />
        </Grid>
        <Grid item xs={12}>
          <label htmlFor="fileInput" style={{ fontFamily: "ProximaBold" }}>
            Upload Your Market Photo:
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
  );
}

export default MarketPlaces;
