var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Świat kawy' });
});
router.get('/oferty', function(req, res, next) {
  res.render('oferty', { title: 'Oferty specjalne' });
});
router.get('/ekspresy/ekspres/:ekspres', function(req, res, next) {
  res.render('ekspresy', { title: 'Ekspresy', my_var: req.params.ekspres });
  next()
  for (let e of document.getElementsByName(req.params.ekspres)){
    e.color = 'red';}
});
router.get('/uslugi', function(req, res, next) {
  res.render('uslugi', { title: 'Nasze usługi' })
});
router.get('/kontakt', function(req, res, next) {
  res.render('kontakt', { title: 'Zapraszamy do kontaktu' });
});

module.exports = router;


