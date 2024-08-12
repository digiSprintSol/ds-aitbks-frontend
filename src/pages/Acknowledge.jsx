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

function Acknowledge({ row }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6ImFjY0BnbWFpbC5jb20iLCJ1c2VySWQiOiJhY2NvdW50YW50IiwidHlwZSI6ImFjYzEyMyIsImFjY2VzcyI6WyJBQ0NPVU5UQU5UIl0sImlhdCI6MTcyMzQ1OTE2MywiZXhwIjoxNzIzNDYyNzYzfQ.q0pLyv-ZOuFOD7V0HeaBqXOiyKmjkaSBc8KMYZhgvSM`;
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useCustomFetch({
    url: `http://localhost:1369/user/downloadPaymentReceipt/${row.userId}`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

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
            onClick={handleClose}
            style={{ backgroundColor: "#199369", color: "white" }}
          >
            Acknowlegde
          </Button>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "#F1C21B", color: "white" }}
          >
            Waiting
          </Button>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "#F3561F", color: "white" }}
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
};
