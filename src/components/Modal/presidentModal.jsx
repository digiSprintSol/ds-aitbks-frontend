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
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
// import { ThreeDots } from "react-loader-spinner";
import LoadingOverlay from "react-loading-overlay";
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

export default function PresidentModal({ row, token, name1, name2, name3 }) {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState("");
  const [radioValue, setRadioValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

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
      <Alert severity="warning">Please enter your commenets</Alert>;
      return false;
    }
    if (!radioValue) {
      <Alert severity="warning">Please select a membership type</Alert>;
      return false;
    }
    // Perform the submission logic
    console.log("Comments:", comments);
    console.log("Selected Membership:", radioValue);
    return true;
  };

  const post = async (info) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await postRequest(
        `${REACT_APP_FAKE_API}/user/approval/${row.userId}`,
        info,
        {
          Token: `Bearer ${token}`,
        }
      );
      if (!result) {
        setLoading(true);
      }
      setLoading(false);
      // console.log(result);
      alert("Status Updated");
      setOpen(false);
    } catch (err) {
      setLoading(false);
      // console.log(err);
    }
  };

  const handleButtonClick = (action) => {
    setLoading(true);
    if (handleSubmit()) {
      setData({
        remarks: comments,
        statusOfApproval: action,
        membership: radioValue,
      });
      // Perform the action-specific logic here
      // console.log(action);
      // if (Object.keys(data).length === 3) {
      //   post();
      // }
      post({
        remarks: comments,
        statusOfApproval: action,
        membership: radioValue,
      });
    }
  };

  const membershipFunction = (acms) => {
    if (acms === "trustee") {
      return "Trustee";
    }
    if (acms === "patron") {
      return "Patron";
    }
    if (acms === "lifemember") {
      return "Life Member";
    }
    return null;
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
                <TextField
                  fullWidth
                  value={row.firstName}
                  aria-readonly
                  sx={{ backgroundColor: "#ffffff" }}
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>SurName</Typography>
                <TextField
                  fullWidth
                  value={row.lastName}
                  aria-readonly
                  sx={{ backgroundColor: "#ffffff" }}
                  size="small"
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
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <Typography id="modal-modal-description">Mobile No.</Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.phoneNumber}
                  aria-readonly
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
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
              <Grid item xs={12}>
                <Typography id="modal-modal-description">
                  Applicant Choosen Membership
                </Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={membershipFunction(row.applicantChoosenMembership)}
                  aria-readonly
                  size="small"
                />
              </Grid>

              {/* -------------------------- committee 1,2,3 commenets and status starts from here------------------ */}
              {/* ==============committee 1 choosen membership===================================================================================================== */}
              <Grid item xs={12}>
                {row.committeeOneChoosenMembershipForApplicant && (
                  <>
                    <Typography sx={{ fontFamily: "ProximaBold" }}>
                      {name1}
                      {` choosen membership: `}
                    </Typography>
                    <TextField
                      fullWidth
                      sx={{
                        backgroundColor: "#ffffff",
                        // fontFamily: "ProximaRegular",
                      }}
                      value={membershipFunction(
                        row.committeeOneChoosenMembershipForApplicant
                      )}
                      aria-readonly
                      size="small"
                    />
                    {/* <FormControlLabel
                      control={<Radio />}
                      label={membershipFunction(
                        row.committeeOneChoosenMembershipForApplicant
                      )}
                      sx={{
                        marginLeft: "20px",
                      }}
                      checked
                    /> */}
                  </>
                )}
              </Grid>

              {/* ------------------------------------------------------------ committeee 1 status checking */}
              {row.committeeOneApproval === "accepted" && (
                <Stack
                  direction="row"
                  spacing={30}
                  sx={{ marginLeft: "5.5vw" }}
                >
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

              {row.committeeOneApproval === "rejected" && (
                <Stack
                  direction="row"
                  spacing={30}
                  sx={{ marginLeft: "5.5vw" }}
                >
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

              {row.committeeOneApproval === "waiting" && (
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

              {/* ====================committee 2 choosen membership ============================================================================================== */}

              <Grid item xs={12}>
                {row.committeeTwoChoosenMembershipForApplicant && (
                  <>
                    <Typography sx={{ fontFamily: "ProximaBold" }}>
                      {name2}
                      {` choosen membership: `}
                    </Typography>
                    <TextField
                      fullWidth
                      sx={{
                        backgroundColor: "#ffffff",
                        // fontFamily: "ProximaRegular",
                      }}
                      value={membershipFunction(
                        row.committeeTwoChoosenMembershipForApplicant
                      )}
                      aria-readonly
                      size="small"
                    />
                    {/* <FormControlLabel
                      control={<Radio />}
                      label={membershipFunction(
                        row.committeeTwoChoosenMembershipForApplicant
                      )}
                      sx={{
                        marginLeft: "20px",
                      }}
                      checked
                    /> */}
                  </>
                )}
              </Grid>

              {/* ------------------------------------------------------------ committeee2 status checking */}
              {row.committeeTwoApproval === "accepted" && (
                <Stack
                  direction="row"
                  spacing={30}
                  sx={{ marginLeft: "5.5vw" }}
                >
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

              {row.committeeTwoApproval === "rejected" && (
                <Stack
                  direction="row"
                  spacing={30}
                  sx={{ marginLeft: "5.5vw" }}
                >
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

              {row.committeeThreeApproval === "waiting" && (
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

              {/* ================committee 3 choosen membership================================================================================================== */}

              <Grid item xs={12}>
                {row.committeeThreeChoosenMembershipForApplicant && (
                  <>
                    <Typography sx={{ fontFamily: "ProximaBold" }}>
                      {name3}
                      {` choosen membership: `}
                    </Typography>
                    <TextField
                      fullWidth
                      sx={{
                        backgroundColor: "#ffffff",
                        // fontFamily: "ProximaRegular",
                      }}
                      value={membershipFunction(
                        row.committeeThreeChoosenMembershipForApplicant
                      )}
                      aria-readonly
                      size="small"
                    />
                    {/* <FormControlLabel
                        control={<Radio />}
                        label={membershipFunction(
                          row.committeeThreeChoosenMembershipForApplicant
                        )}
                        sx={{
                          marginLeft: "20px",
                        }}
                        checked
                      /> */}
                  </>
                )}
              </Grid>

              {/* ------------------------------------------------------------ committeee3 status checking */}
              {row.committeeThreeApproval === "accepted" && (
                <Stack
                  direction="row"
                  spacing={30}
                  sx={{ marginLeft: "5.5vw" }}
                >
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

              {row.committeeThreeApproval === "rejected" && (
                <Stack
                  direction="row"
                  spacing={30}
                  sx={{ marginLeft: "5.5vw" }}
                >
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

              {row.committeeThreeApproval === "waiting" && (
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

              {/* =========end end end end end end end========================================================================================================= */}
              {/* ------------------------------------- display President comments------------------------------------------------------------------------------------------ */}
              <Grid item xs={12}>
                {row.presidentChoosenMembershipForApplicant && (
                  <>
                    <Typography sx={{ fontFamily: "ProximaBold" }}>
                      President Choosenmembership
                    </Typography>
                    <TextField
                      fullWidth
                      sx={{
                        backgroundColor: "#ffffff",
                        // fontFamily: "ProximaRegular",
                      }}
                      value={membershipFunction(
                        row.presidentChoosenMembershipForApplicant
                      )}
                      aria-readonly
                      size="small"
                    />
                    {/* <FormControlLabel
                        control={<Radio />}
                        label={membershipFunction(
                          row.committeeThreeChoosenMembershipForApplicant
                        )}
                        sx={{
                          marginLeft: "20px",
                        }}
                        checked
                      /> */}
                  </>
                )}
              </Grid>

              <Grid item xs={12}>
                {row.presidentRemarksForApplicant && (
                  <>
                    <Typography sx={{ fontFamily: "ProximaBold" }}>
                      President Comments
                    </Typography>
                    <TextField
                      fullWidth
                      sx={{
                        backgroundColor: "#ffffff",
                        // fontFamily: "ProximaRegular",
                      }}
                      value={row.presidentRemarksForApplicant}
                      aria-readonly
                      size="small"
                    />
                    {/* <FormControlLabel
                        control={<Radio />}
                        label={membershipFunction(
                          row.committeeThreeChoosenMembershipForApplicant
                        )}
                        sx={{
                          marginLeft: "20px",
                        }}
                        checked
                      /> */}
                  </>
                )}
              </Grid>

              {/* {row.presidentRemarksForApplicant && (
                <>
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
                      value={row.presidentRemarksForApplicant}
                      aria-readonly
                      size="small"
                    />
                  </Grid> */}

              {/* ---------------------------------------------- display president status */}
              {row.presidentApproval === "accepted" && (
                <Stack
                  direction="row"
                  spacing={30}
                  sx={{ marginLeft: "5.5vw" }}
                >
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

              {row.presidentApproval === "rejected" && (
                <Stack
                  direction="row"
                  spacing={30}
                  sx={{ marginLeft: "5.5vw" }}
                >
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

              {row.presidentApproval === "waiting" && (
                <Stack
                  direction="row"
                  spacing={30}
                  sx={{ marginLeft: "5.5vw" }}
                >
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

              {/* ------------------enter president comments------------------------------------------------------ */}

              {!row.presidentRemarksForApplicant && (
                <>
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
                        size="small"
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
                            value="lifemember"
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
                </>
              )}
            </Grid>
            {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  marginRight: "100px",
                }}
              >
                <LoadingOverlay
                  active={loading}
                  spinner
                  text="Sending Email..."
                  spinnerStyle={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {null}
                </LoadingOverlay>
              </div>
            )}
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}

PresidentModal.propTypes = {
  row: PropTypes.func.isRequired,
  token: PropTypes.func.isRequired,
  name1: PropTypes.func.isRequired,
  name2: PropTypes.func.isRequired,
  name3: PropTypes.func.isRequired,
};
