console.log("script.js CONNECTED");

function getButtonState (clickedElement) {
  let buttonState = Boolean(Number(clickedElement.getAttribute('buttonState')));
  renderButtonColor(buttonState, clickedElement);
  return [buttonState, clickedElement];
}

function renderButtonColor (buttonState, clickedElement) {
  // Toggle Button State
  if (buttonState == true) {
    clickedElement.setAttribute('buttonState', 0);
  } else {
    clickedElement.setAttribute('buttonState', 1);
  }

  // Render Button Color
  if (buttonState) {
    clickedElement.style.background = "red";
  } else {
    clickedElement.style.background = "lime";
  }
}

function resetBackgroundStyle() {
  let elementsArray = document.getElementsByTagName("li");

  for (let i = 0; i < elementsArray.length; i++) {
    elementsArray[i].setAttribute('buttonState', 0);
    elementsArray[i].style.backgroundColor = "lightblue";
  }
}