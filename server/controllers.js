const db = require('./db');
const _ = require('underscore');

module.exports = {
  getAll: function (req, res) {
    const count = req.query.count || 5;
    const query = `
      SELECT * FROM Product LIMIT $1;
    `
    db.query(query, [ count ], (err, result) => {
      if (err) res.send(err.message);
      else res.send(result.rows);
    })
  },

  getProduct: function (req, res) {
    const query = `
      SELECT *,
      (
        SELECT array_to_json(array_agg(row_to_json(features)))
        FROM (
          SELECT feature, value
          FROM features
          WHERE product_id = $1
        ) features
      ) AS features
      FROM product
      WHERE id = $1
    `

    db.query(query, [ req.params.product_id ], (err, result) => {
      if (err) res.send(err.message);
      else res.send(result.rows[0]);
    })
  },

  getStyles: function (req, res) {
    const id = req.params.product_id;
    const query = `
      SELECT $1 as product_id,
      (
        SELECT array_to_json(array_agg(row_to_json(styles)))
        FROM (
          SELECT id AS style_id, name, original_price, default_style AS "default?",
            (
              SELECT array_to_json(array_agg(row_to_json(photos)))
              FROM (
                SELECT thumbnail_url, url
                FROM photos
                WHERE style_id = styles.id
              ) photos
            ) AS photos,
            (
              SELECT json_object_agg(
                skus.id, json_build_object(
                  'quantity', skus.quantity,
                  'size', skus.size
                )
              )
              FROM (
                SELECT quantity, size, id
                FROM skus
                WHERE style_id = styles.id
              ) skus
            ) AS skus
          FROM styles
          WHERE product_id = $2
        ) styles
      ) AS results;
    `

    db.query(query, [ id, id ], (err, result) => {
      if (err) res.send(err.message);
      else res.send(result.rows[0]);
    })
  },

  getRelated: function (req, res) {
    const id = req.params.product_id;
    const query = `
      SELECT ARRAY(
        SELECT related_product_id::int
        FROM relatedproducts
        WHERE current_product_id = $1
      );
    `

    db.query(query, [ id ], (err, result) => {
      if (err) res.send(err.message);
      else res.send(result.rows[0].array);
    })
  }
};
