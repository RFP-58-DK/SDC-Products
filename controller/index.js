const db = require('../DB');
const model = require('../Model');

module.exports= {
  getProductInfo: (req, res) => {
    model.getProductInfo((err, information) => {
      res.send(information);
    })
  },

  getPhotos: (req, res) => {
    model.getPhotos((err, photos) => {
      res.send(photos);
    })
  },

  getFeatures: (req, res) => {
    model.getFeatures((err, features) => {
      res.send(features);
    })
  },

  getSkus: (req, res) => {
    model.getSkus((err, skus) => {
      res.send(skus);
    })
  },

  getProductStyles: (req, res) => {
    model.getProductStyles((err, styles) => {
      res.send(styles);
    })
  }
  // postMovie: (req, res) => {
  //   model.postMovie(req, (err, movies) => {
  //     res.send(movies);
  //   })
  // }
}