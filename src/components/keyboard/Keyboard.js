import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import KeyRow from "./KeyRow";
import { useState } from "react";

function Keyboard() {
    const keyRowTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyRowMiddle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keyRowBottom = ["ENTER","Z", "X", "C", "V", "B", "N", "M", "Del"];
    return <Grid container display="flex" direction="column" gap={0}>
        <KeyRow letters={keyRowTop} />
        <KeyRow letters={keyRowMiddle} />
        <KeyRow letters={keyRowBottom} />
        </Grid>;
}
export default Keyboard;

