var express = require('express');
var skills = require('../Controller/skills');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Skills' });
});



module.exports = router;
