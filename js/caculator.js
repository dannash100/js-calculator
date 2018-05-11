// Proof of concept for calculating with multiple numbers.

var output = 0
var operands = [2,5,10,11];
var operators = ["plus", "plus", "plus"];


for (i=0; i < operators.length; i++) {
    var sum = operands[0] + operands[1];
    var removed = operands.splice(0, 2, sum);
    console.log(sum);
    console.log(operands);
    
}

return sum = output
console.log (sum)
console.log (output)


function clear () {
    
}