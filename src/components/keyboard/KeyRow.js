import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Key from "./Key";

function KeyRow({ letters }) {
    
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      {letters.map((letter, index) => (
        <Grid item key={index}>
          <Key letter={letter} />
        </Grid>
      ))}
    </Grid>
  );
}
export default KeyRow;
