console.log("script.js CONNECTED");

// body.requestFullscreen();

window.scrollTo(0,1);

function resetBackgroundStyle() {
    let elementsArray = document.getElementsByTagName('li');
    
    for (let i = 0; i < elementsArray.length; i++) {
        elementsArray[i].style.backgroundColor = 'lightblue';
    }
    
    // elementsArray.forEach(element => {
    //     element.style.backgroundColor = 'lightblue';
    // });
    // console.log(elementsArray);
}