/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Here i import global elements
let icons = document.querySelectorAll(".icons");
let htmlNum = document.querySelector("#number");
let button = document.querySelector("#buttonCard");

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  setInterval(() => {
    changeValues(randomSuit());
    randomNum(htmlNum);
  }, 1000 * 10);
};

//Here are the functions

function randomNum(number) {
  let numArray = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    " Q",
    " K"
  ];

  let randoMizer = Math.floor(Math.random() * numArray.length);
  number.innerHTML = randoMizer;

  return number;
}

let randomSuit = () => {
  let suitGroup = ["♦", "♥", "♠", "♣"];
  let randomIcon = Math.floor(Math.random() * suitGroup.length);
  let resultIcon = suitGroup[randomIcon];
  return resultIcon;
};

function changeValues(suitValue, numberValue) {
  for (let iterator = 0; iterator < icons.length; iterator++) {
    if (suitValue == "♥" || "♦") {
      icons[iterator].innerHTML = suitValue;
      icons[iterator].classList.replace("text-dark", "text-danger");
    }
    if (suitValue == "♣") {
      icons[iterator].innerHTML = suitValue;
      icons[iterator].classList.replace("text-danger", "text-dark");
    }
    if (suitValue == "♠") {
      icons[iterator].innerHTML = suitValue;
      icons[iterator].classList.replace("text-dark", "text-danger");
    }
    if (suitValue == "♦") {
      icons[iterator].innerHTML = suitValue;
      icons[iterator].classList.replace("text-danger", "text-dark");
    }
  }
}

button.addEventListener("click", event => {
  changeValues(randomSuit());
  randomNum(htmlNum);
});
