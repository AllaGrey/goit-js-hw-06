// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по
// кліку на button.change - color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const changeBodyStyle = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const changeColorSpanEl = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  changeBodyStyle.style.backgroundColor = newColor;

  changeColorSpanEl.textContent = newColor;
}
