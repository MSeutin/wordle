import "./App.css";
import Header from "./components/header/Header";
import TileBoard from "./components/board/TileBoard";
import Keyboard from "./components/keyboard/Keyboard";
import MessageCenter from "./components/shared/MessageCenter";
import Box from "@mui/material/Box";
import { useState, createContext } from "react";
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
  const [wordChosen, setWordChosen] = useState(getRandomWord());
  console.log(wordChosen);

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
    if (wordFound) {
      setMessage("You found the word!");
      return;
    }
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
      return;
    }
    if (!isInWordList(word)) {
      setMessage("Not in word list");
      return;
    }
    if (word === wordChosen) {
      let parsedRow = [...currentRow];
      parsedRow = parseWord(word, wordChosen, parsedRow);
      setCurrentRow(parsedRow);
      setMessage("You found the word!");
      setWordFound(true);
    } else {
      let parsedRow = [...currentRow];
      parsedRow = parseWord(word, wordChosen, parsedRow);
      setCurrentRow(parsedRow);
      let newRowIndex = rowIndex + 1;
      setRowIndex(newRowIndex);
      setColumnIndex(0);
      setCurrentRow(board[newRowIndex]);
    }
  };

  // HANDLE LETTER INPUT
  const handleLetterInput = (key) => {
    if (currentRow.filter((tile) => tile.letter !== "").length >= 5) {
      return;
    }
    let updateRow = [...currentRow];
    // Find the first empty tile in the current row
    const firstEmptyTileIndex = updateRow.findIndex(
      (tile) => tile.letter === ""
    );
    // Ensure there's an empty tile to update
    if (firstEmptyTileIndex !== -1) {
      updateRow[firstEmptyTileIndex] = {
        ...updateRow[firstEmptyTileIndex],
        letter: key,
      };
      setCurrentRow(updateRow);
      let newBoard = [...board];
      newBoard[rowIndex] = updateRow;
      setBoard(newBoard); // Update the board state with the new board
      // Update columnIndex to point to the next empty tile, or stay if the row is full
      setColumnIndex(
        firstEmptyTileIndex < 4 ? firstEmptyTileIndex + 1 : firstEmptyTileIndex
      );
    }
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
        bgcolor: "whitesmoke",
      }}
    >
      <Header />
      <AppContext.Provider value={{ board, setBoard, handleVirtualKeyPress }}>
        <TileBoard />
        <MessageCenter message={message}  wordFound={wordFound} />
        <Keyboard />
      </AppContext.Provider>
    </Box>
  );
}

export default App;

// function to parse word after pressing enter
function parseWord(word, wordChosen, parsedRow) {
  // Copy the chosen word to keep track of letters that have already been matched
  let remainingLetters = wordChosen.split("");

  // First pass: mark correct letters (green)
  for (let i = 0; i < word.length; i++) {
    if (word[i] === wordChosen[i]) {
      parsedRow[i].backgroundColor = "darkseagreen";
      // Remove matched letter to not count it again
      remainingLetters[i] = null;
    }
  }

  // Second pass: mark present but incorrectly positioned letters (yellow)
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== wordChosen[i] && remainingLetters.includes(word[i])) {
      parsedRow[i].backgroundColor = "burlywood";
      // Remove the letter from remainingLetters to avoid marking it again
      let indexToRemove = remainingLetters.indexOf(word[i]);
      if (indexToRemove !== -1) {
        remainingLetters[indexToRemove] = null;
      }
    }
    // If not green or yellow, it's gray
    if (parsedRow[i].backgroundColor === "white") {
      parsedRow[i].backgroundColor = "gainsboro";
    }
  }

  return parsedRow;
}
