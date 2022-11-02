import { connect, Schema } from 'mongoose';

main().catch(err => console.log(err));

async function main() {
  await connect('mongodb://localhost:27017/products');

  const Products = new Schema({
    id: Number,
    name: String,
    slogan: String,
    description: String,
    default_price: String,
    features: [
      {
        feature: String,
        value: String,
      }
    ],
  });

  const ProductStyles = new Schema({
    product_id: Number,
    results: [
      {
        style_id: Number,
        name: String,
        original_price: String,
        sale_price: String,
        default?: Boolean,
        photos: [
          {
            thumbnail_url: String,
            url: String,
          },
        ],
        skus: [
          {

          }
        ]
      }
    ]
  })
}
