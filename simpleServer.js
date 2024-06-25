//const http = require('http');

const express = require('express')


const server = http.createServer((req, res) => {
    // Set default status code and content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Handle different routes
    if (req.method === 'POST')
    {
    if (req.url === '/about') {
        res.end('About Us\n');
    } else if (req.url === '/contact') {
        res.end('Contact Us\n');
    } else {
        // Handle 404 - Not Found
        res.statusCode = 404;
        res.end('404 Not Found\n');
    }
}});



const PORT = 3013
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
