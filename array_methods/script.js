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
  console.log("DATA RESPONSE: " + JSON.stringify(data));

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

// toggle millionaires
function showMillionaires() {}

// calculate entire wealth
function calculateWealth() {}

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
