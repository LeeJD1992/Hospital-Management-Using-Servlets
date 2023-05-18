const express = require('express');
const port = 3000;

const app = express();

// Parsing middleware
app.use(express.urlencoded({ extended: true }));

// Route for registering a new assistant
app.post('/CreateAssistant', (req, res) => {
    // Process form data
    const { name, email, phone, pwd } = req.body;

    // Perform any necessary operations with the form data
    // For example, you can store it in a file or perform other business logic

    // Redirect to a success page or any desired location
    res.redirect('/welcome.html');
});

// 404 error handling
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
});

// Server Listening
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
