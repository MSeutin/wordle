import { words } from "./word-list.js";

export default class CheckWord {
  // pass the word they ENTER
  constructor(word) {
    this.word = word;
  }

  // check word they ENTERED ag db
  isValidWord() {
    return words.includes(this.word);
  }

  // return the word they ENTERED
  getWord() {
    return this.word;
  }

  // compare WORD randomly generated with ENTERED WORD
  hasWon(randomWord) {
    return randomWord === this.word;
  }

  lettersInWrongPlace(randomWord) {
    // return array of letters in wrong place
    let arr = [];
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] != randomWord[i] && randomWord.includes(this.word[i])) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    console.log(arr);
    return arr;
  }

  lettersInRightPlace(randomWord) {
    // return array of letters in right place
    let arr = [];
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === randomWord[i]) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    console.log(arr);
    return arr;
  }
}
