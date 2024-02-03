import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Tile from "./Tile";

function TileRow() {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={1} item xs={12}>
          <Tile guess={"A"} />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
    </Grid>
  );
}
export default TileRow;
