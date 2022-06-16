import CheckWord from "./check-word.js";
import { words } from "./word-list.js";

// MODAL VARIABLES
let modal = document.querySelector(".modal");
let modalBtn = document.querySelector(".modal-content .close-btn");
let modalH1 = document.querySelector(".modal-h1");
let info = document.querySelector(".info");
let modalInfo = document.querySelector(".modal-how-to-play");
let modalInfoBtn = document.querySelector(".modal-how-to-play .close-btn");
let modalMS = document.querySelector(".initials");
let modalMichael = document.querySelector(".modal-michael");
let modalMichaelBtn = document.querySelector(".modal-michael-content .close-btn");

// OTHER VARIABLES
let body = document.documentElement;
let tile1 = document.querySelector(".tile1");
let tile2 = document.querySelector(".tile2");
let tile3 = document.querySelector(".tile3");
let tile4 = document.querySelector(".tile4");
let tile5 = document.querySelector(".tile5");
let keys = document.querySelectorAll(".key");
let word1 = document.querySelectorAll(".word1");
let word2 = document.querySelectorAll(".word2");
let word3 = document.querySelectorAll(".word3");
let word4 = document.querySelectorAll(".word4");
let word5 = document.querySelectorAll(".word5");
let word6 = document.querySelectorAll(".word6");
let enter = document.querySelector(".enter");
let returnKey = document.querySelector(".return");
let word = getRandomWord();
console.log(word);
let word_list = [word1, word2, word3, word4, word5, word6];
let word_list_index = 0;

// GET WORD to guess
function getRandomWord() {
  let randomIdx = Math.floor(Math.random() * words.length);
  return words[randomIdx];
}

// PHYSICAL KEYBOARD (letter keys) EVENT
body.addEventListener("keydown", type);

// HELPERS for PHYSICAL KEYBOARD (letter keys) EVENT
function type(event) {
  let letter = event.key;
  letter = letter.toUpperCase();
  for (let i = 0; i < word1.length; i++) {
    if (word_list[word_list_index][i].textContent === "") {
      if (event.which >= 65 && event.which <= 90) {
        word_list[word_list_index][i].textContent = letter;
        break;
      }
    }
  }
}

// PHYSICAL KEYBOARD (enter key) EVENT
body.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    enterKey();
  }
});

// PHYSICAL KEYBOARD (delete key) EVENT
body.addEventListener("keydown", (event) => {
  if (event.key == "Backspace") {
    deleteKey();
  }
});

// VIRTUAL KEYBOARD (letter keys) EVENT
keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    let letter = event.currentTarget.textContent;

    for (let i = 0; i < word1.length; i++) {
      if (word_list[word_list_index][i].textContent === "") {
        word_list[word_list_index][i].textContent = letter;
        break;
      }
    }
  });
});

// VIRTUAL KEYBOARD (return or delete key) EVENT
returnKey.addEventListener("click", deleteKey);

// HELPER FOR DELETE KEY (physical & virtual)
function deleteKey() {
  let word_pos = word_list_index + 1;
  let t1 = document.querySelector(`.word${word_pos}.tile1`);
  let t2 = document.querySelector(`.word${word_pos}.tile2`);
  let t3 = document.querySelector(`.word${word_pos}.tile3`);
  let t4 = document.querySelector(`.word${word_pos}.tile4`);
  let t5 = document.querySelector(`.word${word_pos}.tile5`);
  if (t5.textContent != "") {
    t5.textContent = "";
  } else if (t4.textContent != "") {
    t4.textContent = "";
  } else if (t3.textContent != "") {
    t3.textContent = "";
  } else if (t2.textContent != "") {
    t2.textContent = "";
  } else {
    t1.textContent = "";
  }
}

// VIRTUAL KEYBOARD (enter or validate key) EVENT
enter.addEventListener("click", enterKey);

