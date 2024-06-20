// calculator.js

// Function to perform addition
function add(num1, num2) {
    return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to perform multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error('Cannot divide by zero');
    }
    return num1 / num2;
}

// Extract operation and numbers from command line arguments
const args = process.argv.slice(2); // Exclude 'node' and 'calculator.js'

if (args.length < 3) {
    console.log('Usage: node calculator.js <operation> <num1> <num2>');
    console.log('Supported operations: add, subtract, multiply, divide');
    process.exit(1);
}

const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

// Validate numbers
if (isNaN(num1) || isNaN(num2)) {
    console.log('Invalid numbers provided.');
    process.exit(1);
}

// Perform the arithmetic operation based on the operation provided
let result;
try {
    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            console.log('Unsupported operation. Please use add, subtract, multiply, or divide.');
            process.exit(1);
    }
    console.log(`Output: ${result}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
