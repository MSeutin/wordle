import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import TileRow from "./TileRow";

function TileBoard() {
  return (
    <Grid container justifyContent="center" alignItems="center" gap={1}>
      <TileRow />
      <TileRow />
      <TileRow />
      <TileRow />
      <TileRow />
      <TileRow />
    </Grid>
  );
}
export default TileBoard;
