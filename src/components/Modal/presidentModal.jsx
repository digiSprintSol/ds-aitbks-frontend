/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "80%",
    maxWidth: "none",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(4),
    backgroundColor: "#e0f2f1",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function PresidentModal() {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState("");
  const [radioValue, setRadioValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentChange = (event) => {
    setComments(event.target.value);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleSubmit = () => {
    if (!comments) {
      alert("Please enter your comments");
      return false;
    }
    if (!radioValue) {
      alert("Please select a membership type");
      return false;
    }
    // Perform the submission logic
    console.log("Comments:", comments);
    console.log("Selected Membership:", radioValue);
    return true;
  };

  const handleButtonClick = (action) => {
    if (handleSubmit()) {
      // Perform the action-specific logic here
      console.log(action);
      handleClose();
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
      >
        <DialogTitle sx={{ m: "0px auto", p: 2 }} id="customized-dialog-title">
          Applicant details Approved By Committee
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box>
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
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Middle Name"
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Present Address"
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
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#1B7DA6",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "40px",
                  }}
                >
                  Committee Comments
                </Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  value="accepted"
                  control={<Radio />}
                  label="Accepted"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  value="rejected"
                  control={<Radio />}
                  label="Rejected"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  value="waiting"
                  control={<Radio />}
                  label="Waiting"
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#1B7DA6",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "40px",
                    }}
                  >
                    President Comments
                  </Typography>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#ffffff" }}
                    value={comments}
                    onChange={handleCommentChange}
                  />
                </Grid>
                <Grid container justifyContent="center">
                  <RadioGroup
                    row
                    sx={{ marginTop: "10px" }}
                    value={radioValue}
                    onChange={handleRadioChange}
                  >
                    <Grid item xs={4}>
                      <FormControlLabel
                        value="trustee"
                        control={<Radio />}
                        label="Trustee"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        value="patron"
                        control={<Radio />}
                        label="Patron"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        value="life_member"
                        control={<Radio />}
                        label="Life Member"
                      />
                    </Grid>
                  </RadioGroup>
                </Grid>
              </Grid>
              <DialogActions sx={{ margin: "50px auto" }}>
                <Button
                  variant="contained"
                  autoFocus
                  onClick={() => handleButtonClick("Accept")}
                  sx={{
                    width: "130px",
                    borderRadius: "50px",
                    backgroundColor: "#199369",
                  }}
                >
                  Accept
                </Button>
                <Button
                  variant="contained"
                  autoFocus
                  onClick={() => handleButtonClick("Waiting")}
                  sx={{
                    width: "130px",
                    borderRadius: "50px",
                    backgroundColor: "#F1C21B",
                  }}
                >
                  Waiting
                </Button>
                <Button
                  variant="contained"
                  autoFocus
                  onClick={() => handleButtonClick("Decline")}
                  sx={{
                    width: "130px",
                    borderRadius: "50px",
                    backgroundColor: "#F3561F",
                  }}
                >
                  Decline
                </Button>
              </DialogActions>
            </Grid>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
