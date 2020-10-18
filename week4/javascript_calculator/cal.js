var readlineSync= require("readline-sync");

var firstNum = readlineSync.question("Enter the first number:");
var secondNum = readlineSync.question("Enter the first number:");
var selectedOperator = readlineSync.question("Would you like to: add/sub/mul/div? ");

function addTwoNumbers(num1, num2){
    return 'Addition Outcome = ' + (num1 + num2);
}

function subtractTwoNumbers(num1, num2){
    return "Subtraction Outcome" + (num1 - num2);
}

function multiplyTwoNumbers(num1, num2){
    return "Multiplication Outcome" + (num1 * num2);
}

function divideTwoNumbers(num1, num2){
    return "Division Outcome" + (num1 / num2);
}

if(selectedOperator == "add"){
    console.log(addTwoNumbers(firstNum, secondNum));
}
else if(selectedOperator == "sub"){
    console.log(subtractTwoNumbers(firstNum, secondNum));
}
else if(selectedOperator == "mul"){
    console.log(multiplyTwoNumbers(firstNum, secondNum));
}
else if(selectedOperator == "div"){
    console.log(divideTwoNumbers(firstNum, secondNum));
}
else if(selectedOperator == "quit"){
    console.log("Exited Calculator");
}