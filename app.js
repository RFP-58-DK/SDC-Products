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

app.get('/product_information', (req, res) => {controller.getProductInfo(req, res)});

app.get('/product_styles', (req, res) => {controller.getProductStyles(req, res)});

module.exports = app;