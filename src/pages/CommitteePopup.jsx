import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { postRequest } from "../HTTP_POST/api";

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

export default function CommitteePopup({ row, token }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [data, setData] = React.useState("");
  const accepted = { statusOfApproval: "accepted" };
  const rejected = { statusOfApproval: "rejected" };
  const waiting = { statusOfApproval: "waiting" };
  const changeHandler = (e) => {
    setData({ remarks: e.target.value });
  };

  React.useEffect(() => {
    if (data) {
      const message = document.getElementById("errordisplay");
      message.innerHTML = "message:";
      try {
        const exp = data.remarks.charCodeAt(0);
        if (!(exp >= 97 && exp <= 122)) {
          // eslint-disable-next-line no-throw-literal
          throw "enter only alphabets";
        }
      } catch (err) {
        message.innerHTML = "message:".concat(err);
      }
    }
  }, [data]);
  const { REACT_APP_FAKE_API } = process.env;
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

  const acceptButton = () => {
    setData({ ...data, ...accepted, member: row.categoryOfMembership });
    // console.log(data, "llllllllllllll");
    if (Object.keys(data).length === 3) {
      post();
    }
  };
  const rejectButton = () => {
    setData({ ...data, ...rejected, member: row.categoryOfMembership });
    // console.log(data, "llllllllllllll");
    if (Object.keys(data).length === 3) {
      post();
    }
  };
  const waitButton = () => {
    setData({ ...data, ...waiting, member: row.categoryOfMembership });
    // console.log(data,"llllllllllllll");
    if (Object.keys(data).length === 3) {
      post();
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
          Applicant details
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
                  onChange={changeHandler}
                />
                <p id="errordisplay" style={{ color: "red" }}>
                  message:
                </p>
              </Grid>
              <DialogActions sx={{ margin: "50px auto" }}>
                <Button
                  variant="contained"
                  autoFocus
                  onClick={acceptButton}
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
                  onClick={waitButton}
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
                  onClick={rejectButton}
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

CommitteePopup.propTypes = {
  row: PropTypes.func.isRequired,
  token: PropTypes.func.isRequired,
};
