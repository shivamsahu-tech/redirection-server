const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/deployed-prototype', (req, res) => {
  res.redirect('https://tinyurl.com/prototype');
});

app.get('/resume', (req, res) => {
  res.redirect('https://tinyurl.com/resume');
});

app.get('/', (req, res) => {
  res.send('Welcome! Try /deployed-prototype or /resume');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
