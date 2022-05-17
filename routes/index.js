var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/datetime', (req, res) => {
  res.send(new Date())
});

module.exports = router;
