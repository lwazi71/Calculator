/** DOM Elements */
const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.getElementById('CE');
const deleteButton = document.getElementById('C');
const percentButton = document.getElementById('percent');
const equalButton = document.getElementById('equal');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const display = document.querySelectorAll('.display');
const show = document.querySelector("#show");
const backspaceButton = document.querySelector('.backspace');
/** State Variables */
let storedNumber = '';
let clickedOperator ='';
let firstNum = '';
let result = '';
/** Display Functions */
const displayValue = function (e) {
    const value = e.target.value;
    document.getElementById('show').value += value;
}
 numberButton.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += number.value;
        show.textContent = storedNumber;
    })
});
operatorButton.forEach((operator => {
    operator.addEventListener('click', function() {
       if(firstNum && storedNumber){
        displayResult()
    }
       if(storedNumber) firstNum = storedNumber;
       clickedOperator = operator.textContent;
       show.textContent = storedNumber + clickedOperator;
       storedNumber ='';
})
}));
function backSpace() {
    storedNumber = storedNumber.substr(0,storedNumber.length-1);
    firstNum = storedNumber;
    show.textContent = firstNum;
}
 function displayResult() {
    result = operate(parseFloat(firstNum), parseFloat(storedNumber), clickedOperator)
    show.textContent = result;
    show.textContent = firstNum  + storedNumber;
    storedNumber = result;
 }
 /**Operation Function */
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
    if(b === 0){
        return show.textContent = "No sir";
    }
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
        case "=":
            return num2;     
    }
}
/** Click Events */
 const numberButtons = document.querySelectorAll('.number');
 numberButtons.forEach (elemnet => {
     elemnet.addEventListener('click',displayValue);
 })
const allBtns = document.querySelectorAll('.myBtn');
 allBtns.forEach( element => {
     element.addEventListener('click', displayValue)
 })
backspaceButton.addEventListener('click',backSpace);

equalButton.addEventListener('click',() => {
    if(firstNum) {
        var rounded = Math.round(firstNum * 1000) / 1000;
        firstNum = rounded;
        show.textContent = firstNum;
    }
    show.textContent = firstNum;
    console.log(firstNum);
})
percentButton.addEventListener('click', ()=> {
    const curr = parseFloat(firstNum)
    firstNum = (curr/100);
    console.log(firstNum);
})
clearButton.addEventListener('click', () => {
    storedNumber ='';
    firstNum = "";
    document.getElementById('show').innerText ='Awaiting Orders';
})
deleteButton.addEventListener('click',() => {
    storedNumber = '';
    firstNum = "";
    document.getElementById('show').innerText= 0;
})
