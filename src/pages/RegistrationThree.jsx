import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Radio,
  FormControlLabel,
  Divider,
  RadioGroup,
} from "@mui/material";

function RegistrationThree() {
  const [isPartOfCommunity, setIsPartOfCommunity] = useState("");
  const [communityName, setCommunityName] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};
    if (!isPartOfCommunity) {
      validationErrors.isPartOfCommunity = "This field is required";
    }
    if (isPartOfCommunity === "yes" && !communityName) {
      validationErrors.communityName = "Please mention the community name";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      // eslint-disable-next-line no-alert
      alert("Form submitted");
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    // Clear the community name error if "no" is selected
    if (isPartOfCommunity === "no") {
      setErrors((prevErrors) => {
        const { ...rest } = prevErrors;
        return rest;
      });
    }
  }, [isPartOfCommunity]);

  return (
    <Box
      style={{
        maxWidth: "1000px",
        margin: "20px auto",
        backgroundColor: "#D4E9DA",
        padding: "50px 80px",
        borderRadius: "20px",
      }}
    >
      <Typography
        variant="h5"
        style={{
          color: "#1B7DA6",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Preview Application
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Full Name</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="First Name"
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Middle Name"
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Last Name"
            fullWidth
            sx={{ backgroundColor: "#ffffff" }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography>DOB</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={4}>
          <Typography>Mobile No.</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Email ID</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={2}>
          <Typography>Gender</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={4}>
          <Typography>Profession</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Education</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Father Name</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Mother Name</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Spouse Name</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Present Address</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={2}>
          <Typography>Pincode</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={4}>
          <Typography>State</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Country</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Native Address</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>No. of Children</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={7}>
          <Typography>Name</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={2}>
          <Typography>Age</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={3}>
          <Typography>Gender</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={7}>
          <Typography>Name</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={2}>
          <Typography>Age</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={3}>
          <Typography>Gender</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Aadhar Card</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Voter ID</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={7}>
          <Typography>Present Occupation</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Reference 01 (existing members)</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Reference 02 (referred by)</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Tell us about yourself</Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Why do you want join All India Telega Balija Kapu Sangam?
          </Typography>
          <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Divider />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#1B7DA6",
                  fontWeight: "bold",
                }}
              >
                Part of any community?
              </Typography>
              <RadioGroup
                row
                value={isPartOfCommunity}
                onChange={(e) => setIsPartOfCommunity(e.target.value)}
                sx={{
                  marginLeft: "20px",
                }}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Box>
            {errors.isPartOfCommunity && (
              <Typography color="error">{errors.isPartOfCommunity}</Typography>
            )}
          </Grid>
          {isPartOfCommunity === "yes" && (
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                }}
              >
                If yes, mention the name
              </Typography>
              <TextField
                fullWidth
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
                sx={{ backgroundColor: "#ffffff" }}
                error={!!errors.communityName}
                helperText={errors.communityName}
              />
            </Grid>
          )}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "30px", backgroundColor: "#199369" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default RegistrationThree;
