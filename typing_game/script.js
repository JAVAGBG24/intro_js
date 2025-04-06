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
