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
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// update time
function updateTime() {
  console.log(1);
  // 1 skrivs ut varje sekund
  console.log("TIME: " + time);

  // vi vill ta time och dra av ett
  time--;

  // sen uppdaterar vi time elementet
  timeEl.innerHTML = time + "s";

  // om vi bara hade sparat här så hade den gått över till negativt tal
  // och det vill vi inte, så vi behöver cleara när vi når 0
  if (time === 0) {
    clearInterval(timeInterval);

    // nu blir det också game over
    gameOver();
  }
}

// game over funktion
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out!</h1>
    <p>Your final score is ${score}</p>
    <button onClick="restartGame()">Play Again</button>`;

  endgameEl.style.display = "flex";
  isPlaying = false;
}

// startar spelet
function startGame() {
  // göm instructions
  if (instructionsContainer) {
    instructionsContainer.style.display = "none";
  }
  gameContainer.style.display = "block";

  // reseta alla variabler
  score = 0;
  scoreEl.innerHTML = "0";
  time = 10;
  timeEl.innerHTML = "s";

  // clear timeinterval
  if (timeInterval) {
    clearInterval(timeInterval);
  }

  // starta timeinterval
  timeInterval = setInterval(updateTime, 1000);

  // lägga till ord i DOM
  addWordToDOM();

  // fokusera på input direkt
  text.value = "";
  text.focus();

  isPlaying = true;

  // göm end game container
  endgameEl.style.display = "none";
}

// restart funktion
function restartGame() {
  endgameEl.style.display = "none";
  startGame();
}

// EVENT LISTENERS

// kolla input mot slumpade ordet från arrayen
text.addEventListener("input", function (event) {
  if (!isPlaying) return;

  const insertedText = event.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // clear input fält
    event.target.value = "";

    // hanter tiden baserat på difficulty
    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
});

// toggle settings
settingsBtn.addEventListener("click", function () {
  settings.classList.toggle("hide");

  if (!settings.classList.contains("hide") && !isPlaying) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// uppdatera difficulty
settingsForm.addEventListener("change", function (event) {
  difficulty = event.target.value;
  localStorage.setItem("difficulty", difficulty);

  if (startDifficultySelect && !isPlaying) {
    startDifficultySelect.value === difficulty;
  }
});

// lyssna på start
if (startBtn) {
  startBtn.addEventListener("click", function () {
    if (startDifficultySelect) {
      difficulty = startDifficultySelect.value;
      difficultySelect.value = difficulty;
      localStorage.setItem("difficulty", difficulty);
    }
    startGame();
  });
}
