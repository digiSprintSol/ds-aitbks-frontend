import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import useCustomFetch from "../Hooks/useCustomFetch";
import { postRequest } from "../HTTP_POST/api";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "80%",
    maxWidth: "none",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(12),
    backgroundColor: "#D4E9DA",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function Acknowledge({ row, token }) {
  const [open, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState({
    remarks: "string",
    membership: "string",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { REACT_APP_FAKE_API } = process.env;
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/downloadPaymentReceipt/${row.userId}`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  const post = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const result = await postRequest(
        `${REACT_APP_FAKE_API}/user/approval/${row.userId}`,
        info,
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
    setInfo({ ...info, statusOfApproval: action });
    if (Object.keys(info).length === 3) {
      post();
    }
  };

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <div>
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
        VIEW FULL DETAILS
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="lg"
      >
        <DialogTitle sx={{ m: "0px auto", p: 2 }} id="customized-dialog-title">
          Payment Receipt
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
        <DialogContent>
          <img
            src="file:///C:/documents/transcation/user123-TRANSCATION%20RECEPIT.png"
            loading="lazy"
            alt="receipt"
          />
          <Grid item xs={4}>
            <Typography id="modal-modal-description">Transaction ID</Typography>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#ffffff" }}
              value={row.paymentInfo.trasactionId}
              aria-readonly
            />
          </Grid>
        </DialogContent>
        <DialogActions sx={{ margin: "20px auto" }}>
          <Button
            style={{ backgroundColor: "#199369", color: "white" }}
            onClick={() => handleButtonClick("accepted")}
          >
            Acknowlegde
          </Button>
          <Button
            style={{ backgroundColor: "#F1C21B", color: "white" }}
            onClick={() => handleButtonClick("waiting")}
          >
            Waiting
          </Button>
          <Button
            style={{ backgroundColor: "#F3561F", color: "white" }}
            onClick={() => handleButtonClick("rejected")}
            autoFocus
          >
            Decline
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default Acknowledge;
Acknowledge.propTypes = {
  row: PropTypes.func.isRequired,
  token: PropTypes.func.isRequired,
};
