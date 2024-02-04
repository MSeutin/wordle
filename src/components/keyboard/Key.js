import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Button from "@mui/material/Button";

function Key({ letter }) {
  let width = letter === "ENTER" || letter === "Del" ? 65 : 43;
  const fontSize = letter === "ENTER" ? "subtitle2" : "h6";
  const letterKey = letter === "Del" ? <BackspaceIcon /> : letter;
  return (
    <Grid item>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: width,
          height: 58,
        }}
      >
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { width }, // Match the size of the Box
            height: 58,
            overflow: "hidden",
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
          >
            <Typography variant={fontSize} sx={{ fontWeight: "bold" }}>
              {letterKey}
            </Typography>
          </Button>
        </Paper>
      </Box>
    </Grid>
  );
}
export default Key;
