// updateJson.js

const fs = require('fs');
const path = require('path');

const inputFile = 'data.json';
const outputFile = 'modifiedData.json';

// Read the JSON file asynchronously
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${inputFile}: ${err.message}`);
        return;
    }

    try {
        // Parse JSON data
        const jsonData = JSON.parse(data);

        // Add 'updatedAt' property to each object with current date and time
        const modifiedData = jsonData.map(obj => ({
            ...obj,
            updatedAt: new Date().toISOString()
        }));

        // Convert modified data back to JSON string
        const modifiedJsonString = JSON.stringify(modifiedData, null, 2);

        // Write the modified JSON to output file
        fs.writeFile(outputFile, modifiedJsonString, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file ${outputFile}: ${err.message}`);
                return;
            }
            console.log(`Successfully updated and saved to ${outputFile}`);
        });

    } catch (error) {
        console.error(`Error parsing JSON in ${inputFile}: ${error.message}`);
    }
});
