require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router');
const db_connection = require('./services/DBConnectionService');

app.use(router);
app.all('*', (req, res) => {
  res.status(404).send('Not Found');
})

db_connection()
  .then(() => {
    app.listen(3000, '0.0.0.0');
    console.log('Server listening on: \n - http://localhost:3000');
  })
  .catch(err => {
    throw new Error(`Database error: ${err}`);
  })


module.exports = app;