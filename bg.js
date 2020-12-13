const body = document.querySelector("body");

function paintImage(fileNameInput) {
  body.style.backgroundImage = `url(./images/${fileNameInput})`;
}

function generateRandomNumber(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

function init() {
  const randomNumber = generateRandomNumber(1, 6);
  const fileName = "wallpaper" + randomNumber + ".jpg";
  paintImage(fileName);
}

init();
