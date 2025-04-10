// DOM elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

// initialize array
let data = [];

// get random user
async function getRandomUser() {}

// double everyones money
function doubleMoney() {}

// sort by richest
function sortByRichest() {}

// toggle millionaires
function showMillionaires() {}

// calculate entire wealth
function calculateWealth() {}

// add a new user to the data array
function addData(obj) {}

function updateDOM(providedData = data) {}

function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// EVENT LISTENERS
