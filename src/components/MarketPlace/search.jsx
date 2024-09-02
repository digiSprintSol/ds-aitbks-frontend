import {
  Grid,
  Typography,
  Button,
  Stack,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useCustomFetch from "../../Hooks/useCustomFetch";

export default function Search() {
  const { REACT_APP_FAKE_API } = process.env;
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;

  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getMarketPlaces`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  const info = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/categories`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState({
    shopname: "",
    category: "",
    city: "",
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

  useEffect(() => {
    setUsers(data);
  }, [data]);

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <Stack sx={{ backgroundColor: "#D4E9DA" }}>
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
              sx={{ backgroundColor: "white" }}
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
                {info.data &&
                  info.data.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1">City</Typography>
            <FormControl fullWidth sx={{ backgroundColor: "#ffffff" }}>
              <Select
                labelId="city-select-label"
                id="city-select"
                name="city"
                value={load.city}
                onChange={changeHandler}
              >
                <MenuItem value="hyderabad">Hyderabad</MenuItem>
                <MenuItem value="bangalore">Bengaluru</MenuItem>
                <MenuItem value="chennai">Chennai</MenuItem>
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

      {users && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            columnGap: "2vw",
          }}
        >
          {users.map((user) => (
            <div style={{ marginBottom: "3vw", textAlign: "center" }}>
              <img
                src={user.imageUrl}
                loading="lazy"
                alt="shop"
                style={{ width: "30vw", height: "20vw" }}
              />
              <Typography
                variant="h6"
                sx={{ fontFamily: "ProximaBold", marginTop: "10px" }}
              >
                {user.nameOfShop}
              </Typography>
              <Typography variant="body1">{user.contactPerson}</Typography>
              <Typography variant="body1">{user.mobileNumber}</Typography>
              <Typography variant="body1">{user.category}</Typography>
              <Typography variant="body1">{user.city}</Typography>
              <Typography variant="body1">
                <a
                  href={user.location}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps
                </a>
              </Typography>
              {/* <Divider
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#909090",
                marginTop: "3vw",
              }}
            /> */}
            </div>
          ))}
        </div>
      )}
    </Stack>
  );
}
