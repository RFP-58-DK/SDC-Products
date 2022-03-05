const db = require('../DB');

module.exports = {
  getProductInfo: (callback) => {
    const syntax = 'SELECT * FROM product_information LIMIT 10';
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

  getFeatures: (callback) => {
    const syntax = 'SELECT * FROM features LIMIT 10';
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