import './App.css';
import Header from './components/header/Header';
import TileBoard from './components/board/TileBoard';
import Keyboard from './components/keyboard/Keyboard';
import Box from "@mui/material/Box";
import { useState, useEffect, createContext } from "react";
import { createBoard } from "./utils/gameLogic";
import { getRandomWord } from './utils/gameLogic';
import fiveLetterWords from './data/fiveLetterWords';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(createBoard());
  const [rowIndex, setRowIndex] = useState(0);
  const [columnIndex, setColumnIndex] = useState(0);
  const [currentRow, setCurrentRow] = useState(board[0]);
  const [wordFound, setWordFound] = useState(false);
  
  // Get a random word for the game
  const wordOfTheDay = getRandomWord();

  const [word, setWord] = useState(wordOfTheDay);

  const isInWordList = (word) => {
    return fiveLetterWords.includes(word);
  }

  // function to handle the key press on virtual keyboard
  const handleVirtualKeyPress = (key) => {
    switch (key) {
      case "Del":
        handleDelete();
        break;
      case "ENTER":
        handleEnter();
        break;
      default:
        handleLetterInput(key);
    }
  }

  const handleDelete = () => {
    let updateRow = [...currentRow];
    updateRow[columnIndex] = { ...updateRow[columnIndex], letter: "" };
    setCurrentRow(updateRow);
    let newBoard = [...board];
    newBoard[rowIndex] = updateRow;
    setBoard(newBoard); // Update the board state with the new board
    let currentCol = columnIndex > 0 ? columnIndex - 1 : columnIndex;
    setColumnIndex(currentCol); // Move to the previous column
  }

  const handleEnter = () => {
    let word = currentRow.map((letter) => letter.letter).join("");
    if (isInWordList(word)) {
      setWordFound(true);
    } else {
      setWordFound(false);
    }
  }

  const handleLetterInput = (key) => {
    let updateRow = [...currentRow];
    updateRow[columnIndex] = { ...updateRow[columnIndex], letter: key };
    setCurrentRow(updateRow);
    let newBoard = [...board];
    newBoard[rowIndex] = updateRow;
    setBoard(newBoard); // Update the board state with the new board
    let currentCol = columnIndex < 4 ? columnIndex + 1 : columnIndex;
    setColumnIndex(currentCol); // Move to the next column
  }
  
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100vh",
      width: "100vw",
      gap: 1,
    }}>
          <Header />
        <AppContext.Provider value={{ board, setBoard, handleVirtualKeyPress }}>
          <TileBoard />
          <Keyboard />
        </AppContext.Provider>
    </Box>
  );
}

export default App;
