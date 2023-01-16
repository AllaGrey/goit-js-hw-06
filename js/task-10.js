function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і
// натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити,
// колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor
// для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// 1 достукатись до форми
// 2 достукатись до інпута
// 3 вивести значення інпута
// 4 написати функцію створення елементів
// 4.1 створити елемент * на значення інпута
// 4.2 властивості елемента за функцією
// 5 написати функцію видалення елементів * на значення інпута

const formEl = document.querySelector("#controls");
const createElementBtn = document.querySelector("[data-create]");
const destroyElementBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");

inputEl.addEventListener("input", (event) => {
  const counter = event.currentTarget.value;
  console.log(counter);
});

// createElementBtn.addEventListener("click", onCreateElementBtn) => {
//   return console.log("click");
// };

// function onCreateElementBtn(event) {
//   console.log('this is click')
// }

console.log(createElementBtn);
