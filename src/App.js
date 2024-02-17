import "./App.css";
import Header from "./components/header/Header";
import TileBoard from "./components/board/TileBoard";
import Keyboard from "./components/keyboard/Keyboard";
import MessageCenter from "./components/shared/MessageCenter";
import Box from "@mui/material/Box";
import { useState, useEffect, createContext } from "react";
import {
  getGuessArea,
  getVirtualKeyboard,
  getRandomWord,
  parseWord,
  isInWordList,
} from "./utils/gameLogic";
import { defaultBg } from "./utils/backgroundFlags";

export const AppContext = createContext();

function App() {
  const initialState = {
    guessArea: getGuessArea(),
    virtualKeyboard: getVirtualKeyboard(),
    rowIndex: 0,
    columnIndex: 0,
    currentRow: getGuessArea()[0],
    wordFound: false,
    message: "",
    keepOpen: false,
    endGame: false,
    background: defaultBg,
    wordChosen: getRandomWord(),
  };

  const [state, setState] = useState(initialState);

  const startNewGame = () => {
    setState({ ...initialState, wordChosen: getRandomWord() });
  };

  const setBackground = (flag) => {
    setState({ ...state, background: flag });
  };

  useEffect(() => {
    console.log("wordChosen: ", state.wordChosen);
  }, [state.wordChosen]);

  const getCurrentWord = () => {
    return state.currentRow
      .map(({ letter }) => letter)
      .join("")
      .toLowerCase();
  };

  const handleKeyPress = (key) => {
    if (state.endGame) return;
    switch (key) {
      case "ENTER":
        submitWord();
        break;
      case "Del":
        deleteLastLetter();
        break;
      default:
        addLetter(key);
    }
  };

  // ****** Delete Last Letter Function ****** //
  const deleteLastLetter = () => {
    setState((prev) => {
      // Can't delete if there's nothing entered
      if (prev.columnIndex === 0) return prev;

      // Adjust for the fact columnIndex points to the next insertion spot
      const lastIndexToDelete = prev.columnIndex - 1;
      const updatedRow = prev.currentRow.map((tile, index) =>
        index === lastIndexToDelete ? { ...tile, letter: "" } : tile
      );

      const updatedGuessArea = prev.guessArea.map((row, idx) =>
        idx === prev.rowIndex ? updatedRow : row
      );

      return {
        ...prev,
        currentRow: updatedRow,
        guessArea: updatedGuessArea,
        columnIndex: lastIndexToDelete, // Adjust columnIndex after deletion
      };
    });
  };


  // ****** Submit Word Function ****** //
  const submitWord = () => {
    const word = getCurrentWord();

    if (word.length < 5) {
      setState((prev) => ({ ...prev, message: "Not enough letters" }));
      return;
    }

    if (!isInWordList(word)) {
      setState((prev) => ({ ...prev, message: "Not in word list" }));
      return;
    }

    setState((prev) => {
      const parsedRow = parseWord(word, prev.wordChosen, [...prev.currentRow]);
      const newRowIndex = prev.rowIndex + 1;

      const updatedGuessArea = prev.guessArea.map((row, index) =>
        index === prev.rowIndex ? parsedRow : row
      );

      let newState = {
        ...prev,
        guessArea: updatedGuessArea,
      };

      // Directly calculate the new virtual keyboard based on newState
      const newVirtualKeyboard = updateVirtualKeyboard(parsedRow, newState);

      if (word === prev.wordChosen) {
        newState = {
          ...newState,
          keepOpen: true,
          message: "You found the word!",
          wordFound: true,
          endGame: true,
          virtualKeyboard: newVirtualKeyboard,
        };
      } else if (newRowIndex < updatedGuessArea.length) {
        newState = {
          ...newState,
          currentRow: updatedGuessArea[newRowIndex],
          rowIndex: newRowIndex,
          columnIndex: 0,
          virtualKeyboard: newVirtualKeyboard, // Apply the new virtual keyboard here
        };
      } else {
        newState = {
          ...newState,
          keepOpen: true,
          message: "You didn't find the word!",
          endGame: true,
          virtualKeyboard: newVirtualKeyboard,
        };
      }

      return newState;
    });
  };

  const updateVirtualKeyboard = (parsedRow, currentState) => {
    // Directly map over currentState.virtualKeyboard to create a new virtual keyboard
    return currentState.virtualKeyboard.map((row) =>
      row.map((key) => {
        const foundRow = parsedRow.find(
          ({ letter }) => letter.toUpperCase() === key.letter
        );
        if (
          foundRow &&
          (key.bgcolor !== "darkseagreen" ||
            foundRow.backgroundColor === "darkseagreen")
        ) {
          return { ...key, bgcolor: foundRow.backgroundColor };
        }
        return key;
      })
    );
  };

  // ****** Add Letter Function ****** //
  const addLetter = (key) => {
    const filledLength = state.currentRow.filter(
      (tile) => tile.letter !== ""
    ).length;

    // Check if the row is fully filled and set columnIndex to 5 for deletion logic
    if (filledLength === 5) {
      setState((prevState) => ({ ...prevState, columnIndex: 5 }));
      return;
    }

    // Prevent adding more letters if filledLength exceeds 4
    if (filledLength > 4) return;

    // Update the row with the new letter
    const updatedRow = [...state.currentRow];
    updatedRow[filledLength] = { ...updatedRow[filledLength], letter: key };

    // Update the guess area with the modified row
    const updatedGuessArea = state.guessArea.map((row, index) =>
      index === state.rowIndex ? updatedRow : row
    );

    // Update the state with the new row and increment columnIndex
    setState((prevState) => ({
      ...prevState,
      guessArea: updatedGuessArea,
      currentRow: updatedRow,
      columnIndex: filledLength + 1, // Increment columnIndex for next input
    }));
  };


  return (
    <Box sx={state.background}>
      <Header setBackground={setBackground} startNewGame={startNewGame} />
      <TileBoard guessArea={state.guessArea} />
      <MessageCenter message={state.message} keepOpen={state.keepOpen} />
      <Keyboard
        virtualKeyboard={state.virtualKeyboard}
        handleKeyPress={handleKeyPress}
      />
    </Box>
  );
}

export default App;
