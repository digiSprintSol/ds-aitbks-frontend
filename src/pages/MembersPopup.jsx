/* eslint-disable no-nested-ternary */
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";

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

export default function MembersPopup({ row }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
          "&:hover": {
            backgroundColor: "#F1C21B",
            boxShadow: "0px 1px 2px black",
            border: "none",
          },
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
          Member Details
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
                <img
                  src={row.profilePic}
                  alt="Selected"
                  style={{
                    display: "block",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    margin: "10px auto",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>First Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>Surname</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  value={row.firstName}
                  aria-readonly
                  sx={{ backgroundColor: "#ffffff" }}
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  value={row.lastName}
                  aria-readonly
                  sx={{ backgroundColor: "#ffffff" }}
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <Typography id="modal-modal-description">DOB</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.dateOfBirth}
                  aria-readonly
                  size="small"
                />
              </Grid>
              <Grid item xs={5}>
                <Typography id="modal-modal-description">Mobile No.</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.phoneNumber}
                  aria-readonly
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography id="modal-modal-description">Email ID</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.emailAddress}
                  aria-readonly
                  size="small"
                />
              </Grid>
              <Grid item xs={2}>
                <Typography id="modal-modal-description">Gender</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.gender}
                  aria-readonly
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography id="modal-modal-description">Profession</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.profession}
                  aria-readonly
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Education</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.education}
                  aria-readonly
                  size="small"
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
                  size="small"
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
                  size="small"
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
                  size="small"
                />
              </Grid>
              <Grid item xs={2}>
                <Typography id="modal-modal-description">Pin code</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.address[0].postalCode}
                  aria-readonly
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography id="modal-modal-description">State</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.address[0].state}
                  aria-readonly
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Country</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.address[0].country}
                  aria-readonly
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  No. of Children
                </Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.familyDetails.children.length}
                  aria-readonly
                  size="small"
                />
              </Grid>
              {row.familyDetails.children.map((item) => (
                <>
                  <Grid item xs={7}>
                    <Typography id="modal-modal-description">Name</Typography>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: "#ffffff" }}
                      value={item.name}
                      aria-readonly
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography id="modal-modal-description">Age</Typography>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: "#ffffff" }}
                      value={item.childAge}
                      aria-readonly
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Typography id="modal-modal-description">Gender</Typography>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: "#ffffff" }}
                      value={item.gender}
                      aria-readonly
                      size="small"
                    />
                  </Grid>
                </>
              ))}
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
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Voter ID</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.voterIdCard}
                  aria-readonly
                  size="small"
                />
              </Grid>
              <Grid item xs={7}>
                <Typography id="modal-modal-description">Community</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.category}
                  aria-readonly
                  size="small"
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
                  size="small"
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
                  size="small"
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
                  size="small"
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
                  size="small"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}

MembersPopup.propTypes = {
  row: PropTypes.func.isRequired,
};
