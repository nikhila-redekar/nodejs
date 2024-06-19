// processadvanced.js

// Function to log memory usage details
function logMemoryUsage() {
    const memoryUsage = process.memoryUsage();
    console.log(`Memory Usage: { rss: ${memoryUsage.rss}, heapTotal: ${memoryUsage.heapTotal}, heapUsed: ${memoryUsage.heapUsed}, external: ${memoryUsage.external} }`);
}

// Set interval to log memory usage every 5 seconds
setInterval(() => {
    logMemoryUsage();
}, 5000);
