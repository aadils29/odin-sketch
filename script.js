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

  const hoverColor = "red";
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = hoverColor;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateGrid(16);
});

const newGridButton = document.querySelector("#reset");
newGridButton.addEventListener("click", () => {
  const newSideLength = prompt("Enter the new grid side length:");
  generateGrid(newSideLength);
});
