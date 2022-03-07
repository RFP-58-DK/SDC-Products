const db = require('../DB');

module.exports = {
  getProductInfo: (params, callback) => {
    const syntax = `SELECT product_information.*,
                        json_agg(
                          json_build_object(
                            'feature', features.feature,
                            'value', features.value
                          )
                        ) AS features FROM product_information JOIN features
                        ON product_information.id=features.product_id WHERE product_information.id = 1 GROUP BY product_information.id`
    // const syntax = `SELECT * FROM product_information JOIN features ON product_information.id=features.product_id WHERE product_information.id = ${params.product_id || 1}`;
    // const syntax =
    // `SELECT *, 'features', json_agg(
    //  features
    // )
    //   FROM product_information WHERE product_information.id = 1`;
    // const syntax = `
    // select json_build_object(
    //   'id', product_information.id
    // ) WHERE id = 1
    // `


// `    SELECT product_information.*,
//     //create an array of objects where the key is features
//     json_agg(
//       json_object_agg(
//         'feature', features.feature,
//         'value', features.value
//       )
//       //call array of objects features
//       //create a join between features and products witha condition where id matches
//       //and where the id is the query parameter id from the request
//     ) AS features FROM product_information JOIN features ON product_information.id=features.product_id WHERE product_information.id = 1 GROUP BY product_information.id`

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

  getProductStyles: (callback) => {
    const syntax = 'SELECT * FROM product_styles LIMIT 10';
    db.query(syntax, (err, styles) => {
      if (err) {
        callback(err);
      } else {
        callback(null, styles.rows);
      }
    })
  }
  // postMovie: (movie, callback) => {
  //   const syntax = 'INSERT INTO movies (title) VALUES(?)';
  //   const movieParam = movie.body.title;
  //   db.query(syntax, movieParam, (err, movies) => {
  //     if (err) {
  //       callback(err);
  //     } else {
  //       callback(null, movies);
  //     }
  //   })
  // }
}