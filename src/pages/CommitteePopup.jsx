/* eslint-disable no-nested-ternary */
import * as React from "react";
import {
  Dialog,
  Button,
  styled,
  Typography,
  IconButton,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Grid,
  TextField,
  Alert,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import LoadingOverlay from "react-loading-overlay";
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

export default function CommitteePopup({
  row,
  token,
  id,
  name1,
  name2,
  name3,
}) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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
    setData({ membership: e.target.value });
  };

  // React.useEffect(() => {
  //   if (data) {
  //     const message = document.getElementById("errordisplay");
  //     message.innerHTML = "message:";
  //     try {
  //       const exp = data.remarks.charCodeAt(0);
  //       if (!(exp >= 97 && exp <= 122)) {
  //         // eslint-disable-next-line no-throw-literal
  //         throw "enter only alphabets";
  //       }
  //     } catch (err) {
  //       message.innerHTML = "message:".concat(err);
  //     }
  //   }
  // }, [data]);

  const { REACT_APP_FAKE_API } = process.env;
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
      <Alert severity="success">Status updated...</Alert>;
      setOpen(false);
    } catch (err) {
      setLoading(false);
      // console.log(err);
    }
  };

  const acceptButton = () => {
    setLoading(true);
    setData({ ...data, ...accepted });
    // console.log(data, "llllllllllllll");
    // if (Object.keys(data).length === 3) {
    //   post();
    // }
    post({ ...data, ...accepted });
  };
  const rejectButton = () => {
    setLoading(true);
    setData({ ...data, ...rejected });
    // console.log(data, "llllllllllllll");
    // if (Object.keys(data).length === 3) {
    //   post();
    // }
    post({ ...data, ...rejected });
  };
  const waitButton = () => {
    setLoading(true);
    setData({ ...data, ...waiting });
    // console.log(data,"llllllllllllll");
    // if (Object.keys(data).length === 3) {
    //   post();
    // }
    post({ ...data, ...waiting });
  };

  const arr = [];
  arr.push(row.committeeMemberOneId);
  arr.push(row.committeeMemberTwoId);
  arr.push(row.committeeMemberThreeId);
  // console.log(id, arr, "fffff");
  // console.log(arr.includes(id), "fffff");

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
                  {`Father's Name`}
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
                  {`Mother's Name`}
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
              <Grid item xs={6}>
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
                  Caste Status
                </Typography>
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={row.casteStatus}
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
                {/* <FormControlLabel
                  control={<Radio />}
                  label={membershipFunction(row.applicantChoosenMembership)}
                  sx={{
                    marginLeft: "20px",
                  }}
                  checked
                /> */}
                <TextField
                  fullWidth
                  sx={{ backgroundColor: "#ffffff" }}
                  value={membershipFunction(row.applicantChoosenMembership)}
                  aria-readonly
                  size="small"
                />
              </Grid>
              {/* --------------------------------display c1 approvals and choosesn membership---------------------------------------------------------- */}
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
              {/* <Grid item xs={12}>
                {row.committeeOneRemarksForApplicant &&
                row.committeeOneApproval === true ? (
                  <h3>Committee 1 Status: Accepted</h3>
                ) : row.committeeOneRemarksForApplicant &&
                  row.committeeOneApproval === false ? (
                  <h3>Committee 1 Status: Rejected</h3>
                ) : (
                  <h3>{null}</h3>
                )}
              </Grid> */}

              {/* ----------------------display c2 approvals and choosesn membership---------------------------------------------------- */}

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
              {/* <Grid item xs={12}>
                {row.committexeTwoRemarksForApplicant &&
                row.committeeTwoApproval === true ? (
                  <h3>Committee 2 Status: Accepted</h3>
                ) : row.committeeTwoRemarksForApplicant &&
                  row.committeeTwoApproval === false ? (
                  <h3>Committee 2 Status: Rejected</h3>
                ) : (
                  <h3>{null}</h3>
                )}
              </Grid> */}

              {/* ---------------------display c3 approvals and choosesn membership----------------------------------------------------- */}

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
              {/* <Grid item xs={12}>
                {row.committeeThreeRemarksForApplicant &&
                row.committeeThreeApproval === true ? (
                  <h3>Committee 3 Status: Accepted</h3>
                ) : row.committeeThreeRemarksForApplicant &&
                  row.committeeThreeApproval === false ? (
                  <h3>Committee 3 Status: Rejected</h3>
                ) : (
                  <h3>{null}</h3>
                )}
              </Grid> */}

              {/* ---------------------------------------------------------------------------------- */}

              {!arr.includes(id) && (
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
                      }}
                    >
                      Choose Membership Type
                    </Typography>
                    {/* <TextField
                      fullWidth
                      sx={{ backgroundColor: "#ffffff" }}
                      onChange={changeHandler}
                      size="small"
                    />
                    <p id="errordisplay" style={{ color: "red" }}>
                      message:
                    </p> */}
                    <RadioGroup
                      row
                      name="applicantChoosenMembership"
                      onChange={changeHandler}
                      sx={{
                        marginTop: "2vw",
                        marginLeft: "21vw",
                      }}
                    >
                      <FormControlLabel
                        value="trustee"
                        control={<Radio />}
                        label="Trustee"
                      />
                      <FormControlLabel
                        value="patron"
                        control={<Radio />}
                        label="Patron"
                        sx={{
                          marginLeft: "20px",
                        }}
                      />
                      <FormControlLabel
                        value="lifemember"
                        control={<Radio />}
                        label="Life Membership"
                        sx={{
                          marginLeft: "20px",
                        }}
                      />
                    </RadioGroup>
                  </Grid>
                  <DialogActions sx={{ margin: "2vw 22vw" }}>
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
                </>
              )}
              {/* ---------------------------------------------------------------------------------------------- */}
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

CommitteePopup.propTypes = {
  row: PropTypes.func.isRequired,
  token: PropTypes.func.isRequired,
  id: PropTypes.func.isRequired,
  name1: PropTypes.func.isRequired,
  name2: PropTypes.func.isRequired,
  name3: PropTypes.func.isRequired,
};
