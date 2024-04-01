//Prompts users to input the first number and the last number
const prompt = require("prompt-sync")({ sigint: true });
const num1 = parseFloat(prompt("Input first number: "));
const num2 = parseFloat(prompt("Input second number: "));
//This function creates an array from the two numbers provided
function generateArray() {
    let array = [];//creates an empty array
    //If condition that allows the numbers to be generated in ascending order
    if (num1 <= num2) {for (let i = num1; i <= num2; i++) {array.push(i);} } 
    else {for (let i = num1; i >= num2; i--) {array.push(i);}}
    return array;
}
console.log(generateArray());