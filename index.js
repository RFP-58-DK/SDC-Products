const express = require('express')
const app = express()
const port = 3000;

const db = require('./db');
const axios = require('axios');

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json({}));
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});

app.get('/product_information', (req, res)=> {
  var syntax = 'SELECT * FROM product_information LIMIT 10';
  db.query(syntax, (err, information) => {
    if (err) {
      res.status(400).send();
    } else {
      res.send(information);
    }
  })
});
//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles