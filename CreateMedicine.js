const express = require('express');
const app = express();

// Set CORS headers to allow cross-domain requests from anywhere
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.options('*', (req, res) => {
    res.sendStatus(200);
});

app.post('/', (req, res) => {
    const { name, price, count } = req.body;

    // Perform any necessary operations with the form data
    // For example, you can store it in a file or perform other business logic

    // Simulate a successful response
    res.status(200).send('SUCCESSFUL');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
