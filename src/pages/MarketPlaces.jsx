import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { postRequest } from "../HTTP_POST/api";

function MarketPlaces() {
  const { REACT_APP_FAKE_API } = process.env;
  const location = useLocation();
  const token = `${location.state.token}`;

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
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await postRequest(
        `${REACT_APP_FAKE_API}/postMarketPlace`,
        data,
        {
          Token: `Bearer ${token}`,
        }
      );
      // console.log(result);
    } catch (err) {
      // console.log(err);
    }
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
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
            Category
          </Typography>

          <FormControl fullWidth sx={{ backgroundColor: "#ffffff" }}>
            <Select
              labelId="category-select-label"
              id="category-select"
              name="category"
              value={data.category}
              onChange={changeHandler}
            >
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="hotel">Hotel</MenuItem>
            </Select>
          </FormControl>
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
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontFamily: "ProximaBold" }}>
            Upload Image
          </Typography>
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
