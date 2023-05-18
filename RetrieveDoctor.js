const express = require('express');
const app = express();

const port = 3000;

app.get('/doctors', (req, res) => {
  try {
    // Perform your logic here to retrieve doctors data
    // Example data (replace with your own logic)
    const doctors = [
      {
        did: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
        age: 35,
        joindate: '2023-05-01',
        salary: 5000,
        specialist: 'Cardiology',
        patients: 10
      },
      {
        did: 2,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        phone: '9876543210',
        age: 42,
        joindate: '2023-04-15',
        salary: 6000,
        specialist: 'Orthopedics',
        patients: 8
      }
      // Add more doctors as needed
    ];

    let tableHtml = '<table><tr>';
    tableHtml += '<th>Doctor ID</th>';
    tableHtml += '<th>Name</th>';
    tableHtml += '<th>Email</th>';
    tableHtml += '<th>Phone</th>';
    tableHtml += '<th>Age</th>';
    tableHtml += '<th>Join Date</th>';
    tableHtml += '<th>Salary</th>';
    tableHtml += '<th>Specialist</th>';
    tableHtml += '<th>Patients Under</th>';
    tableHtml += '</tr>';

    for (const doctor of doctors) {
      tableHtml += '<tr>';
      tableHtml += `<td>${doctor.did}</td>`;
      tableHtml += `<td>${doctor.name}</td>`;
      tableHtml += `<td>${doctor.email}</td>`;
      tableHtml += `<td>${doctor.phone}</td>`;
      tableHtml += `<td>${doctor.age}</td>`;
      tableHtml += `<td>${doctor.joindate}</td>`;
      tableHtml += `<td>${doctor.salary}</td>`;
      tableHtml += `<td>${doctor.specialist}</td>`;
      tableHtml += `<td>${doctor.patients}</td>`;
      tableHtml += `<td><form method="GET" action="RetrievePatientsDID"><input hidden value="${doctor.did}" name="did"><input type="submit" value="Click"></form></td>`;
      tableHtml += '</tr>';
    }
    tableHtml += '</table>';

    res.send(tableHtml);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error. Please try again later.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
