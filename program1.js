// **Problem-1**: 
// Create num1 small calculator which performs operations 
// such as Addition, Subtraction, Multiplication and Division using class.
//     Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//     Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Importing the module
const readline = require("readline-sync");



class Calculator {
    constructor(num1, num2, operation) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
    }
    evaluate() {
        switch (this.operation) {
          case 'add':
            return this.num1 + this.num2;
          case 'sub':
            return this.num1 - this.num2;
          case 'mul':
            return this.num1 * this.num2;
          case 'div':
            return this.num1 / this.num2;
          default:
            return 'Error! No operation selected.';
        }
    }
}

// Enter the number
let num1 = Number(readline.question("Please enter num1: "));
let num2 = Number(readline.question("Please enter num1: "));
let operation = readline.question("Please enter operation (add, sub, mul, div): ");

const result = new Calculator(num1, num2, operation);

console.log(`\nThe result for ${operation} is: `, result.evaluate());
