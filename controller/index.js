const db = require('../DB');
const model = require('../Model');

module.exports= {
  getProductInfo: (req, res) => {
    const params = req.query;
    model.getProductInfo(params, (err, information) => {

      res.send(information);
    })
  },

  getPhotos: (req, res) => {
    model.getPhotos((err, photos) => {
      const params = req.query
      res.send(photos);
    })
  },

  getFeatures: (req, res) => {
    const params = req.query;
    model.getFeatures(params, (err, features) => {
      res.send(features);
    })
  },

  getSkus: (req, res) => {
    model.getSkus((err, skus) => {
      res.send(skus);
    })
  },

  getProductStyles: (req, res) => {
    const params = req.query;
    model.getProductStyles((err, styles) => {
      const response = {
        product_id: params.product_id,
        results: styles
      }
      res.send(styles);
    })
  }
  // postMovie: (req, res) => {
  //   model.postMovie(req, (err, movies) => {
  //     res.send(movies);
  //   })
  // }
}