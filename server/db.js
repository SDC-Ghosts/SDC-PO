const { connect, Schema } = require('mongoose');
const { parse } = require('csv-parse');
const fs = require('fs');
const _ = require('underscore');

const appData = {};

fs.readdir('appdata', (err, files) => {
  files.forEach(file => {
    const data = [];

    fs.createReadStream(`appdata/${file}`)
      .pipe(
        parse({
          delimiter: ",",
          columns: true,
          ltrim: true,
        })
      )
      .on("data", function (row) {
        data.push(row);
      })
      .on("error", function (error) {
        console.log(error.message);
      })
      .on("end", function () {
        appData[file.slice(0, -3)] = data;
        console.log(file, data);
      });
  });
});

main().catch(err => console.log(err));

async function main() {
  await connect('mongodb://localhost:27017/products');

  const Products = new Schema({
    'id': Number,
    'name': String,
    'slogan': String,
    'description': String,
    'default_price': String,
    'features': [
      {
        'feature': String,
        'value': String,
      }
    ],
    'relatedItems': [Number],
  });

  const ProductStyles = new Schema({
    'product_id': Number,
    'results': [
      {
        'style_id': Number,
        'name': String,
        'original_price': String,
        'sale_price': String,
        'default?': Boolean,
        'photos': [
          {
            'thumbnail_url': String,
            'url': String,
          },
        ],
        'skus': [
          {
            <sku_id>: {
              'quantity': Number,
              'size': String,
            }
          }
        ]
      }
    ]
  })
}
