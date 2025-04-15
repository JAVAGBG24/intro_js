// DOM elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

// initialize array
let userData = [];

getRandomUser();
getRandomUser();
getRandomUser();

// get random user
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");

  const data = await res.json();
  //console.log("DATA RESPONSE: " + JSON.stringify(data));

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
  // userData.push(newUser);
}

// helper function
function addData(obj) {
  userData.push(obj);

  updateDOM();
}

// double everyones money
function doubleMoney() {
  userData = userData.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  // uppdatera DOM
  updateDOM();
}

// sort by richest
function sortByRichest() {
  userData.sort((a, b) => b.money - a.money);

  // uppdatera DOM
  updateDOM();
}

let showingOnlyMillionaires = false;
// toggle millionaires
function showMillionaires() {
  showingOnlyMillionaires = !showingOnlyMillionaires;
  if (showingOnlyMillionaires) {
    const millionaires = userData.filter((user) => user.money > 1000000);
    updateDOM(millionaires);

    showMillionairesBtn.textContent = "Show All";
  } else {
    updateDOM();
    showMillionairesBtn.textContent = "Show Only Millionaires";
  }
}

// calculate entire wealth
function calculateWealth() {
  // calculate all users total money
  const wealth = userData.reduce((acc, user) => (acc += user.money), 0);

  // create new element to show total wealth
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;

  // append element
  main.appendChild(wealthEl);
}

// add a new user to the data array
//function addData(obj) {}

function updateDOM(providedData = userData) {
  // clear main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((person) => {
    // create new element for each person
    const element = document.createElement("div");

    // add a class to the div
    element.classList.add("person");
    element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(
      person.money
    )}`;

    // append to main element
    main.appendChild(element);
  });
}

function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// EVENT LISTENERS
addUserBtn.addEventListener("click", getRandomUser);

doubleBtn.addEventListener("click", doubleMoney);

sortBtn.addEventListener("click", sortByRichest);

showMillionairesBtn.addEventListener("click", showMillionaires);

calculateWealthBtn.addEventListener("click", calculateWealth);
