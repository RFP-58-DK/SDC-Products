const db = require('../db');

module.exports = {
  getProductInfo: (params, callback) => {
    const syntax = `SELECT product_information.*,
                        json_agg(
                          json_build_object(
                            'feature', features.feature,
                            'value', features.value
                          )
                        ) AS features FROM product_information JOIN features
                        ON product_information.id=features.product_id WHERE product_information.id = ${params.product_id || 1} GROUP BY product_information.id`



    db.query(syntax, (err, information) => {
      if (err) {
        callback(err);
      } else {
        callback(null, information.rows);
      }
    })
  },

  getPhotos: (callback) => {
    const syntax = 'SELECT * FROM photos LIMIT 10';
    db.query(syntax, (err, photos) => {
      if (err) {
        callback(err);
      } else {
        callback(null, photos.rows);
      }
    })
  },

  getFeatures: (params, callback) => {
    const syntax = `SELECT * FROM features WHERE product_id = ${params.product_id || 1};`
    db.query(syntax, (err, features) => {
      if (err) {
        callback(err);
      } else {
        callback(null, features.rows);
      }
    })
  },

  getSkus: (callback) => {
    const syntax = 'SELECT * FROM skus LIMIT 10';
    db.query(syntax, (err, skus) => {
      if (err) {
        callback(err);
      } else {
        callback(null, skus.rows);
      }
    })
  },

  getProductStyles: (params, callback) => {
  const syntax =
`  SELECT product_styles.product_id,
      (SELECT json_agg(
        json_build_object(
          'style_id', product_styles.id,
          'name', product_styles.name,
          'original_price', product_styles.original_price,
          'sale_price', product_styles.sale_price,
          'default?', product_styles.default_,
          'photos', (SELECT
            json_agg(
              json_build_object(
                'thumbnail_url', photos.thumbnail_url,
                'url', photos.url
              )
            ) AS photos FROM photos WHERE photos.style_id=product_styles.id
          ),
          'skus', (SELECT json_object_agg(
            skus.id, (SELECT json_build_object(
              'quantity', skus.quantity,
              'size', skus.size
            ) FROM skus WHERE style_id=product_styles.id LIMIT 1)
          ) FROM skus WHERE style_id IN (SELECT style_id FROM skus WHERE style_id=product_styles.id))
        )
      ) AS results FROM product_styles WHERE product_id=${params.product_id || 1})
      FROM product_styles WHERE product_id=${params.product_id || 1};
`

    db.query(syntax, (err, styles) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        callback(null, styles.rows);
      }
    })
  }
}
