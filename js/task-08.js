// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
const buttonEl = {
   inputEl: document.querySelector("#controls input"),
   makeBtn: document.querySelector("[data-action='render']"),
   removeBtn: document.querySelector("[data-action='destroy']"),
   boxes: document.querySelector("#boxes"),
};

buttonEl.makeBtn.addEventListener("click", getAmount);

  function getAmount() {
let amount = +buttonEl.inputEl.value;
 return createBoxes(amount);
}

function createBoxes(amount) {
   let firstBoxSize = 30;
   const fragment = document.createDocumentFragment();
     for (let i = 0; i < amount; i++) {
      let nextSize = firstBoxSize + i * 10;
      let random = Math.floor(Math.random() * 256);
      const box = document.createElement("div");
      box.style.cssText = `width: ${nextSize}px; height: ${nextSize}px; 
      background-color: rgb( ${random}, ${random}, ${random} );margin-bottom: 20px`;
      fragment.appendChild(box);
   }
  buttonEl.boxes.appendChild(fragment);
}

buttonEl.removeBtn.addEventListener("click", removeBoxes);


function removeBoxes() {
    buttonEl.boxes.innerHTML = '';
};