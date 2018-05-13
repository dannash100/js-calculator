document.addEventListener('DOMContentLoaded', null);

var output = ""
var operands = [];
var operators = [];


window.onload = function start() {

    var answer = document.getElementById("answer");

    document.getElementById("zero").addEventListener("click", function () {
        output += 0;
        answer.value = output;
    });
    document.getElementById("one").addEventListener("click", function () {
        output += 1;
        answer.value = output;
    });
    document.getElementById("two").addEventListener("click", function () {
        output += 2;
        answer.value = output;
    });
    document.getElementById("three").addEventListener("click", function () {
        output += 3;
        answer.value = output;
    });
    document.getElementById("four").addEventListener("click", function () {
        output += 4;
        answer.value = output;
    });
    document.getElementById("five").addEventListener("click", function () {
        output += 5;
        answer.value = output;
    });
    document.getElementById("six").addEventListener("click", function () {
        output += 6;
        answer.value = output;
    });
    document.getElementById("seven").addEventListener("click", function () {
        output += 7;
        answer.value = output;
    });
    document.getElementById("eight").addEventListener("click", function () {
        output += 8;
        answer.value = output;
    });
    document.getElementById("nine").addEventListener("click", function () {
        output += 9;
        answer.value = output;
    });
    document.getElementById("plus").addEventListener("click", function () {
        operands.push(Number(output));
        operators.push("plus");
        output = "";
        answer.value = output;
    });
    document.getElementById("minus").addEventListener("click", function () {
        operands.push(Number(output));
        operators.push("minus");
        output = "";
        answer.value = output;
    });
    document.getElementById("divide").addEventListener("click", function () {
        operands.push(Number(output));
        operators.push("divide");
        output = "";
        answer.value = output;
    });
    document.getElementById("times").addEventListener("click", function () {
        operands.push(Number(output));
        operators.push("times");
        output = "";
        answer.value = output;
    });
    document.getElementById("equals").addEventListener("click", function () {
        operands.push(Number(output));
        output = "";
        equate();
    });

    document.getElementById("cancel").addEventListener("click", function () {
        operands = []
        operators = []
        output = "";
        answer.value = output;
    });

    function equate() {
        for (i = 0; i < operators.length; i++) {
            switch (operators[i]) {
                case 'plus':
                    var sum = operands[0] + operands[1];
                    var removed = operands.splice(0, 2, sum);
                    break;
                case 'minus':
                    var sum = operands[0] - operands[1];
                    var removed = operands.splice(0, 2, sum);
                    break;
                case 'times':
                    var sum = operands[0] * operands[1];
                    var removed = operands.splice(0, 2, sum);
                    break;
                case 'divide':
                    var sum = operands[0] / operands[1];
                    var removed = operands.splice(0, 2, sum);
            }
        }
        output = sum;
        answer.value = output;
    }
}


