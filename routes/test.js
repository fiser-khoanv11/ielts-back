var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Mongoose
var Schema = mongoose.Schema;
var testSchema = new Schema({
    id: Number,
    title: String,
    description: String,
}, { collection: 'tests' });
var Test = mongoose.model('Test', testSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/find', function (req, res) {
  Test.find(function(err, tests) {
    if (err) {
      res.send(err);
    } else {
      res.send(tests);
    }
  });
});

router.get('/find-one/:testId', function (req, res) {
  Test.findOne({
    id: parseInt(req.params.testId)
  }, function(err, test) {
    if (err) {
      res.send(err);
    } else {
      res.send(test);
    }
  });
});

module.exports = router;
