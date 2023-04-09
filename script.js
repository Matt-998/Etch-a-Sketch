let container = document.getElementById("container");

let input = 10;
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

let squares = document.querySelectorAll("div.square");

for (const square of squares) {
  square.addEventListener("mouseover", function () {
    this.style.backgroundColor = getRandomColour();
  });
}

const getRandomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const getRandomColour = () => {
  const h = getRandomNumber(360);
  const s = getRandomNumber(100);
  const l = getRandomNumber(100);
  return `hsl(${308}, ${s}%, ${l}%)`;
};
