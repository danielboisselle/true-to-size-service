const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use('/trueToSize', require('./src/trueToSize/trueToSize.service'));

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

module.exports = app;
