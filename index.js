const express = require('express')
const app = express()
const port = 3000;

const controller = require('./controller');
const db = require('./db');
const axios = require('axios');

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json({}));
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});

app.get('/product_information', controller.getProductInfo);

app.get('/photos', controller.getPhotos);

app.get('/features', controller.getFeatures);

app.get('/skus', controller.getSkus);

app.get('/product_styles', controller.getProductStyles);

//https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles