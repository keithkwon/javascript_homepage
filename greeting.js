const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const nameplace = document.querySelector(".nameplace");

function showName(x) {
  nameplace.innerHTML = "Greetings! " + x;
  nameplace.classList.toggle("hide");
  input.classList.toggle("hide");
}

function submitName(event) {
  event.preventDefault();
  const name = input.value;
  localStorage.setItem("name", name);
  showName(name);
}

function askName() {
  form.addEventListener("submit", submitName);
}

function getName() {
  const name = localStorage.getItem("name");
  if (name) {
    showName(name);
  } else {
    askName();
  }
}

function init() {
  getName();
}

init();
