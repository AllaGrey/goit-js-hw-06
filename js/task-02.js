const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsEl = document.querySelector("#ingredients");

const createItem = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add(".item");
  ingredientItem.textContent = ingredient;

  return ingredientItem;
});

ingredientsEl.append(...createItem);

console.log(ingredientsEl);
