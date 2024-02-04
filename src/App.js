import './App.css';
import Header from './components/header/Header';
import TileBoard from './components/board/TileBoard';
import Keyboard from './components/keyboard/Keyboard';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useState, useEffect } from "react";

function App() {
  const [keyPressed, setKeyPressed] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      setKeyPressed(event.key);
    });
  }, []);
  
  return (
    <Container maxWidth={false} disableGutters>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        style={{ minHeight: "100vh" }}
        spacing={2}
      >
        <Grid xs={12}>
          <Header />
        </Grid>
        <Grid xs={12}>
          <TileBoard keyPressed={keyPressed} />
        </Grid>
        <Grid xs={12}>
          <Keyboard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
