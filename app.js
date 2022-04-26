const buttons = document.querySelector(".buttons");

for (let i = 0; i < 10; i++) {
  const numButton = document.createElement("div");
  buttons.appendChild(numButton);
  numButton.textContent = i;
  numButton.classList.add("numButton");
}
