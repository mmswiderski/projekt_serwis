var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Świat kawy' });
});
router.get('/oferty', function(req, res, next) {
  res.render('oferty', { title: 'Oferty specjalne' });
});
router.get('/ekspresy', function(req, res, next) {
  res.render('ekspresy', { title: 'Ekspresy', my_var: req.params.ekspres });
});
router.get('/uslugi', function(req, res, next) {
  res.render('uslugi', { title: 'Nasze usługi' })
});
router.get('/kontakt', function(req, res, next) {
  res.render('kontakt', { title: 'Zapraszamy do kontaktu' });
});

module.exports = router;


