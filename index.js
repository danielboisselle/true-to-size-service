const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const {
  TrueToSizeRouter,
} = require('./src/routers')

app.use('/trueToSizes', TrueToSizeRouter);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

module.exports = app;
