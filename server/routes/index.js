var express = require('express');
var router = express.Router();
const { taskFinisher } = require('../controllers/userController')

router.get('/', function(req, res, next) {
  res.send("API running")
});

router.get('/get-countries-tags',taskFinisher)

module.exports = router;
