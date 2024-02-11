import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import KeyRow from "./KeyRow";

function Keyboard({ virtualKeyboard }) {
    const [keyRowTop, keyRowMiddle, keyRowBottom] = virtualKeyboard

    return <Grid container display="flex" direction="column" gap={0.5} sx={{marginBottom: 2}}>
        <KeyRow letterObjects={keyRowTop} />
        <KeyRow letterObjects={keyRowMiddle} />
        <KeyRow letterObjects={keyRowBottom} />
        </Grid>;
}
export default Keyboard;

