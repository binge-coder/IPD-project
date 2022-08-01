function lengthExceed(){
    if(document.calculation.outputBox.value.length > 23)
    {
        alert("can't show more than 23 characters");
        return true;
    }
    return false;    
}


function appendPress(objButton){  
    // alert(objButton.value);
    if(lengthExceed() == false){
        document.calculation.outputBox.value+=objButton.value;
    }
}

function clearPress(){
    document.calculation.outputBox.value='';
}

// onclick="document.calculation.output.value=eval(document.calculation.output.value)
function evalFunc(){
    document.calculation.outputBox.value=eval(document.calculation.outputBox.value)
}

function backSpace() {
    var mystring = document.calculation.outputBox.value;
    document.calculation.outputBox.value = mystring.substring(0,(mystring.length)-1);  
  }

// Legacy Code (when i was using <input> instead of buttons)
// function appendDifferent(objButton){
//     if(objButton.value == 'x')
//     {
//         document.calculation.outputBox.value+='*';
//     }
//     else if(objButton.value == 'mod')
//     {
//         document.calculation.outputBox.value+='%';

//     }
// }