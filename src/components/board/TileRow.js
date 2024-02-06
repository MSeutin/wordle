import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Tile from "./Tile";

function TileRow({ row }) {
    // const [letter1, letter2, letter3, letter4, letter5] = row
    let letter1 = row[0].letter
    let letter2 = row[1].letter
    let letter3 = row[2].letter
    let letter4 = row[3].letter
    let letter5 = row[4].letter
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={1} item xs={12}>
          <Tile boardLetter={letter1} />
          <Tile boardLetter={letter2} />
          <Tile boardLetter={letter3} />
          <Tile boardLetter={letter4} />
          <Tile boardLetter={letter5} />
    </Grid>
  );
}
export default TileRow;
