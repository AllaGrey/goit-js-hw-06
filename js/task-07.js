
const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

console.log(inputEl.value);
console.log(spanEl);

inputEl.addEventListener("input", (event) => {
  const inputFontSize = event.currentTarget.value;
  spanEl.style.fontSize = `${inputFontSize}px`;
});
