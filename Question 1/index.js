const prompt = require("prompt-sync")({ sigint: true });
// Accept user input
const userInput = prompt("Enter a string: ");
// Function to change the case of each character in the string
function changeCase(str) {
  return str.split('').map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}



// Call the function to swap case
const swappedString = changeCase(userInput);

// Output the swapped string
console.log(swappedString);