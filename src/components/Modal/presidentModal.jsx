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
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { postRequest } from "../../HTTP_POST/api";

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

export default function PresidentModal({ row, token }) {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [data, setData] = useState("");

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

  const { REACT_APP_FAKE_API } = process.env;
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

  const post = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await postRequest(
        `${REACT_APP_FAKE_API}/user/approval/${row.userId}`,
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

  const handleButtonClick = (action) => {
    if (handleSubmit()) {
      setData({
        remarks: comments,
        statusOfApproval: action,
        membership: radioValue,
      });
      // Perform the action-specific logic here
      console.log(action);
      if (Object.keys(data).length === 3) {
        post();
      }
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "#F1C21B",
          color: "white",
          width: "14vw",
          borderRadius: "15px",
          height: "2vw",
          border: "none",
          fontSize: "12px",
        }}
      >
        View Full Details
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
              <Grid item xs={12}>
                <Typography>Full Name</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={row.fullName}
                  aria-readonly
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              {/* <Grid item xs={4}>
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
              </Grid> */}
              <Grid item xs={2}>
                <Typography id="modal-modal-description">DOB</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.dateOfBirth}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={4}>
                <Typography id="modal-modal-description">Mobile No.</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.phoneNumber}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Email ID</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.emailAddress}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={2}>
                <Typography id="modal-modal-description">Gender</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.gender}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={4}>
                <Typography id="modal-modal-description">Profession</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.profession}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Education</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.education}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  Father Name
                </Typography>
                <TextField
                  value={row.familyDetails.fatherName}
                  aria-readonly
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  Mother Name
                </Typography>
                <TextField
                  value={row.familyDetails.motherName}
                  aria-readonly
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography id="modal-modal-description">
                  Present Address
                </Typography>
                <TextField
                  value={row.address[0].addressLine1.concat(
                    ", ",
                    row.address[0].addressLine2
                  )}
                  aria-readonly
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                />
              </Grid>
              <Grid item xs={2}>
                <Typography id="modal-modal-description">Pin code</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.address[0].postalCode}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={4}>
                <Typography id="modal-modal-description">State</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.address[0].state}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Country</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.address[0].country}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  No. of Children
                </Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.familyDetails.childern}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={7}>
                <Typography id="modal-modal-description">Name</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.familyDetails.childern}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={2}>
                <Typography id="modal-modal-description">Age</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.familyDetails.childern}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={3}>
                <Typography id="modal-modal-description">Gender</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.familyDetails.childern}
                  aria-readonly
                />
              </Grid>
              {/* <Grid item xs={7}>
                <Typography id="modal-modal-description">Name</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={2}>
                <Typography id="modal-modal-description">Age</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={3}>
                <Typography id="modal-modal-description">Gender</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid> */}
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  Aadhar Card
                </Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.aadharCard}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Voter ID</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.voterIdCard}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={7}>
                <Typography id="modal-modal-description">Community</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.category}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  Reference 01 (existing members)
                </Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.reference1}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  Reference 02 (referred by)
                </Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.reference2}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={12}>
                <Typography id="modal-modal-description">
                  Tell us about yourself
                </Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.brieflyTellAboutYourself}
                  aria-readonly
                />
              </Grid>
              <Grid item xs={12}>
                <Typography id="modal-modal-description">
                  Why do you want join All India Telega Balija Kapu Sangam?
                </Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.reasonToJoinAITBKS}
                  aria-readonly
                />
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
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.committeeRemarksForApplicant}
                  aria-readonly
                />
              </Grid>

              {/* ------------------------------------------------------------ committeee status checking */}
              {row.status === "accepted" && (
                <Stack direction="row" spacing={30}>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="accepted"
                      checked
                      disabled
                      control={<Radio />}
                      label="Accepted"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="rejected"
                      disabled
                      control={<Radio />}
                      label="Rejected"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="waiting"
                      disabled
                      control={<Radio />}
                      label="Waiting"
                    />
                  </Grid>
                </Stack>
              )}

              {row.status === "rejected" && (
                <Stack direction="row" spacing={30}>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="accepted"
                      disabled
                      control={<Radio />}
                      label="Accepted"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="rejected"
                      checked
                      disabled
                      control={<Radio />}
                      label="Rejected"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="waiting"
                      disabled
                      control={<Radio />}
                      label="Waiting"
                    />
                  </Grid>
                </Stack>
              )}

              {row.status === "waiting" && (
                <Stack direction="row" spacing={30}>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="accepted"
                      disabled
                      control={<Radio />}
                      label="Accepted"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="rejected"
                      disabled
                      control={<Radio />}
                      label="Rejected"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="waiting"
                      checked
                      disabled
                      control={<Radio />}
                      label="Waiting"
                    />
                  </Grid>
                </Stack>
              )}

              {/* ------------------------------------------------------------------------------------- */}

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
                  onClick={() => handleButtonClick("accepted")}
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
                  onClick={() => handleButtonClick("rejected")}
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

PresidentModal.propTypes = {
  row: PropTypes.func.isRequired,
  token: PropTypes.func.isRequired,
};
