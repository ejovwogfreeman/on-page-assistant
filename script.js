const assistant = document.getElementById("assistant");
const element1 = document.getElementById("element1");

// Create an array of button elements
const buttons = [];
for (let i = 1; i <= 10; i++) {
  buttons.push(document.getElementById(`button${i}`));
}

// Add event listeners to all buttons
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    moveAssistant(button, index + 1);
  });
});

element1.addEventListener("mouseover", () => {
  showExplanation(element1, "This is an example element.");
});

element1.addEventListener("mouseout", () => {
  hideExplanation();
});

function moveAssistant(targetElement, buttonNumber) {
  const targetRect = targetElement.getBoundingClientRect();
  assistant.style.left = `${targetRect.left}px`;
  assistant.style.top = `${targetRect.top}px`;
  assistant.textContent = `Button ${buttonNumber} clicked`;
  assistant.style.opacity = "1";
}

function showExplanation(element, text) {
  assistant.textContent = text;
  assistant.style.opacity = "1";
}

function hideExplanation() {
  assistant.textContent = "";
  assistant.style.opacity = "0";
}
