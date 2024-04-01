## Introduction 
  I'm required to write a program that accepts two numbers to generate an array between them
## Expectations
For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].
## How to Use
1. Make sure you have node.js installed in your system
2. Navigate to the index.js file
3. Run the program by typing node index.js on the terminal
4. Follow the prompt to input the first number and the second number
## Implementation Details
The system uses prompt sync to prompt the user to input the details
If num1 is less than or equal to num2, it iterates from num1 to num2 and pushes each number into the array.
If num1 is greater than num2, it iterates from num1 to num2 in descending order and pushes each number into the array.
Finally, the function returns the array containing the range of numbers.
## Author
This number genarator program was created by Elvis Moses.


