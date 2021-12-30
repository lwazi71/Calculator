const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const currentOperand = document.querySelector('.currentOperator');
const previousOperand = document.querySelector('.previousOperator');
const equalButton = document.querySelector('.equals-key');
const showResult = document.querySelector('.result');



 /*function displayValue () {
    var screen  = document.getElementById('display'),
        keypad  = document.getElementById('keypad'),
        buttons = keypad.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            screen.value =+ this.innerHTML;
        };
    }
}
*/
const displayValue = function (e) {
    const value = e.target.value;
    document.getElementById('display').value = value;
 }
 
 const allBtns = document.querySelectorAll('.myBtn');
 allBtns.forEach( element => {
     element.addEventListener('click', displayValue)
 })
 
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
