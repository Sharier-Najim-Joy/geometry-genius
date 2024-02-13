function parallelogramBtn(){
 const base = inputValue('parallelogram-base')
 const height =inputValue('parallelogram-height')
 const total = base * height;
 setParallelogram('parallelogram-area',total)
}
// rhombus calculate
function rhombusBtn(){
    const d1 = inputValue('rhombus-d1');
    const d2 = inputValue('rhombus-d2');
    const total = 0.5*d1*d2;
    setParallelogram('rhombus-area',total)
    
}

function inputValue(input){
    const inputBase = document.getElementById(input);
    const inputBaseValue = inputBase.value;
    const inputBaseType =parseFloat(inputBaseValue);
    return inputBaseType;
    // console.log(inputBaseType);
}
function setParallelogram (setInput,area){
    const element = document.getElementById(setInput);
    element.innerText=area;
}
