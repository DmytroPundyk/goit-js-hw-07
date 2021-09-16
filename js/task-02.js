const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsContainerEL = document.querySelector("#ingredients");

const foodEl = ingredients.map(ingredient => {
   const listEL = document.createElement("li");
  listEL.textContent = ingredient;
  return listEL;
});
  ingredientsContainerEL.append(...foodEl);