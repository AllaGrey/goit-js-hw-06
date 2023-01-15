// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
// перетягуючи повзунок, буде змінюватися розмір тексту.

const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

console.log(inputEl.value);
console.log(spanEl);

inputEl.addEventListener("input", (event) => {
  const inputFontSize = event.currentTarget.value;
  spanEl.style.fontSize = `${inputFontSize}px`;
});
