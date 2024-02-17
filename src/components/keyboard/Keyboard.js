import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import KeyRow from "./KeyRow";

function Keyboard({ virtualKeyboard, handleKeyPress }) {
    const [keyRowTop, keyRowMiddle, keyRowBottom] = virtualKeyboard

    return (
      <Grid
        container
        display="flex"
        direction="column"
        gap={0.5}
        sx={{ marginBottom: 2 }}
      >
        <KeyRow
          letterObjects={keyRowTop}
          handleKeyPress={handleKeyPress}
        />
        <KeyRow
          letterObjects={keyRowMiddle}
          handleKeyPress={handleKeyPress}
        />
        <KeyRow
          letterObjects={keyRowBottom}
          handleKeyPress={handleKeyPress}
        />
      </Grid>
    );
}
export default Keyboard;

