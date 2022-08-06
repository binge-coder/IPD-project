const myJsExpression = [];
const myVisibleExpression = [];

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
        
        // for jsexpressionlist
        myJsExpression.push(objButton.value);

        // document.calculation.JSoutputBox.value+=objButton.value;

    }
}

function clearPress(){
    // document.calculation.outputBox.value='';
    // document.calculation.JSoutputBox.value='';
    myJsExpression.length = 0;
    myVisibleExpression.length = 0;
    showVisible();
    // myJsExpression = []; not working idk why? maybe its making a new array without deleting the previous array ?
    
}

function evalFunc(){
    // document.calculation.outputBox.value=eval(document.calculation.outputBox.value)

    // replacing value of visible field with answer
    //  CHANGE THIS FJ;KKKJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ
    // document.calculation.outputBox.value=eval(document.calculation.JSoutputBox.value);

    // replacing value of invisible field with answer
    // document.calculation.JSoutputBox.value=eval(document.calculation.JSoutputBox.value);

    // get answer from parsing array

    var answerString = myJsExpression.join('');
    var answer = eval(answerString);
    myVisibleExpression.length = 0; //emptying  visible list
    myVisibleExpression.push(answer);
    showVisible();


    // The following steps are not needed, it works fine even if I don't do these and I don't know why it works even without the following steps
    myJsExpression.length = 0; //emptying list
    myJsExpression.push(answer);
}

function backSpace() {
    // // backspace for visible box
    // var mystringVisible = document.calculation.outputBox.value;
    // document.calculation.outputBox.value = mystringVisible.substring(0,(mystringVisible.length)-1);

    // // backspace for invisible box
    // var mystringInvisible = document.calculation.JSoutputBox.value;
    // document.calculation.JSoutputBox.value = mystringInvisible.substring(0,(mystringInvisible.length)-1);  

    myVisibleExpression.pop();
    myJsExpression.pop();
    showVisible();

}

// Legacy Code (when i was using <input> instead of buttons)
// UPDATE: USING IT AGAIN NOW
function appendVisible(objButton){
    if(objButton.value == '*')
    {
        // document.calculation.outputBox.value+='x';
        myVisibleExpression.push('x');

    }
    // else if(objButton.value == 'mod')
    // {
    //     document.calculation.outputBox.value+='%';

    // }
    else if(objButton.value == 'Math.sqrt(')
    {
        // document.calculation.outputBox.value+='\u221A('; //unicode for square root
        myVisibleExpression.push('\u221A(');

    }
    else if(objButton.value == 'Math.PI')
    {
        // document.calculation.outputBox.value+='\u03C0'; //unicode for pi
        myVisibleExpression.push('\u03C0');
    }
    else if(objButton.value == 'Math.log(')
    {
        myVisibleExpression.push('\u33D1(');
    }
    else
    {
        // document.calculation.outputBox.value+=objButton.value;
        myVisibleExpression.push(objButton.value);

    }

    showVisible();

}

function showVisible()
{
    var visibleString = myVisibleExpression.join('');
    document.calculation.outputBox.value = visibleString;
}