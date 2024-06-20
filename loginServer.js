// loginServer.js

const http = require('http');
const { parse } = require('querystring');

// Sample user data (for demonstration purposes)
let users = [
    { username: 'alice', password: 'password1', email: 'alice@example.com' },
    { username: 'bob', password: 'password2', email: 'bob@example.com' }
];

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Handle POST requests to /login
    if (req.method === 'POST' && req.url === '/login') {
        handleLogin(req, res);
    }

    // Handle PUT requests to /update
    else if (req.method === 'PUT' && req.url === '/update') {
        handleUpdate(req, res);
    }

    // Handle DELETE requests to /delete
    else if (req.method === 'DELETE' && req.url === '/delete') {
        handleDelete(req, res);
    }

    // Handle other routes or methods
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found\n');
    }
});

// Function to handle login requests
function handleLogin(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        const { username, password } = parse(body);

        // Validate username and password
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Login Successful!\n');
        } else {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Login Failed: Invalid username or password.\n');
        }
    });
}

// Function to handle PUT requests to update user data
function handleUpdate(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        const { username, ...attributes } = parse(body);

        // Find the user by username
        const userIndex = users.findIndex(u => u.username === username);

        if (userIndex !== -1) {
            // Update user attributes
            Object.assign(users[userIndex], attributes);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Update Successful!\n');
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Operation Failed: User not found.\n');
        }
    });
}

// Function to handle DELETE requests to delete a user
function handleDelete(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        const { username } = parse(body);

        // Find the user by username
        const userIndex = users.findIndex(u => u.username === username);

        if (userIndex !== -1) {
            // Remove the user from the array
            users.splice(userIndex, 1);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Deletion Successful!\n');
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Operation Failed: User not found.\n');
        }
    });
}

// Define the port to listen on
const PORT = 3003;

// Start the server and listen on the defined port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
