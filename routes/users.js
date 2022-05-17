var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/myname', (req, res) => {
  res.send('Randy Ruiz');
});

router.get('/myfavoritemovies', (req, res) => {
  const arr = ['Grandmas Boy, How High, Jay and Silent Bob Strike Back']

  res.send(arr);
});

module.exports = router;
