window.onload = function () {
    var answer = document.getElementById('answer'),
    keypad = document.getElementById('keypad'),
    buttons = keypad.getElementsByTagName('button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            answer.value = answer.value + this.innerHTML;
            return false;
        };
    }
};

const add = function(a,b) {
    return a + b;
};
const subtract = function(a,b) {
    return a-b;
};
const multiply = function(a,b) {
    return a * b;
}
const divide = function(a,b) {
    return a/b;
}
function operate(num1,num2,operator) {
    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}