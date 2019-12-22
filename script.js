console.log("script.js CONNECTED");

function resetBackgroundStyle() {
  let elementsArray = document.getElementsByTagName("li");

  for (let i = 0; i < elementsArray.length; i++) {
    elementsArray[i].style.backgroundColor = "lightblue";
  }
}

function toggleButtonColor(clickedElement) {
  // Add a temporary state attribute to clickedElement
  if (clickedElement.state == true) {
    clickedElement.state = false;
  } else {
    clickedElement.state = true;
  }

  var buttonState = clickedElement.state;
  console.log(buttonState);

  if (buttonState) {
    clickedElement.style.background = "lime";
  } else {
    clickedElement.style.background = "red";
  }
}
