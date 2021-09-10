
const liEl = document.querySelectorAll(".item");
console.log(`В списке ${liEl.length} категории.`);

const categoryTotalArray = [...liEl]
  .map(
     element => `Категория: ${element.children[0].textContent},
Количество элементов: ${element.children[1].children.length}`
  )
console.log(categoryTotalArray.join("\n"));