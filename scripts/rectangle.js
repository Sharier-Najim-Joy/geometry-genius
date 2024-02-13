// rectangle calculate

function rectangleArea() {
    // get rectangle width value
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleTextWidth = rectangleWidth.value;
    const widthType = parseFloat(rectangleTextWidth);
    // get rectangle length value
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleTextLength = rectangleLength.value;
    const lengthType = parseFloat(rectangleTextLength);
    // calculate triangle area
    const sum = widthType * lengthType;
     // display rectangle area
     const rectangleArea = document.getElementById('rectangle-area');
     rectangleArea.innerText = sum;
    
}