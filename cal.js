const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.getElementById('CE');
const deleteButton = document.getElementById('C');
const percentButton = document.getElementById('percent');
const changeSign = document.getElementById('negpositive');
/*
const currentOperand = document.querySelector('.currentOperator');
const previousOperand = document.querySelector('.previousOperator');
*/
const equalButton = document.getElementById('equal');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const display = document.querySelectorAll('.display');
const show = document.querySelector("#show");

/*
currentOperand.textContent = '';
previousOperand.textContent = '';
*/
const displayValue = function (e) {
    const value = e.target.value;
    document.getElementById('show').value += value;
 }

 const numberButtons = document.querySelectorAll('.number');
 numberButtons.forEach (elemnet => {
     elemnet.addEventListener('click',displayValue);
 })


 const allBtns = document.querySelectorAll('.myBtn');
 allBtns.forEach( element => {
     element.addEventListener('click', displayValue)
 })
 const backspaceButton = document.querySelector('.backspace')
 backspaceButton.addEventListener('click',backspace);
/* numberButton.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        if(operator === '') {
            num1 += e.target.innerText;
            console.log(num1);
        } else{
            num2 += e.target.innrText;
            console.log(num2)
        }
    });
});
operatorButton.forEach(operatorButton => {
    operatorButton.addEventListener('click',e => {
       operatorButton = e.target.innerText;
       console.log(operatorButton)
    });
});
*/

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
        return 'No sir';
    }
    return a/b;
}
/*
const percent = function(a,b) {
    return(a/100 * b).toFixed(2)
}
const round = function(a,b){
    return Math.round(a,b*100)/100;
}
*/
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
let storedNumber = '';
let clickedOperator =''
let firstNum = '';
let result = '';
/*
currentOperand.textContent = 0;
*/


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
       /*
       console.log('FirstNumber' + firstNum + 'Stored' + storedNumber)
       console.log(clickedOperator);
       */
    })
}));
equalButton.addEventListener('click', () => {
    show.textContent = firstNum;
})
percentButton.addEventListener('click', ()=> {
    const curr = parseFloat(firstNum)
    firstNum= (curr/100) 
    console.log(firstNum);
})
clearButton.addEventListener('click', () => {
    storedNumber ='';
    document.getElementById('show').innerText ='';
})
deleteButton.addEventListener('click',() => {
    storedNumber = '';
    document.getElementById('show').innerText= 0;
})
function backspace() {
    var value = document.getElementById("show").innerText;
    document.getElementById("show").innerText= value = value.substr(0,value.length-1);
}

function displayResult() {
    result = operate(parseFloat(firstNum), parseFloat(storedNumber), clickedOperator)
    show.textContent = result;
    show.textContent = firstNum  + storedNumber;
    storedNumber = result;
}