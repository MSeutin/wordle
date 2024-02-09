import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Key from "./Key";

function KeyRow({ letterObjects }) {
  return (
    <Grid container display="flex" justifyContent="center" spacing={0.5}>
      {letterObjects.map((obj, index) => (
        <Grid item key={index}>
          <Key letter={obj.letter} bgcolor={obj.bgcolor} status={obj.status} />
        </Grid>
      ))}
    </Grid>
  );
}
export default KeyRow;
