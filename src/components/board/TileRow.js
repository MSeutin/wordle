import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Tile from "./Tile";

function TileRow({ row }) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={1}
      item
      xs={12}
    >
      {row.map((tile, index) => (
        <Tile
          key={index}
          letter={tile.letter}
          backgroundColor={tile.backgroundColor}
        />
      ))}
    </Grid>
  );
}
export default TileRow;
