const myButton = document.querySelector("my-button");

myButton.addEventListener("click", moveInput);

const myInput = document.querySelector("my-input");
let clicked = false;

function moveInput() {
  if (!clicked) {
    myInput.computedStyleMap.translate = "30px 40px";
    clicked = true;
  } else {
    myInput.style.translate = "0px 0px";
    clicked = false;
  }
}
