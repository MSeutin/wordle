// game logic
import fiveLetterWords from "../data/fiveLetterWords";
import usableWords from "../data/usableWords";
import { getRandomCity } from "./cityImages";

export function getRandomWord() {
  return usableWords[Math.floor(Math.random() * usableWords.length)];
}

export function getGuessArea() {
  let board = Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => ({
      letter: "",
      backgroundColor: "white",
    })),
  );
  return board;
}

export function getVirtualKeyboard() {
  const keyRowTop = [
    { letter: "Q", bgcolor: "aliceblue" },
    { letter: "W", bgcolor: "aliceblue" },
    { letter: "E", bgcolor: "aliceblue" },
    { letter: "R", bgcolor: "aliceblue" },
    { letter: "T", bgcolor: "aliceblue" },
    { letter: "Y", bgcolor: "aliceblue" },
    { letter: "U", bgcolor: "aliceblue" },
    { letter: "I", bgcolor: "aliceblue" },
    { letter: "O", bgcolor: "aliceblue" },
    { letter: "P", bgcolor: "aliceblue" },
  ];
  const keyRowMiddle = [
    { letter: "A", bgcolor: "aliceblue" },
    { letter: "S", bgcolor: "aliceblue" },
    { letter: "D", bgcolor: "aliceblue" },
    { letter: "F", bgcolor: "aliceblue" },
    { letter: "G", bgcolor: "aliceblue" },
    { letter: "H", bgcolor: "aliceblue" },
    { letter: "J", bgcolor: "aliceblue" },
    { letter: "K", bgcolor: "aliceblue" },
    { letter: "L", bgcolor: "aliceblue" },
  ];
  const keyRowBottom = [
    { letter: "ENTER", bgcolor: "aliceblue" },
    { letter: "Z", bgcolor: "aliceblue" },
    { letter: "X", bgcolor: "aliceblue" },
    { letter: "C", bgcolor: "aliceblue" },
    { letter: "V", bgcolor: "aliceblue" },
    { letter: "B", bgcolor: "aliceblue" },
    { letter: "N", bgcolor: "aliceblue" },
    { letter: "M", bgcolor: "aliceblue" },
    { letter: "Del", bgcolor: "aliceblue" },
  ];
  const keyboard = [keyRowTop, keyRowMiddle, keyRowBottom];
  return keyboard;
}

// function to parse word after pressing enter
export function parseWord(word, wordChosen, parsedRow) {
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

// helper functions
export const isInWordList = (word) => {
  return fiveLetterWords.includes(word);
};

// get Initial State Function
export function getInitialState() {
  const currentCity = getRandomCity().src;
    return {
      guessArea: getGuessArea(),
      virtualKeyboard: getVirtualKeyboard(),
      rowIndex: 0,
      columnIndex: 0,
      wordFound: false,
      message: "",
      keepOpen: false,
      endGame: false,
      background: currentCity,
      wordChosen: getRandomWord(),
    };
}