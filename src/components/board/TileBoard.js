import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import TileRow from "./TileRow";
import { useContext } from "react";
import { AppContext } from "../../App";

function TileBoard() {
  const { guessArea } = useContext(AppContext);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      gap={1}
    >
      {guessArea.map((row, index) => (
        <TileRow key={index} row={row} />
      ))}
    </Grid>
  );
}
export default TileBoard;
