require('dotenv').config();
const express = require('express');
const controllers = require('./controllers');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/products/:product_id/styles', controllers.getStyles);
app.get('/products/:product_id/related', controllers.getRelated);
app.get('/products/:product_id', controllers.getProduct)
app.get('/products', controllers.getAll);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
