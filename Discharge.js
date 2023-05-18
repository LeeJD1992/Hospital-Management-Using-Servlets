const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/Discharge', (req, res) => {
  const { pid, days, daycost, mc } = req.body;
  const mcs = mc.split(';');

  // Perform any necessary operations with the form data
  // For example, you can calculate the total cost based on the provided inputs

  // Simulate a successful response
  const total = 0; // Calculate the total cost based on the provided inputs

  res.status(200).send(`<h1>TOTAL MONEY TO PAY IS:<br><br><br></h1><h3>= ${total}</h3>`);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
