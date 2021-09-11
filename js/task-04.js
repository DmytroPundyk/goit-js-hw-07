"use strict"

const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueEL = document.querySelector("#value");


let counterValue = 0;
const increment = () => {
   counterValue += 1;
   valueEL.textContent = counterValue;
};
const decrement = () => {
   counterValue -= 1;
   valueEL.textContent = counterValue;
};

incrementBtn.addEventListener("click", function () {
   increment();
});

decrementBtn.addEventListener("click", function () {
   decrement();
});
incrementBtn.setAttribute("style", "width:50px;height:50px;background-color:green");
decrementBtn.setAttribute("style","width:50px;height:50px;background-color:tomato")
