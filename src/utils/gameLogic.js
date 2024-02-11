// game logic
import fiveLetterWords from "../data/fiveLetterWords";

export function getRandomWord() {
  return fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
}

export function getGuessArea() {
  let board = Array.from({ length: 6 }, () =>
    Array.from({ length: 5 }, () => ({
      letter: "",
      backgroundColor: "white",
    }))
  );
  return board;
}

export function getVirtualKeyboard() {
  const keyRowTop = [
        { letter: "Q", bgcolor: "thistle", status: "inactive" },
        { letter: "W", bgcolor: "thistle", status: "inactive" },
        { letter: "E", bgcolor: "thistle", status: "inactive" },
        { letter: "R", bgcolor: "thistle", status: "inactive" },
        { letter: "T", bgcolor: "thistle", status: "inactive" },
        { letter: "Y", bgcolor: "thistle", status: "inactive" },
        { letter: "U", bgcolor: "thistle", status: "inactive" },
        { letter: "I", bgcolor: "thistle", status: "inactive" },
        { letter: "O", bgcolor: "thistle", status: "inactive" },
        { letter: "P", bgcolor: "thistle", status: "inactive" },
    ]
    const keyRowMiddle = [
        { letter: "A", bgcolor: "thistle", status: "inactive" },
        { letter: "S", bgcolor: "thistle", status: "inactive" },
        { letter: "D", bgcolor: "thistle", status: "inactive" },
        { letter: "F", bgcolor: "thistle", status: "inactive" },
        { letter: "G", bgcolor: "thistle", status: "inactive" },
        { letter: "H", bgcolor: "thistle", status: "inactive" },
        { letter: "J", bgcolor: "thistle", status: "inactive" },
        { letter: "K", bgcolor: "thistle", status: "inactive" },
        { letter: "L", bgcolor: "thistle", status: "inactive" },
    ]
    const keyRowBottom = [
        { letter: "ENTER", bgcolor: "thistle", status: "inactive" },
        { letter: "Z", bgcolor: "thistle", status: "inactive" },
        { letter: "X", bgcolor: "thistle", status: "inactive" },
        { letter: "C", bgcolor: "thistle", status: "inactive" },
        { letter: "V", bgcolor: "thistle", status: "inactive" },
        { letter: "B", bgcolor: "thistle", status: "inactive" },
        { letter: "N", bgcolor: "thistle", status: "inactive" },
        { letter: "M", bgcolor: "thistle", status: "inactive" },
        { letter: "Del", bgcolor: "thistle", status: "inactive" },
    ]
  const keyboard = [keyRowTop, keyRowMiddle, keyRowBottom];
  return keyboard;
}

// questions
// asynchronus states give issues somrtimes, so update w temp variable ok ?