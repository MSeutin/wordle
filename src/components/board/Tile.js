import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function Tile({ keyPressed}) {
  return (
    <Grid item>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 52,
          height: 52,
        }}
      >
        <Paper           sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 52, // Match the size of the Box
            height: 52,
          }}
          elevation={3}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {keyPressed}
          </Typography>
        </Paper>
      </Box>
    </Grid>
  );
}
export default Tile;
