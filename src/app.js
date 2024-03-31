/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  console.log(randomSuit());
};

function randomSuit() {
  let suitGroup = ["♦", "♥", "♠", "♣"];
  /*for (let iterator = 0; iterator < suitGroup.length; iterator++) {
    console.log(suitGroup[iterator]);
  }*/

  let randomIcon = Math.floor(Math.random() * suitGroup.length);
  return suitGroup[randomIcon];
}
