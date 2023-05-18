const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Serve the static files in the current directory
app.use(express.static(__dirname));

// Parsing middleware
app.use(express.urlencoded({ extended: true }));

// Route for handling login
app.post('/login', (req, res) => {
  const { email, pwd } = req.body;

  // Perform your authentication logic here
  // Example authentication logic (replace with your own)
  if (email === 'admin@example.com' && pwd === 'password') {
    res.redirect('/welcome.html');
  } else {
    res.write("<br><br><br><h1 align=center><font color=\"red\">TRY AGAIN<br>REDIRECTING YOU TO LOGIN PAGE</font></h1><script type=\"text/javascript\">");
    res.write("redirectURL = \"/login.html\";setTimeout(\"location.href = redirectURL;\",\"5000\");");
    res.write("</script>");
    res.end();
  }
});

// Route for handling all other requests with a 404 error
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
