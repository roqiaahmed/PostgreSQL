require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.use(express.json());
app.use('/api/v1/students', routes);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
