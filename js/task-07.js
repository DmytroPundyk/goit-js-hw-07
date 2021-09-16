

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const controlSizeFont = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

controlSizeFont.addEventListener("input",controlFont)

function controlFont(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
};