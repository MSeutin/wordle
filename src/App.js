import "./App.css";
import Header from "./components/header/Header";
import TileBoard from "./components/board/TileBoard";
import Keyboard from "./components/keyboard/Keyboard";
import MessageCenter from "./components/shared/MessageCenter";
import Box from "@mui/material/Box";
import { useState, useEffect} from "react";
import {
  parseWord,
  isInWordList,
  getInitialState
} from "./utils/gameLogic";
import updateKeyboardBg from "./utils/updateKeyboardBg";

function App() {
  const [state, setState] = useState(getInitialState);

  const startNewGame = () => {
    setState({ ...getInitialState() });
  };

  // grab current row
  const currentRow = state.guessArea[state.rowIndex];

  useEffect(() => {
    console.log("wordChosen: ", state.wordChosen);
  }, [state.wordChosen]);

  const getCurrentWord = () => {
    return currentRow
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
      if (prev.columnIndex === 0) return prev;
      const lastIndexToDelete = prev.columnIndex - 1;
      const newGuessArea = prev.guessArea.map((row, idx) => {
        if (idx === prev.rowIndex) {
          return row.map((tile, index) => {
            if (index === lastIndexToDelete) {
              return { ...tile, letter: "" };
            }
            return tile;
          });
        }
        return row;
      });

      return {
        ...prev,
        guessArea: newGuessArea,
        columnIndex: lastIndexToDelete,
      };
    });
  };

  // ****** Submit Word Function ****** //
  const submitWord = () => {
    const word = getCurrentWord();

    if (word.length < 5) {
      setState((prev) => ({ ...prev, message: "Not enough letters" }));
      return;
    } else if (!isInWordList(word)) {
      setState((prev) => ({ ...prev, message: "Not in word list" }));
      return;
    }

    setState((prev) => {
      const parsedRow = parseWord(word, prev.wordChosen, [...currentRow]);
      const newRowIndex = prev.rowIndex + 1;

      const updatedGuessArea = prev.guessArea.map((row, index) =>
        index === prev.rowIndex ? parsedRow : row
      );

      let newState = {
        ...prev,
        guessArea: updatedGuessArea,
      };

      // Directly calculate the new virtual keyboard based on newState
      const newVirtualKeyboard = updateKeyboardBg(parsedRow, newState);

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

  // ****** Add Letter Function ****** //
  const addLetter = (key) => {
    const filledLength = currentRow.filter((tile) => tile.letter !== "").length;

    // Check if the row is fully filled and set columnIndex to 5 for deletion logic
    if (filledLength === 5) {
      setState((prevState) => ({ ...prevState, columnIndex: 5 }));
      return;
    }

    // Prevent adding more letters if filledLength exceeds 4
    if (filledLength > 4) return;

    // Update the row with the new letter
    const updatedRow = [...currentRow];
    updatedRow[filledLength] = { ...updatedRow[filledLength], letter: key };

    // Update the guess area with the modified row
    const updatedGuessArea = state.guessArea.map((row, index) =>
      index === state.rowIndex ? updatedRow : row
    );

    // Update the state with the new row and increment columnIndex
    setState((prevState) => ({
      ...prevState,
      guessArea: updatedGuessArea,
      columnIndex: filledLength + 1, // Increment columnIndex for next input
    }));
  };

  return (
    <Box
      sx={{
        width: "100%", // Cover the entire width
        height: "100vh", // Cover the entire viewport height
        backgroundImage: `url(${state.background})`, // Use the state to dynamically change the background image
        backgroundSize: "cover", // Ensure the background covers the whole Box
        backgroundPosition: "center", // Center the background image
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between", // Push the content to the top and bottom
      }}
    >
      <Header startNewGame={startNewGame} />
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
