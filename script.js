const container = document.getElementById("gridContainer");
const slider = document.getElementById("range");
const sliderValue = document.getElementById("sliderValue");
const reset = document.getElementById("reset");
const black = document.getElementById("black");
const white = document.getElementById("white");
const cold = document.getElementById("cold");
const warm = document.getElementById("warm");
const buttonGroup = document.getElementById("buttonContainer");

let prevButton = null;
let grid = slider.value;
sliderValue.textContent = `GRID SIZE: ${slider.value}`;
let colourSelect = "random";

slider.oninput = function () {
  sliderValue.textContent = `GRID SIZE: ${this.value}`;
  grid = this.value;
  generateGrid(grid);
};

cold.addEventListener("click", function () {
  colourSelect = "cold";
  addColour();
});
warm.addEventListener("click", function () {
  colourSelect = "warm";
  addColour();
});
black.addEventListener("click", function () {
  colourSelect = "transparent";
  addColour();
});
white.addEventListener("click", function () {
  colourSelect = "#cccbcb";
  addColour();
});

reset.addEventListener("click", function () {
  generateGrid(grid);
  addColour();
});

buttonGroup.addEventListener("click", buttonSelected);

generateGrid(grid);

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function generateGrid(grid) {
  removeAllChildren(container);
  let output = grid * grid;
  for (let i = 0; i < output; i++) {
    if (i % grid === 0 && i != 0) {
      let lineBreak = document.createElement("div");
      lineBreak.classList.add("break");
      container.appendChild(lineBreak);
    }
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
  if (grid != "15") {
    slider.addEventListener("mouseup", addColour());
  } else {
    addColour();
  }
}

function addColour() {
  let squares = document.querySelectorAll("div.square");
  for (const square of squares) {
    square.addEventListener("mouseover", function () {
      if (colourSelect === "cold") {
        square.style.backgroundColor = getRandomColdColour();
      } else if (colourSelect === "warm") {
        square.style.backgroundColor = getRandomWarmColour();
      } else if (colourSelect === "transparent") {
        square.style.backgroundColor = "transparent";
      } else {
        square.style.backgroundColor = "#cccbcb";
      }
    });
  }
}

function buttonSelected(e) {
  if (e.target.nodeName === "BUTTON") {
    e.target.classList.add("buttonSelected");
    if (prevButton !== null) {
      prevButton.classList.remove("buttonSelected");
    }
    prevButton = e.target;
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColdColour() {
  const h = getRandomNumber(200, 210);
  const s = getRandomNumber(30, 100);
  const l = getRandomNumber(30, 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function getRandomWarmColour() {
  const h = getRandomNumber(0, 5);
  const s = getRandomNumber(30, 100);
  const l = getRandomNumber(30, 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}
