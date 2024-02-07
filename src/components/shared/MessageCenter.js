import Snackbar from "@mui/material/Snackbar";

const MessageCenter = ({message, open}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      key={"bottom" + "center"}
      message={message}
    />
  );
};

export default MessageCenter;
