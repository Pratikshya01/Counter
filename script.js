let counter = 0;
const decreaseBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("incBtn");
const number = document.querySelector(".number");
function decreaseNumber() {
  counter = counter - 1;
  number.innerText = counter;
  if (counter < 0) {
    number.style.color = "red";
  } else if (counter > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
}
function resetNumber() {
  counter = 0;
  number.innerText = counter;
  if (counter < 0) {
    number.style.color = "red";
  } else if (counter > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
}
function increaseNumber() {
  counter = counter + 1;
  number.innerText = counter;
  if (counter < 0) {
    number.style.color = "red";
  } else if (counter > 0) {
    number.style.color = "green";
  } else {
    number.style.color = "black";
  }
}
