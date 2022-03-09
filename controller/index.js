const db = require('../DB');
const model = require('../Model');

module.exports= {
  getProductInfo: (req, res) => {
    const params = req.query;
    model.getProductInfo(params, (err, information) => {
      res.send(information);
    })
  },

  getProductStyles: (req, res) => {
    const params = req.query;
    model.getProductStyles(params, (err, styles) => {
      res.send(styles);
    })
  }
  // getPhotos: (req, res) => {
  //   model.getPhotos((err, photos) => {
  //     const params = req.query
  //     res.send(photos);
  //   })
  // },

  // getFeatures: (req, res) => {
  //   const params = req.query;
  //   model.getFeatures(params, (err, features) => {
  //     res.send(features);
  //   })
  // },

  // getSkus: (req, res) => {
  //   model.getSkus((err, skus) => {
  //     res.send(skus);
  //   })
  // },

  // postMovie: (req, res) => {
  //   model.postMovie(req, (err, movies) => {
  //     res.send(movies);
  //   })
  // }
}