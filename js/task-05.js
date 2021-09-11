"use strict"

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.oninput = () => {
    if (input.value === "") {
       output.innerHTML = "незнакомец";
    } else {
    output.innerHTML = input.value;
    }
}