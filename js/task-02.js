const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsContainerEL = document.querySelector("#ingredients");

const foodEl = ingredients.forEach(ingredient => {
   const listEL = document.createElement("li");
   listEL.textContent = ingredient;
   ingredientsContainerEL.append(listEL);
   
});