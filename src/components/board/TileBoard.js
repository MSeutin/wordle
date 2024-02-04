import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import TileRow from "./TileRow";

function TileBoard({guess}) {
  return (
    <Grid container justifyContent="center" alignItems="center" gap={1}>
      <TileRow guess={"A"} />
      <TileRow guess={"B"} />
      <TileRow guess={"C"} />
      <TileRow />
      <TileRow />
      <TileRow />
    </Grid>
  );
}
export default TileBoard;
