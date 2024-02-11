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
        { letter: "Q", bgcolor: "thistle" },
        { letter: "W", bgcolor: "thistle" },
        { letter: "E", bgcolor: "thistle" },
        { letter: "R", bgcolor: "thistle" },
        { letter: "T", bgcolor: "thistle" },
        { letter: "Y", bgcolor: "thistle"  },
        { letter: "U", bgcolor: "thistle"  },
        { letter: "I", bgcolor: "thistle"  },
        { letter: "O", bgcolor: "thistle"  },
        { letter: "P", bgcolor: "thistle" },
    ]
    const keyRowMiddle = [
        { letter: "A", bgcolor: "thistle"  },
        { letter: "S", bgcolor: "thistle"  },
        { letter: "D", bgcolor: "thistle"  },
        { letter: "F", bgcolor: "thistle"  },
        { letter: "G", bgcolor: "thistle"  },
        { letter: "H", bgcolor: "thistle"  },
        { letter: "J", bgcolor: "thistle"  },
        { letter: "K", bgcolor: "thistle"  },
        { letter: "L", bgcolor: "thistle"  },
    ]
    const keyRowBottom = [
        { letter: "ENTER", bgcolor: "thistle"  },
        { letter: "Z", bgcolor: "thistle"  },
        { letter: "X", bgcolor: "thistle"  },
        { letter: "C", bgcolor: "thistle"  },
        { letter: "V", bgcolor: "thistle"  },
        { letter: "B", bgcolor: "thistle"  },
        { letter: "N", bgcolor: "thistle"  },
        { letter: "M", bgcolor: "thistle"  },
        { letter: "Del", bgcolor: "thistle"  },
    ]
  const keyboard = [keyRowTop, keyRowMiddle, keyRowBottom];
  return keyboard;
}

// questions
// asynchronus states give issues somrtimes, so update w temp variable ok ?