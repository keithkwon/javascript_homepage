const clock = document.querySelector(".js-clock");
const clockTitle = clock.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const miliseconds = date.getMilliseconds();
  clockTitle.innerHTML = `${hours}:${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
