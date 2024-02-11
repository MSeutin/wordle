import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState, useEffect } from "react";

const MessageCenter = ({ message, keepOpen }) => {
  const [open, setOpen] = useState(false);
    useEffect(() => {
      // Open the Snackbar whenever there's a message
      if (message) {
        setOpen(true);
      }
      if (!keepOpen && message) {
        const timer = setTimeout(() => {
          setOpen(false);
        }, 2000); // close after 2000 ms

        return () => clearTimeout(timer); // Cleanup timeout
      }
    }, [message, keepOpen]);
  return (
    <Snackbar
      open={open}
      autoHideDuration={keepOpen ? null : 2000} // Keep open indefinitely if wordFound, else auto-hide
      onClose={() => setOpen(false)} // Handle manual close
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MessageCenter;
