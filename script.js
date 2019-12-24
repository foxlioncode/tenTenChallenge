console.log("script.js CONNECTED");

// var buttonState = Boolean(Number(clickedElement.getAttribute('buttonState')));

function getButtonState (clickedElement) {
  let buttonState = Boolean(Number(clickedElement.getAttribute('buttonState')));
  console.log('buttonState', buttonState);
  console.log('clickedElement', clickedElement);
  renderButtonColor(buttonState, clickedElement);
  return [buttonState, clickedElement];
}

function renderButtonColor (buttonState, clickedElement) {
  
  // Render Button Color
  if (buttonState) {
    clickedElement.style.background = "lime";
  } else {
    clickedElement.style.background = "red";
  }

  // Toggle Button State
  if (buttonState == true) {
    clickedElement.setAttribute('buttonState', 0);
  } else {
    clickedElement.setAttribute('buttonState', 1);
  }
}

function resetBackgroundStyle() {
  let elementsArray = document.getElementsByTagName("li");

  for (let i = 0; i < elementsArray.length; i++) {
    elementsArray[i].setAttribute('buttonState', 1);
    elementsArray[i].style.backgroundColor = "lightblue";
  }
}

// function setButtonState (clickedElement) {
//   let getButtonStateObject = getButtonState(clickedElement);

//   if (getButtonStateObject[0] == true) {
//     clickedElement.setAttribute('buttonState', 0);
//   } else {
//     clickedElement.setAttribute('buttonState', 1);
//   }
// }

// renderButtonColor(getButtonState[0],getButtonState[1])

function toggleButtonColor(clickedElement) {

  let buttonState = getButtonState()
  // Add a temporary state attribute to clickedElement
  // if (clickedElement.state == true) {
    //   clickedElement.state = false;
    // } else {
      //   clickedElement.state = true;
      // }
      
      // var buttonState = clickedElement.state;

  // clickedElement.setAttribute('buttonState', !buttonState)
  // buttonState = Boolean(Number(clickedElement.getAttribute('buttonState')));

  // buttonState = !buttonState;
  // clickedElement.setAttribute('buttonState', !buttonState);

  buttonState = !buttonState;
  // console.log('buttonState', buttonState);

  // buttonState = clickedElement.setAttribute('buttonState', '1');

  // buttonState = !buttonState;
  // console.log(!buttonState);
  
  // buttonState = clickedElement.setAttribute('buttonState', !buttonState);
  
  if (buttonState) {
    clickedElement.style.background = "lime";
  } else {
    clickedElement.style.background = "red";
  }

}

// function resetBackgroundStyle() {
//   let elementsArray = document.getElementsByTagName("li");

//   for (let i = 0; i < elementsArray.length; i++) {
//     elementsArray[i].style.backgroundColor = "lightblue";
//   }
  
//   for (let i = 0; i < elementsArray.length; i++) {
//     elementsArray[i].setAttribute('buttonState', '0');
//   }

// }