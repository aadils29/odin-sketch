function generateGrid(sideLength) {
  const container = document.querySelector(".grid");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const cellSize = container.clientWidth / sideLength;

  for (let i = 0; i < sideLength * sideLength; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    container.appendChild(cell);
  }

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = getRandomColor();
    });
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("DOMContentLoaded", () => {
  generateGrid(16);
});

const newGridButton = document.querySelector("#reset");
newGridButton.addEventListener("click", () => {
  const newSideLength = prompt("Enter the new grid side length:");
  if (newSideLength > 100) {
    alert("The maximum side length is 100.");
    return;
  }
  generateGrid(newSideLength);
});
