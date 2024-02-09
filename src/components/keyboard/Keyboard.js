import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import KeyRow from "./KeyRow";
import { useState } from "react";

function Keyboard() {
    const keyRowTop = [
        { letter: "Q", bgcolor: "lightgray", status: "inactive" },
        { letter: "W", bgcolor: "lightgray", status: "inactive" },
        { letter: "E", bgcolor: "lightgray", status: "inactive" },
        { letter: "R", bgcolor: "lightgray", status: "inactive" },
        { letter: "T", bgcolor: "lightgray", status: "inactive" },
        { letter: "Y", bgcolor: "lightgray", status: "inactive" },
        { letter: "U", bgcolor: "lightgray", status: "inactive" },
        { letter: "I", bgcolor: "lightgray", status: "inactive" },
        { letter: "O", bgcolor: "lightgray", status: "inactive" },
        { letter: "P", bgcolor: "lightgray", status: "inactive" },
    ]
    const keyRowMiddle = [
        { letter: "A", bgcolor: "lightgray", status: "inactive" },
        { letter: "S", bgcolor: "lightgray", status: "inactive" },
        { letter: "D", bgcolor: "lightgray", status: "inactive" },
        { letter: "F", bgcolor: "lightgray", status: "inactive" },
        { letter: "G", bgcolor: "lightgray", status: "inactive" },
        { letter: "H", bgcolor: "lightgray", status: "inactive" },
        { letter: "J", bgcolor: "lightgray", status: "inactive" },
        { letter: "K", bgcolor: "lightgray", status: "inactive" },
        { letter: "L", bgcolor: "lightgray", status: "inactive" },
    ]
    const keyRowBottom = [
        { letter: "ENTER", bgcolor: "lightgray", status: "inactive" },
        { letter: "Z", bgcolor: "lightgray", status: "inactive" },
        { letter: "X", bgcolor: "lightgray", status: "inactive" },
        { letter: "C", bgcolor: "lightgray", status: "inactive" },
        { letter: "V", bgcolor: "lightgray", status: "inactive" },
        { letter: "B", bgcolor: "lightgray", status: "inactive" },
        { letter: "N", bgcolor: "lightgray", status: "inactive" },
        { letter: "M", bgcolor: "lightgray", status: "inactive" },
        { letter: "Del", bgcolor: "lightgray", status: "inactive" },
    ]

    return <Grid container display="flex" direction="column" gap={0.5} sx={{marginBottom: 2}}>
        <KeyRow letterObjects={keyRowTop} />
        <KeyRow letterObjects={keyRowMiddle} />
        <KeyRow letterObjects={keyRowBottom} />
        </Grid>;
}
export default Keyboard;

