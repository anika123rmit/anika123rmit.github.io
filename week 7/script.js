const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

let myNewHeading = "audio is currently playing";

const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  airportAudio.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

myNewHeading = "Audio is currently paused";
function pauseAudio() {
  airportAudio.pause();
  topHeading.textContent = myNewHeading;
}

const popButton = document.querySelector("#pause-button");
console.log(popButton);

const popAudio = document.querySelector("#airport-audio");
console.log(popSound);

popButton.addEventListener("click", popAudio);

myNewHeading = "Audio is currently paused";
function popAudio() {
  popSound.play();
  topHeading.textContent = myNewHeading;
}

// airportAudio.play();
