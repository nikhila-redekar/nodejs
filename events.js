// app.js
const express = require('express');
const app = express();
const PORT = 3013;

// Body parsing middleware
app.use(express.json());

// Sample data store (simulated database)
let events = [
    { id: 1, title: 'Event 1', date: '2024-07-01' },
    { id: 2, title: 'Event 2', date: '2024-07-15' },
];

// Routes
// GET all events
app.get('/events', (req, res) => {
    res.json(events);
});

// GET a single event by ID
app.get('/events/:id', (req, res) => {
    const eventId = parseInt(req.params.id);
    const event = events.find(event => event.id === eventId);
    if (!event) {
        return res.status(404).send('Event not found');
    }
    res.json(event);
});

// POST create a new event
app.post('/events', (req, res) => {
    const { title, date } = req.body;
    if (!title || !date) {
        return res.status(400).send('Title and date are required');
    }
    const newEvent = {
        id: events.length + 1,
        title: title,
        date: date
    };
    events.push(newEvent);
    res.status(201).json(newEvent);
});

// PUT update an event by ID
app.put('/events/:id', (req, res) => {
    const eventId = parseInt(req.params.id);
    const { title, date } = req.body;
    const eventToUpdate = events.find(event => event.id === eventId);
    if (!eventToUpdate) {
        return res.status(404).send('Event not found');
    }
    eventToUpdate.title = title ? title : eventToUpdate.title;
    eventToUpdate.date = date ? date : eventToUpdate.date;
    res.json(eventToUpdate);
});

// DELETE remove an event by ID
app.delete('/events/:id', (req, res) => {
    const eventId = parseInt(req.params.id);
    events = events.filter(event => event.id !== eventId);
    res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
