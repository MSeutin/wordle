import "./App.css";
import Header from "./components/header/Header";
import TileBoard from "./components/board/TileBoard";
import Keyboard from "./components/keyboard/Keyboard";
import MessageCenter from "./components/shared/MessageCenter";
import Box from "@mui/material/Box";
import { useState, useEffect, createContext } from "react";
import { createBoard } from "./utils/gameLogic";
import { getRandomWord } from "./utils/gameLogic";
import fiveLetterWords from "./data/fiveLetterWords";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(createBoard());
  const [rowIndex, setRowIndex] = useState(0);
  const [columnIndex, setColumnIndex] = useState(0);
  const [currentRow, setCurrentRow] = useState(board[0]);
  const [wordFound, setWordFound] = useState(false);
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);


    useEffect(() => {
      if (openSnackbar) {
        const timer = setTimeout(() => {
          setOpenSnackbar(false); // Close the Snackbar
        }, 2000); // Adjust duration if needed

        return () => clearTimeout(timer);
      }
    }, [openSnackbar]);
  // Get a random word for the game
  const wordOfTheDay = getRandomWord();

  const [word, setWord] = useState(wordOfTheDay);

  // helper functions
  const isInWordList = (word) => {
    return fiveLetterWords.includes(word);
  };

  const getCurrentWord = () => {
    return currentRow
      .map(({ letter }) => letter)
      .join("")
      .toLowerCase();
  };

  // *** VIRTUAL KEYBOARD HANDLERS ***
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
  };

  // HANDLE DELETE
  const handleDelete = () => {
    let updateRow = [...currentRow];
    updateRow[columnIndex] = { ...updateRow[columnIndex], letter: "" };
    setCurrentRow(updateRow);
    let newBoard = [...board];
    newBoard[rowIndex] = updateRow;
    setBoard(newBoard); // Update the board state with the new board
    let currentCol = columnIndex > 0 ? columnIndex - 1 : columnIndex;
    setColumnIndex(currentCol); // Move to the previous column
  };

// HANDLE ENTER
  const handleEnter = () => {
    let word = getCurrentWord();
    if (word.length < 5) {
      setMessage("Not enough letters");
      setOpenSnackbar(true);
      return;
    }
    if (!isInWordList(word)) {
      setMessage("Not in word list");
      setOpenSnackbar(true);
      return;
    }
    if (word === wordOfTheDay) {
      setWordFound(true);
    } else {
      // process the word
      // assign grey, yellow and green letters
      // lock the row and move to the next row
      let newRowIndex = rowIndex + 1;
      setRowIndex(newRowIndex);
      setColumnIndex(0);
      setCurrentRow(board[newRowIndex]);
    }
  };

  // HANDLE LETTER INPUT
  const handleLetterInput = (key) => {
    let updateRow = [...currentRow];
    updateRow[columnIndex] = { ...updateRow[columnIndex], letter: key };
    setCurrentRow(updateRow);
    let newBoard = [...board];
    newBoard[rowIndex] = updateRow;
    setBoard(newBoard); // Update the board state with the new board
    let currentCol = columnIndex < 5 ? columnIndex + 1 : columnIndex;
    setColumnIndex(currentCol); // Move to the next column
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        width: "100vw",
        gap: 1,
      }}
    >
      <Header />
      <AppContext.Provider value={{ board, setBoard, handleVirtualKeyPress }}>
        <TileBoard />
        <MessageCenter message={message} open={openSnackbar} />
        <Keyboard />
      </AppContext.Provider>
    </Box>
  );
}

export default App;
