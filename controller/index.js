const db = require('../DB');
const model = require('../Model');

module.exports= {
  getProductInfo: (req, res) => {
    const params = req.query;
    model.getProductInfo(params, (err, information) => {
      if(err) {
        res.status(500).send();
      } else {
        res.send(information);
      }
    })
  },

  getProductStyles: (req, res) => {
    const params = req.query;
    model.getProductStyles(params, (err, styles) => {
      if(err) {
        res.status(500).send();
      } else {
        res.send(information);
      }
    })
  }
}