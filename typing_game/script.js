// variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");
const startBtn = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const instructionsContainer = document.getElementById("instructions-container");
const startDifficultySelect = document.getElementById("start-difficulty");

// 1. set difficulty and show instructions
// 2. get random word
// 3. add the word to dom to display
// 4. method to update the score
// 5. method to update the time
// 6. method for game over and restart
// 7. method to start the game
// 8. also need to check typed text against the word
// 9. eventlisteners for settings and start button

// array of words
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

// initialt värde på variabler
let randomWord;
let score = 0;
let time = 10;
let timeInterval;
let isPlaying = false;

// hämta sparade inställningar från localStorage
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// visa panelen med difficulty från start
settings.classList.remove("hide");

difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

if (startDifficultySelect) {
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";
}

// metod för att slumpa fram ett random ord
function getRandomWord() {
  const currentWord = randomWord;

  let newWord;
  do {
    newWord = words[Math.floor(Math.random() * words.length)];
  } while (newWord === currentWord && words.length > 1);

  return newWord;
}

// visa ordet på sidan
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// update score

// update time

// game over funktion

// startar spelet

// restart funktion

// EVENT LISTENERS

// toggle settings

// uppdatera difficulty

// lyssna på start
