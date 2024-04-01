//This function calculates if a number is a prime number or not
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {if (num % i === 0) return false;}
    return true;
}

// Function to remove non-prime numbers from an array
function removeNonPrimes(arr) {return arr.filter(num => isPrime(num));}
// Main function
function main() {
    // Accepting user input
    const prompt = require("prompt-sync")({ sigint: true });
    const input = parseFloat(prompt("Enter numbers without using commas:"));
    // Splitting user input into an array
    let array = Array.from(String(input), Number);

    // Removing non-prime numbers
    const primeNumbers = removeNonPrimes(array);

    // Logging the array of prime numbers
    console.log("Prime numbers in the array:", primeNumbers);
}

// Calling the main function
main();