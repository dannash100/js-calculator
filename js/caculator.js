document.addEventListener('DOMContentLoaded', null);

var output = 0
var operands = [2,5,10,11];
var operators = ["plus", "plus", "plus"];

window.onload = function start() {
    
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var plus = document.getElementById("plus");
    var minus = document.getElementById("minus");
    var divide = document.getElementById("divide");
    var times = document.getElementById("times");
    var equals = document.getElementById("equals");

    one.addEventListener("click", function () {
        alert("alert");
        
    });
}

/* 

var temp = '';
$("button").on('click', function() {
 	var val = $(this).text();

  // Got a number, add to temp
  if (!isNaN(val) || val === '.') {
    temp += val;
    $("#answer").val(temp.substring(0,10));
    
  // Got some symbol other than equals, add temp to our entries
  // then add our current symbol and clear temp
  } else if (val === 'AC') {
    entries = [];
    temp = '';
    total = 0;
    $("#answer").val('')


    */







//<input type="text" disabled="disabled" id="answer"/>    (output)
// Proof of concept for calculating with multiple numbers.
/*

var output = 0
var operands = [2,5,10,11];
var operators = ["plus", "plus", "plus"];

// 

for (i=0; i < operators.length; i++) {
    var sum = operands[0] + operands[1];
    var removed = operands.splice(0, 2, sum);
    
}

return sum = output


function clear () {
 output = "";
 operands = [];
 operators = [];
 sum = 0;   
}



// When user touches a operator- 1. add operator to array 2.convert string to number and push into operands. 3.Clear display 
//Number('123'); // returns 123  
*/