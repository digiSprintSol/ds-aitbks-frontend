import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import useCustomFetch from "../../Hooks/useCustomFetch";

export default function search() {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState({
    shopname: "",
    category: "",
    city: "",
  });

  const { REACT_APP_FAKE_API } = process.env;
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getMarketPlaces`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  const changeHandler = (e) => {
    setLoad({ ...load, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const filteredData = data.filter((item) => {
      if (load.category && load.city && load.shopname) {
        return (
          item.nameOfShop.toLowerCase() === load.shopname.toLowerCase() &&
          item.category.toLowerCase() === load.category.toLowerCase() &&
          item.city.toLowerCase() === load.city.toLowerCase()
        );
      }
      if (load.city && load.category) {
        return (
          item.category.toLowerCase() === load.category.toLowerCase() &&
          item.city.toLowerCase() === load.city.toLowerCase()
        );
      }
      if (load.city && load.shopname) {
        return (
          item.nameOfShop.toLowerCase() === load.shopname.toLowerCase() &&
          item.city.toLowerCase() === load.city.toLowerCase()
        );
      }
      if (load.shopname && load.category) {
        return (
          item.category.toLowerCase() === load.category.toLowerCase() &&
          item.nameOfShop.toLowerCase() === load.shopname.toLowerCase()
        );
      }
      if (load.shopname) {
        return item.nameOfShop.toLowerCase() === load.shopname.toLowerCase();
      }
      if (load.city) {
        return item.city.toLowerCase() === load.city.toLowerCase();
      }
      if (load.category) {
        return item.category.toLowerCase() === load.category.toLowerCase();
      }
      return false;
    });

    setUsers(filteredData);
  };

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Grid item xs={12}>
          <Typography sx={{ fontFamily: "ProximaBold" }} variant="h3">
            Market Place
          </Typography>
        </Grid>
        <Grid item container xs={12} spacing={2} alignItems="center">
          <Grid item xs={5}>
            <Typography>Name of the shop</Typography>
            <TextField
              fullWidth
              name="shopname"
              value={load.shopname}
              onChange={changeHandler}
              placeholder="search name of the shop"
            />
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Category</Typography>
            <FormControl fullWidth sx={{ backgroundColor: "#ffffff" }}>
              <Select
                labelId="category-select-label"
                id="category-select"
                name="category"
                value={load.category}
                onChange={changeHandler}
              >
                <MenuItem value="food">Food</MenuItem>
                <MenuItem value="hotel">Hotel</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">City</Typography>
            <FormControl fullWidth sx={{ backgroundColor: "#ffffff" }}>
              <Select
                labelId="category-select-label"
                id="category-select"
                name="city"
                value={load.city}
                onChange={changeHandler}
              >
                <MenuItem value="hyderabad">Hyderabad</MenuItem>
                <MenuItem value="bangalore">Bengaluru</MenuItem>
                <MenuItem value="bangalore">Chennai</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              disableElevation
              onClick={submitHandler}
              sx={{
                borderRadius: "50%",
                padding: "10px",
                minWidth: "0",
                width: "40px",
                height: "40px",
                transform: "Translate(0,1vw)",
              }}
            >
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {users.length > 0 ? (
        <TableContainer component={Paper} sx={{ margin: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Shop Name</TableCell>
                <TableCell>Contact Person</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Google Maps</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow>
                  <TableCell>{user.nameOfShop}</TableCell>
                  <TableCell>{user.contactPerson}</TableCell>
                  <TableCell>{user.mobileNumber}</TableCell>
                  <TableCell>{user.city}</TableCell>
                  <TableCell>{user.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h1 style={{ marginLeft: "42%" }}>No Results</h1>
      )}
    </>
  );
}
