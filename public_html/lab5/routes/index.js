var express = require('express');
var router = express.Router();
var ctrlReviews = require('./review.controller')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express'});
  });
router.get('/saveEmployEntry', ctrlReviews.reviewsReadAll)
router.get('/saveEmployEntry/:reviewid', ctrlReviews.reviewsReadOne)
router.post('/saveEmployEntry', ctrlReviews.reviewsCreate)
router.put('/saveEmployEntry/:reviewid', ctrlReviews.reviewsUpdateOne)
router.delete('/saveEmployEntry/:reviewid', ctrlReviews.reviewsDeleteOne)
router.get('/saveEmployEntry/_sort={-column || column}', ctrlReviews.emplsort)
router.get('/saveEmployEntry/{column}={value}', ctrlReviews.emplSearchfor)

module.exports = router;
