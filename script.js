function appendPress(objButton){  
    // alert(objButton.value);
    document.calculation.outputBox.value+=objButton.value;
}

function clearPress(){
    document.calculation.outputBox.value='';
}

// onclick="document.calculation.output.value=eval(document.calculation.output.value)
function evalFunc(){
    document.calculation.outputBox.value=eval(document.calculation.outputBox.value)
}

function appendDifferent(objButton){
    if(objButton.value == 'x')
    {
        document.calculation.outputBox.value+='*';
    }
    else if(objButton.value == 'mod')
    {
        document.calculation.outputBox.value+='%';

    }
}