function display(num) {
    result.value+=num       //result.value=result.value+num
    
}

function Clear(){
    result.value=""
}
function del(){
    result.value=result.value.slice(0,-1)
}
function Calculate() {
    // currentExp=result.value
    // result.value=eval(currentExp)
    result.value=eval(result.value)
    
}