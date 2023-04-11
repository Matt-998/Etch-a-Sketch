let container = document.getElementById("container");
let slider = document.getElementById("range");
let sliderValue = document.getElementById("sliderValue");
let reset = document.getElementById("reset");
let black = document.getElementById("black");
let white = document.getElementById("white");
let cold = document.getElementById("cold");
let warm = document.getElementById("warm");

let grid = slider.value;
sliderValue.textContent = slider.value;
let colourSelect = "random";

slider.oninput = function () {
  sliderValue.textContent = this.value;
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
  colourSelect = "black";
  addColour();
});
white.addEventListener("click", function () {
  colourSelect = "white";
  addColour();
});

reset.addEventListener("click", function () {
  generateGrid(grid);
  addColour();
});
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
      } else if (colourSelect === "black") {
        square.style.backgroundColor = "black";
      } else {
        square.style.backgroundColor = "white";
      }
    });
  }
}

// function getRandomNumber(maxNum) {
//   return Math.floor(Math.random() * maxNum);
// }

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
