function backSpace() {
  var mystring = document.calculation.outputBox.value;
  document.calculation.outputBox.value = mystring.substring(0,(mystring.length)-1);  
}