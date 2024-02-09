import Snackbar from "@mui/material/Snackbar";
import { useState, useEffect } from "react";

const MessageCenter = ({ message,  wordFound }) => {
  const [open, setOpen] = useState(false);
    useEffect(() => {
      // Open the Snackbar whenever there's a message
      if (message) {
        setOpen(true);
      }
      if (!wordFound && message) {
        const timer = setTimeout(() => {
          setOpen(false);
        }, 2000); // close after 2000 ms

        return () => clearTimeout(timer); // Cleanup timeout
      }
    }, [message, wordFound]);
  return (
    <Snackbar
      open={open}
      autoHideDuration={wordFound ? null : 2000} // Keep open indefinitely if wordFound, else auto-hide
      onClose={() => setOpen(false)} // Handle manual close
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      message={message}
    />
  );
};

export default MessageCenter;
