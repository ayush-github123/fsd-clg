const express = require('express');
const app = express();

const port = 8080;
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

app.get('/about', (req, res) => {
  res.send('GET request to the about page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
