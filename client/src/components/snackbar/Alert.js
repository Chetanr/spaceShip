import React from "react";
import { Alert, Snackbar } from "@mui/material";

export const NetworkErrorMessage = ({ showAlert, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={showAlert}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">
        Network error. Please try again later!
      </Alert>
    </Snackbar>
  );
};
