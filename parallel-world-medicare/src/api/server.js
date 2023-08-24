// server.js

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jsonServer = require('json-server');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Simulate a JSON database using json-server
const server = jsonServer.create();
const router = jsonServer.router('db.json');
server.use(router);


// Registration functions
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // add some other logic here to handle registration
    // For now, let's just send a success response
    res.status(201).send('Registration successful.');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // add some other logic here to handle login
    // For now, let's just send a success response
    res.status(200).send('Login successful.');
});


// Middleware to authenticate JWT
const authenticateJWT = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied.');

    try {
        const decoded = jwt.verify(token, '');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token.');
    }
};

// Protected route using JWT authentication
app.get('/protected-data', authenticateJWT, (req, res) => {
    res.send('Protected data.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
