function pentagonCalculate (){
    const pentagonPerimeter = inputValue('pentagon-perimeter');
    const pentagonApothem = inputValue('pentagon-apothem');
    const total = Math.PI* pentagonPerimeter*pentagonApothem;
    setParallelogram('pentagon-area',total)
}