let container = document.getElementById("container");
let slider = document.getElementById("range");
let sliderValue = document.getElementById("sliderValue");
let reset = document.getElementById("reset");

sliderValue.textContent = slider.value;
slider.oninput = function () {
  sliderValue.textContent = this.value;
  generateGrid(this.value);
};
let grid = slider.value;

generateGrid(grid);
// Not working
reset.addEventListener("click", generateGrid(grid));

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function generateGrid(grid) {
  removeAllChildren(container);
  let input = grid;
  let output = input * input;
  for (let i = 0; i < output; i++) {
    if (i % input === 0) {
      let lbreak = document.createElement("div");
      lbreak.classList.add("break");
      container.appendChild(lbreak);
    }
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
  // Not working
  if (grid != "15") {
    slider.addEventListener("mouseup", addColour);
  } else {
    addColour;
  }
}
function addColour() {
  let squares = document.querySelectorAll("div.square");
  for (const square of squares) {
    square.addEventListener("mouseover", function () {
      this.style.backgroundColor = getRandomColour();
    });
  }
}

const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const getRandomColour = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${200}, ${s}%, ${l}%)`;
};
