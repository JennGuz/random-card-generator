/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};
let iconContainer = document.querySelector(".symbol");
let iconContainer2 = document.querySelector(".symbol2");
let icons = ["♥", "♦", "♠", "♣"];

let numberContainer = document.querySelector(".number");

window.changeCard = function changeCard() {
  let iconAleatorio = Math.floor(Math.random() * icons.length);
  let numberAleatorio = Math.floor(Math.random() * 13);

  iconContainer.innerHTML = icons[iconAleatorio];
  iconContainer2.innerHTML = icons[iconAleatorio];
  numberContainer.innerHTML = numberAleatorio;

  if (icons[iconAleatorio] === "♥") {
    iconContainer.style.color = "red";
    iconContainer2.style.color = "red";
    numberContainer.style.color = "red";
  } else if (
    icons[iconAleatorio] === "♦" ||
    icons[iconAleatorio] === "♠" ||
    icons[iconAleatorio] === "♣"
  ) {
    iconContainer.style.color = "black";
    iconContainer2.style.color = "black";
    numberContainer.style.color = "black";
  }

  iconContainer2.classList.add("reverse");
};
