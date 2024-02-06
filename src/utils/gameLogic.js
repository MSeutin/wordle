// game logic
import fiveLetterWords from "../data/fiveLetterWords";

export function getRandomWord() {
  return fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
}

export function createBoard() {
  let board = Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => ({
      letter: "",
      active: false,
      backgroundColor: "white",
    }))
  );
  return board;
}
