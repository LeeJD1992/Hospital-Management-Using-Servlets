const express = require('express');
const moment = require('moment');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/createPatient', (req, res) => {
  const { name, email, phone, age, gender, blood, symptom, disease, doctor } = req.body;
  const visited = moment().format('YYYY-MM-DD');

  // Perform any necessary operations with the form data
  // For example, you can store it in a file or perform other business logic

  // Simulate a successful response
  res.status(200).send('<h1>SUCCESSFUL</h1>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
