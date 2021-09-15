
"use strict";


// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"


// #validation-input {
      //   border: 3px solid #bdbdbd;
      // }

      // #validation-input.valid {
      //   border-color: #4caf50;
      // }

      // #validation-input.invalid {
      //   border-color: #f44336;
      // }


const inputVal = document.getElementById("validation-input");
const elLenght = inputVal.getAttribute("data-length");
const intElLenght = parseInt(elLenght)

inputVal.addEventListener("blur",onInputChangeBorder)

function onInputChangeBorder(event) {
    if (event.currentTarget.value.length === intElLenght) {
     inputVal.classList.remove("invalid");
      inputVal.classList.add("valid");
    }
   if (event.currentTarget.value.length === 0) {
    inputVal.classList.remove("valid");
    inputVal.classList.remove("invalid");
  }
   if (event.currentTarget.value.length !== intElLenght
      && event.currentTarget.value.length !== 0) {
    
      inputVal.classList.add("invalid"); 
 }  
};

