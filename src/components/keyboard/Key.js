import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { AppContext } from "../../App";

function Key({ letter, bgcolor, status }) {
  const { handleVirtualKeyPress } = useContext(AppContext);
  let width = letter === "ENTER" || letter === "Del" ? 65 : 43;
  const fontSize = letter === "ENTER" ? "subtitle2" : "h6";
  const letterKey =
    letter === "Del" ? (
      <BackspaceIcon style={{ verticalAlign: "middle" }} />
    ) : (
      letter
    );
  return (
    <Grid item>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: width,
          height: 56,
        }}
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { width }, // Match the size of the Box
            height: 56,
            overflow: "hidden",
            bgcolor: bgcolor,
          }}
          elevation={3}
        >
          <Button
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => handleVirtualKeyPress(letter)}
          >
            <Typography
              variant={fontSize}
              sx={{ fontWeight: "bold", color: "black" }}
            >
              {letterKey}
            </Typography>
          </Button>
        </Paper>
      </Box>
    </Grid>
  );
}
export default Key;
