/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Here i import global elements
let icons = document.querySelectorAll(".icons");
console.log(icons);
/*for (let i = 0; i < icons.length; i++) {
  console.log(icons[i].innerHTML);
  icons[i].innerHTML = "♥";
}
*/

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  setInterval(() => {
    changeValues(randomSuit());
  }, 1000 * 5);
};

//Here are the functions
let randomSuit = () => {
  let suitGroup = ["♦", "♥", "♠", "♣"];
  /*for (let iterator = 0; iterator < suitGroup.length; iterator++) {
    console.log(suitGroup[iterator]);
  }*/
  let randomIcon = Math.floor(Math.random() * suitGroup.length);
  let resultIcon = suitGroup[randomIcon];
  return resultIcon;
};

function changeValues(suitValue) {
  for (let iterator = 0; iterator < icons.length; iterator++) {
    if (suitValue == "♥" || "♦") {
      icons[iterator].innerHTML = suitValue;
      icons[iterator].classList.replace("text-dark", "text-danger");
    }
    icons[iterator].innerHTML = suitValue;
    icons[iterator].classList.replace("text-danger", "text-dark");
    console.log(suitValue);
  }
}
