const express = require('express');
const app = express();
const port = 3000;

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
  // Handle the POST request
  const { name, price, count } = req.body;
  
  // Do something with the data (e.g., log it)
  console.log('Received data:', { name, price, count });
  
  // Send a response
  res.status(200).send('SUCCESSFUL');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
