import { WORDS } from "./words.js"

const AMT_OF_GUESSES = 6;
var remainingGuesses = AMT_OF_GUESSES;
var currentGuess = [];
var nextLetter = 0;
var correctString = WORDS[Math.floor(Math.random() * WORDS.length)];

// remove later
console.log(correctString);