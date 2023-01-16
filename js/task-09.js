const changeBodyStyle = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const changeColorSpanEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  changeBodyStyle.style.backgroundColor = newColor;

  changeColorSpanEl.textContent = newColor;
}