// HELPER FOR ENTER KEY (physical & virtual)
function enterKey() {
    let word_pos = word_list_index + 1;
    let t1 = document.querySelector(`.word${word_pos}.tile1`);
    let t2 = document.querySelector(`.word${word_pos}.tile2`);
    let t3 = document.querySelector(`.word${word_pos}.tile3`);
    let t4 = document.querySelector(`.word${word_pos}.tile4`);
    let t5 = document.querySelector(`.word${word_pos}.tile5`);
  let letter1 = t1.textContent;
  let letter2 = t2.textContent;
  let letter3 = t3.textContent;
  let letter4 = t4.textContent;
  let letter5 = t5.textContent;
  let firstWord = letter1 + letter2 + letter3 + letter4 + letter5;
  firstWord = firstWord.toLowerCase();
  let wordInstance = new CheckWord(firstWord);
  let arrayWrongLetters = wordInstance.lettersInWrongPlace(word);
  let arrayRightLetters = wordInstance.lettersInRightPlace(word);
  if (firstWord === word) {
        word_list[word_list_index][0].classList.add("orange-tile");
        word_list[word_list_index][1].classList.add("orange-tile");
        word_list[word_list_index][2].classList.add("orange-tile");
        word_list[word_list_index][3].classList.add("orange-tile");
        word_list[word_list_index][4].classList.add("orange-tile");
    modalH1.textContent = "YOU WIN!"
    modal.classList.add("modal-show");
  }
  else if (!words.includes(firstWord)) {
    // WORD NOT IN DICTIONARY
    modalH1.textContent = "Word Not in Dictionary!";
    modal.classList.add("modal-show");
  } else if (
    // WORD IN DICTIONARY but NO LETTERS FOUND
    words.includes(firstWord) &&
    !arrayWrongLetters.includes(1) &&
    !arrayRightLetters.includes(1)
  ) {
    let l1 = word_list[word_list_index][0];
    let l2 = word_list[word_list_index][1];
    let l3 = word_list[word_list_index][2];  
    let l4 = word_list[word_list_index][3];  
    let l5 = word_list[word_list_index][4];  
    l1.classList.add("wrong-letter", "spin");
    l2.classList.add("wrong-letter", "spin");
    l3.classList.add("wrong-letter", "spin");
    l4.classList.add("wrong-letter", "spin");
    l5.classList.add("wrong-letter", "spin");
    let letter1 = l1.textContent.toLowerCase();
    let letter2 = l2.textContent.toLowerCase();
    let letter3 = l3.textContent.toLowerCase();
    let letter4 = l4.textContent.toLowerCase();
    let letter5 = l5.textContent.toLowerCase();
    document.querySelector(`.${letter1}`).classList.add("wrong-letter");
    document.querySelector(`.${letter2}`).classList.add("wrong-letter");
    document.querySelector(`.${letter3}`).classList.add("wrong-letter");
    document.querySelector(`.${letter4}`).classList.add("wrong-letter");
    document.querySelector(`.${letter5}`).classList.add("wrong-letter");
    word_list_index++;
  }
  else {
    // WORD IN DICTIONARY and some LETTER FOUND
    for (let i = 0; i < word_list[word_list_index].length; i++){
      if (arrayWrongLetters[i] != 1 && arrayRightLetters[i] != 1) {
        word_list[word_list_index][i].classList.add("wrong-letter", "spin");
        let l1 = word_list[word_list_index][i].textContent.toLowerCase();
        document.querySelector(`.${l1}`).classList.add("wrong-letter");

      }
      else if (arrayWrongLetters[i] === 1) {
        let letter = word_list[word_list_index][i].textContent.toLowerCase();
        word_list[word_list_index][i].classList.add("blue-tile", "spin");
        let l = document.querySelector(`.${letter}`);
        l.classList.add("blue-tile");
      }
      else {
        word_list[word_list_index][i].classList.add("orange-tile", "spin");
        let letter = word_list[word_list_index][i].textContent.toLowerCase();
        let l = document.querySelector(`.${letter}`);
        l.classList.add("orange-tile");
      }
    }
    word_list_index++;
    if (word_list_index > 5) {
          modalH1.textContent = word;
          modal.classList.add("modal-show");
    }
  }
}

// MODAL ClOSE EVENT
// close win / not in dictionary modal button
modalBtn.addEventListener("click", () => {
  modal.classList.remove("modal-show");
});

// close how to play modal button
modalInfoBtn.addEventListener("click", () => {
  modalInfo.classList.remove("modal-show");
});

// open modal on ? how to play
info.addEventListener("click", () => {
  modalInfo.classList.add("modal-show");
});

// Michael Modals
modalMS.addEventListener("click", () => {
  modalMichael.classList.add("show");
});

modalMichaelBtn.addEventListener("click", () => {
  modalMichael.classList.remove("show");
});