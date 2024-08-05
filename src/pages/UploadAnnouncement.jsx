import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import upload2 from "./images/upload2.png";
import Button from "../components/Button";
import "../App.css";

function UploadAnnouncement() {
  return (
    <Box
      className="uploadannouncementhead"
      sx={{ width: "auto", display: "flex", flexDirection: "column" }}
    >
      <h1 style={{ fontFamily: "ProximaBold" }}>Make a Announcement</h1>
      <h1 style={{ fontFamily: "ProximaSemiBold" }}>Announcement Details</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            type="text"
            placeholder="Title"
            className="uploadeventinput1"
            sx={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            placeholder="Description"
            className="uploadeventinput2"
            sx={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="button" className="uploadannouncementbuttonclass">
            <div>
              <span>Post </span>
              <img src={upload2} alt="smallupload" height="20vw" width="20vw" />
            </div>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UploadAnnouncement;
