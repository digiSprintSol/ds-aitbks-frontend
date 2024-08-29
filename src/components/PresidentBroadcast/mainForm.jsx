import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
  Typography,
} from "@mui/material";
import EmailComponent from "./email";
import SmsComponent from "./sms";

function MainForm() {
  const [contactMethod, setContactMethod] = useState();

  const changeHandler = (e) => {
    setContactMethod(e.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        backgroundColor: "#D4E9DA",
        padding: 3,
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: "ProximaBold" }}>
        Broadcast
      </Typography>
      <FormControl component="fieldset" sx={{ marginTop: "15px" }}>
        <FormLabel component="legend" sx={{ fontFamily: "ProximaSemibold" }}>
          Select Contact Method
        </FormLabel>
        <RadioGroup
          aria-label="contactMethod"
          name="contactMethod"
          value={contactMethod}
          onChange={changeHandler}
          row
        >
          <FormControlLabel control={<Radio />} label="Email" value="email" />
          <FormControlLabel control={<Radio />} label="SMS" value="sms" />
        </RadioGroup>
      </FormControl>

      {contactMethod === "email" && <EmailComponent />}
      {contactMethod === "sms" && <SmsComponent />}
    </Box>
  );
}

export default MainForm;
