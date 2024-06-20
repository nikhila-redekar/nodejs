// uppercaseConverter.js

const fs = require('fs');

const inputFile = 'input.txt';
const outputFile = 'output.txt';

// Read the input file asynchronously
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${inputFile}: ${err.message}`);
        return;
    }

    // Convert content to uppercase
    const upperCaseContent = data.toUpperCase();

    // Write the converted content to the output file
    fs.writeFile(outputFile, upperCaseContent, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing file ${outputFile}: ${err.message}`);
            return;
        }
        console.log(`Successfully converted and saved to ${outputFile}`);
    });
});
