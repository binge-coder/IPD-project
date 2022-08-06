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
        // document.calculation.outputBox.value+=objButton.value;
        appendVisible(objButton);
        document.calculation.JSoutputBox.value+=objButton.value;
    }
}

function clearPress(){
    document.calculation.outputBox.value='';
    document.calculation.JSoutputBox.value='';
}

function evalFunc(){
    // document.calculation.outputBox.value=eval(document.calculation.outputBox.value)

    // replacing value of visible field with answer
    document.calculation.outputBox.value=eval(document.calculation.JSoutputBox.value) 

    // replacing value of invisible field with answer
    document.calculation.JSoutputBox.value=eval(document.calculation.JSoutputBox.value) 

}

function backSpace() {
    // backspace for visible box
    var mystringVisible = document.calculation.outputBox.value;
    document.calculation.outputBox.value = mystringVisible.substring(0,(mystringVisible.length)-1);

    // backspace for invisible box
    var mystringInvisible = document.calculation.JSoutputBox.value;
    document.calculation.JSoutputBox.value = mystringInvisible.substring(0,(mystringInvisible.length)-1);  
  }

// Legacy Code (when i was using <input> instead of buttons)
// UPDATE: USING IT AGAIN NOW
function appendVisible(objButton){
    if(objButton.value == '*')
    {
        document.calculation.outputBox.value+='x';
    }
    // else if(objButton.value == 'mod')
    // {
    //     document.calculation.outputBox.value+='%';

    // }
    else
    {
        document.calculation.outputBox.value+=objButton.value;
    }
}