const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to handle CORS
app.use(cors());

// GET route for '/'
app.get('/', (req, res) => {
  res.send('Hello from leads app');
});

// POST route for '/leads'
app.post('/leads', (req, res) => {
  console.log(req.body);
  res.send('Lead received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
