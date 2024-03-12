const express = require('express')
const app = express()

app.get('/ping', function (req, res) {
  res.send('pong')
})

app.get('/factorial', function (req, res) {
  for (let i = 1; i <= 10; i++) {
    result *= i;
  }
  res.send(result)
})

app.listen(3000)