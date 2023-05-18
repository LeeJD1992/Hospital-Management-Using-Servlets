const express = require('express');

const app = express();
const port = 3000;

const medicineData = [
  { mid: 1, name: 'Medicine 1', price: 10.99, count: 5 },
  { mid: 2, name: 'Medicine 2', price: 15.99, count: 8 },
  { mid: 3, name: 'Medicine 3', price: 12.99, count: 3 },
  // Add more medicine data as needed
];

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  try {
    const rows = medicineData.map(row => {
      return `
        <tr>
          <td>${row.mid}</td>
          <td>${row.name}</td>
          <td>${row.price}</td>
          <td>${row.count}</td>
        </tr>
      `;
    }).join('');
    const html = `
      <table>
        <tr>
          <th>mid</th>
          <th>name</th>
          <th>price</th>
          <th>count</th>
        </tr>
        ${rows}
      </table>
    `;
    res.send(html);
  } catch (error) {
    console.error(error);
    res.send('<h1 align=center><font color="red">TRY AGAIN<br></font></h1>');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
