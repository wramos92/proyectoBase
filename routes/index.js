var express = require('express');
var router = express.Router();
var reclamo = { tipo:"odeco",observacion:"malservicio" ,reclamo:"29/11/2016"};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PROYECTO FINAL',
  	                    subtitle: 'avances en computacion',
  	                    reclamo:reclamo });
});

module.exports = router;
