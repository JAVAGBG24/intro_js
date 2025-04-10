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

  //addData(newUser);
  userData.push(newUser);
}

// double everyones money
function doubleMoney() {
  userData = userData.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  // uppdatera DOM
}

// sort by richest
function sortByRichest() {
  userData.sort((a, b) => b.money - a.money);

  // uppdatera DOM
}

// toggle millionaires
function showMillionaires() {}

// calculate entire wealth
function calculateWealth() {}

// add a new user to the data array
function addData(obj) {}

function updateDOM(providedData = userData) {}

function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// EVENT LISTENERS
