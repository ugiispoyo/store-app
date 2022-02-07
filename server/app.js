const express = require('express');
const path = require('path');
var cors = require('cors')

const product = require('./src/product');

const app = express()
const port = 3500;

const corsOptions = {
  origin: '*', /* untuk menghandle original domain defaultnya semua domain bisa */
  optionsSuccessStatus: 200
}

app.get('/api/getproduct/:page', cors(corsOptions), async function (req, res) {
  const data = await product.getProduct(req, res);
  res.setHeader('Content-Type', 'application/json')
  res.send(data);
});

app.get('/api/getproduct/detail/:productid', cors(corsOptions), async function (req, res) {
  const data = await product.getProductDetail(req, res);
  res.setHeader('Content-Type', 'application/json')
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})