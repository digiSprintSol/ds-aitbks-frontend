import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

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

function Acknowledge() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
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
        <DialogContent>
          <p
            style={{
              backgroundColor: "white",
              padding: "25% ",
              textAlign: "center",
            }}
          >
            <img src="#" alt="Receipt_Image" />
          </p>

          <label htmlFor="input">
            Transaction ID
            <br />
            <input
              type="number"
              id="input"
              className="uploadeventinput"
              placeholder="ID No."
            />
          </label>
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
