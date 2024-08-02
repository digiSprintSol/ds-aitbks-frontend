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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
                <Typography id="modal-modal-description">DOB</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={4}>
                <Typography id="modal-modal-description">Mobile No.</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Email ID</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={2}>
                <Typography id="modal-modal-description">DOB</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={4}>
                <Typography id="modal-modal-description">Mobile No.</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Email ID</Typography>
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
                <Typography id="modal-modal-description">DOB</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={4}>
                <Typography id="modal-modal-description">Mobile No.</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Email ID</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  No. of Children
                </Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={7}>
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
              </Grid>
              <Grid item xs={7}>
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
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  Aadhar Card
                </Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">Voter ID</Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={7}>
                <Typography id="modal-modal-description">
                  Present Occupation
                </Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  Reference 01 (existing members)
                </Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={6}>
                <Typography id="modal-modal-description">
                  Reference 02 (referred by)
                </Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={12}>
                <Typography id="modal-modal-description">
                  Tell us about yourself
                </Typography>
                <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
              </Grid>
              <Grid item xs={12}>
                <Typography id="modal-modal-description">
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
              {/* <Grid item xs={4}>
                <FormControlLabel
                  value="end"
                  control={<Radio />}
                  label="Accepted"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  value="end"
                  control={<Radio />}
                  label="Rejected"
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
                  value="end"
                  control={<Radio />}
                  label="Waiting"
                />
              </Grid> */}
              {/* <Grid item xs={12}>
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
                  <TextField fullWidth sx={{ backgroundColor: "#ffffff" }} />
                </Grid>
                <Grid container spacing={1} justifyContent="center">
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="end"
                      control={<Radio />}
                      label="Trustee"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="end"
                      control={<Radio />}
                      label="Patron"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      value="end"
                      control={<Radio />}
                      label="Life Member"
                    />
                  </Grid>
                </Grid>
              </Grid> */}
              <DialogActions sx={{ margin: "50px auto" }}>
                <Button
                  variant="contained"
                  autoFocus
                  onClick={handleClose}
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
                  onClick={handleClose}
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
                  onClick={handleClose}
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
