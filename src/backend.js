'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/asd.html');
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});