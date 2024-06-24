const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to handle CORS
app.use(cors());

let retrievedValue = null;

// GET route for '/'
app.get('/', (req, res) => {
  res.send('Hello from leads app');
});

// POST route for '/leads'
app.post('/leads', (req, res) => {
  console.log(req.body);
  res.send('Lead received');
});

app.post('/freetrial', (req, res) => {
  // Handle the incoming data from Make.com and send it to the frontend
  console.log('free trial route hit')
  console.log('req. body', req.body)
  retrievedValue = req.body.value;
  console.log('value', retrievedValue)
  res.json({ success: true });
});

app.get('/freetrial', (req, res) => {
  // Send the stored value back to the frontend
  if (retrievedValue) {
    res.json({ value: retrievedValue });
    retrievedValue = null; // Reset the value after sending
  } else {
    res.json({ value: null });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
