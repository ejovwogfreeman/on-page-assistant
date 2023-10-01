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
  clearAssistant(); // Clear previous content
  const targetRect = targetElement.getBoundingClientRect();
  assistant.style.left = `${targetRect.left}px`;
  assistant.style.top = `${targetRect.top}px`;

  // Create a new container for the image and text
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = "walking.gif";
  img.alt = "Walking Icon";

  // Append the image and text to the new container
  imgContainer.appendChild(img);
  imgContainer.appendChild(
    document.createTextNode(`Button ${buttonNumber} clicked`)
  );

  // Append the new container to the assistant
  assistant.appendChild(imgContainer);
  assistant.style.opacity = "1";
}

function showExplanation(element, text) {
  clearAssistant(); // Clear previous content
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  img.src = "walking.gif";
  img.alt = "Walking Icon";

  imgContainer.appendChild(img);
  imgContainer.appendChild(document.createTextNode(text));

  assistant.appendChild(imgContainer);
  assistant.style.opacity = "1";
}

function hideExplanation() {
  clearAssistant(); // Clear previous content
  assistant.style.opacity = "0";
}

function clearAssistant() {
  // Remove all child elements from the assistant
  while (assistant.firstChild) {
    assistant.removeChild(assistant.firstChild);
  }
}
