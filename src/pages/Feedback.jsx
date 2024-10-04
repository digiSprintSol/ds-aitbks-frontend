import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// import userIcon from "./images/userIcon.png";
import quoteIcon from "./images/quoteIcon.png";
import feedbackhands from "./images/feedbackhands.png";
import "../App.css";
import useCustomFetch from "../Hooks/useCustomFetch";
import LoadingComponent from "../components/Loading/loadingComponent";

function Feedback() {
  const navigate = useNavigate();
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/feedback/getAllFeedBacks`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  if (error) return <h1>Error..</h1>;
  if (loading) return <LoadingComponent />;
  return (
    <Box sx={{ padding: "2vw" }}>
      <Box>
        <Typography
          sx={{
            fontFamily: "ProximaBold",
            color: "#1B7DA6",
            marginLeft: "2vw",
            fontSize: "2.2vw",
          }}
        >
          All Feedback’s
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            backgroundColor: "#D4E9DA",
            margin: "30px 10px",
            paddingBottom: "50px",
            width: "98%",
          }}
        >
          {data.map((item) => (
            <Grid item xs={6}>
              <div className="feedback">
                <img
                  src={item.url}
                  alt="user_icon"
                  height="60%"
                  width="19%"
                  style={{ objectFit: "contain" }}
                />
                <div>
                  <h1 style={{ fontFamily: "ProximaBold" }}>{item.name}</h1>
                  <p style={{ fontFamily: "ProximaRegular" }}>
                    {item.profession}
                  </p>
                  <p style={{ fontFamily: "ProximaRegular" }}>
                    {item.description}
                  </p>
                </div>
                <img
                  src={quoteIcon}
                  alt="quote_icon"
                  height="40%"
                  width="12%"
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{ backgroundColor: "#AED8F0", display: "flex", padding: "50px" }}
      >
        <Box sx={{ marginRight: "10vw" }}>
          <Typography
            sx={{
              fontFamily: "proximaBold",
              border: "3px solid transparent",
              fontSize: "2.3vw",
              width: "30vw",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            We love hearing from you! Thanks for your valuable feedback
          </Typography>
          <img
            src={feedbackhands}
            alt="feedbackhands"
            height="60%"
            width="100%"
          />
        </Box>
        <Grid
          container
          spacing={3}
          sx={{ backgroundColor: "#D4E9DA", paddingBottom: "7vw" }}
        >
          <Grid item xs={6}>
            <TextField
              placeholder="Your name"
              sx={{ width: "30vw", backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Profession"
              sx={{ width: "30vw", backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={12}>
            <textarea rows="12" cols="60" style={{ marginBottom: "5vw" }}>
              {null}
            </textarea>
          </Grid>
          <Button
            type="submit"
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "#23A380",
              width: "10px",
              height: "2.5vw",
              padding: "0px 45px",
              borderRadius: "10px",
              // marginBottom: "5%",
              color: "white",
              textDecoration: "none",
              fontFamily: "ProximaRegular",
              marginLeft: "18vw",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}

export default Feedback;
