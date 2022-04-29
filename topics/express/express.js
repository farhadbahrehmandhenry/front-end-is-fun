const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('you are getting /');
});

app.listen(port, () => {
  console.log('you are connected');
});