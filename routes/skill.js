var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var readingSchema = new Schema({
    id: Number,
}, { collection: 'readings' });
var Reading = mongoose.model('Reading', readingSchema);

var listeningSchema = new Schema({
    id: Number,
}, { collection: 'listenings' });
var Listening = mongoose.model('Listening', listeningSchema);

var writingSchema = new Schema({
    id: Number,
}, { collection: 'writing' });
var Writing = mongoose.model('Writing', writingSchema);

var speakingSchema = new Schema({
    id: Number,
}, { collection: 'speaking' });
var Speaking = mongoose.model('Speaking', speakingSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/find-one/:skill/:testId', function (req, res) {
  let skill = req.params.skill;
  let testId = parseInt(req.params.testId);

  if (skill == 'reading') {
    Reading.where({
      test_id: testId
    }).findOne(function(err, reading) {
      if (err) res.send(err);
      res.send(reading);
    });
  } else if (skill == 'listening') {
    Listening.where({
      test_id: testId
    }).findOne(function(err, listening) {
      if (err) res.send(err);
      res.send(listening);
    });
  } else if (skill == 'writing') {
    Writing.where({
      test_id: testId
    }).findOne(function(err, writing) {
      if (err) res.send(err);
      res.send(writing);
    });
  } else if (skill == 'speaking') {
    Speaking.where({
      test_id: testId
    }).findOne(function(err, speaking) {
      if (err) res.send(err);
      res.send(speaking);
    });
  }
});

module.exports = router;
