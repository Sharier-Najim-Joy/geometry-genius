function calculateTriangle() {
    // get triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const triangleText = triangleBase.value;
    const baseType = parseFloat(triangleText);
    // get triangle base value
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const heightType = parseFloat(triangleHeightText);

    // calculate triangle area
    const sum = 0.5 * baseType * heightType;
    

    // display triangle area
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = sum;
}

