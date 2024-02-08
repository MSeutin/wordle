// game logic
import fiveLetterWords from "../data/fiveLetterWords";

export function getRandomWord() {
  return fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
}

export function createBoard() {
  let board = Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => ({
      letter: "",
      backgroundColor: "white",
    }))
  );
  return board;
}


// questions
// asynchronus states give issues somrtimes, so update w temp variable ok ?